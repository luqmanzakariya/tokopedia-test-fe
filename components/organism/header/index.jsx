/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import Link from 'next/link'

export default function Header() {
  return (
    <div
      css={css`
      overflow: hidden;
      background-color: #f1f1f1;
      padding: 20px 10px;
      display: flex;
      justify-content: center;

      a {
        float: left;
        color: black;
        text-align: center;
        padding: 8px;
        text-decoration: none;
        font-size: 16px;
        line-height: 25px;
        border-radius: 4px;
        background: grey;
        margin-right: 16px;
      }
      `}
    >
      <div className="header-right">
        <Link className="active" href="/">Home</Link>
        <Link href="/list">My Pokemons</Link>
      </div>
    </div>
  );
}
