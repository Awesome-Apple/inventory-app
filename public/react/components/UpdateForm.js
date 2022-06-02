import React, { useState } from "react";
import apiURL from "../api";

export const UpdateForm = ({setUpdatingItem, updatingItem, usingId, setSingleItem}) => {
    const [id, setid] = useState(usingId);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0.0);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');

     /* const handleSubmit = async (ev) => {
        ev.preventDefault();
        const data = {title, price, description, category, image};
        await fetch(`${apiURL}/items/${usingId.id}`, {method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)});
        setUpdatingItem(false);
    }; */

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        console.log('******** This is the ID were using:', usingId);
        const data = {id, title, price, description, category, image};
        const request = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)}
    
        fetch(`${apiURL}/items/${usingId}`, request)
        .then(response => response.json())
        setSingleItem(0);
    }

   /* const updateHandler = async () => {
        const response = await fetch(`${apiURL}/items/${singleItem.id}`, {method: 'UPDATE'});
        const itemToUpdate = await response.json();
        setSingleItem(0);
    } */

    return <>
        <h2>Update this Item</h2>
        <form onSubmit={handleSubmit}>
            <input placeholder="id" value={usingId}/>
            <input type='text' placeholder='Title' value={title} onChange={(ev) => { setTitle(ev.target.value) }}/>
            <input type='text' placeholder='Price' value={price} onChange={(ev) => { setPrice(ev.target.value) }}/>
            <input type='text' placeholder='Description' value={description} onChange={(ev) => { setDescription(ev.target.value) }}/>
            <input type='text' placeholder='Category' value={category} onChange={(ev) => { setCategory(ev.target.value) }}/>
            <input type='text' placeholder='Image' value={image} onChange={(ev) => { setImage(ev.target.value) }}/>
            <button type='submit'>Update Item</button>
        </form>
        <button onClick={() => {setUpdatingItem(false)}}>Back to All</button>
    </>
}