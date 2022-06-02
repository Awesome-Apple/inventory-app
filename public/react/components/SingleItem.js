import React, { useState, useEffect } from 'react';
import apiURL from '../api';


export const SingleItem = ({ singleItem, setSingleItem, setUpdatingItem, setUsingId}) => {

    const deleteHandler = async () => {
        const response = await fetch(`${apiURL}/items/${singleItem.id}`, {method: 'DELETE'});
        const itemData = await response.json();
        setSingleItem(0);
    }

    return <>
    <h4>{singleItem.category}</h4>
    <h1>{singleItem.title}</h1>
    <h3>{singleItem.price}</h3>
    <img src={singleItem.image} alt={singleItem.title} style={{maxWidth: 350, maxHeight: 350}} />
    <h4>{singleItem.description}</h4>
    <button onClick={() => {
        setUpdatingItem(true);
        setUsingId(singleItem.id);
        }}>Update Item</button>
    <button onClick={deleteHandler}>Delete Item</button>
    <button onClick={() => {setSingleItem(0)}}>Back to All</button>
    </>
}
