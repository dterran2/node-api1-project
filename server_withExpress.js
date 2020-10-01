const express = require('express')
const db = require('./database.js')
const hostname = '192.168.0.31';
const port = 3000;

const server = express()

server.use(express.json())


server.post(`/users`, (req, res) => {
    const newUser = db.createUser({
        name: req.body.name,
        bio: req.body.bio,
    })
    if(newUser) {
        res.status(201).json(newUser)
    } else {
        res.status(500).json({
            message: 'The users information could not be retrieved.'
        })
    }
})



server.get('/users', (req, res) => {
    const users = db.getUsers()

    if(users) {
        res.json(users)
    } else {
        res.status(500).json({
            message: 'The users information could not be retrieved.'
        })
    }
    

})

server.get(`/users/:id`, (req, res) => {
    const id = req.params.id
    const user = db.getUserById(id)
    if (user) {
        res.json(user)
    } else if (err) {
        res.status(404).json({
            message: "The user with the specified ID does not exist.",
        })
    } else {
        res.status(500).json({
            message: 'The users information could not be retrieved.'
        })
    }
    
})

server.put(`/users/:id`, (req, res) => {
    const id = req.params.id
    const updateUser = db.updateUser(id)
    
    if(user) {
        const updateUser = db.updateUser(id, {
            name: req.body.name,
            bio: req.body.bio,
        })
        res.json(updateUser)
        
    } else {
        res.status(500).json({
            message: 'The users information could not be retrieved.'
        })
    }
})
server.delete(`/users/:id`, (req, res) => {
    const id = req.params.id
    const user = db.getUserById(id)
    if(user) {
        db.deleteUser(id)
        res.status(204).json({

        })
    } else if (err) {
        res.status(404).json({
            message: "The user with the specified ID does not exist.",
        })
    } else {
        res.status(500).json({
            message: 'The users information could not be retrieved.'
        })
    }

})

server.listen(port, hostname, () => {
    console.log(`server listening at http://${hostname}:${port}/`);
});

