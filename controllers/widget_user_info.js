const widgetUserInfo = async (req,res, next) =>{
try{
 const widgetData = // GET /api/widgets/1234
    {
      "title": "Let's Connect!",
      "review_title": "Tell us what you think",
      "right_title":"Feel Free to stop by",
      "widget_id": "24rkwr",
      "brand_color":"red",
      "accent_color": "purple",
      "primary_color":"gold",
      "form_action": "https://yourdomain.com/form-handler?id=1234",
      "button_text": "Send Now",
      "city": "Accra",
      "address": "24 Independence Avenue",
      "country": "Ghana",
      "email": "contact@dzidzom.com",
      "phone": "+233 24 000 0000",
      "socials": [
        { "url": "https://facebook.com/dzidzom", "icon": "📘" },
        { "url": "https://twitter.com/dzidzom", "icon": "🐦" }
      ],
    }
    req.widget = widgetData
    next()
}catch(error){
    console.log(error)
    return next()
}
}


module.exports = widgetUserInfo