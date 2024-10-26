import styles from './ProductCard.module.css'

// eslint-disable-next-line react/prop-types
const ProductCard = ({ nombre, imagen, precio }) => {
  return (
    <li className={styles.card}>
      <img src={imagen} alt={nombre} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.title}>{nombre}</h2>
        <h3 className={styles.price}>{precio}</h3>
      </div>
    </li>
  )
}

export default ProductCard