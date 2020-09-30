import React from "react";

// what do we need to add to this component so we can map through items?

function Shop(props) {
  console.log(props);
  return (
    <div className="items-list-wrapper">
      <h3>Shop component</h3>
      {/* {props.items.map(item => (
        <div className="item-card" key={item.id}>
          <img
            className="item-list-image"
            src={item.imageUrl}
            alt={item.name}
          />
          <p>{item.name}</p>
          <p>${item.price}</p>
        </div>
      ))} */}
    </div>
  );
}

export default Shop;
