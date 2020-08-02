import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/index';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';


const Pagina404 = () => (<div><h1>Erro 404 - Página não Encontrada</h1></div>);
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component= {Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route component= {Pagina404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
