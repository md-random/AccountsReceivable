# Accounts Receivable Application

## Version History

### Version 1.0

- Implemented the main structure of the Vue 3 application.
- Created the `AccountsReceivable.vue` component for managing accounts receivable data.
- Developed the `DataTable.vue` component to display and manage product entries.
- Established a `Product` interface for type safety.
- Set up Vue Router for navigation within the application.
- Configured the main entry point (`main.ts`) and HTML template (`index.html`).
- Added a comprehensive `.gitignore` file to exclude unnecessary files and directories.
- Ensured proper handling of undefined props to prevent runtime errors.
- Improved code clarity and maintainability by following best practices.

## Component and Function Descriptions

### AccountsReceivable.vue

This is the main component that manages the overall accounts receivable data.

#### Functions:

- `updateProducts(newProducts: Product[])`: Updates the products array with new data.

### DataTable.vue

This component displays and manages the product entries in a table format.

#### Functions:

- `addProduct()`: Adds a new product to the list.
- `removeProduct(index: number)`: Removes a product from the list at the specified index.
- `totalQuantity` (computed): Calculates the total quantity of all products.
- `totalCost` (computed): Calculates the total cost of all products.

### Product Interface

Defines the structure for a product in the application.

#### Properties:

- `purveyor`: string
- `inventoryGroup`: string
- `productName`: string
- `inventoryNumber`: string
- `quantity`: number
- `cost`: number

### Router (index.ts)

Configures the Vue Router for the application.

#### Routes:

- `/`: Maps to the `AccountsReceivable` component.

### Main Entry Point (main.ts)

Initializes the Vue application and applies the router.

### HTML Template (index.html)

Provides the base HTML structure for the Vue application.

## Setup and Installation

[Add instructions for setting up and running the project]

## Usage

[Add instructions on how to use the application]

## Contributing

[Add guidelines for contributing to the project]

## License

[Add license information]
