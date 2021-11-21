import './App.css';
import BookList from './components/BookList';
import BookListWithSearch from './components/BookListWithSearch';
import WithSearchHOC from './components/WithSearch';
import { books } from './data/Books.json';

const WithSearchBookList = WithSearchHOC(BookList);

function App() {
  return (
    <div className="App">
      <WithSearchBookList data={books} />
      <hr></hr>
      <BookListWithSearch />
    </div>
  );
}

export default App;
