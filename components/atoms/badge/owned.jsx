/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function BadgeOwned({children}) {
  return (
    <div
      css={css`
        padding: 4px 12px;
        background-color: #03ac0e;
        border-radius: 8px;
        color: white;
        font-size: 12px;
        margin: 8px 8px 0px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    > 
      {children} Owned
    </div>
  );
}
