import React, { useState } from "react";
import products from "./products";
import ProductCard from "./ProductCard";

export default function App() {
  // single-letter vars since you like them
  const [c, setC] = useState([]); // cart: array of {id, qty}
  const add = (id, qty) => {
    setC((s) => {
      const ex = s.find((x) => x.id === id);
      if (ex) return s.map((x) => (x.id === id ? { ...x, qty: qty } : x));
      return [...s, { id, qty }];
    });
  };
  const remove = (id) => setC((s) => s.filter((x) => x.id !== id));

  return (
    <div className="page">
      <header className="topbar">
        <h1>Shopping Cart App</h1>
      </header>

      <main className="content">
        <section className="grid">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              p={p}
              onAdd={(qty) => add(p.id, qty)}
              onRemove={() => remove(p.id)}
            />
          ))}
        </section>
      </main>

      <footer className="footer">
        <div>Cart Items: {c.reduce((a, b) => a + b.qty, 0)}</div>
      </footer>
 </div>
 );
}
