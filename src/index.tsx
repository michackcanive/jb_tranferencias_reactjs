import React from 'react';
import ReactDOM from 'react-dom';
import { createServer,Model } from 'miragejs';
import { App } from './App';

createServer({
    models:{
        transferencias:Model,
    },
    seeds(server){
        server.db.loadData({
            transferencias:[
                {
                    id:1,
                    title:'Criação de web site',
                    radioType:'deposito',
                    categoria:'developer',
                    valor:700,
                    createAt:new Date('2022-02-1 03:00:00'),
                },
                {
                    id:2,
                    title:'Criação de Loja Virtual',
                    radioType:'withdraw',
                    categoria:'Compra',
                    valor:600,
                    createAt:new Date('2022-02-20 03:00:00'),
                }
            ]
        })
    },
    routes() {
        this.namespace = 'api';

        this.get('/tranferencias', () => {
            return this.schema.all('transferencias')
        });

        this.post('/tranferencias', (schema, request) => {
            const data = JSON.parse(request.requestBody)
            return schema.create('transferencias',data)
          })

    }
});
 
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>, document.getElementById('root')
);