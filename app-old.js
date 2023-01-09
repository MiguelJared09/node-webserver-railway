import http from 'http';

const server = http.createServer((req, res) => {
    console.log(req);
    res.writeHead(200, {'Content-Type': 'application/json'});

    const persona = {
        id: 1,
        nombre: 'Fernando'
    }

    res.write(JSON.stringify(persona));
    res.end();
});

server.listen(8080);

console.log('Escuchando en el puerto 8080');