const express = require('express')
const users = require('./MOCK_DATA.json')
const app = express()

app.get('/users', (req, res) => {
    return res.json(users)
})

app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id))
    if (!user) return res.status(404).send('User not found')
    return res.json(user)
})

//using this i can feth the user by their id
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id))
    if (!user) return res.status(404).send('User not found')
    res.send(`<h1>User: ${JSON.stringify(user.first_name)}</h1>
    <p>Age: ${user.gender}</p>
    <p>Email: ${user.email}</p>`)
})

app.post('/users/:id', (req, res) => {

    //in this route we create a new user with the firstname last name , email ,gender, job



})

/*
using this i can delete the existing user if they are available

*/
app.delete('/users/:id', (req, res) => {
    const index = users.findIndex(u => u.id === parseInt(req.params.id))
    if (index === -1) return res.status(404).send('User not found')
    users.splice(index, 1)
    res.send(`User with id ${req.params.id} has been deleted`)
})

app.use(express.json());

//using this i can update the existing users
app.patch('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id))
    if (!user) return res.status(404).send('User not found')

    if (req.body.first_name) user.first_name = req.body.first_name
    if (req.body.last_name) user.last_name = req.body.last_name
    if (req.body.email) user.email = req.body.email
    if (req.body.gender) user.gender = req.body.gender
    if (req.body.job) user.job = req.body.job

    res.send(`User with id ${req.params.id} has been updated`)
})


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
