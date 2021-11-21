import React from "react";
import { filterProducts } from '../utils/Utils';

const WithSearchHOC = (WrappedComponent) => {

    return class extends React.Component {
        constructor(props) {
            super(props);
            this.data = this.props.data;
            this.state = { data: this.props.data, searchText: '' };
            this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
        }

        handleSearchTextChange(event) {
            const _filteredBooks = filterProducts(this.data, event.target.value);
            this.setState({
                data: _filteredBooks,
                searchText: event.target.value
            });
        }
        
        render() {
            return (
                <div>
                    <h1>BookList component using HOC</h1>
                    <input type="text"
                    placeholder="Search Title"
                    onChange={this.handleSearchTextChange} value={this.state.searchText} />
                    <WrappedComponent data={this.state.data} />
                </div>
            )
        }
    }
}

export default WithSearchHOC;