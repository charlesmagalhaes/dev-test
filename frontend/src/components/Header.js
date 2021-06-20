import React from 'react'

export default function Header({children = 'falta o conteudo do header'}) {
  return (
    <Header>
      <div>
        <h1>
           {children}
        </h1>
      </div>
    </Header>
  );
}
