const db = require('../db')

const create = async(userAddress) => {
    await db.query(`
        INSERT INTO products(address, user_address) VALUES ('${userAddress}', '${userAddress}')
    `)
}

module.exports = {
    create
}