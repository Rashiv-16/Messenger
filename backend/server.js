import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('See you later, Alligator')
})

app.listen(PORT, () => console.log(`Server is running in ${process.env.NODE_ENV} mode on ${process.env.PORT}`))