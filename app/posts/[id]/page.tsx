import { getPostById, getAllPosts } from '@/data/posts';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const post = getPostById(params.id);
  
  if (!post) {
    return {
      title: 'Post não encontrado | Estradeirando',
    };
  }
  
  return {
    title: `${post.title} | Estradeirando`,
    description: post.excerpt,
  };
}

export default function PostPage({ params }: { params: { id: string } }) {
  const post = getPostById(params.id);
  
  if (!post) {
    notFound();
  }
  
  // Format the date to a more readable format
  const formattedDate = new Date(post.date).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  
  return (
    <article className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
        <div className="flex items-center text-gray-500 mb-6">
          <div className="flex items-center mr-6">
            <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
              <Image
                src={post.author.picture}
                alt={post.author.name}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <span>{post.author.name}</span>
          </div>
          <span>{formattedDate}</span>
        </div>
      </div>
      
      <div className="relative h-96 w-full mb-8 rounded-xl overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      
      <div className="bg-white rounded-xl shadow-md p-8 mb-8">
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
      
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link 
              key={tag} 
              href={`/tags/${tag}`}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-200 transition duration-300"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
