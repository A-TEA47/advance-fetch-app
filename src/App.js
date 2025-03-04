import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Users from "./components/Users";
import Posts from "./components/Posts";
import UserPosts from "./components/UserPosts";
import FetchWithRetry from "./components/FetchWithRetry";
import SearchPosts from "./components/SearchPosts"; 
import PaginatedUsers from "./components/PaginatedUsers"; 

import "./styles/global.css"; 
import "./styles/Header.css"; 
import "./styles/Navbar.css"; 
import "./styles/MainPage.css"; 

const MainPage = () => {
  return (
    <div>
      <header className="header">
        <h1>Fetch-API-App</h1>
        <p>Welcome To My React App</p>
      </header>
      <div className="navigation-links">
        <Link to="/users" className="nav-card">Users</Link>
        <Link to="/posts" className="nav-card">Posts</Link>
        <Link to="/user-posts" className="nav-card">User Posts</Link>
        <Link to="/paginated-users" className="nav-card">Paginated Users</Link>
        <Link to="/fetch-retry" className="nav-card">Fetch with Retry</Link>
        <Link to="/search-posts" className="nav-card">Search Posts</Link>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <div className="app">
        <nav className="navbar">
          <div className="logo"></div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/user-posts" element={<UserPosts />} />
          <Route path="/fetch-retry" element={<FetchWithRetry />} />
          <Route path="/search-posts" element={<SearchPosts />} />
          <Route path="/paginated-users" element={<PaginatedUsers />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>

        <footer className="footer">
          <p>© 2024 Atiya Aliya - Fetch Data API APP</p>
        </footer>
      </div>
    </AuthProvider>
  );
};

export default App;
