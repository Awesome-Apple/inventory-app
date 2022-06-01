import React from 'react';
import apiURL from '../api';

export const Item = ({item, setSingleItem}) => {

  const fetchItem = async () => {
    const response = await fetch(`${apiURL}/items/${item.id}`);
    const itemData = await response.json();
    setSingleItem(itemData)
  }

  return <>
    <h3 onClick={fetchItem} >{item.title}</h3>
    <img src={item.image} alt={item.name} style={{ maxWidth: 200, maxHeight: 200}}/>
  </>
} 
	