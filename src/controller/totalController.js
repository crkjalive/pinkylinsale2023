const connection = require("../connection");

const getTotal = (req, res) => {

  const sql = `SELECT *, sum(quantity) AS cantidad, SUM(total_price) AS total, (sum(total_price)-sum(price)) as utilidad, sum(price) as costo, MONTHNAME(registered) AS mes FROM sales NATURAL join products GROUP BY mes ORDER BY registered`
  
  connection.query(sql, (err, result) => {
    if (err) {console.log('Error al buscar: ' + err)}
    else {
      if (result == "") {
        res.send('No ahí datos')
      } else {
        // console.log(result)
        // res.send(result)
        res.render('total', {data: result})
      }
    }    
  })
}

module.exports = {
  getTotal
}