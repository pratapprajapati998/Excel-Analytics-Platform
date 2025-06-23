const express = require('express'); // for server creating
const { default: mongoose } = require('mongoose');

const server = express(); // creating server
mongoose.connect('mongodb+srv://abarnavijaykumar28:abarnaexcel22@cluster0.t2ozefh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
).then(() => {
    console.log('connected to database');
})
    .catch((err) => {
        console.log('error in connecting to database', err);

    })
const port = 5000; // port number
server.get('/', (req, res) => {
    res.send('server is running');
}) // for testing
server.listen(port, () => {
    console.log(`server is running on port:${port}`);

})