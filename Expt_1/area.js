function rectangle() {
  var l = parseInt(document.getElementById("length").value);
  var b = parseInt(document.getElementById("breadth").value);
  if (l == null || b == null) alert("Invalid input");
  if (l < 0 || b < 0) alert("Invalid input");
  else document.getElementById("area_rectangle").innerHTML = l * b;
}
function circle() {
  var r = parseInt(document.getElementById("radius").value);
  if (r < 0) alert("Invalid input");
  else document.getElementById("area_circle").innerHTML = (22 / 7) * r * r;
}
function triangle() {
  var a = parseInt(document.getElementById("sidea").value);
  var b = parseInt(document.getElementById("sideb").value);
  var c = parseInt(document.getElementById("sidec").value);
  if (a < 0 || b < 0 || c < 0 || a + b < c || a + c < b || b + c < a)
    alert("Invalid input");
  else {
    const s = (a + b + c) / 2;
    document.getElementById("area_triangle").innerHTML = Math.sqrt(
      s * (s - a) * (s - b) * (s - c)
    );
  }
}
