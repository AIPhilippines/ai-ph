import BackButton from '../ui/BackButton'

interface PageHeaderProps {
    title: string
    description?: string
    showBack?: boolean
}

export default function PageHeader({ title, description, showBack = true }: PageHeaderProps) {
    return (
        <div className="mb-16">
            {showBack && <BackButton className="mb-1" />}
            <div className="mt-1 text-5xl font-black mb-6 leading-tight text-app-text">
                {title}
            </div>
            {description && (
                <p className="text-xl text-app-muted max-w-3xl leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    )
}
