const connection = require('../connection')

const getBills = (req, res) => {
  const sql = 'SELECT id, bills, price, date FROM bills ORDER BY id DESC'
  connection.query(sql, (err, result) => {
    if (err) {
      console.log('Error al consultar: ', err)
    }
    else {
      res.render('bills', {bills: result})
    }
  })
}

const getBillsUpdate = (req, res) => {
  const idParams = req.params.id
  const sql = "SELECT * FROM bills WHERE id=?"
  connection.query(sql, idParams, (err, result) => {
    if (err) {
      console.log('Error al consultar: ', err)
    } 
    else {
      res.render('billsEdit', {bills: result})
    }
  })
}

const billsUpdate = (req, res) => {
  const id = req.params.id
  const bills = req.body.bills.toUpperCase()
  const sql = `UPDATE bills SET bills='${bills}', price='${req.body.price}', date='${req.body.date}' WHERE id='${id}'` 
  connection.query(sql, (err, result) => {
    if (err) {
      console.log('Error al actualizar: ', err)
    }
    else {
      res.redirect('/bills')
    }
  })
}

const getBillsAdd = (req, res) => {
  res.render('billsAdd')
}

const billsAdd = (req, res) => {
  const bills = req.body.bills.toUpperCase()
  const sql = `INSERT INTO bills SET bills='${bills}', price=${req.body.price}, date='${req.body.date}'`
  connection.query(sql, (err, result) => {
    if (err) {
      console.log('Error al registrar: ', err) 
    }
    else {
      res.redirect('/bills')
    }
  })
}

const getBillsDelete = (req, res) => {
  const id = req.params.id
  const sql = "SELECT * FROM bills WHERE id=?"
  connection.query(sql, id, (err, result) => {
    if (err) {
      console.log('Error al consultar: '+err)
    } 
    else {
      res.render('billsDelete', {bills: result})
    }
  })
}

const billsDelete = (req, res) => {
  const id = req.params.id
  const sql = `DELETE FROM bills WHERE id='${id}'` 
  connection.query(sql, (err, result) => {
    if (err) {
      console.log('Error al ELIMINAR: ', err)
    }
    else {
      res.redirect('/bills')
    }
  })
}

const getBillsDate = (req, res) => {
  res.send('Mirar en rango de fechas')
}

module.exports = {
  getBills,
  getBillsUpdate,
  getBillsAdd,
  getBillsDelete,
  billsUpdate,
  billsDelete,
  billsAdd,
  getBillsDate,
}