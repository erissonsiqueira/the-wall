import {useState} from 'react';

function Home(){
    return(
        <div>
            <h1>Teste do Contador M</h1>
            <Contador/>
        </div>
    )
}

function Contador(){
    const [contador, setContador] = useState(1);

    function adicionarContador(){
        setContador(contador + 1);
    }

    return (
        <div>
        <div>{contador}</div>
        <button onClick={adicionarContador}>Adiciona</button>
        </div>
    )
}

export default Home
