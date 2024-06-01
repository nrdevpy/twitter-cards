import { TwitterFollowCards } from "./components/TwitterFollowCards"

function App() {
  return (
    <div className="min-w-screen min-h-screen">
      <h1 className="text-3xl font-bold text-center py-12">Twitter Cards</h1>
      <section className="flex flex-wrap justify-center gap-8">
        <TwitterFollowCards />
      </section>
    </div>
  )
}

export default App
