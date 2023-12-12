import React, { useState } from "react";

function ToyForm({ onAddToy }) {

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    image: "",
    likes: 0
  })


  function handleSubmit(e) {
    e.preventDefault();
    const newToy = {
      id: formData.id,
      name: formData.name,
      image: formData.image,
      likes: formData.likes
    }
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToy)
    })
      .then(r => r.json())
      .then(newItem => {
        onAddToy(newItem)
        setFormData({
          name: "",
          image: "",
        })
      })
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value, })
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
