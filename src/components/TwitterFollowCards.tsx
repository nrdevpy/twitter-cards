import { Users } from "../type"
import { TwitterFollowCard } from "./TwitterFollowCard"

const users: Users = [
    {
        id: crypto.randomUUID(),
        userName: "n3lsonroj4s",
        name: "Nelson Rojas Janda",
        isFollowing: true,
    },
    {
        id: crypto.randomUUID(),
        userName: "EvilAFM",
        name: "Alexelcapo",
        isFollowing: false,
    },
    {
        id: crypto.randomUUID(),
        userName: "midudev",
        name: "Miguel Angel Durán",
        isFollowing: false,
    }
]

export const TwitterFollowCards = () => {
    return (
        <ul className="flex flex-wrap justify-center gap-8">
            {users.map((user) => {
                const { userName, name, isFollowing, id } = user
                return (
                    <TwitterFollowCard key={id} userName={userName} name={name} isFollowing={isFollowing} />
                )
            })}
        </ul>
    )
}