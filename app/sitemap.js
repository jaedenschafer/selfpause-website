import { getAllSlugs } from '../lib/blog';
import { getAllAffirmationSlugs } from '../lib/affirmations';

export default function sitemap() {
  const baseUrl = 'https://selfpause.com';

  // Blog post URLs
  const blogSlugs = getAllSlugs();
  const blogUrls = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Affirmation sub-page URLs (backlink recovery pages)
  const affirmationSlugs = getAllAffirmationSlugs();
  const affirmationUrls = affirmationSlugs.map((slug) => ({
    url: `${baseUrl}/affirmations/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/affirmations`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...affirmationUrls,
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    ...blogUrls,
    {
      url: `${baseUrl}/meditation/how-to-meditate`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}
