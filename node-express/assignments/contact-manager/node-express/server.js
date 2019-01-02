const express = require('express')
const fs = require('fs')
const app = express()
port = 3001

app.use(express.json())
app.get("/", function (req, res) {
    res.send("Welcome to our contacts page")
})

let contacts = []

app.get("/contacts", function (req, res) {

    fs.readFile('contacts.json', function (err, data) {
        if (err) {
            return console.error(err)
        }
        contacts = JSON.parse(data.toString())
        res.send(contacts)

    })
})

app.get('/contacts/:id', function (req, res) {
    fs.readFile('contacts.json', function (err, data) {
        if (err) {
            return console.error(err)
        }
        contacts = JSON.parse(data.toString())
        let contact = contacts.find(function (contact) {
            return contact.id == req.params.id
        })
        if (contact) {
            res.send(contact)
        }
        else {
            res.send({})
        }
    })

})
app.post('/contacts', function (req, res) {
    fs.readFile('contacts.json', function (err, data) {
        if (err) {
            return console.error(err)
        }
        contacts = JSON.parse(data.toString())
        const contact = req.body
        contact.createdAt = new Date()
        contacts.push(contact)
        console.log(contacts)
        res.send({
            contact: contact,
            notice: "added successfully"
        })
        fs.writeFile('contacts.json', JSON.stringify(contacts), function (err) {
            if (err) {
                return console.error(err);
            }

        });
    })
})

app.put('/contacts/:id', function (req, res) {

    fs.readFile('contacts.json', function (err, data) {
        if (err) {
            return console.error(err)
        }
        contacts = JSON.parse(data.toString())

        const contactData = req.body

        const contact = contacts.find(function (contact) {
            return contact.id == req.params.id
        })
        if (contact) {
            contact.name = contactData.name
            contact.contact = contactData.contact
            res.send({
                contact: contact,
                notice: "updated successfully"
            })
            fs.writeFile('contacts.json', JSON.stringify(contacts), function (err) {
                if (err) {
                    return console.error(err);
                }

            });

        }
        else {
            res.send({})
        }


    })
})






app.listen(port, function () {
    console.log("Server up and running.... listening to port ", port)
})