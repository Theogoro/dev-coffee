import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const [count, setCount] = useState(undefined);

  const onAdd = (count) => {
    setCount(count);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 m-auto gap-4 max-w-5xl border rounded shadow p-4 bg-white">
      <figure className="w-full m-auto min-w-full rounded overflow-hidden">
        <img className="w-full" src={item.pictureUrl} alt={item.title} />
      </figure>
      <div className="w-full">
        <h2 className="text-3xl mb-2">{item.title}</h2>
        <h3 className="text-2xl">Precio: ${item.price}</h3>
        <p>Stock: {item.stock}</p>
        <p>{item.description}</p>
        
        {!count && <ItemCount stock={item.stock} initial={1} onAdd={onAdd} /> }
        {count && <Link to="/cart" className="border px-4 py-2 mt-4 block text-center shadow rounded border-amber-500 text-amber-500 hover:border-amber-700 hover:text-amber-700 transition">Ver en el carrito</Link>}
      </div>
    </div>
  );
};

export default ItemDetail;
