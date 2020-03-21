const express = require('express');
const cors = require('cors');

const app = express();
const port = 8002;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.post('/authorize', (req, res) => {
    if (req.body.un === 'a' && req.body.pw === 'a') {
        res.status(200).send('true');
    } else {
        res.status(200).send('false');
    }
});

// For 404
app.use((req, res) => {
    res.status(404).send("Unable to find that!");
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
