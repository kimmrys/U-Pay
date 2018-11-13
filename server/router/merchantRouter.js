const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let viewModel = req.viewModel;
    res.render('merchant.pug', viewModel);
});

module.exports = router;