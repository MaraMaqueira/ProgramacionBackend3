const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([{ pet: 'Perro', adopter: 'Carlos' }]);
});

module.exports = router;
