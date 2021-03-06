/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Card from "../../molecules/card/index.jsx";

export default function ListPokemon({pokemonData, onClick}) {
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
      {pokemonData.map((data) => (
        <Card key={data.id} data={data} onClick={() => onClick(data.name)}  />
      ))}
    </div>
  );
}
