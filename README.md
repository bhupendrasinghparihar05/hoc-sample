## Higher Order Component

### What are Higher Order Components?
A higher-order component is a function that takes a component and returns a new component.

React’s Higher Order Component is a pattern that stems from React’s nature that privileges composition over inheritance.

Consider this example –

    import React from 'react'

    const higherOrderComponent = WrappedComponent => {
    class HOC extends React.Component {
        render() {
        return <WrappedComponent />
        }
    }
    return HOC
    }

Look for the WithSearch.js

### WithSearchHOC - React Higher-Order Component for Search Functionality

### Overview
WithSearchHOC is a Higher-Order Component (HOC) in React that provides search functionality to any wrapped component. It allows users to filter a list of items dynamically based on a search query entered in a text input field. The component takes in data (e.g., a list of books or products) and filters the list according to the search query.

### Features
- Dynamic filtering of data based on user input
- Clean, reusable HOC that can be applied to any list-rendering component
- Abstracted filtering logic using utility functions

### How it Works
WithSearchHOC takes a WrappedComponent as an argument and returns a new component. 
This new component:

- Manages the search query and filtered data in its state
- Displays a search input field where users can type their search queries
- Passes the filtered data to the WrappedComponent, which renders the results

### How to Use
- Import the WithSearchHOC function and the component that will display the data (e.g., a list of books or products).
- Use the HOC to wrap your component.
```javascript
import WithSearchHOC from './WithSearchHOC';
import BookList from './BookList'; // Your component that renders the data

const EnhancedBookList = WithSearchHOC(BookList);

function App() {
    const books = [
        { id: 1, title: "React Essentials" },
        { id: 2, title: "Advanced JavaScript" },
        { id: 3, title: "GraphQL Basics" }
    ];

    return (
        <div>
            <EnhancedBookList data={books} />
        </div>
    );
}

export default App;
```

### Props
- data: An array of objects representing the list of items to be searched. The object should contain a field that can be searched (e.g., title).


### Example
For a book list, each book should have a title field, and the search functionality will filter books based on the title entered in the search input.

```javascript
const books = [
    { id: 1, title: "React Essentials" },
    { id: 2, title: "Advanced JavaScript" },
    { id: 3, title: "GraphQL Basics" }
];
```

### Utility Function: filterProducts
The filtering logic is handled by the filterProducts function, which is imported from ../utils/Utils. It takes two arguments:
- data: The array of items to filter.
- searchText: The search query entered by the user.

```javascript
export const filterProducts = (data, searchText) => {
    return data.filter(item => 
        item.title.toLowerCase().includes(searchText.toLowerCase())
    );
};
```








