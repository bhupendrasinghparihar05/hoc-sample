import { useState } from 'react';
import { books } from './../data/Books.json';
import BookList from './BookList';
import { filterProducts } from './../utils/Utils'

const BookListWithSearch = () => {

    const [filteredBooks, setFilteredBooks] = useState(books);
    const [searchText, setSearchText] = useState('');

    const handleSearchTextChange = (event) => {
        setSearchText(event.target.value)
        const _filteredBooks = filterProducts(books, event.target.value);
        setFilteredBooks(_filteredBooks);
    };

    return (
        <div>
            <input type="text"
             placeholder="Search Title"
             onChange={handleSearchTextChange} value={searchText} />
            <BookList data={filteredBooks}/>
        </div>
    )
}



export default BookListWithSearch;