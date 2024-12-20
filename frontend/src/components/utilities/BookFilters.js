import React from "react";

const BookFilters = ({ filters, onChange, onApplyFilters, onClearFilters }) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        onChange(name, value);
    };

    return (
        <div className="filter-container">
            <label>
                Title:
                <input
                    type="text"
                    name="title"
                    value={filters.title}
                    onChange={handleInputChange}
                    className="form-control"
                />
            </label>
            <label>
                Author:
                <input
                    type="text"
                    name="author"
                    value={filters.author}
                    onChange={handleInputChange}
                    className="form-control"
                />
            </label>
            <label>
                Genre:
                <input
                    type="text"
                    name="genre"
                    value={filters.genre}
                    onChange={handleInputChange}
                    className="form-control"
                />
            </label>
            <label>
                Publication Date:
                <input
                    type="date"
                    name="publication_date"
                    value={filters.publication_date}
                    onChange={handleInputChange}
                    className="form-control"
                />
            </label>
            <button onClick={onApplyFilters} className="btn btn-primary">Apply Filters</button>
            <button onClick={onClearFilters} className="btn btn-secondary">Clear Filters</button>
        </div>
    );
};

export default BookFilters;
