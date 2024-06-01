import { TwitterFollowCard } from "./components/TwitterFollowCard"
import { TwitterCards } from "./type"

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

function App() {
  return (
    <div className="min-w-screen min-h-screen">
      <h1 className="text-3xl font-bold text-center py-12">Twitter Cards</h1>
      <section className="flex flex-wrap justify-center gap-8">
        {users.map((user) => {
          const { userName, name, isFollowing } = user
          return (
            <TwitterFollowCard userName={userName} name={name} isFollowing={isFollowing} />
          )
        })}
      </section>
    </div>
  )
}

export default App
