var express = require('express')
var router = express.Router()

const bamuiService = require('./bamui.service.js');

router.route('/test')
    .get(bamuiService.getTest);

router.route('/values')
    .get(bamuiService.getValues);
    
router.route('/update')
    .post(bamuiService.updateValues);
    
module.exports = router;