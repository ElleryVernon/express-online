const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('admin url');
});

router.get('/products', (req, res) => {
	// res.send('admin products url');
	res.render('admin/products.html', {
		message: 'Hello express',
	});
});

module.exports = router;