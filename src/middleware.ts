import { NextResponse, type NextRequest } from 'next/server';
import { AUTH_TOKEN } from './constants/auth';
import { auth } from './actions/auth';
import { publicPathList } from './constants/route';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublic = publicPathList.some((p) => path.indexOf(p) != -1);
  const cookie = request.cookies.get(AUTH_TOKEN);
  console.log(cookie);
  // console.log('미들웨어 cookie', cookie);
  // if (isPublic && !cookie) {
  //   return;
  // }
  // if (!cookie && !isPublic) {
  //   return NextResponse.redirect(new URL('/login', request.url));
  // }
  // const isGranted = await auth(cookie?.value ?? '');
  // if (isPublic && isGranted) {
  //   return NextResponse.redirect(new URL('/dashboard', request.url));
  // }
  // if (!isPublic && !isGranted) {
  //   request.cookies.delete(AUTH_TOKEN);
  //   return NextResponse.redirect(new URL('/login', request.url));
  // }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
};
