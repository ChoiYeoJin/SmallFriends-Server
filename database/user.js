const pool = require("./database");

async function getUserByEmail(email) {
  const user = await pool.query(`SELECT * FROM users WHERE email = ?`, [email]);

  return user;
}

async function addUser(userData) {
  const { name, email } = userData;
  const result = await pool.query(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [name, email]
  );
  return result;
}

module.exports = {
  getUserByEmail,
  addUser,
};
