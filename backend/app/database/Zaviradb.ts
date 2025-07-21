import { Client } from 'pg'

const Zaviradb = new Client({
    port: 5433,
    host: 'localhost',
    password: 'root',
    user: 'postgres',
    database: 'ZAVIRA',
})
Zaviradb.connect()
export default Zaviradb