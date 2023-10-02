const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const porta = 8088;

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/iasc", (req, res) => {
    res.render("iasc");
});

app.get("/estudo-dos-astros", (req, res) => {
    res.render("astros");
});

app.get("/projeto-foguetes", (req, res) => {
    res.render("foguetes");
});

app.get("/sobre-nos", (req, res) => {
    res.render("sobre");
});

app.get("/inscricao", (req, res) => {
    res.render("subscribed");
});


app.listen(porta, () => {
    console.log("Servidor rodando na porta: " + porta);
});