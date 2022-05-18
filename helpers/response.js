const buildCatalogResponse = (catalog) => {
  return ({
    id: catalog.id,
    name: catalog.name,
    description: catalog.description,
    imageUrl: catalog.url,
    price: {
      cost1: catalog.cost1,
      cost2: catalog.cost2,
      cost3: catalog.cost3
    },
    req: {
      req1: catalog.req1,
      req2: catalog.req2,
      req3: catalog.req3
    }
  })
}

const buildSuccess = (data, res) => {
  const response = {
    success: true,
    data
  }
  console.log(response)

  res.json(response)
  res.end()
}

module.exports = {
  buildCatalogResponse,
  buildSuccess
}
