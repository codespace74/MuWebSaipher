'use strict'

class DownloadController {
    async index({view}){
        return view.render('download/index', { })
    }
}

module.exports = DownloadController
