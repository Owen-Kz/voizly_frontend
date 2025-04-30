const express = require("express")
const bodyParser = require("body-parser")
const widgetData = require("../controllers/widgetData")
const widgetUserInfo = require("../controllers/widget_user_info")
const widgetPage = require("../controllers/widgetPage")
const welcomePage = require("../controllers/pages/welcomePage")
const chatPage = require("../controllers/pages/chatPage")
const reviewPage = require("../controllers/pages/reviewPage")
const widgetQuestions = require("../controllers/widget/widgetQuestions")
const router = express.Router()

router.use(express.json()) 
router.use(bodyParser.json()) 
 
router.get('/', (req, res) => {
    res.render('landing');
  });
 
 
  // Handle the contact form submission (example)
 router.post('/submit-form', (req, res) => {
    // Handle form data here
    res.send('Form submitted');
  });


router.get("/api/widgets/:userId", widgetUserInfo, widgetData)
router.get("/contact", widgetUserInfo, widgetPage)
router.get("/welcome", widgetUserInfo, welcomePage)
router.get("/chat", widgetUserInfo, chatPage)
router.get("/review", widgetUserInfo,widgetQuestions, reviewPage )
router.post("/api/submit-review", widgetUserInfo, )

router.use((req,res)=>{
    res.redirect("/")
})

module.exports = router