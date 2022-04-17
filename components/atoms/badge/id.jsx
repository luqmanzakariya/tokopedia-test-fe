/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function BadgeId({children}) {
  return (
    <div
      css={css`
        padding: 8px;
        background-color: #e99497;
        border-bottom-right-radius: 8px;
        border-top-left-radius: 8px;
        color: white;
      `}
    > 
      #{children}
    </div>
  );
}
