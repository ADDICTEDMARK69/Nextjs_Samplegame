import mysql from "mysql2/promise";

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `Missing ${name}. Add it to .env.local and restart the dev server (npm run dev).`
    );
  }
  return value;
}

const pool = mysql.createPool({
  host: requireEnv("DB_HOST"),
  port: Number(process.env.DB_PORT ?? 3306),
  user: requireEnv("DB_USER"),
  password: requireEnv("DB_PASSWORD"),
  database: requireEnv("DB_NAME"),
  waitForConnections: true,
  connectionLimit: 10,
});

export default pool;