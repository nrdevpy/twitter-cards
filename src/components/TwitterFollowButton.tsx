import React, { useState } from "react"
import { TwitterIsFollowingType } from "../type"


export const TwitterFollowButton: React.FC<TwitterIsFollowingType> = ({ isFollowing }) => {
    const [followStatus, setFollowStatus] = useState(isFollowing)
    const btnClassName = followStatus
        ? "bg-transparent hover:bg-[#200a0b] hover:text-[#e71f2b] hover:border-[#e71f2b]"
        : "bg-white text-black hover:bg-gray-100 hover:border-gray-100 hover:border-gray-100"

    return (
        <button
            className={`${btnClassName} font-medium py-1 px-3 rounded-full border-[.6px] border-white`}
            onClick={() => setFollowStatus(!followStatus)}
        >
            {followStatus ? "Unfollow" : "Follow"}
        </button>
    )
}