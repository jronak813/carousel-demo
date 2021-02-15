/** @jsx jsx */
import React, { memo } from 'react'
import { css, jsx } from '@emotion/core'

const Dot = ({ active, text, handleClick }) => {
  return (
    <span 
      css={css`
        padding: 10px;
        margin-right: 5px;
        cursor: pointer;
        border-radius: 50%;
        background: ${active ? 'gray' : 'white'};
      `}
      onClick={ () =>
            handleClick(text)
          }
    >
      {text}
    </span>
  )
}

const MemoDot = memo(Dot)

const Dots = ({ slides, activeSlide, handleClick }) => {
  return (
    <div
      css={css`
        position: absolute;
        bottom: 25px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      {slides.map((slide, i) => (
        <MemoDot key={slide} active={activeSlide === i} text={i} handleClick={handleClick} />
      ))}
    </div>
  )
}

export default Dots
