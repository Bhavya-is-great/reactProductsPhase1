import { useEffect, useState } from "react"
import Item from "./ui/Item"

const products = [
  {
    title: "Wireless Headphones",
    category: "Electronics",
    price: 1999,
    ctaLabel: "Add To Cart",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Smart Watch Pro",
    category: "Wearables",
    price: 2499,
    ctaLabel: "Add To Cart",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Portable Speaker",
    category: "Audio",
    price: 1599,
    ctaLabel: "Add To Cart",
    image:
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "VR Headset",
    category: "Gaming",
    price: 3999,
    ctaLabel: "Add To Cart",
    image:
      "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Mirrorless Camera",
    category: "Photography",
    price: 5299,
    ctaLabel: "Add To Cart",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Laptop Stand",
    category: "Accessories",
    price: 899,
    ctaLabel: "Add To Cart",
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=900&q=80",
  },
]

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") ?? "light"
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem("theme", theme)
  }, [theme])

  const handleThemeToggle = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"))
  }

  return (
    <div className="appShell">
      <main className="productsSection">
        <h1>Our Products</h1>
        <div className="productsGrid">
          {products.map((product) => (
            <Item key={product.title} {...product} />
          ))}
        </div>
      </main>
      <button
        className="themeToggle"
        type="button"
        onClick={handleThemeToggle}
      >
        <i className={theme === "light" ? "ri-moon-line" : "ri-sun-line"} />
      </button>
    </div>
  )
}

export default App
