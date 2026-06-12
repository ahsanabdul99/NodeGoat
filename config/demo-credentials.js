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

    jwt: {
    secret: "MySuperSecretJWTKey_doNotShare_20267687!"
  },
};
