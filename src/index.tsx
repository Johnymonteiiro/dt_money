import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App/App';
import { createServer, Model } from "miragejs"

createServer({
  //Criando o Banco de Dados no MIragejs para conectar a duas rotas:
  models: {
    transition: Model,
  },

  seeds(server){
    server.db.loadData({
      transitions:[
        {
          id:1,
          title:'Freelance de web site',
          type: 'deposito',
          category:'Dev',
          amount:6000,
          createAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id:2,
          title:'Aluguel',
          type: 'saida',
          category:'Casa',
          amount:1200,
          createAt: new Date('2021-02-14 19:00:00'),
        }
      ]
    })
  },

  //Criando Rotas:
  routes(){
     this.namespace = 'api'; //endereço da api no nosso miragejs

     //Metodo get:
     this.get('/transitions', ()=>{
       return this.schema.all('transition')
     })
     
     //Metodo Post:
     this.post('/transitions',(schema,request) =>{ //schema é o banco de dados

      const data = JSON.parse(request.requestBody)

      //Botando os dados no banco:

      return schema.create('transition',data)

     })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
