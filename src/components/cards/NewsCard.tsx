import { Link } from 'react-router-dom'
import type { Post } from '../../data/types'

interface NewsCardProps {
    post: Post
    showDescription?: boolean
}

export default function NewsCard({ post, showDescription }: NewsCardProps) {
    return (
        <Link to={`/post/${post.slug}`} className="block h-full">
            <div className="p-8 border border-app-border rounded-2xl hover:bg-app-bg-soft transition-colors group cursor-pointer h-full">
                <h3 className="text-xl font-bold mb-4 text-app-text group-hover:text-blue-500 transition-colors leading-tight">
                    {post.title}
                </h3>
                {showDescription && post.description && (
                    <p className="text-app-muted text-sm mb-4 line-clamp-3">
                        {post.description}
                    </p>
                )}
                <p className="text-app-muted text-xs opacity-70">
                    {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </p>
            </div>
        </Link>
    )
}
