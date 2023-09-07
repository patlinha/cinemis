export function renderizarFiltroFilmes() {

  const filtroExibicoesFuturas = `
        <div class="div-filtroFilmes">
          <input
            id="exibir-futuras"
            type="radio"
            name="filtro"
            class="format-input-filtrosFilme checked"
          />
          <label
          for="exibir-futuras"
          class="format-label-filtrosFilme checked">
            Exibições Futuras
          </label>
        </div>
    `

    const filtroHistoricoExibicoes = `
    <div class="div-filtroFilmes">
      <input
        id="exibir-sessoes-passadas"
        type="radio"
        name="filtro"
        class="format-input-filtrosFilme"
      />
      <label
        for="exibir-historico"
        class="format-label-filtrosFilme"
        >Histórico
      </label>
    </div>
    `
    const filtroFavoritos = `
      <div class="div-filtroFilmes">
        <input
          id="exibir-favoritas"
          type="radio"
          name="filtro"
          class="format-input-filtrosFilme"
        />
        <label
          for="exibir-favoritos"
          class="format-label-filtrosFilme"
          >Favoritos
        </label>
        
        </div>
        `

    document.getElementById('filtros').innerHTML += filtroExibicoesFuturas;
    document.getElementById('filtros').innerHTML += filtroHistoricoExibicoes;
    document.getElementById('filtros').innerHTML += filtroFavoritos;
}