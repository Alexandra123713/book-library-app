import { BookList } from './components/BookList/BookList.js';
import { BookForm } from './components/BookForm/BookForm.js';
import { Filter } from './components/Filter/Filter.js';
import Error from './components/Error/Error.js';
import './App.css';

function App() {
  return (
    <div className='app'>
      <header className='app-header'>
        <h1>Book Library App</h1>
      </header>
      <main className='app-main'>
        <div className='app-left-column'>
          <BookForm />
        </div>
        <div className='app-right-column'>
          <Filter />
          <BookList />
        </div>
      </main>
      <Error />
    </div>
  );
}

export default App;
