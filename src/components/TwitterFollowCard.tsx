import { TwitterCard } from "../type"

type Props = TwitterCard

export const TwitterFollowCard: React.FC<Props> = ({ userName, name, isFollowing }) => {
    return (
        <li className="flex items-center justify-between max-w-xs py-1 px-4 min-w-[22rem]">
            <header className="flex items-center justify-center gap-2">
                <img
                    className="max-w-16 rounded-full"
                    src={`https://unavatar.io/twitter/${userName}`}
                    alt={name}
                />
                <div className="flex flex-col">
                    <strong>{name}</strong>
                    <span>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className="bg-white text-black font-medium py-1 px-3 rounded-full">{isFollowing ? "Unfollow" : "Follow"}</button>
            </aside>
        </li>
    )
}