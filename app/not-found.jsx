import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section-padding bg-gradient-hero min-h-[60vh] flex items-center">
      <div className="container-narrow mx-auto text-center">
        <div className="text-8xl font-display font-bold gradient-text mb-6">404</div>
        <h1 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
          Page not found
        </h1>
        <p className="text-lg text-gray-500 max-w-md mx-auto mb-10">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            Go Home
          </Link>
          <Link href="/blog" className="btn-secondary">
            Read the Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
