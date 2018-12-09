let express=require('express');
let route=express.Router();
const {Product}=require('../db/models');

route.get('/',(req,res)=>{
    res.send('Hello world!!');
});

route.post('/',(req,res)=>{
    let itemcode=req.body.itemcode;
    let itemname=req.body.itemname;
    let unitprice=req.body.unitprice;
    let quantity=req.body.quantity;
    Product.create({
        itemcode:itemcode,
        itemname:itemname,
        unitprice:unitprice,
        quantity:quantity,
        price:(quantity*unitprice)
    }).then((createdProduct)=>{
        res.redirect('/');
    })
        .catch((err)=>{
            res.send(err.message);
        })
});

module.exports=route;