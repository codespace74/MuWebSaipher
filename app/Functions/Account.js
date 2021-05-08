/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const CashShopData = use("App/Models/CashShopData");

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const MEMB_INFO = use("App/Models/MEMB_INFO");

class Account {
  async getCoinsAccount(user) {
    const data = await CashShopData.findBy("AccountID", user);
    return data;
  }

  async getAccountInfo(user) {
    const data = await MEMB_INFO.query()
      .select("memb_guid", "memb___id", "memb_name", "AccountLevel")
      .with("characters", (builder) =>
        builder.select(
          "id",
          "AccountID",
          "Name",
          "cLevel",
          "Class",
          "MapNumber",
          "MapPosX",
          "MapPosY"
        )
      )
      .where("memb___id", user)
      .fetch();
    const AccountJson = data.toJSON();
    return AccountJson[0];
  }
}

module.exports = new Account();
