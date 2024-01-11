import React from 'react'
import style from './triangle.module.scss'

export default function TriangleItem({ num, color }) {
    return (
        <svg className={style.shape} viewBox="0 0 100 115" preserveAspectRatio="xMidYMin slice">
            <polygon
                points=""
                fill="none"
                stroke={color}
                strokeWidth="5">
                <animate
                    attributeName="points"
                    repeatCount="indefinite"
                    dur="4s"
                    begin={num + "s"}
                    from="50 57.5, 50 57.5, 50 57.5"
                    to="50 -75, 175 126, -75 126"
                />
            </polygon>
        </svg>
    );

}
