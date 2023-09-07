const catalogoFilmes = document.getElementById("container-filme");

function exibirSessoesFuturas() {
  const sessoesFuturas = Array.from(
    catalogoFilmes.getElementsByClassName("sessao-futura")
  );

  const sessoesPassadas = Array.from(
    catalogoFilmes.getElementsByClassName("sessao-passada")
  );

  for (const sessao of sessoesFuturas) {
    sessao.hidden=false;
    console.log(sessao.hidden)

  }

  for (const sessao of sessoesPassadas) {
    sessao.hidden=true;
    console.log(sessao.hidden)
  }
}

function exibirSessoesPassadas() {
  const sessoesFuturas = Array.from(
    catalogoFilmes.getElementsByClassName("sessao-futura")
  );

  const sessoesPassadas = Array.from(
    catalogoFilmes.getElementsByClassName("sessao-passada")
  );

  for (const sessao of sessoesFuturas) {
    sessao.hidden=true;
    console.log(sessao.hidden)
  }

  for (const sessao of sessoesPassadas) {
    sessao.hidden=false;
    console.log(sessao.hidden)
  }
}

function exibirSessoesFavoritas() {
  const sessoesTodas = Array.from(
    catalogoFilmes.getElementsByClassName("sessao")
  );
  
  for (const sessoesTodas of catalogoFilmes) {
    sessao.hidden=true;
    console.log(sessao.hidden)
  }

  const sessoesFavoritas = Array.from(
    catalogoFilmes.getElementsByClassName("favorita")
  );

  for (const sessao of sessoesFavoritas) {
    sessao.hidden=false;
    console.log(sessao.hidden)
  }
}

export function inicializarFiltros() {
  document
    .getElementById("exibir-futuras")
    .addEventListener("click", exibirSessoesFuturas);
  document
    .getElementById("exibir-sessoes-passadas")
    .addEventListener("click", exibirSessoesPassadas);
  document
    .getElementById("exibir-favoritas")
    .addEventListener("click", exibirSessoesFavoritas);
}