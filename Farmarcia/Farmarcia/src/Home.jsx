import React from 'react';
import Header from './Header';
import './Home.css'

function Home(){


    return (
        <div>
            <div>
            <Header />

            </div>

        <main style={{ padding: '20px' }}>
            <h2>Bem-vindo à nossa nova farmácia!</h2>
            <p>Estamos animados para anunciar que a Farmácia Nova Direção mudou de endereço e ganhou uma nova marca!</p>
            <p>Venha nos visitar e aproveite nossa inauguração!</p>
            <p><strong>Data:</strong> 01 de Novembro de 2024</p>
            <p><strong>Local:</strong> Rua Exemplo, 123</p>
            <p>Contamos com você para celebrar esta nova fase!</p>
        </main>

        </div>
    );
};

export default Home;
