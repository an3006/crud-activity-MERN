const mongoose=require("mongoose");


const DB ="mongodb+srv://anirudh1500:6SPhIh6q8zmmpy2A@cluster0.pjbdjio.mongodb.net/mernstack?retryWrites=true&w=majority"

mongoose.connect(DB,{

   
    useNewUrlParser:true,
    useUnifiedTopology:true
    

}).then(()=> console.log("connection start")).catch((error)=> console.log(error.mesasge));