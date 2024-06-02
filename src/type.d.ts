export interface User {
    id: string
    userName: string
    name: string
    isFollowing: boolean
}

export type Users = User[]

export type TwitterCard = Omit<User, "id">