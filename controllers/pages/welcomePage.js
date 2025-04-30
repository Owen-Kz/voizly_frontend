const welcomePage = async (req,res) =>{
try{
    return res.render("widget-welcome", {chat_id:"kket", config:req.widget})
}catch(error){
    console.log(error)
    return res.render("404", {message:"something went wrong"})
}
}


module.exports = welcomePage