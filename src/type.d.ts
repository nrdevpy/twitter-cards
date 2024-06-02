export interface User {
    readonly id: string
    userName: string
    name: string
    isFollowing: boolean
}

export interface TwitterFollowButton {
    isFollowing: TwitterIsFollowingType
}

export type Users = User[]
export type TwitterCard = Omit<User, "id">
type TwitterIsFollowingType = Pick<TwitterCard, "isFollowing">