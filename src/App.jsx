import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/blog/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setData(data.filter((post) => post.id !== id));
      })
  }

  useEffect(() => {
    fetch("http://localhost:3000/blog")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(error => console.error("Errore nel recupero dei post:", error));
  }, []);

  return (
    <>
      <h1>Lista dei Post</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Content</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.content}</td>
              <td>
                <button onClick={() => handleDelete(post.id)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
