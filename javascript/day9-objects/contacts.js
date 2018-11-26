let contact = {
    name: 'jehu',
    email: 'jehuamanna@gmail.com',
    subject: 'Hello there',
    phoneNo: '9008141866',
    message: 'I want to join DCT Academy',
    readMessage: function() {
        return `You got a new mail from '${this.name}' with a subject '${this.subject}'. And the message is "${this.message}".`
    }
}

// convert it to internal function (done)
console.log(contact.readMessage())