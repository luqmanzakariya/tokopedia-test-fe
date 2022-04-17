import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import ListTemplate from '../components/templates/list'

export default function Home() {
  const router = useRouter()
  const [pokemonData, setPokemonData] = useState([])

  const onClick = (pokemon, nickName) => {
    let newPokemon = JSON.parse(localStorage.getItem("pokemons"));
    if (newPokemon[pokemon]){
      const idx = newPokemon[pokemon].findIndex(x => x.nickName == nickName)
      newPokemon[pokemon].splice(idx, 1)
      if (newPokemon[pokemon].length == 0) {
        delete newPokemon[pokemon]
      }
    }

    localStorage.setItem("pokemons", JSON.stringify(newPokemon))
    setPokemonData(newPokemon)
  }

  useEffect(() => {
    let currentData = JSON.parse(localStorage.getItem("pokemons"))
    if (currentData){
      setPokemonData(currentData)
    } else {
      setPokemonData([])
    }
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon List</title>
        <meta name="description" content="List Pokemon App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ListTemplate 
        homeProps={{
          pokemonData,
          onClick,
        }}
      />
    </div>
  )
}
