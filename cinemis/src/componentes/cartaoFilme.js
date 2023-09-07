import { catalogo } from './catalogoFilmes.js';
import { favoritarFilmes } from '../filtroFilmes/favoritarFilmes.js';

export function renderizarCatalogoFilmes(){
  const dataAtual = Date.parse("05/09/2023");
  console.log(dataAtual)

  for (const filmeCatalogo of catalogo) {
    const dataFilme = Date.parse(filmeCatalogo.data);
  console.log(dataFilme)
    // const comparacaoDataAtualComDataFilme = dataFilme < dataAtual;

    const cartaoFilme = `
      <div id="card-filme-${filmeCatalogo.id}" class="sessao">
        <img id="img-filme" ${filmeCatalogo.imagem}
        alt="Filme do Circuito Cineclubista de Filmes."
        />
        <div class="card--titulo-data-hora">
          <div class="data-horario">
            <p>${filmeCatalogo.data}</p>
            <p class="dia-semana">SÁB</p>
            <p> ${filmeCatalogo.horario}</p>
          </div>
          <p class="titulo-filme">${filmeCatalogo.titulo}</p>
        </div>
        <div class="info-geral">
          <p>Direção: ${filmeCatalogo.direcao}</p>
          <p>Ciclo: ${filmeCatalogo.ciclo}</p>
          <p>Curadoria: ${filmeCatalogo.curadoria}</p>
          <p>Ano: ${filmeCatalogo.ano}</p>
          <button id="btn-favoritar-${filmeCatalogo.id}">
            <i class="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
      `;

      //adicionando o conteúdo do card-filme ao container-filme
      const elementoContainerFilme = document.getElementById("container-filme");
      elementoContainerFilme.innerHTML += cartaoFilme;

      const elementoCardList = document.getElementById(`card-filme-${filmeCatalogo.id}`);

      //adicionando classe sessao-passada/futura a cada um dos card-filme
      if(dataFilme < dataAtual) {
        elementoCardList.classList.add("sessao-passada");
      } else {
        elementoCardList.classList.add("sessao-futura");
      }
       console.log(elementoCardList.classList);

       document
       .getElementById(`btn-favoritar-${filmeCatalogo.id}`)
       .addEventListener("click", () => favoritarFilmes(filmeCatalogo.id));      
  }
}




