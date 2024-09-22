import { NextRequest, NextResponse } from 'next/server';
import { AUTH_TOKEN } from './constants/auth';
import { auth } from './actions/auth';
import { PATH, publicPathList } from './constants/route';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublic = publicPathList.some((p) => path.indexOf(p) != -1);
  const cookie = request.cookies.get(AUTH_TOKEN);
  if (isPublic && !cookie) {
    return NextResponse.next();
  }
  if (!cookie && !isPublic) {
    return NextResponse.redirect(new URL(`/${PATH['sign-in'].path}`, request.url));
  }
  const isGranted = await auth(cookie?.value ?? '');

  if (isPublic && isGranted) {
    return NextResponse.redirect(new URL(`/${PATH.dashboard.path}`, request.url));
  }
  if (!isPublic && !isGranted) {
    return NextResponse.redirect(new URL(`/${PATH['sign-in'].path}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|assets|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
};
