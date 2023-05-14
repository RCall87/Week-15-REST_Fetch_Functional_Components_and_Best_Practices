import React, { useState, useEffect } from "react";

function UpdateItem() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`http://localhost:3001/items/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        description
      })
    })
      .then(response => response.json())
      .then(() => {
        setId("");
        setName("");
        setDescription("");
      })
      .catch(error => console.error(error));
  }

  useEffect(() => {
    // Fetch the item to update
    fetch("http://localhost:3001/items/1")
      .then(response => response.json())
      .then(data => {
        setId(data.id);
        setName(data.name);
        setDescription(data.description);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Update Item</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            name="id"
            value={id}
            onChange={event => setId(event.target.value)}
            disabled
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={event => setDescription(event.target.value)}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateItem;
