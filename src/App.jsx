import React from 'react'
import './style.css'

export default function App() {
  return (
    <main>
      <h1>React Fruit Market</h1>
      <div className="items-grid">
        <ItemCard symbol="🍎" name="Apple" price={0.3} />
        <ItemCard symbol="🍍" name="Pineapple" price={1} />
        <ItemCard symbol="🍉" name="Watermelon" price={4} />
        <ItemCard symbol="🥝" name="Kiwi" price={0.5} />
      </div>
    </main>
  )
}

function ItemCard() {
  const symbol = '🍋'
  const name = 'Lemon'
  const price = (0.2).toFixed(2)

  return (
    <div className="item-card">
      <div className="symbol">{symbol}</div>
      <h3>{name}</h3>
      <p>£{price}</p>
    </div>
  )
}
