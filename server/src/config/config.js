module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'vue',
        user: process.env.DB_USER || 'vue',
        password: process.env.DB_PASS || 'vue',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './vue.sqlite'
        }
    }
}

module.exports = {
    // other configs ..
    externals: {
      "sequelize": "require('sequelize')",
    },
  }