import React from 'react';
const ItemCard = (props:any) => {
  const {data} = props;
  // console.log('item-card data ', props)
  return (
    <div className ='item-card'>
        <div className = 'item-page-details'>
          <p>Exercise Name: {data.name}</p>
          <p>Rep Range: {data.repRange}</p>
          <p>Muscle Group: {data.bodyPart}</p>
      </div>
    </div>
  );
};
export default ItemCard;