import React from 'react'
import Image from 'next/image'
import { ArrowBigDown } from 'lucide-react'
import ProgressBar from '../progressBar/ProgressBar'

export default function Skills_item({ logo, title, description, level, color, keyPoints, style }) {
  return (
    <details className={style.skills__item}>
      <summary><Image src={logo} alt={title} width={64} height={64} />
        <h4>{title} <ArrowBigDown /></h4>
      </summary>
      <div className={style.skills__item__description}>
        {keyPoints.map((keyPoint, index) => {
          <ProgressBar key={index} value={level} max="100" color={color} />
        })}

      </div>
    </details >
  )
}
