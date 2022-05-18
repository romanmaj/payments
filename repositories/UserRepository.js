const db = require('../db')

const findOne = async (address) => {
  const [user] = await db.query(`
        select * from user where address = '${address}';
    `)

  if (!user) {
    throw Error('User not exist')
  }

  return user
}

const findByAddressWithAssets = async (address) => {
  const [user] = await db.query(`
        select * from user u left join assets a on u.address = a.address where u.address = '${address}';
    `)

  if (!user) {
    throw Error('User not exist')
  }

  return user
}

const updateCash = async (address, cash1, cash2, cash3) => {
  await db.query(`
        UPDATE user
        SET cash1 = ${cash1}, cash2 = ${cash2}, cash3 = ${cash3}
        WHERE address = '${address}'
    `)
}

const getCash = async (address) => {
  const user = await findOne(address)

  return {
    cash1: user.cash1,
    cash2: user.cash2,
    cash3: user.cash3
  }
}

module.exports = {
  findOne,
  findByAddressWithAssets,
  updateCash,
  getCash
}
