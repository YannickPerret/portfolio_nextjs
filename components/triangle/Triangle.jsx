
import React from 'react'
import TriangleItem from './TriangleItem'
import style from './triangle.module.scss'

export default function Triangle() {
    const triangles = [];
    for (let x = 0; x < 60; x++) {
        const color = `hsl(${(x % 4) * 80}, 100%, 70%)`;
        triangles.push(<TriangleItem num={x % 4} color={color} key={x} />);
    }

    return (
        <div className={style.triangles}>
            <div className={style.overlay}></div>
            <div className={style.container}>
                {triangles}
            </div>
        </div>
    )
}
