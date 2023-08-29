const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  saveGame,
  deleteGame,
  login,
} = require('../../controllers/userController');

// import middleware
const { authMiddleware } = require('../../middleware/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(authMiddleware, saveGame);

router.route('/login').post(login);

router.route('/profile').get(authMiddleware, getSingleUser);

router.route('/game/:gameId').delete(authMiddleware, deleteGame);

module.exports = router;