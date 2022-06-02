# Code Review

## Task Board + Workflow

* Use swimlines to show *status* of task, and add assignments on it
* Nice job keeping tickets small and doable
* Consider the following format:
	Title: User Story
	* As an {X}, I want to {Y}, by {Z}
	* eg, "As a User, I want to Delete and Item, by clicking the delete button next to the item"
		- [x] Sequelize Model for Item
		- [] Delete Single Item route in Express
		- [x] Delete Button in React SingleItem component
		- [] fetch request to delete item when delete button is clicked
* NBD for smaller projects, but try to use git branches for adding features, and PRs to merge them

## API

### Item Model

* Good Sequelize properties overall
* Price: FLOAT, consider making an INT or DECIMAL for 2 spaces to limit trailing decimals
	`price: DECIMAL(2)`
* Category: Consider ENUM() for set properties
	`category: ENUM('hats', 'shoes', 'shirts')`

### Item Routes

* Nice RESTful routes!
* `res.json()` is better for sending any data, `res.send()` is good for strings
* Can we include error handling in all routes?
* Great job using express router

## Client-side

### React Components

* I like how you used the `setSingleItem` method passed down as props to switch between Items and Single Item view
* Bonus: Research React Router. How might you do it that way?

## Feature Roadmap

* Tier I: Complete
* Test Tiers II - IV
* Can you do any TDD (or just add jest tests) for your Sequelize Model?
* Can you use flexbox to make this responsive? Will it look good on *any* screen?
* Can you add e-commerce functionality?
	* As a Customer, I want to add an item to my cart, by clicking the "Add Item" button
	* As a Customer, I want to be able to add multiple items to a cart
	* As a Customer, I want to be able to purchase items by adding my payment info to a credit card form

	* Sequelize
		* User Model
			* Admin/Customer Properties
		* Cart Model
			* Associated to Customer Users

	* Express
		* CRUD routes for Cart (for Customers)
		* CRUD routes for Users (for Admins)

		```javascript

		app.delete('/cart', async (req, res) => {
			let userRole = req.body.user.role
			if(userRole == 'customer'){
				await Cart.destroy()
				res.send("deleted!")
			} else {
				res.send("Access denied!")
			}
		})
		
		```


	* React
		* Cart Component
		* Buttons + event handlers for adding, updating, deleting to cart
