/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import MyList from "../../molecules/card/mylist.jsx";

export default function MyListPokemon({pokemonData, onClick}) {

  if (Object.keys(pokemonData).length == 0) {
    return <div>You dont have any pokemon</div>
  }

  return (
    <div
      css={css`
        padding: 20px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        max-width: 1100px;
        margin: 0 auto;
        @media only screen and (max-width: 576px){
          justify-content: center;
        }
      `}
    >
      {Object.values(pokemonData)
        .flat()
        .map((data, i) => (
          <MyList data={data} key={data.nickName} onClick={() => onClick(data.pokemon, data.nickName)} int={i} />
        ))}
    </div>
  );
}
