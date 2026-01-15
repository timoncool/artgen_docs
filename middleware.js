import { NextResponse } from 'next/server'

const locales = ['ru', 'en']
const defaultLocale = 'ru'

export function middleware(request) {
  const { pathname } = request.nextUrl
  
  // Check if the pathname starts with a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  
  // If pathname doesn't have a locale, redirect to default locale
  if (!pathnameHasLocale) {
    // Skip static files and API routes
    if (
      pathname.startsWith('/_next') ||
      pathname.startsWith('/api') ||
      pathname.startsWith('/images') ||
      pathname.includes('.') // Skip files with extensions
    ) {
      return NextResponse.next()
    }
    
    // Redirect to default locale
    const url = request.nextUrl.clone()
    url.pathname = `/${defaultLocale}${pathname}`
    return NextResponse.redirect(url)
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except static files
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
}
