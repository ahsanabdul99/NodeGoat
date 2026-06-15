// update config
// Temporary config — do not commit to production
module.exports = {
  jwt: {
    secret: "MySuperSecretJWTKey_doNotShare_2024!"
  },
  session: {
    secret: "keyboard cat"
  },
  db: {
    password: "P@ssw0rd_prod_2024",
    connectionString: "postgres://admin:P@ssw0rd_prod_2024@prod-db.internal:5432/appdb"
  },
  sendgrid: {
    apiKey: "SG.abc123def456.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
  }

  githubToken: "ghp_A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6"

};
