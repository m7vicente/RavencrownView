import Cadastro from "./Pages/Cadastro";
import Catalogo from "./Pages/Catalogo";
import DetalhesDoContrato from "./Pages/DetalhesDoContrato";
import DetalhesDoServico from "./Pages/DetalhesDoServico";
import Login from "./Pages/Login";
import MeusServicos from "./Pages/MeusServicos";
import cadastroDeServico from "./Pages/CadastroDeServico";
import Perfil from "./Pages/Perfil";
import CatalogoEspecifico from "./Pages/CatalogoEspecifico";
import MeusAgendamentos from "./Pages/MeusAgendamentos";

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
    path: "/DetalhesDoContrato",
    component: DetalhesDoContrato
  },
  {
    key: 5,
    path: "/DetalhesDoServico",
    component: DetalhesDoServico
  },
  {
    key: 6,
    path: "/Login",
    component: Login
  },
  {
    key: 7,
    path: "/MeusServicos",
    component: MeusServicos
  },
  {
    key: 8,
    path: "/CadastroDeServico",
    component: cadastroDeServico
  },
  {
    key: 9,
    path: "/Perfil",
    component: Perfil
  },
  {
    key: 10,
    path: "/CatalogoEspecifico:id",
    component: CatalogoEspecifico
  },
  {
    key: 11,
    path: "/MeusAgendamentos",
    component: MeusAgendamentos
  }
];

export default routes;
