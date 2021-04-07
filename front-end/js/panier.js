var PagePanier = '';
var TotalPrice = '';
var sumPrice = 0;
tableauPaniers = JSON.parse(localStorage.getItem('selectedTeddies'))
//Parcourir le panier
for (i = 0; i < tableauPaniers.length; i++) {

    
    
    var id = tableauPaniers[i].id;
    var qty = tableauPaniers[i].quantity;

    fetch('http://localhost:3000/api/teddies/' + id) 
    .then(function(response){
        return response.json()
    })
    .then(function (produit){
    
                
                //Récupération de l'image, du prix et du nom liés à l'Id
                
    
                PagePanier = '<img class="Img_produit" src="' + produit.imageUrl + '">';
                PagePanier = PagePanier + '<p class="prix">' + produit.price/100 + '€</p>';
                PagePanier = PagePanier + '<h2 id="productName">' + produit.name + '</h2>';
                PagePanier = PagePanier + '<p id="id">' + produit._id + '</p>';
                PagePanier = PagePanier + '<p id="qty">' + qty + '</p>';
                PagePanier = PagePanier + '<button id="remove">Supprimer</button>';
                document.getElementById("products").innerHTML += PagePanier;
                
                sumPrice += (produit.price/100) * qty
                TotalPrice = '<p>' + sumPrice + '</p>';
                document.getElementById("totalPrice").innerHTML = TotalPrice;

                document.getElementById("remove").addEventListener("click", function() {
                    localStorage.removeItem("selectedTeddies"[i]);
                })

})   
}



    