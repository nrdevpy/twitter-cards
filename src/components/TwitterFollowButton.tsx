import React, { useState } from "react"
import { TwitterIsFollowingType } from "../type"


export const TwitterFollowButton: React.FC<TwitterIsFollowingType> = ({ isFollowing }) => {
    const [followStatus, setFollowStatus] = useState(isFollowing)
    const btnClassName = followStatus
        ? "bg-transparent md:hover:bg-[#200a0b] md:hover:text-[#e71f2b] md:hover:border-[#e71f2b]"
        : "bg-white text-black md:hover:bg-gray-100 md:hover:border-gray-100 md:hover:border-gray-100"

    return (
        <button
            className={`${btnClassName} font-medium py-1 px-3 rounded-full border-[.6px] border-white`}
            onClick={() => setFollowStatus(!followStatus)}
        >
            {followStatus ? "Unfollow" : "Follow"}
        </button>
    )
}