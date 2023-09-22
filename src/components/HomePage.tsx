import React, { useEffect, useState } from 'react';
import Table from './Table';
import { useNavigate } from 'react-router-dom';

type UserData = {
  id: number;
  name: string;
  email: string;
};

const HomePage: React.FC = () => {
  const [data, setData] = useState<UserData[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/get')
      .then((response) => response.json())
      .then((responseData: UserData[]) => {
        setData(responseData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleRemove = (idToRemove: number) => {
    fetch(`http://localhost:5000/remove/${idToRemove}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          const updatedData = data.filter((item) => item.id !== idToRemove);
          setData(updatedData);
        } else {
          console.error('Failed to remove item');
        }
      })
      .catch((error) => {
        console.error('Error removing item:', error);
      });
  };

  const handleUpdate = (idToUpdate: number) => {
    setSelectedId(idToUpdate);
    navigate(`/update/${idToUpdate}`);
  };

  return (
    <div>
      <h1 className="text">Usuarios</h1>
      <Table data={data} onRemove={handleRemove} onUpdate={handleUpdate} />
    </div>
  );
};

export default HomePage;
