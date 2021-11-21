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