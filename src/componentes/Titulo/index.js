import styled from "styled-components";

export const Titulo = styled.h2`
  color: ${(props) => props.cor || "rgb(0, 0, 0)"};
  font-size: ${(props) => props.tamanhoFonte || "36px"};
  text-align: ${(props) => props.alinhamento || "center"};
  width: 100%;
`;
