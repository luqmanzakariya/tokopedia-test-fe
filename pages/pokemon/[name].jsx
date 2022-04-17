import { useAmp } from 'next/amp'
export const config = { amp: "hybrid"}
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import styles from '../../styles/Home.module.css'
import { useQuery } from '@apollo/client'
import { GET_POKEMON_DETAIL } from '../../graphQL/queries'
import PokemonTemplates from '../../components/templates/pokemon'

export default function Home() {
  const router = useRouter()
  const { error, loading, data } = useQuery(GET_POKEMON_DETAIL, {
    variables: {
      name: router.query.name
    }
  })
  const [pokemonData, setPokemonData] = useState({})

  useEffect(() => {
    if (data){
      setPokemonData(data.pokemon)
    }
  }, [data])

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon List</title>
        <meta name="description" content="List Pokemon App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PokemonTemplates 
        pokemonProps={{
          pokemonData,
          loading,
          error,
        }}
      />
    </div>
  )
}
