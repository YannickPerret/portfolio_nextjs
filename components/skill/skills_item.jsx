import React from 'react'
import Image from 'next/image'
import { ArrowBigDown } from 'lucide-react'
import ProgressBar from '../progressBar/ProgressBar'

export default function SkillsItem({ logo, title, description, level, color, style }) {
  return (
    <details className={style.skills__item}>
      <summary><Image src={logo} alt={title} width={64} height={64} />
        <h4>{title} <ArrowBigDown /></h4>
      </summary>
      <div className={style.skills__item__description}>
        <p>{description}</p>
        <div className={style.skills__item__level}>
          <ProgressBar level={level} color={color} />
        </div>

      </div>
    </details >
  )
}
