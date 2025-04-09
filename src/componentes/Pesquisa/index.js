import styled from "styled-components";
import Input from "../Input";
import { useState } from "react";
import { livros } from "../Pesquisa/dadosPesquisa"

const PesquisaContainer = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
`

const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const Subtitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`
const ResultadoPesquisaContainer = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: fill;
        margin: 10px auto;
        margin: 10px 0;
        padding: 10px;
        background-color: #FFF;
        border-radius: 10px;
        width: 300px;
        height: 80px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        &:hover {
                transform: scale(1.05);
                box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
        }
        img {
                width: 50px;
                height: 50px;
                margin-right: 10px;
        }
        h4 {
                font-size: 16px;
                font-weight: 500;
                color: #002F52;
        }
        @media (max-width: 768px) {
                width: 90%;
                margin: 10px auto;
        }
        
        `

function Pesquisa() {
    const [ livrosPesquisados, setLivrosPesquisados ] = useState([])

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado) )
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            { livrosPesquisados.map(livro => (
                <ResultadoPesquisaContainer>
                    <img src={livro.src} alt={livro.nome} />
                    <h4>{livro.nome}</h4>
                </ResultadoPesquisaContainer>
            ))}
        </PesquisaContainer>
    )
}

export default Pesquisa