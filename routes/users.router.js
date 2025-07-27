const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([{ id: 1, name: 'Juan' }, { id: 2, name: 'Ana' }]);
});

module.exports = router;
