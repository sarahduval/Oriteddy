var liste = '';
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        for (i = 0; i < response.length; i++) {
            const teddy = response[i];
            console.log(teddy);
             
            liste = liste + '<li id="productsList"><a href="Page_produit.html?id=' + teddy._id + '"><img class="Img_produit" src="' + teddy.imageUrl + '">';
            liste = liste + '<div id="homeDescr'+teddy._id+'" class="homeDescr">'
            liste = liste + '<h2>' + teddy.name + '</h2>';
            liste = liste + '<p class="price">' + teddy.price/100 + '€</p>';
            liste = liste + '</div>'
            liste = liste + '</a>';
            liste = liste + '</li>';
        }
        console.log(liste); 
        document.getElementById('teddies').innerHTML = liste;
    }
};
request.open("GET", "http://localhost:3000/api/teddies");
request.send();