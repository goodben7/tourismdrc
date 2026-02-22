import type { Metadata } from "next";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  return {
    title: params.slug.replace(/-/g, ' '),
    description: `Article de blog: ${params.slug}`,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <div className="min-h-screen">
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <article className="prose prose-lg max-w-none">
            <h1 className="capitalize">{params.slug.replace(/-/g, ' ')}</h1>
            <p className="text-gray-600">
              Le contenu de cet article sera bientôt disponible.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
