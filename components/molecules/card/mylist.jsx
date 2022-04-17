/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import BadgeId from "../../atoms/badge/id.jsx";

export default function MyList({ data, onClick, int }) {
  const myLoader=({src})=>{
    return `${data.image}`;
  }
  

  return (
    <div
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

        .delete {
          background-color: #E0493A; /* Red */
          border: none;
          color: white;
          padding: 5px 10px;
          text-align: center;
          margin: 0px 0px 10px 10px;
          text-decoration: none;
          display: inline-block;
          font-size: 14px;
          border-radius: 8px;
          :hover {
            cursor: pointer;
          }
          &__icon {
            margin-right: 16px;
          }
        }
        
      `}
    >
      <div className="card__inner">
        <div className="badge">
          <BadgeId>{int+1}</BadgeId>
        </div>
        <div className="image__wrapper">
          <Image className="poke-image" loader={myLoader} alt={`${data.name}-img`} objectFit="contain" src={data.image} width={350} height={350} />
        </div>
      </div>
      <div className="pokemon__name"><b>{data.nickName}</b></div>
      <button onClick={onClick} className="delete">
        <i className="fa fa-trash delete__icon" aria-hidden="true"></i>Delete
      </button>
    </div>
  );
}
