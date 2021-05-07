/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const CashShopData = use("App/Models/CashShopData");

class Main {
  async getCoinsAccount(user) {
    const data = await CashShopData.findBy("AccountID", user);
    return data;
  }
}
module.exports = new Main();
