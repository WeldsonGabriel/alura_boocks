import styled from "styled-components";
import { Titulo } from "../Titulo/index";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
`;
const Subtitulo = styled.h3`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 8px;
  color: #326589;
`;

const Descricao = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
  color: rgb(15, 14, 14);
`;
const Imagem = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 16px;
`;
const Botao = styled.button`
  background-color: #326589;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #002f52;
  }
`;

function CardRecomenda({ titulo, subtitulo, descricao, img, botao }) {
  return (
    <CardContainer>
      <Titulo>{titulo}</Titulo>
      <Subtitulo>{subtitulo}</Subtitulo>
      <Descricao>{descricao}</Descricao>
      <Imagem src={img} alt={titulo} />
      <Botao>{botao}</Botao>
    </CardContainer>
  );
}

export default CardRecomenda;
