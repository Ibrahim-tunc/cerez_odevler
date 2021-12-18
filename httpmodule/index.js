import http from 'http'
const PORT = 5000

const server = http.createServer((req, res) => {
    

    const url = req.url

    console.log(`${url} sayfasında bulunuluyor`)

    if (url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>INDEX SAYFASI</h1>");
    } else if (url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>HAKKIMDA SAYFASI</h1>");
    }
    else if (url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>İletişim SAYFASI</h1>");
    }
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h1>404 SAYFA BULUNAMADI</h1>");
    }

    res.end()
})

server.listen(PORT , () => {
    console.log(`sunucu ${PORT} portu ile başlatılıyor.`)
})

