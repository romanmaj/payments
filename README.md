# payments

Running 
```bash
npm i
npm start
```
* You need to create a schema with script in ddl.txt. After this user and assets data will be inserted.
* You can add catalog with POST localhost:3000/api/v2/catalogs 
* You can buy product with POST localhost:3000/api/v4/users/buy-product
with body
```json
{
    "id": 1,
    "address": "address"
}
```
where id = catalogId, address = user.address
