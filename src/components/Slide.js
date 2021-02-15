/** @jsx jsx */
import React, { memo } from 'react'
import { css, jsx } from '@emotion/core'


const Slide = ({ content, width, id, handleTouchStart, handleTouchMove }) => {
  return (
    <div id={id}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart} 
      css={css`
        height: 100%;
        width: ${width}px;
        background-image: url('${content}');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      `}
    />
  )
}

export default memo(Slide)
