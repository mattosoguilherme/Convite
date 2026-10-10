const http = require('http');
const fs = require('fs');
const path = require('path');

const PORTA = 3000;

const servidor = http.createServer((req, res) => {
  fs.readFile(path.join(__dirname, 'convite.html'), (erro, conteudo) => {
    if (erro) {
      res.writeHead(500);
      return res.end('Erro ao carregar a página');
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(conteudo);
  });
});

servidor.listen(PORTA, () => {
  console.log(`Rodando em http://localhost:${PORTA}`);
});