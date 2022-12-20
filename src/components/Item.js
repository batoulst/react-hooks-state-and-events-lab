import React,{useState} from "react";

function Item({ name, category }) {
const [addItem,setAddItem]=useState(false);
const liClass=addItem?'in-cart':'';
const btnClass=addItem?'remove':'add';
const handleAddItem=()=>{setAddItem(!addItem)};

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddItem} className={btnClass}>{addItem? 'Remove From Cart':'Add to Cart'}</button>
    </li>
  );
}

export default Item;
