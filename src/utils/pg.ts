import CONFIG from '../config';
import { Pool } from 'pg';
const pool = new Pool({ connectionString: CONFIG.DB_URL });

export const pg = async (SQL?: string, params?: any) => {
  const client = await pool.connect();

  try {
    const {
      rows: [row],
    } = await client.query(SQL, params);
    return row;
  } catch (e) {
    console.log(e);
  } finally {
    client.release();
  }
};

export const pgAll = async (SQL?: string, params?: any) => {
  const client = await pool.connect();
  try {
    const { rows } = await client.query(SQL, params);
    return rows;
  } catch (e) {
    console.log(e);
  } finally {
    client.release();
  }
};