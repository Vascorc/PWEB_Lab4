const express = require('express');
const app = express();
const port = 3000;

//1
const appName = 'teste123';
const userName = 'Vasco, Laia, Basilio';

//2
let minhas_notas = [20, 10, 15, 17];

//3
app.use(express.json()); 

// a) Rota GET para retornar todas as notas
app.get('/', (req, res) => {
    res.status(200).send(minhas_notas);
});

//b)
// http://localhost:3000/nota/2
//: a seguir a barra indicam a variavel que vai guradar a posicao
app.get('/nota/:posicao', (req, res) => {
    const posicao = parseInt(req.params.posicao);
    const nota = minhas_notas[posicao];

    if (nota === undefined) {
        return res.status(404).send('Nota não encontrada.');
    }

    res.status(200).send(`A nota na posição ${posicao} é: ${nota}`);
});


//3 c. Método POST para adicionar uma nova nota ao array
app.post('/', (req, res) => {
    const novaNota = req.body.nota;  // Pega o valor enviado no body com a chave 'nota'
    
    if (novaNota === undefined) {
        return res.status(400).send('Nota não fornecida. Por favor, envie uma nota no corpo da requisição.');
    }

    // converte a nota para inteiro
    const novaNotaInteiro = parseInt(novaNota);
    if (isNaN(novaNotaInteiro)) {
        return res.status(400).send('Nota inválida. Por favor, envie um número válido.');
    }

    minhas_notas.push(novaNotaInteiro);  // Adiciona a nova nota ao array
    res.status(200).send(`Nota ${novaNotaInteiro} adicionada com sucesso! Lista atual: ${minhas_notas}`);
});

//d) Método POST com um parâmetro para adicionar o valor enviado no parâmetro
app.post('/adicionar/:nota', (req, res) => {
    const novaNota = parseInt(req.params.nota);  // Pega o valor enviado no parâmetro da URL

    if (isNaN(novaNota)) {
        return res.status(400).send('Nota inválida. Por favor, envie um número válido.');
    }

    minhas_notas.push(novaNota);  // Adiciona a nova nota ao array
    res.status(200).send(`Nota ${novaNota} adicionada com sucesso! Lista atual: ${minhas_notas}`);
});

//e. Método PATCH com um parâmetro para atualizar a nota na posição enviada no parâmetro
app.patch('/nota/:posicao', (req, res) => {
    const posicao = parseInt(req.params.posicao);  // Pega a posição enviada no parâmetro
    const novaNota = req.body.nota;  // Pega o valor enviado no body com a chave 'nota'

    if (novaNota === undefined) {
        return res.status(400).send('Nota não fornecida. Por favor, envie uma nota no corpo da requisição.');
    }

    if (isNaN(novaNota)) {
        return res.status(400).send('Nota inválida. Por favor, envie um número válido.');
    }

    if (posicao < 0 || posicao >= minhas_notas.length) {
        return res.status(404).send('Posição inválida.');
    }

    minhas_notas[posicao] = novaNota;  // Atualiza a nota na posição indicada
    res.status(200).send(`Nota na posição ${posicao} atualizada para ${novaNota}. Lista atual: ${minhas_notas}`);
});

//f. Método DELETE com um parâmetro para eliminar a nota na posição enviada no parâmetro
app.delete('/nota/:posicao', (req, res) => {
    const posicao = parseInt(req.params.posicao);  // Pega a posição enviada no parâmetro

    if (posicao < 0 || posicao >= minhas_notas.length) {
        return res.status(404).send('Posição inválida.');
    }

    const notaRemovida = minhas_notas.splice(posicao, 1);  // Remove a nota na posição indicada
    res.status(200).send(`Nota ${notaRemovida} removida com sucesso! Lista atual: ${minhas_notas}`);
});

//g. Método DELETE na raiz para eliminar todas as notas
app.delete('/', (req, res) => {
    minhas_notas = [];  // Limpa todas as notas
    res.status(200).send('Todas as notas foram removidas com sucesso!');
});



// Inicia o servidor
app.listen(port, () => {
    console.log(`${appName} está a funcionar! \nIniciado por: ${userName} \nAceda em http://localhost:3000`);
});
