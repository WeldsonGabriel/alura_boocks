import styled from "styled-components";
import Input from "../Input";
import { useState } from "react";
import { livros } from "../Pesquisa/dadosPesquisa";

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;
const ResultadoPesquisaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Alinha os itens à esquerda */
  gap: 20px; /* Espaçamento entre os itens */
  margin-top: 50px; /* Distância maior da seção acima */
  margin-bottom: 50px; /* Distância da seção abaixo */
  padding: 10px;
  overflow-x: auto; /* Permite rolagem horizontal */
  scroll-behavior: smooth; /* Rolagem suave */
  width: 100%;
  height: 150px; /* Altura fixa para o carrossel */
  cursor: pointer;
  white-space: nowrap; /* Impede quebra de linha */

  &::-webkit-scrollbar {
    height: 8px; /* Altura da barra de rolagem */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #326589; /* Cor da barra de rolagem */
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #002f52; /* Cor do fundo da barra */
  }

  div {
    display: inline-block; /* Garante que os itens fiquem lado a lado */
    text-align: center;
  }

  img {
    width: 100px; /* Tamanho fixo das imagens */
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s ease;
  }

  img:hover {
    transform: scale(1.1); /* Efeito de zoom ao passar o mouse */
  }

  h4 {
    font-size: 14px;
    color: rgb(10, 11, 12);
    font-weight: 500;
    text-align: center;
    margin-top: 10px;
  }
`;

function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <Input
        placeholder="Escreva sua próxima leitura"
        onBlur={(evento) => {
          const textoDigitado = evento.target.value.trim(); // Remove espaços extras
          if (textoDigitado === "") {
            setLivrosPesquisados([]); // Retorna vazio se o texto estiver vazio
            return;
          }
          const resultadoPesquisa = livros.filter((livro) =>
            livro.nome.includes(textoDigitado)
          );
          setLivrosPesquisados(resultadoPesquisa);
        }}
      />
      <ResultadoPesquisaContainer>
        {livrosPesquisados.map((livro) => (
          <div key={livro.nome}>
            <img src={livro.src} alt={livro.nome} />
            <h4>{livro.nome}</h4>
          </div>
        ))}
      </ResultadoPesquisaContainer>
    </PesquisaContainer>
  );
}

export default Pesquisa;
