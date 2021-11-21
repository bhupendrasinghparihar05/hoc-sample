const Book = props => {
    return (
        <div>
            <pre>{JSON.stringify(props.book, null, 4)}</pre>
        </div>
    )
}

export default Book;