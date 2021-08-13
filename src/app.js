import express from "express";
import routes from "./routes";
import './database'
class App{
    constructor(){
       this.server= express(); //vai executar minha função minha express
       this.routes(); // vai pegar o server para usar as rotas
    }
    middlewares(){
        this.server.use(express.json()); // para utilizar o json
    }
    routes(){
        this.server.use(routes);
    }
}

export default App;