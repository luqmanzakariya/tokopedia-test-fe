/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
export default function PokemonTemplates ({
  pokemonProps
}) {
  const { pokemonData, loading, error } = pokemonProps
  const [modalText, setModalText] = useState("Oops catch pokemon failed. Please try again")
  const [nickName, setNickName] = useState("")
  const [triggerInputNick, setTriggerNick] = useState(false)

  const onCatch = (e) => {
    e.preventDefault()
    const probability = Math.random() < 0.5
    if (probability){
      setTriggerNick(true)
    } else {
      setModalText("Oops catch pokemon failed. Please try again")
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
    }
  }

  const onSavePokemon = (e) => {
    e.preventDefault()
    let currentData = JSON.parse(localStorage.getItem("pokemons"))
    if (currentData){
      let flag = true
      for (const property in currentData) {
        if (currentData[pokemonData.name] === undefined){
          currentData[pokemonData.name] = [{
            nickName,
            pokemon: pokemonData.name,
            image: pokemonData.sprites.front_default
          }]
          
          flag = false
        }
      }

      if (flag){
        currentData[pokemonData.name].push({
          nickName,
          pokemon: pokemonData.name,
          image: pokemonData.sprites.front_default
        })
      }

      global.localStorage.setItem("pokemons", JSON.stringify(currentData))
      setNickName("")
      setTriggerNick(false)
      setModalText(`Contratulations, you've got ${pokemonData.name}. Currently you have ${currentData[pokemonData.name].length} in your list`)
    } else {
      let payload = {
        [pokemonData.name] : [
          {
            nickName,
            pokemon: pokemonData.name,
            image: pokemonData.sprites.front_default
          }
        ]
      }
      global.localStorage.setItem("pokemons", JSON.stringify(payload))
      setNickName("")
      setTriggerNick(false)
      setModalText(`Contratulations, you've got ${pokemonData.name}. Currently you have ${1} in your list`)
    }
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  }

  const onClose = () => {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

  const handleChangeNick = (e) => {
    setNickName(e.target.value)
  }

  if (loading) return <nav>Loading...</nav>

  else if (error) return <div>Oops something is wrong</div>

  return (
    <main 
      css={css`
      padding: 20px;
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      max-width: 1100px;
      margin: 0 auto;
      @media only screen and (max-width: 576px){
        justify-content: center;
      }

      .header__section {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0 auto;
      }

      .poke__img {
        height: 208px;
        width: 208px;
      }

      .button__wrapper {
        margin-top: 16px;
        display: flex;
        justify-content: center;

        &_button {
          background-color: #4CAF50; /* Green */
          border: none;
          color: white;
          padding: 10px 20px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          border-radius: 8px;
          :hover {
            cursor: pointer;
          }
        }
      }

      .detail__section {
        margin-top: 18px;
        width: 100%;
        border: 1px solid black;
        border-radius: 8px;
        padding: 30px;
        min-width: 320px;
        max-width: calc(100% - 30px)
      }

      .modal {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
      }
      
      .modal-content {
        background-color: #fefefe;
        margin: 15% auto; /* 15% from the top and centered */
        padding: 20px;
        border: 1px solid #888;
        width: 80%; /* Could be more or less, depending on screen size */
      }

      .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
      }
      
      .close:hover,
      .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
      }

      .nick__wrapper {
        display: flex;
        flex-direction: column;

        &_input {
          margin-bottom: 8px;
          padding: 4px;
        }
      }
    `}
    >
      <div>
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span onClick={onClose} className="close">&times;</span>
            <p>{modalText}</p>
          </div>
        </div>
        <div className="header__section">
          <img 
            src={pokemonData.sprites && pokemonData.sprites.front_default}
            alt="poke__img"
            className="poke__img"
          />
          <div><b>{pokemonData.name}</b></div>
        </div>
        <div className="button__wrapper">
          {!triggerInputNick ? <button 
            onClick={onCatch}
            className="button__wrapper_button">Catch</button> : 
            <div className="nick__wrapper">
              <input onChange={handleChangeNick} className="nick__wrapper_input" placeholder="Input Nick Name" />
              <button 
                onClick={onSavePokemon}
                className="button__wrapper_button">Catch and add nickname</button>
            </div>
          }
        </div>
        <div className="detail__section">
          <div css={css`
            border-bottom: 1px solid black;
            margin-bottom: 8px;
          `}><b>Stats</b></div>
          <div>Height: {pokemonData.height}</div>
          <div>Weight: {pokemonData.weight}</div>
        </div>
        <div className="detail__section">
          <div css={css`
            border-bottom: 1px solid black;
            margin-bottom: 8px;
          `}><b>Abilities</b></div>
          {pokemonData && pokemonData.abilities && pokemonData.abilities.map((val) => <div key={val.ability.name}>{val.ability.name}</div>)}
        </div>
        <div className="detail__section">
          <div css={css`
            border-bottom: 1px solid black;
            margin-bottom: 8px;
          `}><b>Moves</b></div>
          {pokemonData && pokemonData.moves && pokemonData.moves.map((val) => <div key={val.move.name}>{val.move.name}</div>)}
        </div>
      </div>
    </main>
  )
}
