
import {MongoClient} from "mongodb";
const  handler= async(req,res)=>{
    if(req.method==="POST"){
        const data=req.body;

       const client= MongoClient.connect("mongodb+srv://Ashu:hWQXvgw1woaVAbLa@cluster0.tekbi.mongodb.net/meetups?retryWrites=true&w=majority")
       const db= client.db();
       const meetupsCollection=db.collection("meetups")
       const result=await meetupsCollection.insertOne(data)
     console.log(result)
      client.close()
      res.status(201).json({message:"Added"})
    }

}

export default handler