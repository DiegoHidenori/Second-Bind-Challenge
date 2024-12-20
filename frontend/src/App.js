import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import BookList from './components/book/BookList';
import AddBook from './components/book/AddBook';

const WithNavbar = ({ children }) => {

  return (
    <>
      <Navbar />
      {children}
    </>
  )

}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/books" />} />
        <Route path="/books" element={<WithNavbar><BookList /></WithNavbar>} />
        <Route path="/books/add" element={<WithNavbar><AddBook /></WithNavbar>} />
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
