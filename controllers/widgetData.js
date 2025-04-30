const widgetData = async (req,res) =>{
    try{
        const widgetData = req.widget
   
        return res.json(widgetData )      
    }catch(error){
        console.log(error)
        return res.json({error})
    }
}


module.exports = widgetData