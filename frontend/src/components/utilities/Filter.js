import axios from 'axios';

export const fetchFilteredBooks = async (filters) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/books/filter`, {
            params: filters,
        });
        return response.data.books;
    } catch (error) {
        console.error('Error fetching filtered books:', error);
        throw error;
    }
};
