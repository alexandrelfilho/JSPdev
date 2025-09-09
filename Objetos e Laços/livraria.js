/**
 * Este script implementa um sistema simples para gerenciar o estoque de uma livraria.
 * Ele permite adicionar, remover, atualizar e listar livros.
 */

// Passo 1: Definir o array de objetos para armazenar os livros no estoque.
// Cada objeto representa um livro com título, autor e quantidade.
const estoque = [];

// ---
// Passo 2: Funções para gerenciar o estoque.
// ---

/**
 * Adiciona um novo livro ao estoque.
 * Verifica se o livro já existe e, caso não exista, o adiciona.
 * @param {string} titulo - O título do livro.
 * @param {string} autor - O autor do livro.
 * @param {number} quantidade - A quantidade de livros a ser adicionada.
 */
function adicionarLivro(titulo, autor, quantidade) {
  // Passo 3: Usar um condicional para verificar se o livro já existe.
  const livroExistente = estoque.find(livro => livro.titulo === titulo);

  if (livroExistente) {
    console.log(`❌ Erro: O livro "${titulo}" já existe no estoque.`);
  } else {
    estoque.push({
      titulo,
      autor,
      quantidade
    });
    console.log(`✅ Livro "${titulo}" adicionado com sucesso ao estoque.`);
  }
}

/**
 * Remove um livro do estoque pelo seu título.
 * Verifica se o livro existe antes de tentar removê-lo.
 * @param {string} titulo - O título do livro a ser removido.
 */
function removerLivro(titulo) {
  // Encontrar o índice do livro no array.
  const index = estoque.findIndex(livro => livro.titulo === titulo);

  if (index !== -1) {
    // Se o livro for encontrado (index é diferente de -1), remove-o.
    estoque.splice(index, 1);
    console.log(`✅ Livro "${titulo}" removido com sucesso do estoque.`);
  } else {
    console.log(`❌ Erro: O livro "${titulo}" não foi encontrado no estoque.`);
  }
}

/**
 * Atualiza a quantidade de um livro existente no estoque.
 * Verifica se o livro existe antes de atualizar sua quantidade.
 * @param {string} titulo - O título do livro para atualizar.
 * @param {number} novaQuantidade - A nova quantidade do livro.
 */
function atualizarQuantidade(titulo, novaQuantidade) {
  const livroExistente = estoque.find(livro => livro.titulo === titulo);

  if (livroExistente) {
    livroExistente.quantidade = novaQuantidade;
    console.log(`✅ Quantidade do livro "${titulo}" atualizada para ${novaQuantidade}.`);
  } else {
    console.log(`❌ Erro: O livro "${titulo}" não foi encontrado no estoque.`);
  }
}

/**
 * Lista todos os livros atualmente no estoque.
 * Usa um laço de repetição para exibir os detalhes de cada livro.
 */
function listarLivros() {
  console.log("\n--- Listagem de Livros no Estoque ---");
  if (estoque.length === 0) {
    console.log("O estoque está vazio.");
  } else {
    // Passo 4: Usar um laço de repetição para iterar sobre o array.
    for (const livro of estoque) {
      console.log(`Título: "${livro.titulo}", Autor: ${livro.autor}, Quantidade: ${livro.quantidade}`);
    }
  }
  console.log("--------------------------------------\n");
}

// ---
// Exemplos de uso das funções para testar o sistema.
// ---

// Adicionar alguns livros ao estoque.
adicionarLivro("1984", "George Orwell", 20);
adicionarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", 50);
adicionarLivro("Cem Anos de Solidão", "Gabriel García Márquez", 15);

// Tentar adicionar um livro que já existe.
adicionarLivro("1984", "George Orwell", 10);

// Listar os livros atuais.
listarLivros();

// Atualizar a quantidade de um livro existente.
atualizarQuantidade("O Senhor dos Anéis", 45);

// Tentar atualizar a quantidade de um livro que não existe.
atualizarQuantidade("O Pequeno Príncipe", 5);

// Listar os livros novamente para ver a atualização.
listarLivros();

// Remover um livro do estoque.
removerLivro("Cem Anos de Solidão");

// Tentar remover um livro que não existe.
removerLivro("Harry Potter");

// Listar os livros uma última vez para ver o estado final do estoque.
listarLivros();