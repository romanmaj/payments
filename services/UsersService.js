const db = require('../db')
const responseHelper = require('../helpers/response')
const userRepository = require('../repositories/UserRepository')
const productRepository = require('../repositories/ProductRepository')

const compareCash = (number, user, catalog) => {
    if(user[`cash${number}`] <= catalog[`cost${number}`]) {
        throw Error( `cash${number} -> ${user[`cash${number}`]} <= cost${number} -> ${catalog[`cost${number}`]}`)
    }

    if(catalog[`req${number}`]) {
        if(user.type === number) {
            if(user.level <= catalog[`req${number}`]) {
                throw Error(`level -> ${user.level} <= req${number} -> ${catalog[`req${number}`]}`)
            }
        }
    }
}

const buyProduct = async (req, res, next) => {
    const { id, address } = req.body

    const userWithAssets = await userRepository.findByAddressWithAssets(address)

    const [catalog] = await db.query(`select * from catalogs where id = ${id}`)

    for(let i = 1; i < 4; i++) {
        compareCash(i, userWithAssets, catalog)
    }

    await userRepository.updateCash(
        address,
        userWithAssets.cash1 - catalog.cost1, 
        userWithAssets.cash2 - catalog.cost2, 
        userWithAssets.cash3 - catalog.cost3
    )

    await productRepository.create(address)

    const data = {
        resources: await userRepository.getCash(address)
    }

    return responseHelper.buildSuccess(data, res)


}

module.exports = {
    buyProduct
}