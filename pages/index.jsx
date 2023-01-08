import Head from "next/head"
import Navbar from "./components/Navbar"

const Home = () => {
  return (
    <div>
      <Head>
        <title>Todo List</title>
        <meta name="description" content="Todo list" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/todolist.ico" />
      </Head>

      <header className="flex gap-4">
        <Navbar />
        <div className="overflow-x-auto flex border-b pt-2 w-full"></div>
      </header>
      <main>
        <div className="overflow-x-auto flex border-b pt-2 w-full">
          <input type="checkbox" />
        </div>
      </main>
    </div>
  )
}
export default Home
