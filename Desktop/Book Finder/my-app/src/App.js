import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import './App.css'; 

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchTerm === '') {
      setBooks([]);
      return;
    }

    const fetchBooks = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://openlibrary.org/search.json?title=${searchTerm}`);
        const data = await response.json();
         
        setBooks(data.docs); 
        
        if (data.docs.length === 0) {
          setError('No books found.');
        }

      } catch (err) {
        setError('Failed to fetch books. Please try again.');
      }
      setLoading(false);
    };

    const timerId = setTimeout(() => {
      fetchBooks();
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  return (
    <div className="App">
      <h1>Book Finder 📚</h1>
      <p>An app for Alex, the College Student</p>
      
  
      <SearchBar onSearch={setSearchTerm} />

   {loading && <div className="loader"></div>}
      {error && <p className="error">{error}</p>}

      <BookList books={books} />
    </div>
  );
}

export default App;