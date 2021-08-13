import {Router} from 'express'; //com as chaves estou importando so uma determinada funcionalidade
import User from './app/models/User';

const routes = new Router();

routes.get("/",(req,res)=>{
    return res.json({message:"Rota raiz da minha aplicação"});
});

routes.post('/user',async (req,res) =>{
    const user = await User.create({
        name: 'Jeremias',
        email: 'test123@gmail.com',
        password_hash: '12345678'
    });
    res.json(user);
})


export default routes;



