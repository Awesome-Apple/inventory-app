import React, { useCallback, useState } from 'react';
import apiURL from '../api';

export const Item = ({item, setSingleItem}) => {
const [title, setTitle] = useState('');
const [price, setPrice] = useState(0);
const [description, setDescription] = useState('');
const [category, setCategory] = useState('');
const [image, setImage] = useState('');

  const fetchItem = async () => {
    const response = await fetch(`${apiURL}/items/${item.id}`);
    const itemData = await response.json();
    setSingleItem(itemData)
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    set
  }
// title price desc category image

  return <>
    <h3 onClick={fetchItem} >{item.title}</h3>
    <img src={item.image} alt={item.name} style={{ maxWidth: 200, maxHeight: 200}}/>
    <form onSubmit={handleSubmit}>
      <h4> Add a new item to the inventory</h4>
      <input type = "text" placeholder='Title' value={}></input>
    </form>
  </>
} 
	