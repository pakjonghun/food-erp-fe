import { NextRequest, NextResponse } from 'next/server';
import { AUTH_TOKEN } from '@/constants/auth';
import { cookies } from 'next/headers';

export async function GET(request: NextRequest) {
  if (!request.cookies.get(AUTH_TOKEN)) {
    return NextResponse.json(
      { message: '인증되지 않은 요청입니다.' },
      { status: 403 } // HTTP 상태 코드 403 설정
    );
  }

  const response = NextResponse.json({ redirect: '/login' });
  // 쿠키 삭제 설정
  response.cookies.set(AUTH_TOKEN, '', {
    expires: new Date(),
    maxAge: 0,
    path: '/',
    sameSite: 'lax',
    secure: true,
    domain: `.${process.env.NEXT_PUBLIC_CLOUD_DOMAIN}`,
  });
  console.log(cookies(), process.env.NEXT_PUBLIC_CLOUD_DOMAIN);
  return response;
}
