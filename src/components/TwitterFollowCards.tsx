import { TwitterCards } from "../type"
import { TwitterFollowCard } from "./TwitterFollowCard"

const users: TwitterCards = [
    {
        userName: "n3lsonroj4s",
        name: "Nelson Rojas Janda",
        isFollowing: false,
    },
    {
        userName: "EvilAFM",
        name: "Alexelcapo",
        isFollowing: false,
    },
    {
        userName: "midudev",
        name: "Miguel Angel Durán",
        isFollowing: false,
    }
]

export const TwitterFollowCards = () => {
    return (
        <div className="flex flex-wrap justify-center gap-8">
            {users.map((user) => {
                const { userName, name, isFollowing } = user
                return (
                    <TwitterFollowCard userName={userName} name={name} isFollowing={isFollowing} />
                )
            })}
        </div>
    )
}