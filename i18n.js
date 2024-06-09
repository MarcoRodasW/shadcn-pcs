/**
 * @type {import('next-translate').I18nConfig}
 */
module.exports = {
  defaultLocale: 'en-US',
  localeDetection: false,
  locales: ['en-US', 'es-ES'],
  logBuild: false,
  pages: {
    '/': ['home'],
  },
};
