const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const path = require('path')
const express = require('express')


const middlewares = jsonServer.defaults()


server.use('/db', middlewares, router)
server.use(express.static(path.join(__dirname, 'build')))

const port = process.env.PORT || 3000

server.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`)
})