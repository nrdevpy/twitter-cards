import { TwitterFollowCards } from "./components/TwitterFollowCards"

function App() {
  return (
    <div className="min-w-screen min-h-screen relative">
      <h1 className="text-3xl font-bold text-center py-12 fixed min-w-full bg-gray-800">Twitter Cards</h1>
      <section className="flex flex-wrap justify-center py-36">
        <TwitterFollowCards />
      </section>
    </div>
  )
}

export default App
