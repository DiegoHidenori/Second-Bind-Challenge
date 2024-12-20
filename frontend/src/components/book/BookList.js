import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { fetchFilteredBooks } from "../utilities/Filter";
import BookFilters from "../utilities/BookFilters";

const BookList = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();
    const [filters, setFilters] = useState({
        title: "",
        author: "",
        genre: "",
        publication_date: "",
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchBooks();
    }, []);

    // const exportBooks = () => {
    //     navigate(`/books/export`);
    // };

    const fetchBooks = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/books`);
            setBooks(response.data.books);
            console.log(response.data.books);
        } catch (error) {
            console.error("Error fetching books:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleFilterChange = (name, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    const applyFilters = async () => {
        setLoading(true);
        try {
            const filteredBooks = await fetchFilteredBooks(filters);
            setBooks(filteredBooks);
        } catch (error) {
            console.error("Error applying filters:", error);
        } finally {
            setLoading(false);
        }
    };

    const clearFilters = () => {
        setFilters({
            title: "",
            author: "",
            genre: "",
            publication_date: "",
        });
        fetchBooks();
    };

    const exportBooks = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/books/export`, {
                responseType: 'blob',
            });
    
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'books.json');
            document.body.appendChild(link);
            link.click();
    
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error exporting books:', error);
        }
    };

    return (
        <div className="div-center">
            <h1>Book List</h1>
            <button onClick={() => navigate("/books/add")} className="btn btn-primary">Add Book</button>
            <BookFilters
                filters={filters}
                onChange={handleFilterChange}
                onApplyFilters={applyFilters}
                onClearFilters={clearFilters}
            />
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <table className="table table-center">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Genre</th>
                                <th>Publication Date</th>
                                <th>ISBN</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((book) => (
                                <tr key={book.entry_id}>
                                    <td> {book.title} </td>
                                    <td> {book.author} </td>
                                    <td> {book.genre} </td>
                                    <td> {book.publication_date} </td>
                                    <td> {book.isbn} </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {books.length === 0 && <p>No books found</p>}
                    <button onClick={exportBooks} className="btn btn-primary">Export List (JSON)</button>
                </div>
            )}
            
        </div>
    );
};

export default BookList;
