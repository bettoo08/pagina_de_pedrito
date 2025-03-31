function factura_js() {

    var n1 =(document.getElementById("precio_producto").value);
    var n2 =(document.getElementById("Cantidad_producto").value);
    var n3 =(document.getElementById("subtotal_productos").value); 
    var n4 =(document.getElementById("impuesto_producto").value); 
    var n5 =(document.getElementById("total_").value); 
    

    
    var n1 = (n1 * n2);
    var n3 = (n1 + n2 );
    var n4 = (n4 * 0.015);
    var total = (n3 + n4);

    
    document.getElementsByName("subtotal")[0].value = t;
    document.getElementsByName("total")[0].value = t;
    }