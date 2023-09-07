export function favoritarFilmes(idFilme) {
    const filme = document.getElementById(`card-filme-${idFilme}`);
    filme.classList.add('favorita')
    console.log(filme.classList)
}
