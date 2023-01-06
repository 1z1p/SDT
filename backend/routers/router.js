const express = require("express")
const user = require("../controller/userController")
const news = require("../controller/newsController")
const test = require("../controller/testController")

const router = express() 

// User
router.post("/login", user.login)
router.post("/register", user.register)
router.get("/infoByToken", user.infoByToken)

// News
router.post("/news", news.isNews)
router.post("/news-full", news.isNewsFull)

// Test
router.post("/ready/name/test", test.isTestReadyName)
router.post("/ready/test", test.isTestReady)
router.post("/result/test", test.isTestResult)

module.exports = router