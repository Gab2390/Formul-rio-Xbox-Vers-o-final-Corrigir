import React, { useState } from 'react';
import ProdutoCard from '../components/ProdutoCard';

export function App() {
  const [adicionado, setAdicionado] = useState(false);

  const handleToggleCarrinho = () => {
    setAdicionado((prev) => !prev);
  };

  return (
    <div style={{ padding: '32px', display: 'flex', justifyContent: 'center', background: '#f8f9fa', minHeight: '100vh' }}>
      <ProdutoCard
        nome="Smartphone Exemplo"
        preco="1.999,00"
        adicionado={adicionado}
        onToggleCarrinho={handleToggleCarrinho}
      />
    </div>
  );
}

export default App;