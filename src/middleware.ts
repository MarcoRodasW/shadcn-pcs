import { NextResponse } from 'next/server';

import resolveAcceptLanguage from 'resolve-accept-language';

import type { NextRequest } from 'next/server';

import i18n from '../i18n';

export const LOCALE_COOKIE = '__APP_LOCALE__';
export const AVAILABLE_LOCALES = i18n.locales ?? [];

export function middleware(request: NextRequest) {
  const locale = request.cookies.get(LOCALE_COOKIE);

  const defaultLang = (request.nextUrl.locale || i18n.defaultLocale)!;
  const browserLang = resolveAcceptLanguage(request.headers.get('Accept-Language') || '', AVAILABLE_LOCALES, defaultLang);
  const identifiedLang = locale?.value || browserLang;

  const res = NextResponse.rewrite(request.nextUrl);

  if (!locale?.value) res.cookies.set(LOCALE_COOKIE, identifiedLang);
  request.nextUrl.searchParams.set('lang', identifiedLang);

  return res;
}

export const config = {
  matcher: ['/((?!_next).*)'],
};
