import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';
import { Item } from './Item';
import { AddItem } from './addItem';

// import and prepend the api url to any fetch calls
import apiURL from '../api';
import { SingleItem } from './SingleItem';
import { UpdateForm } from './UpdateForm';

export const App = () => {
	const [items, setItems] = useState([]);
	const [singleItem, setSingleItem] = useState(0);
	const [updatingItem, setUpdatingItem] = useState(0);
	const [usingId, setUsingId] = useState(0);
	const [addingItem, setAddingItem] = useState(false);


	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);      
			const itemsData = await response.json();
			
			setItems(itemsData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}
	useEffect(() => {
		fetchItems();
	}, [singleItem, updatingItem, addingItem]);

	return (
		<main>	
      	{addingItem ? <AddItem setAddingItem = {setAddingItem} addingItem = {addingItem} /> : updatingItem ? <UpdateForm setUpdatingItem={setUpdatingItem} updatingItem={updatingItem} usingId={usingId} setSingleItem={setSingleItem} /> : singleItem ? <SingleItem singleItem={singleItem} setSingleItem={setSingleItem} setUpdatingItem={setUpdatingItem} setUsingId={setUsingId} /> : <>
		  <h1>Items Store</h1>
			<h2>All things 🔥</h2>
			<button onClick = {() => {setAddingItem(true)}}> Add an item </button>
			 <ItemsList items={items} setSingleItem={setSingleItem}/>
			</>}
		</main>
	)
}