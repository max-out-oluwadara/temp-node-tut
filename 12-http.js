const http = require('http')

const server = http.createServer((req, res)=>{
    if (req.url === '/') {
        res.write('Welcome to our home page')
        res.end()
    }
    if (req.url ==='/about') {
        res.end(`Here is our short history`)
    }
    res.end(`<h1>Ooops!</h1><p> We cant seeem to find the page<a href ="/"> Back to home</a> </p>`)
})

server.listen(5000)