import { TwitterFollowCard } from "./components/TwitterFollowCard"
import { TwitterCard } from "./type"

const user: TwitterCard = {
  userName: "n3lsonroj4s",
  name: "Nelson Rojas Janda",
  avatar: "https://unavatar.io/twitter/n3lsonroj4s"
}

function App() {
  const { userName, name, avatar } = user

  return (
    <div className="min-w-screen min-h-screen">
      <h1 className="text-3xl font-bold text-center py-12">Twitter Cards</h1>
      <TwitterFollowCard userName={userName} name={name} avatar={avatar} />
    </div>
  )
}

export default App
