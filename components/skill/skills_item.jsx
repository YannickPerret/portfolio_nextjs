import React from 'react'
import Image from 'next/image'
import { ArrowBigDown } from 'lucide-react'

export default function Skills_item({ logo, title, description, level, color, keyPoints, style }) {
  return (
    <details className={style.skills__item}>
      <summary><Image src={logo} alt={title} width={64} height={64} />
        <h4>{title} <ArrowBigDown /></h4>
      </summary>
      <div className={style.skills__item__description}>
        <p>
          {description}

        </p>
        <ul>
          {keyPoints.map((keyPoint, index) => (
            <li key={index}>{keyPoint}</li>
          ))}
        </ul>
      </div>
    </details>
  )
}
