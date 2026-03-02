import { useNavigate } from 'react-router-dom'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

interface BackButtonProps {
    className?: string
}

export default function BackButton({ className = '' }: BackButtonProps) {
    const navigate = useNavigate()

    return (
        <button
            onClick={() => navigate(-1)}
            className={`inline-flex items-center gap-2 text-app-muted hover:text-app-text transition-colors ${className}`}
            aria-label="Go back"
        >
            <ArrowLeftIcon className="w-4 h-4" />
            Back
        </button>
    )
}
