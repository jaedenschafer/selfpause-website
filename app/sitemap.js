import { getAllSlugs } from '../lib/blog';
import { getAllAffirmationSlugs } from '../lib/affirmations';
import { getAllMeditationSlugs } from '../lib/meditation';
import { getAllManifestationSlugs } from '../lib/manifestation';
import { getAllMindfulnessSlugs } from '../lib/mindfulness';
import { getAllVisualizationSlugs } from '../lib/visualization';
import { getAllPositivitySlugs } from '../lib/positivity';
import { getAllLawOfAttractionSlugs } from '../lib/law-of-attraction';
import { getAllMantraSlugs } from '../lib/mantras';
import { getAllMindsetSlugs } from '../lib/mindset';

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

  // Affirmation sub-page URLs
  const affirmationSlugs = getAllAffirmationSlugs();
  const affirmationUrls = affirmationSlugs.map((slug) => ({
    url: `${baseUrl}/affirmations/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Meditation sub-page URLs
  const meditationSlugs = getAllMeditationSlugs();
  const meditationUrls = meditationSlugs.map((slug) => ({
    url: `${baseUrl}/meditation/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Manifestation sub-page URLs
  const manifestationSlugs = getAllManifestationSlugs();
  const manifestationUrls = manifestationSlugs.map((slug) => ({
    url: `${baseUrl}/manifestation/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Mindfulness sub-page URLs
  const mindfulnessSlugs = getAllMindfulnessSlugs();
  const mindfulnessUrls = mindfulnessSlugs.map((slug) => ({
    url: `${baseUrl}/mindfulness/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Visualization sub-page URLs
  const visualizationSlugs = getAllVisualizationSlugs();
  const visualizationUrls = visualizationSlugs.map((slug) => ({
    url: `${baseUrl}/visualization/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Positivity sub-page URLs
  const positivitySlugs = getAllPositivitySlugs();
  const positivityUrls = positivitySlugs.map((slug) => ({
    url: `${baseUrl}/positivity/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Law of Attraction sub-page URLs
  const loaSlugs = getAllLawOfAttractionSlugs();
  const loaUrls = loaSlugs.map((slug) => ({
    url: `${baseUrl}/law-of-attraction/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Mantras sub-page URLs
  const mantraSlugs = getAllMantraSlugs();
  const mantraUrls = mantraSlugs.map((slug) => ({
    url: `${baseUrl}/mantras/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Mindset sub-page URLs
  const mindsetSlugs = getAllMindsetSlugs();
  const mindsetUrls = mindsetSlugs.map((slug) => ({
    url: `${baseUrl}/mindset/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    // Homepage
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },

    // Hub index pages
    {
      url: `${baseUrl}/affirmations`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/meditation`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/manifestation`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mindfulness`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/visualization`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/positivity`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/law-of-attraction`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mantras`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mindset`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // All sub-pages
    ...affirmationUrls,
    ...meditationUrls,
    ...manifestationUrls,
    ...mindfulnessUrls,
    ...visualizationUrls,
    ...positivityUrls,
    ...loaUrls,
    ...mantraUrls,
    ...mindsetUrls,

    // Static content pages
    {
      url: `${baseUrl}/meditation/how-to-meditate`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/christian-affirmations`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/app`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Blog
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    ...blogUrls,

    // Informational pages
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
