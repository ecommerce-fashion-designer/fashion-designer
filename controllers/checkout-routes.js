const router = require('express').Router();

router.get('/', (req, res) => {
  let checkOutData=req.session




    if (req.session.loggedIn) {
        res.render('checkout', { 'cart': checkOutData });
        return;
    }
    res.redirect('/login');
});

module.exports = router;