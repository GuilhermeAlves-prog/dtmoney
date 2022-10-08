import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { createServer, Model } from 'miragejs'

createServer({

  models: {
    transaction: Model,

  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'trabalho freelancer',
          type: 'deposit',
          category: 'trabalho',
          amount: 7000,
          createdAt: new Date('2022-09-09 09:00:00')
        },
        {
          id: 2,
          title: 'compra de notebook',
          type: 'withdraw',
          category: 'gastos',
          amount: 9000,
          createdAt: new Date('2022-09-15 13:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
