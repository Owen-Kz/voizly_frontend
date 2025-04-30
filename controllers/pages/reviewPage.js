const reviewPage = async (req,res) =>{
    try{
        return res.render("widget-review", {chat_id:"kket", config:req.widget, widget_review_questions:req.widget_review_questions})
    }catch(error){
        console.log(error)
        return res.render("404", {message:"something went wrong"})
    }
    }
    
    
    module.exports = reviewPage