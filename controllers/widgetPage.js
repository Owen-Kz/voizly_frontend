const widgetPage = async (req,res) =>{
    try{
        
        res.render("widget-frame", {config:req.widget, chat_id:"tekl"})
    }catch(error){
        return res.json({error:error.message})
    }
}


module.exports = widgetPage