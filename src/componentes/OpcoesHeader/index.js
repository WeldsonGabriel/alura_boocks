import styled from "styled-components";

const Opcoa = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`;
const Opcoes = styled.ul`
  display: flex;
`;

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

function OpcoesHeader() {
  return (
    <Opcoes>
      {textoOpcoes.map((texto) => (
        <Opcoa>
          <p>{texto}</p>
        </Opcoa>
      ))}
    </Opcoes>
  );
}
export default OpcoesHeader;
