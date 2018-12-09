let express=require('express');
let route=express.Router();
const {Product}=require('../db/models');

route.put('/update/:itemcode',(req,res)=>{
   Product.update(
       {
           itemcode:req.body.itemcode,
           itemname:req.body.itemname,
           unitprice:req.body.unitprice,
           quantity:req.body.quantity,
           price:(req.body.unitprice)*(req.body.quantity)
       },
        {
            where:{
                itemcode:req.params.itemcode
            }
       }
   ).then((result)=>{
       console.log(result);
   }).catch((err)=>{
       console.log(err);
   })
});

module.exports=route;