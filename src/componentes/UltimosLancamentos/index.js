import styled from "styled-components";
import { livros } from "./dadosUltimosLancamentos";
import { Titulo } from "../Titulo/index";
import CardRecomenda from "../CardRecomenda";

const UltimosLancamentosContainer = styled.section`
  background-image: linear-gradient(
    90deg,
    rgb(122, 180, 221) 35%,
    rgb(82, 108, 134) 165%
  );
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;

const NovosLivrosContainer = styled.div`
  display: flex;
  margin-top: 30px;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

function UtimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo cor="#000" tamanhoFonte="36px">
        Últimos Lançamento
      </Titulo>
      <NovosLivrosContainer>
        {livros.map((livro) => (
          <img src={livro.src} />
        ))}
      </NovosLivrosContainer>
      <CardRecomenda
        titulo="Últimos Lançamentos"
        subtitulo="Os livros mais recentes"
        descricao="Crie um bom Habito e transforme sua vida"
        img="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFj84Q8EMfoN2kDPm92YT5XdK4IA30K0yLqBzrs3JFtJcMqn8Y32Bcd7mxrMMY273LMyg_cYYcCBnORag3UujWSAWTHOPLYncdjOHajooSa9MwEz_GDfELFnro4_7sdVqnCAVIvuag3Aem0XsXOLhLyuCkuymnEl0ixS7r6jMUgQsyF2KtdS_T9_JG/s1200/livro-o-poder-do-habito-charles-duhigg.png"
        botao="Saiba Mais"
      />
    </UltimosLancamentosContainer>
  );
}

export default UtimosLancamentos;
