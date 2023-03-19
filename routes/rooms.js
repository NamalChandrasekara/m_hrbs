const router =require("express").Router();
let Room = require("../models/room");

router.route("/add").post((req ,res) => {
    const name =req.body.name;
    const maxcount=Number(req.body.maxcount);
    const phonenumber=Number(req.body.phonenumber);
    const rentperday=Number(req.body.rentperday);
    const description=req.body.description;


    const newRoom = new Room({
        name,
        maxcount,
        phonenumber,
        rentperday,
        description
    })
    newRoom.save().then(()=>{
        res.json("Room Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Room.find().then((rooms)=>{
        res.json(rooms)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/udate/:id").put(async(req,res)=>{
    let userId = req.params.id;
    //destructure
    const {name, maxcount, phonenumber,rentperday,description}=req.body;
    
    const updateRoom = {
        name,
        maxcount,
        phonenumber,
        rentperday,
        description
    }
    const udate =await Room.findByIdAndUpdate(userId,updateRoom).then(()=>{
        res.status(200).send({status:"user updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with update" });
    })
    })

router.route("/delete:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await Room.findByIdDelete(userId).then(()=>{
        res.status(200).send({status:"user deleted"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with delete" });
    })
})

router.route("/get:id").get(async(req,res)=>{
    let userId= req.params.id;
    const user = await Room.findById(userId).then(()=>{
        res.status(200).send({status:"user found",user:user})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status:"Error",error:err.message});
    })
})
    
module.exports =router;

