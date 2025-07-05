import { Client } from 'pg'

const Backend_IcfesDB = new Client({
    port: 5433,
    host: 'localhost',
    password: 'portaldijital',
    user: 'postgres',
    database: 'Backend_IcfesDB'
})
Backend_IcfesDB.connect()
export default Backend_IcfesDB