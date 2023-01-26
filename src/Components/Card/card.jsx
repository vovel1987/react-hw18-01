import React from 'react'
import s from './style.module.css'

export default function Card(product) {
  return (
    <div className={s.card}>
        <p> <span>Title : </span> {product.title.toUpperCase()}</p>
        <p> <span>Price : </span>{product.price}</p>
    </div>
  )
}