import { Client } from 'pg'

const Backend_IcfesDB = new Client({
    port: 5432,
    host: 'localhost',
    password: 'root',
    user: 'postgres',
    database: 'Backemd_icfesBD'
})
Backend_IcfesDB.connect()
export default Backend_IcfesDB