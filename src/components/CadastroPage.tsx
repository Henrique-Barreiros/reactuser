import React, { useState } from 'react';
import './styles.css';

const CadastroPage: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1 className="text">Página Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome" className="text">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="text">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="senha" className="text">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmSenha" className="text">Confirmação de Senha:</label>
          <input
            type="password"
            id="confirmSenha"
            value={confirmSenha}
            onChange={(e) => setConfirmSenha(e.target.value)}
            required
          />
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroPage;
