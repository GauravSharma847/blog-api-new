module.exports = ({ env }) => ({
  connection : {
    client : 'postgres',
    connection : {
      host: env('DATABASE_HOST', 'dpg-ch4bqte4dad97s1tn82g-a.oregon-postgres.render.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'simpleone_9gzi'),
        user: env('DATABASE_USERNAME', 'simpleone_9gzi_user'),
        password: env('DATABASE_PASSWORD', 'opLEdzXo9eFgKfP5wsFongaSy3JZNvNii'),
        ssl: env.bool('DATABASE_SSL', true) ,
        // schema: env('DATABASE_SCHEMA', 'public'),
      }
    }
});