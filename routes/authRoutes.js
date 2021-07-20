const { Router } = require('express');
const authController = require('../controllers/authController');
const {requireAuth , checkUser , adminAuth} = require('../middleware/authMiddleware')

const router = Router();
  
router.get('/signup', authController.signup_get);
router.post('/signup', authController.signup_post);
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);
router.get('/practise',authController.topic_get);
router.get('/addquestion',checkUser,requireAuth,authController.question_get);
router.post('/addquestion',checkUser,adminAuth, authController.question_post);
router.get('/addexperience',authController.addexperience_get);
router.post('/addexperience',authController.addexperience_post);
router.get('/logout',authController.logout_get); 

module.exports = router;