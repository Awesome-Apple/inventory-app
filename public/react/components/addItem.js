import React, { useState } from "react";
import apiURL from "../api";

export const AddItem = ({setAddingItem, addingItem}) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0.0);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');

    //title, price, description, category, image
    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const data = {title, price, description, category, image};
        const res = await fetch(`${apiURL}/items`, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)});
        const itemInfo = await res.json();
        setAddingItem(false);
    };


    return <>
        <h2>Add an Item</h2>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Title' value={title} onChange={(ev) => { setTitle(ev.target.value) }}/>
            <input type='text' placeholder='Price' value={price} onChange={(ev) => { setPrice(ev.target.value) }}/>
            <input type='text' placeholder='Description' value={description} onChange={(ev) => { setDescription(ev.target.value) }}/>
            <input type='text' placeholder='Category' value={category} onChange={(ev) => { setCategory(ev.target.value) }}/>
            <input type='text' placeholder='Image' value={image} onChange={(ev) => { setImage(ev.target.value) }}/>
            <button type='submit'>Create Item</button>
        </form>
        <button onClick={() => {setAddingItem(false)}}>Cancel</button>
    </>
}