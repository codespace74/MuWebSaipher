const { class_codes } = require("../Config/class_config.json");
const { map_codes } = require("../Config/map_config.json");
const { status_code } = require("../Config/account_config.json");
const {
  code_types,
  pk_levels_code,
} = require("../Config/pk_level_and _character_config.json");
const { web } = require("../Config/web_config.json");
const { vip_codes } = require("../Config/vip_query_config.json");

class Main {
  getClassLong(classCode) {
    return class_codes[classCode].long;
  }

  getClassShort(classCode) {
    return class_codes[classCode].short;
  }

  getPkLevel(pk) {
    return pk_levels_code[pk];
  }

  getCharacterStatusCode(code) {
    return code_types[code];
  }

  getMapName(map) {
    return map_codes[map];
  }

  getStatusAccount(status) {
    return status_code[status];
  }

  getVipNameAccount(AccountLevel) {
    return vip_codes[web.serve_type]["vip_code"][AccountLevel];
  }
}
module.exports = new Main();
