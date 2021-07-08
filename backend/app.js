const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Meme = require('./models/memes');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');



mongoose.connect('mongodb://localhost:27017/memes', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});


app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(bodyParser.json());

app.get('/', async (req, res) => {
    res.redirect('/memes');
});

app.get('/memes', async (req, res) => {
    const memes = await Meme.find({});
    const memelist = [];
    for (let i = Math.max(0, memes.length - 100); i <= Math.min(100, memes.length - 1); i++) {
        const memeobject = {
            id: memes[i]._id,
            name: memes[i].name,
            caption: memes[i].caption,
            url: memes[i].url
        };
        memelist.push(memeobject);
    }
    res.send(memelist);
});


app.post('/memes', async (req, res) => {
    const meme = new Meme(req.body);
    y = await meme.save();
    res.send(JSON.stringify({ id: y.id }))
});



app.get('/memes/:id', async (req, res) => {
    const meme = await Meme.findById(req.params.id)
    res.send(
        {
            id: meme._id,
            name: meme.name,
            caption: meme.caption,
            url: meme.url
        }
    );
})


app.put('/memes/:id', async (req, res) => {
    const { id } = req.params;
    const meme = await Meme.findByIdAndUpdate(id, { ...req.body.meme });
    res.redirect('/memes')
});

app.delete('/memes/:id', async (req, res) => {
    const { id } = req.params;
    await Meme.findByIdAndDelete(id, { ...req.body.meme });
    res.redirect('/memes')
})


app.listen(8081, () => {
    console.log('Serving on port 8081')
})