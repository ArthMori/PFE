const fs = require('fs');

const meuLivroFavorito = {
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    ano: 1943,
    statusLeitura: "Lido"
};

console.log("Objeto de livro criado:");
console.log(meuLivroFavorito);

const meuLivroFavoritoJSON = JSON.stringify(meuLivroFavorito, null, 2);

console.log("\nObjeto de livro convertido para JSON:");
console.log(meuLivroFavoritoJSON);

fs.writeFile('meuLivroFavorito.json', meuLivroFavoritoJSON, (err) => {
    if (err) {
        console.error("Erro ao salvar o arquivo JSON:", err);
    } else {
        console.log("\nArquivo JSON salvo com sucesso como 'meuLivroFavorito.json'.");
    }
});
