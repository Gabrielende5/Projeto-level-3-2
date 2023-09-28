const express = require('express')
const cors = require('cors')
const oiRoute = require('./routes/Oi')

const app = express()
const noteRoutes = require ('./routes/NoteRoutes')
const sequelize = require ('./config/database')

app.use(cors())

app.use(express.json())
//app.use("/",oiRoute)
porta = 3001
app.use("/notes", noteRoutes);
sequelize.sync().then(()=>{
    app.listen(porta,()=>{
        console.log("api rodando e conectando ao banco de dados")
    })
}).catch(err=>console.log("erro ao conectar ao banco de dados"))
