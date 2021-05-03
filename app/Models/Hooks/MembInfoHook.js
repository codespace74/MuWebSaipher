"use strict";

const Hash = use("Hash");

const MembInfoHook = (exports = module.exports = {});

MembInfoHook.hashPassword = async (user) => {
  user.memb__pwd = await Hash.make(user.memb__pwd);
};

MembInfoHook.dateFormat = async (user) => {
  const new_created_at = new Intl.DateTimeFormat("pt-BR").format(
    user.created_at
  );

  user.created_at = new_created_at;
};
