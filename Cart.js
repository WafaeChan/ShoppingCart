// var carttotal= document.querySelector('.total')
var myprice= Array.from(document.querySelectorAll('.price'))
var removeitem= document.getElementsByClassName('cross')
var likeitem=  document.getElementsByClassName('heart')

console.log(removeitem)
for (var i=0; i < removeitem.length; i++){
    var xbutton= removeitem[i]
    xbutton.addEventListener('click', function(event){
        var itemremoved= event.target
        itemremoved.parentElement.parentElement.remove()
        totalcart() 
    })
    
}



var quantityitem= document.getElementsByClassName('quantity')
var addq= document.getElementsByClassName('plus')
var subq= document.getElementsByClassName('minus')
var quantityval= parseInt(quantityitem.value)

for (let i=0; i < subq.length; i++){
    let xsubq= subq[i]
    xsubq.addEventListener('click', function(event){
    let itemremoved = event.target
    let q=itemremoved.previousSibling.innerText
if (q > 0) {
    itemremoved.previousSibling.innerHTML= Number(q) - 1
} 
totalcart()
})
}






for (let i=0; i < addq.length; i++){
    let xaddq= addq[i]
    xaddq.addEventListener('click', function(event){
    let itemadded = event.target
    let q=itemadded.nextSibling.innerText

    itemadded.nextSibling.innerHTML= Number(q) + 1
    

totalcart()
})
}


function totalcart(){
let cartcontainer= document.getElementsByClassName('container')[0]
let cartrows= document.getElementsByClassName('rowsprice')


let total= 0

for (let i=0; i < cartrows.length; i++){
let cartrow= cartrows[i]
let priceelement= cartrow.getElementsByClassName('price')[0]

let quantityelement= cartrow.getElementsByClassName('quantity')[0]


let myprice= parseFloat(priceelement.innerText)
let myquantity= quantityelement.innerText
total= total + (Number(myprice) * Number(myquantity))


}
document.getElementById('total').innerText= total


}
