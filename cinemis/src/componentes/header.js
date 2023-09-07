export function renderizarHeader() {
    const headerHtml = `
    <div class="header-imagem-e-textoLogo">
        <img class="img-header" src="../../assets/logo/logoMIS.png" alt="logo MIS Campinas"/>
        <p class="header-texto-logo">MIS Campinas:<br>Rua Regente Feijó, 859<br>Centro - Campinas/SP</p>
    </div>
    <div id="header-icones">
        <button id="fale-conosco"><i class="fa-solid fa-envelope"></i></button>
        <button class="mr-2"><i class="fa-solid fa-user"></i></button>
        <button class="mr-2"><i class="fa-solid fa-right-from-bracket"></i></button>
    </div>
    `
  document.getElementById("header-html").innerHTML += headerHtml;
}