const{UserModel}=require('./../Model/UserModel');
const UserRouter=require('express').Router();

UserRouter.get('/getdata',async(req,res)=>{
         try {
            const data= await UserModel.find();
            res.json({msg:"Data fetch sucessfully", data:data});
         } catch (error) {
            res.json({msg:error.message});
         };
});

UserRouter.post('/add', async(req,res)=>{
     try {
         const { name, Email,password,confirmpassword}=req.body;
         const user= new UserModel({
            name,
            Email,
            password,
            confirmpassword

         });
          await user.save();
          res.json({msg:"Data post sucessfully"});
     } catch (error) {
        res.json({msg:error.message});
        
     };
});
UserRouter.put('/update/:_id',async(req,res)=>{
      try {
         const{}=req.body;
          const data= await UserModel.findOneAndUpdate(req.params.id,{...req.body});
          res.json({msg:" data update sucessfully",data:data});
      } catch (error) {
       res.json({msg:error.message});
         
      };
});
// UserRouter.put('/update/:id', async (req, res) => {
//    try {
//    const updateData = req.body;
//    const data = await UserModel.findOneAndUpdate({ _id: req.params.id }, updateData, { new: true });

// if (data) {
//    res.json({ msg: "Data updated successfully", data: data });
//    } else {
//    res.status(404).json({ msg: "Data not found" });
//    }
//    } catch (error) {
//    res.status(500).json({ msg: error.message });
//    }
//    });

UserRouter.delete('/delete/:id', async(req,res)=>{
     try {
      const datadelete= await UserModel.findOneAndDelete(req.params.id);
      res.json({msg:" delete sucessfully",data:datadelete});
      
     } catch (error) {
      res.json({msg:error.message});
      
     };
});
module.exports={UserRouter};

