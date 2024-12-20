import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddBook = () => {
    const [ title, setTitle ] = useState("");
    const [ author, setAuthor ] = useState("");
    const [ genre, setGenre ] = useState("");
    const [ publicationDate, setPublicationDate ] = useState("");
    const [ isbn, setIsbn ] = useState("");
    const navigate = useNavigate();

    const handleAddBook = async (e) => {

        e.preventDefault();
        try {

            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/books`, {

                title,
                author,
                genre,
                publication_date: publicationDate,
                isbn
                
            });
            alert('Book added successfully');
            navigate("/books");

        } catch (error) {

            console.error(error);
            alert('Failed to add book');

        }

    };

    return (
        <form onSubmit={handleAddBook} className="list-group list-group-flush" style={styles.form}>
            <h2>Add Book</h2>
            <div>
                <label className="form-label">Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    required
                    className="form-control"
                />
            </div>
            <div>
                <label className="form-label">Author</label>
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Author"
                    required
                    className="form-control"
                />
            </div>
            <div>
                <label className="form-label">Genre</label>
                <input
                    type="text"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    placeholder="Genre"
                    required
                    className="form-control"
                />
            </div>
            <div>
                <label className="form-label">Publication Date</label>
                <input
                    type="date"
                    value={publicationDate}
                    onChange={(e) => setPublicationDate(e.target.value)}
                    placeholder="Publication Date"
                    required
                    className="form-control"
                />
            </div>
            <div>
                <label className="form-label">ISBN</label>
                <input
                    type="text"
                    value={isbn}
                    onChange={(e) => setIsbn(e.target.value)}
                    placeholder="ISBN"
                    required
                    className="form-control"
                />
            </div>
            <button type="submit" className="btn btn-primary">Add Book</button>
        </form>
    );
};

const styles = {
    form: {
        padding: "15px",
    }
};

export default AddBook;