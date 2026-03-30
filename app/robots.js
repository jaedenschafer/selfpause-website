export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          // Old WordPress paths (no content exists here)
          '/wp-content/',
          '/wp-admin/',
          '/wp-includes/',
          '/wp-json/',
          '/feed/',
          '/author/',
          '/tag/',
          '/category/',
          '/page/',
          '/attachment/',
          '/?p=',
          '/?s=',
          '/?cat=',
        ],
      },
    ],
    sitemap: 'https://selfpause.com/sitemap.xml',
  };
}
