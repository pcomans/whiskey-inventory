import React from "react";
import './WhiskeyItem.css'

function WhiskeyItem({ whiskey }) {
  return (
    <div className="WhiskeyItem">
      <p>Brand: {whiskey.brand}</p>
      <p>Collection: {whiskey.collection}</p>
      <p>Year: {whiskey.year}</p>
      <p>Status(debug): {whiskey.status}</p>
    </div>
  );
}

export default WhiskeyItem;
