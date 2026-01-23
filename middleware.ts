import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { fallback_lng, header_lng_param_name, lngs } from './src/01-shared/i18next';

export function middleware(request: NextRequest): NextResponse {
  const pathname = request.nextUrl.pathname;
  const isPageRequest = !pathname.match(/\.(\w{2,5})$/);

  if (!isPageRequest) {
    return NextResponse.next();
  }

  const detectedLng = lngs.find((lng) => pathname === `/${lng}` || pathname.startsWith(`/${lng}/`)) || fallback_lng;

  const headers = new Headers(request.headers);
  headers.set(header_lng_param_name, detectedLng);

  return NextResponse.next({ headers });
}
