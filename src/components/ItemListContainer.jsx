import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import { getProducts } from "../data/product";
import LoadingItemsIndicator from "./LoadingItemsIndicator";

const ItemListContainer = (props) => {
  const { message } = props;

  const [items, setItems] = useState([]);

  useEffect(() => {
    getProducts(5).then(data => setItems(data));
  }, []);

  return (
    <>
      <div>{message}</div>
      {items.length === 0 && <LoadingItemsIndicator /> }
      {items.length > 0 && <ItemList items={items} />}
    </>
  );
};

export default ItemListContainer;
