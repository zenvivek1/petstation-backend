const { Client } = require('pg')

// Using the Transaction Pooler (IPv4 compatible)
const client = new Client({
  user: 'postgres.wblpskesnrlesyjhogjw',
  host: 'aws-1-ap-southeast-1.pooler.supabase.com',
  database: 'postgres',
  password: 'QW#2Nx8d?@LFaw*',
  port: 6543,
  ssl: {
    rejectUnauthorized: false
  }
})

async function test() {
  try {
    console.log("🔄 Connecting to Supabase Pooler (IPv4)...")
    await client.connect()
    console.log("✅ Connected successfully!")

    const res = await client.query('SELECT NOW()')
    console.log("Server time:", res.rows[0])

    await client.end()
  } catch (err) {
    console.error("❌ Connection failed:")
    console.error(err)
  }
}

test()
