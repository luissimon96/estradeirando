import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/data/posts';
import { formatDate } from '@/app/utils';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const formattedDate = formatDate(post.date);

  return (
    <article className="group transform transition-all duration-300 hover:-translate-y-2">
      <div className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500">
        {/* Card Top - Image */}
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            style={{ objectFit: 'cover' }}
            priority={false}
            className="transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent opacity-70"></div>

          {/* Post Date */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary-700 text-xs font-medium px-3 py-1 rounded-full">
            <time dateTime={post.date}>{formattedDate}</time>
          </div>

          {/* Post Author */}
          <div className="absolute bottom-4 left-4 flex items-center">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white">
              <Image
                src={post.author.picture || '/images/default-avatar.jpg'}
                alt={post.author.name}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <span className="ml-2 text-sm text-white font-medium">{post.author.name}</span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 bg-white/95 backdrop-blur-sm">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.slice(0, 3).map((tag) => (
              <Link
                key={tag}
                href={`/tags/${tag}`}
                className="text-xs font-medium bg-primary-50 text-primary-700 px-2 py-1 rounded-full hover:bg-primary-100 transition duration-300 transform hover:-translate-y-1"
              >
                #{tag}
              </Link>
            ))}
          </div>

          {/* Title */}
          <Link href={`/posts/${post.id}`} className="block group-hover:text-primary-600 transition-colors duration-300">
            <h2 className="font-display text-xl font-bold text-dark-800 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors duration-300">
              {post.title}
            </h2>
          </Link>

          {/* Excerpt */}
          <p className="text-dark-600 mb-5 line-clamp-3">{post.excerpt}</p>

          {/* Read More Link */}
          <Link
            href={`/posts/${post.id}`}
            className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700 transition duration-300"
          >
            Ler mais →
          </Link>
        </div>
      </div>
    </article>
  );
}
