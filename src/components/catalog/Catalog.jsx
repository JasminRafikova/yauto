import { Card } from '../card/Card';
import s from './Catalog.module.css';
import { products } from '../../data/data'
import { Search } from '../search/Search'
import { useState } from 'react'

export function Catalog() {
  const [query, setQuery] = useState('')
  function handleChange(e) {
    setQuery(e.target.value)
  }
  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(query.toLowerCase());
  })

  return (
    <section className={`container ${s.catalog}`}>
      <h2>Каталог</h2>
      <Search handleChange={handleChange} />
      <div className={s.cat}>
        <p>Категории:</p>
        <div className={s.btns}>
          <button className='btn'>Все товары</button>
          <button className='btn'>Шины/колеса</button>
          <button className='btn'>Масла</button>
          <button className='btn'>Ароматизаторы</button>
        </div>
      </div>
      <div className={s.cards}>
        {
          filteredProducts.length ?
            filteredProducts.map((product, key) => {
              return (
                <Card key={key} id={product.id} img={product.img} name={product.name} price={product.price} />
              )
            })
            :
            <p className="error">Ничего не найдено по запросу "{query}"</p>
        }
      </div>
      <a href="#">Загрузить еще товары</a>
    </section>
  )
}