import { Link } from 'react-router-dom'
import { TOPICS } from '../../data/topics'

interface TopicPillProps {
    slug: string
}

export function TopicPill({ slug }: TopicPillProps) {
    const topic = TOPICS.find((t) => t.slug === slug)
    if (!topic) return null

    return (
        <Link
            to={`/topic/${slug}`}
            className="px-6 py-3 border border-app-border rounded-xl text-lg font-semibold hover:bg-app-bg-soft transition-colors text-app-text"
        >
            {topic.title}
        </Link>
    )
}

interface PillProps {
    text: string
}

export function Pill({ text }: PillProps) {
    return (
        <div className="px-6 py-3 border border-app-border rounded-xl text-lg font-semibold hover:bg-app-bg-soft transition-colors text-app-text">
            {text}
        </div>
    )
}
