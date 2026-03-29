import Link from 'next/link';
import { getAllPosts } from '../../lib/blog';

export const metadata = {
  title: 'Blog',
  description: 'Insights on affirmations, meditation, mindset, and personal growth from the Selfpause team.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-hero pb-12">
        <div className="container-narrow mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-4">
            The Selfpause Blog
          </h1>
          <p className="text-xl text-gray-500 max-w-xl mx-auto">
            Science-backed insights on affirmations, meditation, and building a stronger mindset.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding pt-8 bg-white">
        <div className="container-wide mx-auto">
          {posts.length === 0 ? (
            <p className="text-center text-gray-400 text-lg">No posts yet. Check back soon!</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="card group">
                  {post.image && (
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    {post.category && (
                      <span className="inline-block text-xs font-semibold text-brand-600 bg-brand-50 px-3 py-1 rounded-full mb-3">
                        {post.category}
                      </span>
                    )}
                    <h2 className="text-xl font-display font-semibold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-xs text-gray-400">
                      <time>{post.date}</time>
                      {post.author && <span className="mx-2">·</span>}
                      {post.author && <span>{post.author}</span>}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
