export default function Search({setSearch}) {
  return (
    <>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" onChange={(event) => setSearch(event.target.value)}/>
      <hr className="solid"/>
    </>
  )
}