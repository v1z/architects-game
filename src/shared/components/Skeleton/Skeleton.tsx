import React from 'react'

import s from './Skeleton.css'

type Props = {
  height?: string
  width?: string
  marginBottom?: string
}

export const Skeleton: React.FC<Props> = ({ height = '20px', width = '100%', marginBottom = '0' }) => {
  return (
    <div
      className={s.root}
      style={{
        height,
        width,
        marginBottom,
      }}
    />
  )
}
