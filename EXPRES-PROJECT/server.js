const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");
const signupRouter = require("./routes/signup.router");

const app = express();
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
const PORT = 3000;

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const end = Date.now() - start;
    console.log(req.method, req.baseUrl + req.url, end + 'ms');
});
app.use('/site', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('index', {
        title: "First Page",
        name: "Jayesh Chauhan",
        image: "/site/images/jayesh.jpeg"
    });
});

app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);
app.use('/signup', signupRouter);

app.listen(PORT, () => {
    console.log('Listening to server at port : ' + PORT);
});
