const express = require('express')
const installRoutes = require('./routes/index')
const config = require('./config')

const app = express()
const port = config.port || 3000

app.use(express.urlencoded({extended: true}))
app.use(express.json())

installRoutes(app)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ success: false, message: err.message });
    return;
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})