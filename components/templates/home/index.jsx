import ListPokemon from "../../organism/listPokemon"

export default function HomeContainer ({
  homeProps
}) {
  const { pokemonData, loading, error } = homeProps

  if (loading) return <nav>Loading...</nav>

  else if (error) return <div>Oops something is wrong</div>

  return (
    <main>
      <ListPokemon pokemonData={pokemonData} />
    </main>
  )
}
