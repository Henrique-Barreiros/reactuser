import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdatePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    fetch(`http://localhost:5000/get/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFormData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    fetch(`http://localhost:5000/atualiza/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          navigate('/');
        } else {
          console.error('Failed to update item');
        }
      })
      .catch((error) => {
        console.error('Error updating item:', error);
      });
  };

  return (
    <div>
      <h1 className="text">Update Item</h1>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleUpdate}>
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdatePage;
