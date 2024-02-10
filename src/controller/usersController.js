const connection = require("../connection");

const getUsersLogin = (req, res) => {
  res.render('usersLogin')
}


const usersLogin = (req, res) => {
  const userName = req.body.userName
  const userPass = req.body.pass

  const sql = `SELECT user_name, user_pass FROM users WHERE user_name = '${userName}' AND user_pass = '${userPass}';`

  connection.query(sql, (err, result) => {
    
    if (err) { 
      console.log("error al consultar el usuario: " + err); 
    }
    else {

      if(result[0].user_name != userName){
        res.send("usuario no valido")
        // aqui esta el error
      }
      else {
        res.send(result[0])
      }


    }
  })
}

module.exports = {
  getUsersLogin,
  usersLogin,
}

