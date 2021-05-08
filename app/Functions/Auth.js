class Auth {
  async login(auth, username, password) {
    try {
      await auth.attempt(username, password);
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = new Auth();
