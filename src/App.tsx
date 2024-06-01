function App() {
  return (
    <div className="min-w-screen min-h-screen">
      <h1 className="text-3xl font-bold text-center py-12">Twitter Cards</h1>
      <div className="flex flex-col items-center">
        <article className="flex items-center justify-between max-w-xs py-1 px-4 min-w-[22rem]">
          <header className="flex items-center justify-center gap-2">
            <img
              className="max-w-16 rounded-full"
              src="https://unavatar.io/twitter/n3lsonroj4s"
              alt="Nelson Rojas Janda avatar"
            />
            <div className="flex flex-col">
              <strong>Nelson Rojas Janda</strong>
              <span>@n3lsonroj4s</span>
            </div>
          </header>
          <aside>
            <button className="bg-white text-black font-medium py-1 px-3 rounded-full">Follow</button>
          </aside>
        </article>
      </div>
    </div>
  )
}

export default App
