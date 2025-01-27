const express = require('express')
const users = require('./MOCK_DATA.json')
const fs = require('fs')
const app = express()

app.use(express.urlencoded({ extended: false }));

app.get('/users', (req, res) => {

    const html = `
        <ul>
            ${users.map(user => `<li>${user.first_name}</li> <li>${user.id}</li>`).join('')}
        </ul>
    `;
    res.send(html);
})

app.get('/api/user', (req, res) => {
    res.json(users);
})

// find the user based on their id 
app.get('/api/user/:id', (req, res) => {
    const id = Number(req.params.id); // Convert the id from string to number
    const user = users.find(user => user.id === id); // Find user by ID

    if (user) {
        res.json(user); // Send the user as JSON if found
    } else {
        res.status(404).json({ message: "User not found" }); // Handle case where user is not found
    }
});

//find user by their job id 
app.get('/api/user/:job', (req, res) => {
    const jobtitle = req.params.job;
    console.log('Received job title:', jobtitle);
    const user = users.find(user => user['job-tile'] === jobtitle);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// we have to add one middleware to see the upcoming request form the server so we use middleware 
// that i added in the line number 9 
app.post('/api/user', (req, res) => {
    // what ever the data send by the user that is availble in the req.body
    const body = req.body;
    console.log("Body", body);
    if (!body.first_name || !body.last_name || !body.email || !body.gender || body.job - tile) {
        res.status(404).json({ message: 'enter all the details' });
    }
    users.push({ ...body, id: users.length + 1 })
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        if (err) throw err;
        console.log('User has been saved!');
        res.json({ status: 'User saved successfully', id: users.length });
    });
})


// delete the user by id 


app.delete('/api/user/:id', (req, res) => {
    const id = Number(req.params.id); // Get user ID from URL parameter

    // Read the MOCK_DATA.json file
    fs.readFile('./MOCK_DATA.json', 'utf-8', (err, data) => {
        if (err) return res.status(500).json({ message: 'Error reading file' });
        const users = JSON.parse(data); // Parse the JSON data
        const updatedUsers = users.filter(user => user.id !== id); // so those who not equal to given id  that reamin in data and thoes data equal to given id filter out 

        // If no users were found after filtering, return not found
        // if no user is filter out it menns updated user and old user length will be same so it mens user not found 
        if (users.length === updatedUsers.length) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Write the updated data back to the file
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(updatedUsers, null, 2), (err) => {
            if (err) return res.status(500).json({ message: 'Error writing to file' });
            res.status(200).json({ message: 'User deleted successfully' });
        });
    });
});





//creating the server 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})