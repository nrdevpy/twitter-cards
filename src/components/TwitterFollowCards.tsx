import { Users } from "../type"
import { TwitterFollowCard } from "./TwitterFollowCard"

const users: Users = [
    {
        id: crypto.randomUUID(),
        userName: "n3lsonroj4s",
        name: "Nelson Rojas",
        isFollowing: true,
    },
    {
        id: crypto.randomUUID(),
        userName: "paola_montero07",
        name: "Paola Montero",
        isFollowing: true,
    },
    {
        id: crypto.randomUUID(),
        userName: "EvilAFM",
        name: "Alexelcapo",
        isFollowing: true,
    },
    {
        id: crypto.randomUUID(),
        userName: "MoureDev",
        name: "Brais Moure",
        isFollowing: true,
    },
    {
        id: crypto.randomUUID(),
        userName: "kendokaponimami",
        name: "FrascoDeVeneno",
        isFollowing: false,
    },
    {
        id: crypto.randomUUID(),
        userName: "midudev",
        name: "Miguel Angel Durán",
        isFollowing: true,
    },
    {
        id: crypto.randomUUID(),
        userName: "IbaiLlanos",
        name: "Ibai",
        isFollowing: false,
    },
    {
        id: crypto.randomUUID(),
        userName: "MADLionsKOI",
        name: "MAD Lions KOI",
        isFollowing: true,
    },
    {
        id: crypto.randomUUID(),
        userName: "CORSAIR",
        name: "CORSAIR",
        isFollowing: false,
    },
    {
        id: crypto.randomUUID(),
        userName: "AMD",
        name: "AMD",
        isFollowing: true,
    },
    {
        id: crypto.randomUUID(),
        userName: "_nasch_",
        name: "Nicolás Schürmann",
        isFollowing: false,
    },
]

export const TwitterFollowCards = () => {
    return (
        <ul className="flex flex-col justify-center gap-8">
            {users.map((user) => {
                const { userName, name, isFollowing, id } = user
                return (
                    <TwitterFollowCard key={id} userName={userName} name={name} isFollowing={isFollowing} />
                )
            })}
        </ul>
    )
}