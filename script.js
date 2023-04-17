function calculate() {
    var a = parseFloat(document.getElementById("a").value);
    var a = a / 2;
    var h = parseFloat(document.getElementById("h").value);
        
    var r = (a*a + h*h) / (2*h);
    var cos = (1 - (2*a*a)/(r*r));
    var rad = Math.acos(cos);
    var deg = rad * 180 / Math.PI;
    var l = (Math.PI*r*deg) / 180
    var c = 2*Math.PI*r
    
    document.getElementById("result").innerHTML = "R = " + r.toFixed(3) + "<br>α = " + deg.toFixed(3) + "<br>ℓ = " + l.toFixed(3) + "<br>c = " + c.toFixed(3);
  }
  
