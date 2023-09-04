const catalogo = [
    {
      id: 1,
      titulo: "Ardil 22",
      direcao: "Mike Nichols",
      ciclo: "História do cinema – Ciclo anos 1970: O cinema político pelo mundo e a ascensão dos blockbuster estadunidenses",
      curadoria: "Claudia Bortolato",
      data: "01/09/2023",
      horario: "15:00",
      ano: "1970",
      sinopse: "Assombrado pela morte de um jovem artilheiro, o capitão Yossarian tenta não seguir com o resto das suas missões de bombardeio da II Guerra Mundial, fingindo estar louco. Mas seus comandantes estão mais preocupados com a publicidade e o lucro.",
      imagem: "src=./imagens/filmes/ardil.PNG",
    },
    {
        id: 2,
        titulo: "O ACONTECIMENTO",
        direcao: "Audrey Diwan",
        ciclo: "Cinema & Literatura",
        curadoria: "Ricardo Pereira",
        data: "01/09/2023",
        horario: "19:30",
        ano: "2021",
        sinopse: "Na França dos anos 1960, quando o aborto ainda era ilegal no país europeu, uma jovem trava uma batalha física e emocional para obter acesso ao procedimento, em uma corrida contra o tempo. Baseado no romance homônimo de Annie Ernaux, Prêmio Nobel de Literatura. Com Annamaria Vartolomei.",
        imagem: "src=./imagens/filmes/acontecimento.PNG",
      },
      {
        id: 3,
        titulo: "A GRANDE CHANTAGEM",
        direcao: "Robert Aldrich",
        ciclo: "Ciclo 2023",
        curadoria: "Laerte Ziggiatti",
        data: "02/09/2023",
        horario: "16:00",
        ano: "1955",
        sinopse: "Charles Castle (Jack Palance), é um ator de Hollywood de extremo sucesso, mas que dá mais valor aos seus filmes como negócio do que como arte. Porém, está imerso em uma crise conjugal por conta de sua esposa, Marion (Ida Lupino), idealista, que discorda de seu posicionamento em relação ao estúdio. Ele também, por sua vez, deseja poder recomeçar sua carreira com filmes menos comerciais e mais artísticos. Prêmio de Melhor Direção no Festival de Veneza.",
        imagem: "src=./imagens/filmes/chantagem.PNG",
      },
      {
        id: 4,
        titulo: "A PASSAGEIRA",
        direcao: "Andrzej Munk",
        ciclo: "Pérolas do Cinema",
        curadoria: "Hamilton Rosa Jr.",
        data: "02/09/2023",
        horario: "19:30",
        ano: "1963",
        sinopse: "Uma mulher alemã está em um navio voltando para sua terra natal na Europa. Durante a viagem, vê uma mulher cujo rosto lhe traz lembranças da época do holocausto. Filme importante do mestre polonês, Andrzej Munk (Eroica), que morreu antes de concluir a montagem. Para muitos, uma obra-prima inacabada.",
        imagem: "src=./imagens/filmes/passageira.PNG",
      },
      {
        id: 5,
        titulo: "BRANCA DE NEVE E OS SETE ANÕES",
        direcao: "David Hand, William Cottrell, Wilfred Jackson, Larry Morey, Perce Pearce, Ben Sharpsteen",
        ciclo: "Matinê Infantil",
        curadoria: "Ricardo Pereira e Claudia Bortolato",
        data: "03/09/2023",
        horario: "16:00",
        ano: "1937",
        sinopse: "Criado pelos Irmãos Grimm a narrativa da rainha malvada que tem ciúmes da beleza de Branca de Neve e manda mata-la. Ao descobrir que a princezinha continua viva e morando na floresta com sete amiguinhos, a rainha má, disfarçada de bruxa envenena a jovem e só um beijo pode salvá-la.",
        imagem: "src=./imagens/filmes/brancaNeve.PNG",
      },
      {
        id: 6,
        titulo: "OS EXCÊNTRICOS TENENBAUMS",
        direcao: "Wes Anderson",
        ciclo: "Sessão da Tarde",
        curadoria: "Claudia Bortolato",
        data: "05/09/2023",
        horario: "14:00",
        ano: "2001",
        sinopse: "Mais uma produção do diretor Wes Anderson. Royal Tenenbaum (Gene Hackman) e sua esposa Etheline Tenenbaum (Anjelica Huston) tiveram três filhos, Chas (Ben Stiller), Margot (Gwyneth Paltrow) e Richie (Luke Wilson), e logo depois resolveram se separar. Com o passar dos anos cada um dos filhos demonstrou talentos diferentes, tornando-se todos bem-sucedidos. Chas logo em sua adolescência resolveu investir em bens, demonstrando um dom natural para finanças, enquanto que Margot se tornou uma escritora de sucesso e Richie um tenista profissional de sucesso. Mas toda a história de sucesso dos três jovens Tenenbaums é esquecida quando seu pai resolve reatar os antigos laços e lutar pelo amor de Etheline, que está prestes a se casar com seu contador, Henry Sherman (Danny Glover)",
        imagem: "src=./imagens/filmes/tenenbaums.PNG",
      },
      {
        id: 7,
        titulo: "O QUADRO NEGRO",
        direcao: "Samira Makhmalbaf",
        ciclo: "História do cinema – Ciclo anos 1970: O cinema político pelo mundo e a ascensão dos blockbuster estadunidenses",
        curadoria: "Claudia Bortolato",
        data: "01/09/2023",
        horario: "15:00",
        ano: "1970",
        sinopse: "Durante a violenta guerra entre Irã e Iraque, alguns professores curdos perambulam pelas colinas das fronteiras do Irã com quadros negros às suas costas, em busca de alunos e de aprendizes. Said e Reeboir acabam unidos nesta tarefa, liderando um grupo de crianças as quais precisam transmitir seus conhecimentos e manter vivas. Composto por atores amadores, o elenco conta apenas com um intérprete profissional, Bahman Ghobadi, que vive o professor Reeboir. Os restantes dos participantes eram residentes locais e foram recrutados pela equipe de filmagem por lá mesmo. A cineasta iraniana Samira Makhmalbaf - filha do realizador Mohsen Makhmalbaf ('Salam Cinema' e 'Gabbeh') – tinha apenas 18 anos quando estreou na direção e fez 'A Maçã'. Dois anos depois surge o seu segundo filme: 'O Quadro Negro'. Com ele, Samira foi a mais jovem presença em Cannes 2000, tendo sido galardoada com o Prémio do Júri.",
        imagem: "src=./imagens/filmes/quadroNegro.PNG",
      },
  ];
  
  for (const filmeCatalogo of catalogo) {
    const cartaoFilme = `
      <div id="card-filme">
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
          <button id="btn-favoritar">Favoritar <i class="fa-regular fa-heart"></i></button>
        </div>
      </div>
      `;
  
    document.getElementById("container-filme").innerHTML += cartaoFilme;
  }
  