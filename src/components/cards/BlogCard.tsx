import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardImage, CardContent } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
  locale?: string;
}

export default function BlogCard({ post, locale = "fr" }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block">
      <Card className="group overflow-hidden h-full flex flex-col">
        <CardImage>
          <Image
            src={post.coverImage.url}
            alt={post.coverImage.alt}
            width={600}
            height={400}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </CardImage>
        <CardContent className="flex-1 flex flex-col">
          <div className="mb-4 flex items-center gap-3 flex-wrap">
            <div className="badge badge-primary">{post.category}</div>
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <Calendar className="h-3.5 w-3.5" />
              <span>{formatDate(post.publishedAt, locale)}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <Clock className="h-3.5 w-3.5" />
              <span>{post.readTime} min</span>
            </div>
          </div>
          <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="mb-4 text-gray-600 leading-relaxed line-clamp-3 flex-1">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              {post.author.avatar && (
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full border-2 border-gray-100"
                />
              )}
              <span className="text-sm font-semibold text-gray-700">
                {post.author.name}
              </span>
            </div>
            <div className="flex items-center text-sm font-semibold text-primary-600 group-hover:gap-2 transition-all">
              <span>Lire</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
