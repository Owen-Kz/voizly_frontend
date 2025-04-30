const chatPage = async (req,res) =>{
    try{
        res.render("widget-chat",{chat_id:"ett", config:req.widget})
    }catch(error){
        console.log(error)
        return res.render("404", {mesage:"Something went wrong"})
    }
}

module.exports = chatPage