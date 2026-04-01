import Link from 'next/link';
import { getPostBySlug, getAllSlugs } from '../../../lib/blog';

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${params.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      images: post.image ? [{ url: post.image }] : [],
    },
  };
}

export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.slug);

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author || 'Jaeden Schafer',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Selfpause',
      url: 'https://selfpause.com',
    },
    mainEntityOfPage: `https://selfpause.com/blog/${params.slug}`,
    ...(post.image && { image: post.image }),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://selfpause.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://selfpause.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <article className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-teal-500 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-teal-500 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-600">{post.title}</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            {post.category && (
              <span className="inline-block text-sm font-semibold text-teal-500 bg-teal-50 px-4 py-1.5 rounded-full mb-4">
                {post.category}
              </span>
            )}
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              {post.author && (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-500 font-semibold text-xs">
                    {post.author.charAt(0)}
                  </div>
                  <span>{post.author}</span>
                </div>
              )}
              <span>·</span>
              <time>{post.date}</time>
              <span>·</span>
              <span>{post.readingTime} min read</span>
            </div>
          </header>

          {/* Featured Image */}
          {post.image && (
            <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-12">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* CTA */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-calm text-center">
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
              Ready to start your affirmation practice?
            </h3>
            <p className="text-gray-500 mb-6">
              Download Selfpause and begin transforming your mindset today.
            </p>
            <a
              href="https://onelink.to/selfpause"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get Started Free
            </a>
          </div>

          {/* Back to Blog */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <Link href="/blog" className="inline-flex items-center text-teal-500 font-medium hover:text-teal-600 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back to all posts
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
