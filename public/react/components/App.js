import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';
import { Item } from './Item';

// import and prepend the api url to any fetch calls
import apiURL from '../api';
import { SingleItem } from './SingleItem';

export const App = () => {

	const [items, setItems] = useState([]);
	const [singleItem, setSingleItem] = useState(0);

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
	}, [singleItem]);

	return (
		<main>	
      	{singleItem ? <SingleItem singleItem={singleItem} setSingleItem={setSingleItem}/> : <>
		  <h1>Items Store</h1>
			<h2>All things 🔥</h2> <ItemsList items={items} setSingleItem={setSingleItem}/>
			</>}
		</main>
	)
}