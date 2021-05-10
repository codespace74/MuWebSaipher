/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const CashShopData = use("App/Models/CashShopData");

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const MEMB_INFO = use("App/Models/MEMB_INFO");

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const MEMB_STAT = use("App/Models/MEMB_STAT");

class Account {
  async getCoinsAccount(user) {
    const data = await CashShopData.findBy("AccountID", user);
    return data;
  }

  async getAccountInfo(account) {
    const data = await MEMB_INFO.query()
      .select(
        "memb_guid",
        "memb___id",
        "memb_name",
        "AccountLevel",
        "AccountExpireDate"
      )
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
      .where("memb___id", account)
      .fetch();
    const AccountJson = data.toJSON();

    return AccountJson[0];
  }

  async getAccount(account) {
    const data = await MEMB_INFO.query()
      .select(
        "memb_guid",
        "memb___id",
        "memb_name",
        "AccountLevel",
        "AccountExpireDate"
      )
      .where("memb___id", account)
      .fetch();
    if (data) {
      const AccountJson = data.toJSON();
      return AccountJson[0];
    }
    return data;
  }

  async getAccountConnectionStatus(account) {
    const status = await MEMB_STAT.findBy("memb___id", account);
    if (status) {
      return status.toJSON();
    }

    return status;
  }
}

module.exports = new Account();
