const router = require("express").Router();
const {loginValidation, signupValidation} = require("../middlewares/AuthValidation");
const {signup, login} = require("../controllers/AuthController");

router.post("/signup", signupValidation, signup);
router.post("/login", loginValidation, login);

module.exports = router;