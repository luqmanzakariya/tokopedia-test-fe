import MyListPokemon from "../../organism/myListPokemon"

export default function ListTemplate ({
  homeProps
}) {
  const { pokemonData, loading, error, onClick } = homeProps

  if (loading) return <nav>Loading...</nav>

  else if (error) return <div>Oops something is wrong</div>

  return (
    <main>
      <MyListPokemon 
        pokemonData={pokemonData}
        onClick={onClick}
      />
    </main>
  )
}
