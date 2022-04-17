/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import BadgeId from "../../atoms/badge/id.jsx";
import BadgeOwned from "../../atoms/badge/owned.jsx";

export default function Card({ data }) {
  const myLoader=({src})=>{
    return `${data.image}`;
  }

  return (
    <div
      className="card hover"
      // onClick={click}
      css={css`
        background: white;
        width: 238px;
        height: 238x;
        margin: 10px;
        border-radius: 4px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        position: relative;
        // padding: 16px;

        :hover {
          box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
          cursor: pointer;
        }
        .image__wrapper {
          box-sizing: border-box;
          display: block;
          max-width: 100%;
          height: 206px;
          width: 206px;
          margin: 0 auto;
        }

        .card__inner {
          background: #fff;
          border-radius: 5px;
          width: 100%;
        }

        .badge {
          display: flex;
          justify-content: space-between;
        }

        .pokemon__name {
          padding: 8px 16px 16px;
        }
        
      `}
    >
      <div className="card__inner">
        <div className="badge">
          <BadgeId>{data.id}</BadgeId>
          <BadgeOwned>0</BadgeOwned>
        </div>
        <div className="image__wrapper">
          <Image className="poke-image" loader={myLoader} alt={`${data.name}-img`} objectFit="contain" src={data.image} width={350} height={350} />
        </div>
      </div>
      <div className="pokemon__name"><b>{data.name}</b></div>
    </div>
  );
}
