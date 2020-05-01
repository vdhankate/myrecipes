import React from 'react';
import classes from './recipes.module.css';
const Recipe = ({title,calories,image,ingredients}) => {

	return (

		<div className={classes.recipes}>
			<h1>{title}</h1>
			<ol>
				{ingredients.map( (ingredient) => (<li>{ingredient.text}</li>))}
			</ol>
			<p>{calories}</p>
			<img className={classes.image} src={image} alt='' />
		</div>
		)
}

export default Recipe;