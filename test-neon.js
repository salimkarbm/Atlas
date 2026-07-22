const { Client } = require('pg');

(async () => {
  const client = new Client({
    connectionString: 'postgresql://neondb_owner:npg_ulk9SOgH8wNM@ep-dark-cell-au2ml9kv-pooler.c-10.us-east-1.aws.neon.tech/neondb?sslmode=require',
    ssl: { rejectUnauthorized: false },
    connectionTimeoutMillis: 10000,
  });

  try {
    console.log('Connecting to Neon...');
    await client.connect();
    console.log('CONNECTED!');
    const res = await client.query('SELECT NOW()');
    console.log(res.rows[0]);
    await client.end();
  } catch (e) {
    console.error('FAILED:', e.message);
    console.error(e);
  }
})();