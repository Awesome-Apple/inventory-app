import React, { useState, useEffect } from 'react';


export const SingleItem = ({ singleItem, setSingleItem }) => {
    return <>
    <h4>{singleItem.category}</h4>
    <h1>{singleItem.title}</h1>
    <h3>{singleItem.price}</h3>
    <img src={singleItem.image} alt={singleItem.title} style={{maxWidth: 350, maxHeight: 350}} />
    <h4>{singleItem.description}</h4>
    <button onClick={() => {setSingleItem(0)}}>Back to All</button>
    </>
}
