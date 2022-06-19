## INTRODUCTION

First off, I would like to thank my session lead, Mostafa El-Sheikh. He has helped a lot in this project.

Before I start off giving a brief description of MyShop project, I need to refer to sources that also has helped me to develop this project.

1. Stack Overflow:
   Basically, I believe that every developer must be able to solve a problem and if he has failed, he asks for a help. For me, I have used Stack OverFlow and Angular's Routing Documentation.

a) First Question (https://stackoverflow.com/questions/72636732/is-there-a-way-to-pass-an-object-using-emit-to-the-child-component-angular):

I was finding a problem of passing a method from a parent component to a child component and I posted this question, so someone could help me out. Everyone had mentioned the 'subject' method, but I couldn't make it happen. However, I had rewatched my classroom videos which are related to this problem.

b) Second Question (https://stackoverflow.com/questions/72639215/i-want-to-pass-a-an-object-to-a-child-component-i-did-everything-and-nothing-wo):

It was the same problem, and they had also mentioned the 'subject' method and I couldn't make it happen. However, I had used an idea that was posted and it was the 'splice()' method in order to delete a cart item. To be honest, I had tried to do it with 'filter()', but unfortunately it deleted all items instead.

c) Third Question (https://stackoverflow.com/questions/72653701/how-to-get-the-total-price-angular):

I had a problem in calculating the total price of cart items, as I was trying to make it happen with the 'for loop' which, of course, couldn't work as it couldn't reach out product objects. Instead, I used "map()" in order to loop inside each and every object.

---

2. Parameters (https://angular.io/guide/router):

I couldn't use routing with parameters, so I'd used Angular's documentation in order to puzzle out this problem.

# MyShop

MyShop is a shopping website where customers can purchase any product they desire. We can divide this project into:

1. Components:

Components can be divided into:

a) main-page (parent)
b) productItem
c) navbar
d) cart
e) Item

2. Services:

   a) ProductService
   b) CartListService
   c) CheckOutService

3. Model:

   a) Product (Product's model)
   b) Message (Check-Out Form)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## Components

1. MainPage (parent):

a) MainPage Component:

The MainPage component gets injected with a data from the ProductService inside the constructor.

b) MainPage Template:

All data gets looped, and each single item gets passed inside of the item object which is in the ProductItem component using the Input() decorator.

2. ProductItem:

a) ProductItem Template:

It displays all data in the HTML template, and there is a button in which adds the item to the cartService.

b) ProductItem Component:

There is an item object with an input() decorator, which receives all data. The component is injected with the cartService. In the AddCart() method, it pushes the item object inside the array which is called with the getCart method inside of the cartService.

3. Cart:

a) Cart Component:

It get injected with the cartService, and there is an empty array named cartItem which is equal to the cartService. So, any object gets pushed into the cartService method, the cartItem array stores it too.

There is a DeleteItem method which splices the item off of the array of the cartItem. Over and above that, there is an AddMessage method which related to the form in the template, as the client fills and submits without an item in the cart, it alerts the client with a warning message. As soon as the client submits the form, it gets passed to the post object, then pushed to the checkOut array. Also, there's a CalculateTotalPrice method which adds all products' prices inside of the cart. Finally, clients get a message as soon as they submit.

4. Navbar:

It contains hyperlinks which direct the client to both the home and cart page.

5. Item (Angular's Documentation had helped me a lot, as it was hard to do it by myself):
   When a customer click on the image of a product in the main page, it directs (routing with the product's id parameter) him to a page which has all details related to that prodcuts. How does that happen?

1) We inject the Item component with the productService which contains the 'getProduct()' method, it finds each product by its id.

2) We inject the Item component with the ActivatedRoute, so we can do the routing with ID parameter.

3) We included a property in the ItemComponent class in which has an undefined, or Product model. So, if a customer rewrites the URL with a wrong id, it leads him to nowhere.

We have, also, added a add cart button, so it can push the product to the cartListService.

## Services

1. ProductService
   It contains a method which contains all data, that gets display in the mainPage component.

2. CartListService
   It contains a method which contains all items, that gets pushed inside of the array. As well as, a method which finds products by their IDs.

## Model

1. ProductModel (SCHEMA):
   It includes the schema/model of the product data.

2. MessageModel (SCHEMA)
   It includes the schema/model of the checkout message inside of the cart component.

## Dependencies

I haven't used any dependency in this product. I have even designed my product with vanilla CSS3.

# Instructions

To start off the server, please type the following in your terminal:

**ng serve**
