import React from 'react'

export default function Main({children = 'conteudo do main'}) {
  return (
      <main>
        <div>
          <h2>{children}</h2>
        </div>
      </main>
  );
}
