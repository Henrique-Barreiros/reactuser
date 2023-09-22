import React from 'react';

interface TableProps {
  data: { id: number; name: string; email: string }[];
  onRemove: (id: number) => void;
  onUpdate: (id: number) => void; 
}

const Table: React.FC<TableProps> = ({ data, onRemove, onUpdate }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>
              <button onClick={() => onRemove(item.id)}>Remove</button>
              <button onClick={() => onUpdate(item.id)}>Update</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
