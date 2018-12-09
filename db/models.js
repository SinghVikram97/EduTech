const Sequelize=require('sequelize');

const db = new Sequelize(
    'itemsdb',
    'itemsadmin',
    'itempass',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
);

const Product=db.define(
    'Product',{
    'itemcode':{
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false,
        unique:true,
        primaryKey:true
    },
    'itemname':{
        type:Sequelize.DataTypes.STRING,
        allowNull:false,
    },
    'unitprice':{
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false
    },
    'quantity':{
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false
    },
    'price':{
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false
    }
});

db.sync().then(()=>{
    console.log("Database is ready");
}).catch((err)=>{
    console.log(err.message);
});

module.exports={
    Product
};