//APP1

import { useState, useEffect } from 'react';

const Partie1 = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="posts-container">
      {posts.map((post) => (
        <div className="post-card" key={post.id}>
          <h2 className="post-title">{post.title}</h2>
          <p className="post-body">{post.body}</p>
          <div className="button">
            <div className="delete-btn">Delete</div>
          </div>
        </div>
      ))}
    </div>
  );
};
//APP2
/*
import { useState, useEffect } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="users-container">
      {users.map((user) => (
        <div className="user-card" key={user.id}>
          <h2 className="user-name">{user.name}</h2>
          <p className="user-email">{user.email}</p>
          <p className="user-phone">{user.phone}</p>
        </div>
      ))}
    </div>
  );
};*/
//APP3
/*
import { useState, useEffect } from 'react';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="products-container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <h2 className="product-title">{product.title}</h2>
          <p className="product-price">{product.price}</p>
          <p className="product-description">{product.description}</p>
        </div>
      ))}
    </div>
  );
};*/
export default Partie1;