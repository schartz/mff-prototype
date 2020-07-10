import React, { useState } from 'react';
// do not remove it else `async` will break during babel transpile
import regeneratorRuntime from "regenerator-runtime";
import axios from 'axios';
import InfoBar from './InfoBar';
import './style.css';

function Home() {
    const [books, setBooks] = useState(null);

    const fetchData = async () => {
        const response = await axios.get(
            'https://www.anapioficeandfire.com/api/books?pageSize=30'
        );

        setBooks(response.data);
    };

    function dispatchToDetails(index) {
        const eventAwesome = new CustomEvent('awesome', {
            bubbles: true,
            detail: { index: index }
        });

        document.getElementById('eventemitter').dispatchEvent(eventAwesome);
        //alert(index)
    }

    return (
        <div className="App">
            <h1 id="eventemitter">Game of Thrones Books</h1>
            <h2>Fetch a list from an API and display it</h2>

            {/* Fetch data from API */}
            <div>
                <button className="fetch-button" onClick={fetchData}>
                    Fetch Data
                </button>
                <br />
            </div>

            {/* Display data from API */}
            <div className="books">
                {books &&
                books.map((book, index) => {
                    const cleanedDate = new Date(book.released).toDateString();
                    const authors = book.authors.join(', ');

                    return (
                        <div className="book" key={index}>
                            <h3>Book {index + 1}</h3>
                            <h2>{book.name}</h2>

                            <div className="details">
                                <p>👨: {authors}</p>
                                <p>📖: {book.numberOfPages} pages</p>
                                <p>🏘️: {book.country}</p>
                                <p>⏰: {cleanedDate}</p>
                            </div>

                            <button onClick={() => dispatchToDetails(index + 1)}>
                                See details
                            </button>
                        </div>
                    );
                })}
            </div>
            <InfoBar/>
        </div>
    );
}

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);


export default Home;
