import { Link } from 'react-router-dom'
import type { Post } from '../../data/types'
import NewsCard from './NewsCard'

interface NewsSectionProps {
    title: string
    posts: Post[]
    seeMoreLink?: string
    showDescription?: boolean
}

export default function NewsSection({ title, posts, seeMoreLink, showDescription }: NewsSectionProps) {
    return (
        <section>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-app-text">{title}</h2>
                {seeMoreLink && <SeeMore link={seeMoreLink} />}
            </div>
            <div className="grid grid-cols-1 gap-6">
                {posts.map(post => (
                    <NewsCard key={post.slug} post={post} showDescription={showDescription} />
                ))}
            </div>
        </section>
    )
}

function SeeMore({ link }: { link: string }) {
    return (
        <Link to={link} className="text-app-text font-medium hover:gap-2 transition-all inline-flex items-center gap-1 group">
            See More <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
    )
}
