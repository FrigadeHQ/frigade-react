import React, { CSSProperties } from 'react'

export const Question = ({
  color = '#000000',
  style,
  className,
}: {
  color?: string
  style?: CSSProperties
  className?: string
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 18 18"
    style={style}
    className={className}
  >
    <path
      fill="currentColor"
      d="M13.43 4.938a4.494 4.494 0 00-1.043-1.435A4.955 4.955 0 009 2.197c-1.276 0-2.48.464-3.387 1.305A4.502 4.502 0 004.57 4.938a4.242 4.242 0 00-.386 1.773v.475c0 .109.087.197.196.197h.95a.197.197 0 00.197-.197V6.71c0-1.749 1.557-3.17 3.473-3.17s3.473 1.421 3.473 3.17c0 .718-.254 1.393-.738 1.955a3.537 3.537 0 01-1.9 1.125 1.928 1.928 0 00-1.085.682c-.271.343-.42.768-.42 1.206v.552c0 .109.088.197.197.197h.95a.197.197 0 00.196-.197v-.552c0-.276.192-.519.457-.578a4.904 4.904 0 002.625-1.56c.335-.392.597-.828.778-1.3a4.256 4.256 0 00-.103-3.303zM9 13.834a.985.985 0 10.001 1.97.985.985 0 00-.001-1.97z"
    ></path>
  </svg>
)
