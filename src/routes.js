import Cadastro from './Pages/Cadastro';
import Catalogo from './Pages/Catalogo';
import DetalhesDoContrato from './Pages/DetalhesDoContrato';
import DetalhesDoServico from './Pages/DetalhesDoServico';
import Login from './Pages/Login';
import MeusServicos from './Pages/MeusServicos';

const routes = [
    {
        key: 1,
        path: "/",
        component: Catalogo
    },
    {
        key: 2,
        path: "/Catalogo",
        component: Catalogo
    },
    {
        key: 3,
        path: "/Cadastro",
        component: Cadastro
    },
    {
        key: 4,
        path:"/DetalhesDoContrato",
        component: DetalhesDoContrato
    },
    {
        key: 5,
        path:"/DetalhesDoServico",
        component: DetalhesDoServico
    },
    {
        key: 6,
        path:"/Login",
        component: Login
    },
    {
        key: 7,
        path:"/MeusServicos",
        component: MeusServicos
    }
];

export default routes;