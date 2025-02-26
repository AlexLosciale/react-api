import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/blog")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(error => console.error("Errore nel recupero dei post:", error));
  }, []);

  return (
    <>
      <h1>Lista dei Post</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {data.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
