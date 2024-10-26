import ProductCard from './ProductCard'
import { productos } from './util.js'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Productos</h1>
      <ul className={styles.productGrid}>
        {productos.map(producto => (
          <ProductCard 
            key={producto.id}
            nombre={producto.nombre}
            imagen={producto.imagen}
            precio={producto.precio}
          />
        ))}
      </ul>
    </div>
  )
}

export default App