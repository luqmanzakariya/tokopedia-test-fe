import Head from 'next/head'
import { useState, useEffect } from 'react'
import styles from '../../styles/Home.module.css'
import { useQuery } from '@apollo/client'
import { GET_POKEMONS } from '../../graphQL/queries'

export default function Home() {
  const { error, loading, data } = useQuery(GET_POKEMONS)
  const [pokemonData, setPokemonData] = useState([])

  useEffect(() => {
    if (data){
      setPokemonData(data.pokemons.results)
    }
  }, [data])

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon List</title>
        <meta name="description" content="List Pokemon App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>Pokemon Detail Page</div>
    </div>
  )
}
