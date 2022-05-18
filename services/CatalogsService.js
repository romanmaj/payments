const responseHelper = require('../helpers/response')
const catalogRepository = require('../repositories/CatalogsRepository')

const catalogData = {
    name: 'test',
    descriptions: 'description',
    url: 'https://',
    cost1: 1,
    cost2: 2,
    cost3: 3,
    req1: 1,
    req2: 2,
    req3: 3,
    category: 1
}

const create = async () => {
    const createdId = await catalogRepository.createAndReturnId(catalogData)
    const [catalog] = await catalogRepository.findOne(createdId)

    return responseHelper.buildCatalogResponse(catalog)
}

module.exports = {
    create
}