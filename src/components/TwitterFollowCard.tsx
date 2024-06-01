import { TwitterCard } from "../type"

type Props = TwitterCard

export const TwitterFollowCard: React.FC<Props> = ({ userName, name, avatar }) => {
    return (
        <div className="flex flex-col items-center">
            <article className="flex items-center justify-between max-w-xs py-1 px-4 min-w-[22rem]">
                <header className="flex items-center justify-center gap-2">
                    <img
                        className="max-w-16 rounded-full"
                        src={avatar}
                        alt={name}
                    />
                    <div className="flex flex-col">
                        <strong>{name}</strong>
                        <span>@{userName}</span>
                    </div>
                </header>
                <aside>
                    <button className="bg-white text-black font-medium py-1 px-3 rounded-full">Follow</button>
                </aside>
            </article>
        </div>
    )
}