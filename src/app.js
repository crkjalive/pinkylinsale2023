// console.log("Hola Mundo Express")
const express = require("express")
const app = express()
const port = process.env.PORT || 3023
const path = require("path")
const connection = require("./connection")
const logged = require("./middlewares/login")
const sales = require('./routes/salesRoutes.js')
const products = require("./routes/productsRoutes.js")
const bills = require('./routes/billsRoutes.js')
const search = require("./routes/searchRoutes.js")
const total = require("./routes/totalRoutes.js")
const mounth = require("./routes/mounthRoutes.js")
const day = require("./routes/dayRoutes.js")
const users = require("./routes/usersRoutes.js")
const searchSales = require("./routes/serachSalesRoutes.js")

// Settings
app.set("title", "Aplicacion hecha en Node.Js") // title console
app.set("port", 3023) // puerto
app.set("view engine", "ejs") // motor de plantilla
app.set("views", path.join(__dirname, "views")) // path de vistas

// middlewares
app.use(logged.isLogged)
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: false }))

// Routes
app.get("/", (req, res) => {
  res.render("index")
})
// Routes + controller
app.use('/sales', sales)
app.use('/products', products)
app.use('/bills', bills)
app.use('/search', search)
app.use('/total', total)
app.use('/mounth', mounth)
app.use('/day', day)
app.use('/users', users)
app.use('/searchSales', searchSales)

app.listen(port, () => {
  console.log(app.get("title"), "Server run on", app.get("port"))
})
