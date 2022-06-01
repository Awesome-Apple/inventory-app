import React from 'react';

export const Item = (props) => {

  return <>
    <h3>{props.item.title}</h3>
    <img src={props.item.image} alt={props.item.name} style={{ maxWidth: 200, maxHeight: 200}}/>
  </>
} 
	