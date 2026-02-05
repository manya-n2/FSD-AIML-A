import React, { useState } from "react";

export default function ProductCard({ p, onAdd, onRemove }) {
  const [q, setQ] = useState(1);

  const inc = () => setQ((s) => Math.min(99, s + 1));
  const dec = () => setQ((s) => Math.max(1, s - 1));
  const handleAdd = () => {
    onAdd(q);
  };

  return (
    <article className="card">
      <div className="card-image">
        <img src={p.img} alt={p.title} />
      </div>

      <div className="card-body">
        <h2 className="card-title">Title:{p.title}</h2>
        <div className="price">Price:₹{p.price}/-</div>

        <div className="controls">
          <div className="qty">
            <button onClick={dec} aria-label="decrement">-</button>
            <span>{q}</span>
            <button onClick={inc} aria-label="increment">+</button>
          </div>
          <div className="add">
            <button className="btn" onClick={handleAdd}>Add To cart</button>
            <button className="btn remove" onClick={onRemove}>Remove</button>
          </div>
        </div>
      </div>
    </article>
);
}
