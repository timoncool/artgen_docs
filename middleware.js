import { NextResponse } from 'next/server'

const locales = ['ru', 'en']
const defaultLocale = 'ru'

export function middleware(request) {
  const { pathname } = request.nextUrl
  
  // Check if the pathname starts with a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  
  // If pathname doesn't have a locale, redirect to preferred locale
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
    
    // Get preferred locale from NEXT_LOCALE cookie or referer header
    const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value
    const referer = request.headers.get('referer')
    
    let preferredLocale = defaultLocale
    
    // First check cookie
    if (cookieLocale && locales.includes(cookieLocale)) {
      preferredLocale = cookieLocale
    }
    // Then check referer URL for locale
    else if (referer) {
      const refererUrl = new URL(referer)
      const refererLocale = locales.find(
        (locale) => refererUrl.pathname.startsWith(`/${locale}/`) || refererUrl.pathname === `/${locale}`
      )
      if (refererLocale) {
        preferredLocale = refererLocale
      }
    }
    
    // Redirect to preferred locale
    const url = request.nextUrl.clone()
    url.pathname = `/${preferredLocale}${pathname}`
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
