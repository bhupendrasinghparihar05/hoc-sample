import Book from "./Book";

const BookList = props => {
    let { data: books } = props;

    return (
        <div>
            <h1>Books</h1>
            <div>
                {books.map((book) => <Book key={book.isbn} book={book} />)}
            </div>
        </div>
    )
}

export default BookList;