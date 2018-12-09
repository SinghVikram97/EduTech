let express=require('express');
let route=express.Router();
const {Product}=require('../db/models');

route.delete('/delete/:itemcode',(req,res)=>{
   let itemcode=(req.params.itemcode);
   console.log('Item code is '+itemcode);
   Product.destroy({
       where:{
           itemcode:itemcode
       }
   }).then((affectedRows=>{
       if(affectedRows===0){
           res.send('No matching item code in database')
       }
       else{
           res.send('Sucessfuly Deleted');
       }
   }));
    res.redirect('/');
});

module.exports=route;