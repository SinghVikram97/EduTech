let addBtn=document.getElementById('addBtn');
let deleteBtn=document.getElementById('deleteBtn');
let saveBtn=document.getElementById('saveBtn');
let saveDeleteBtn=document.getElementById('saveDeleteBtn');
let updateBtn=document.getElementById('updateBtn');

saveBtn.addEventListener('click',()=>{
    let itemcode=document.getElementById('itemCode').value;
    let itemname=document.getElementById('itemName').value;
    let unitprice=document.getElementById('unitPrice').value;
    let quantity=document.getElementById('quantity').value;
    $.post('/addItem',
        {itemcode:itemcode,itemname:itemname,unitprice:unitprice,quantity:quantity,price:(unitprice*quantity)},
        (data,status)=>{
            console.log(`Data is here ${data}`);
            location.reload();
            if(data==='Validation error'){
                alert('Incorrect data please try again!');
            }
        }
    )
});

saveDeleteBtn.addEventListener('click',()=>{
    let deleteItemCode=document.getElementById('deleteItemCode').value;
    $.ajax({
        url:`delete/${deleteItemCode}`,
        type:'DELETE'
    }).done(()=>{
        console.log("Hi");
        location.reload();
    });
    location.reload();

});

updateBtn.addEventListener('click',()=>{
    let itemcode=document.getElementById('itemCodeU').value;
    let itemname=document.getElementById('itemNameU').value;
    let unitprice=document.getElementById('unitPriceU').value;
    let quantity=document.getElementById('quantityU').value;
    $.ajax({
        url:`update/${itemcode}`,
        type:'PUT',
        data:{
            itemcode:itemcode,
            itemname:itemname,
            unitprice:unitprice,
            quantity:quantity
        }
    }).done(()=>{
        location.reload();
    });
    location.reload();
});

