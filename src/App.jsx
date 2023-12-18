import { useState } from 'react'
import Search from './components/Search'
import FoodList from './components/FoodList'

function App() {
  const [search, setSearch] = useState("")

  return (
    <>
      <Search setSearch={setSearch} />
      <FoodList search={search}/>
    </>
  )
}

export default App
