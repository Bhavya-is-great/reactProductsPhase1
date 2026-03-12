import styles from "./Item.module.css"

const formatPrice = (price) => {
  if (typeof price === "number") {
    return `\u20B9${price}`
  }

  return price
}

const Item = ({
  title,
  category,
  price,
  ctaLabel = "Add To Cart",
  image,
  imageAlt,
}) => {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <img className={styles.productImage} src={image} alt={imageAlt ?? title} />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.category}>{category}</p>
        <p className={styles.price}>{formatPrice(price)}</p>
        <button className={styles.button} type="button">
          {ctaLabel}
        </button>
      </div>
    </article>
  )
}

export default Item
