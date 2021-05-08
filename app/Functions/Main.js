const { class_codes } = require("../Config/class_config.json");
const { map_codes } = require("../Config/map_config.json");
const {
  code_types,
  pk_levels_code,
} = require("../Config/pk_level_and _character_config.json");

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
}
module.exports = new Main();
