// var, let , const

var data = "ZXcZXCzx!!";

(function demo1() {
  var data = "function scope!!";
  document.getElementById("demo1").innerHTML = data; // web api // function scope!!
})();

(function demo2() {
  var data = "demo2";
  document.getElementById("demo2").innerHTML = data; // web api // demo2!!
})();

{
  document.getElementById("demo3").innerHTML = data; // web api // ZXcZXCzx!!
}
{
}
