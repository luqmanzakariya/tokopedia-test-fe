import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { useQuery } from '@apollo/client'
import { GET_POKEMONS } from '../graphQL/queries'
import HomeTemplates from '../components/templates/home/index.jsx'

export default function Home() {
  const router = useRouter()
  const { error, loading, data } = useQuery(GET_POKEMONS)
  const [pokemonData, setPokemonData] = useState([])

  const onClick = (id) => {
    router.push(`/pokemon/${id}`)
  }

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

      <HomeTemplates 
        homeProps={{
          pokemonData,
          loading,
          error,
          onClick,
        }}
      />
    </div>
  )
}
