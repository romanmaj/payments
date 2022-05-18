const db = require('../db/index')

const createAndReturnId = async (data) => {
    const created = await db.query(`
    insert into catalogs
        (name, description, url, cost1, cost2, cost3, req1, req2, req3, category) 
    VALUES 
        (
            '${data.name}', 
            '${data.description}', 
            '${data.url}', 
            ${data.cost1}, 
            ${data.cost2}, 
            ${data.cost3}, 
            ${data.req1},
            ${data.req2},
            ${data.req3},
            ${data.category})
    `)

    return created.insertId
}

const findOne = async (id) => {
    const catalog = await db.query(`select * from catalogs where id = ${id}`)

    if(!catalog) {
        throw Error('Catalog not exist')
    }

    return catalog
}

module.exports = {
    createAndReturnId,
    findOne
}