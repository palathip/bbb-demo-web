const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
    let response = [
        {
          "invoice_no": "SOD-101",
          "amount": 25000.00,
          "created_at" : "2022-06-15"
        },
        {
          "invoice_no": "IPX-648",
          "amount": 300000.00,
          "created_at" : "2022-06-15"
        },
        {
          "invoice_no": "IPZ-871",
          "amount": 350000.00,
          "created_at" : "2022-06-15"
        }
      ]
  res.send(response)
})

app.listen(8080, () => {
  console.log('Start server at port 8080.')
})