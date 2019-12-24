const express = require("express");
const app = express();
const expresJsx = require("./expresJsx");

app.engine("jsx", expresJsx);
app.set("views", "./views");
app.set("view engine", "jsx");

app.get("/", (request, response) => {
    response.render("index", { hello : "Hola", world : "Mundo"});
});

const server = app.listen(8000, () => {
    console.log("http://localhost:8000");
}); 