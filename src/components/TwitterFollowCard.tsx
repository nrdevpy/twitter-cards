import { TwitterCard } from "../type"
import { useState } from "react"

type Props = TwitterCard

export const TwitterFollowCard: React.FC<Props> = ({ userName, name, isFollowing }) => {
    const [followStatus, setFollowStatus] = useState(isFollowing)
    const atUserName = `@${userName}`

    const btnClassName = followStatus
        ? "bg-transparent hover:bg-[#200a0b] hover:text-[#e71f2b] hover:border-[#e71f2b]"
        : "bg-white text-black hover:bg-gray-100 hover:border-gray-100 hover:border-gray-100"

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
                    <span>{atUserName}</span>
                </div>
            </header>
            <aside>
                <button
                    className={`${btnClassName} font-medium py-1 px-3 rounded-full border-[.6px] border-white`}
                    onClick={() => setFollowStatus(!followStatus)}
                >
                    {followStatus ? "Unfollow" : "Follow"}
                </button>
            </aside>
        </li>
    )
}