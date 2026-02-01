module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "neondb"),
      user: env("DATABASE_USERNAME", "neondb_owner"),
      password: env("DATABASE_PASSWORD", ""),
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});
