// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations'
    }
  }


  // production: {
  //   client: 'pg',
  //   connection: {
  //     host: "ec2-23-21-100-145.compute-1.amazonaws.com",
  //     port: "5432",
  //     user: "xrvdfdptbpisik",
  //     password: "MIk7ZGe1_E-3t05gsCRIgbWxWz",
  //     database: "d1vppu3cc53g42",
  //     ssl: true
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  // }
};
