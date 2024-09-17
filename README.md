# E-Commerce Cart Application - [StoreApp](https://pradystore.netlify.app/)

This is a React-based E-Commerce Cart application called **StoreApp**. It allows users to browse through products fetched from an API, add them to their cart, and remove items from the cart. The app provides a user-friendly interface to manage the cart, with handling for duplicate item warnings and empty cart notifications.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Reference](#api-reference)
- [License](#license)

## Demo

A live version of the project can be found at [StoreApp Live](https://pradystore.netlify.app/).

## Features

- **Fetch Products**: Fetches product data from [Fake Store API](https://fakestoreapi.com/).
- **Add to Cart**: Users can add items to the cart from the product list.
- **Remove from Cart**: Users can remove items from the cart.
- **Duplicate Item Warning**: Displays a warning when a duplicate item is added to the cart.
- **Empty Cart Handling**: Shows a message when the cart is empty.
- **Responsive Design**: Fully responsive for various screen sizes.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Prady555555/StoreAppReactGuvi.git
    ```

2. Navigate into the project directory:

    ```bash
    cd StoreAppReactGuvi
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

5. Open your browser and visit:

    ```
    http://localhost:3000
    ```

## Usage

- Browse the list of products fetched from the API.
- Add a product to the cart by clicking the **Add to Cart** button.
- View the cart by clicking the cart icon in the header.
- Remove items from the cart by clicking the **Delete** button.
- The cart page will display a message if it is empty.

## API Reference

- API: [Fake Store API](https://fakestoreapi.com/products)
- Data fetched includes:
  - `id`: Unique product identifier.
  - `title`: Product name.
  - `price`: Product price.
  - `image`: Image of the product.


