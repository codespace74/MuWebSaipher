
'use strict'

const Hash = use('Hash')

const MembInfoHook = exports = module.exports = {}

MembInfoHook.hashPassword = async (user) => {
  user.memb__pwd = await Hash.make(user.memb__pwd)
}