
// Declaração das variáveis para os elementos HTML relevantes
const searchInput = document.getElementById('search-input'); // Entrada de pesquisa
const resultArtist = document.getElementById("result-artist"); // Resultado de artistas
const resultPlaylist = document.getElementById('result-playlists'); // Resultado de playlists

// Função para fazer uma solicitação à API com o termo de pesquisa
function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`; // URL da API
    fetch(url) // Realiza uma solicitação GET para a URL
        .then((response) => response.json()) // Converte a resposta para JSON
        .then((result) => displayResults(result)); // Chama a função displayResults com o resultado
}

// Função para exibir os resultados na página
function displayResults(result) {
    resultPlaylist.classList.add("hidden"); // Oculta a lista de reprodução
    const artistName = document.getElementById('artist-name'); // Nome do artista
    const artistImage = document.getElementById('artist-img'); // Imagem do artista

    result.forEach(element => { // Para cada elemento no resultado
        artistName.innerText = element.name; // Define o nome do artista
        artistImage.src = element.urlImg; // Define a URL da imagem do artista
    });

    resultArtist.classList.remove('hidden'); // Exibe o resultado do artista
}

// Adiciona um ouvinte de evento para entrada de texto
document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase(); // Obtém o termo de pesquisa em minúsculas
    if (searchTerm === '') { // Se o termo de pesquisa estiver vazio
        resultPlaylist.classList.add('hidden'); // Oculta a lista de reprodução
        resultArtist.classList.remove('hidden'); // Exibe o resultado do artista
        return; // Sai da função
    }
    
    requestApi(searchTerm); // Chama a função para solicitar à API com o termo de pesquisa

});

