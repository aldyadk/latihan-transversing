var contohDiv1 = document.getElementById('contoh-div-1');
console.log('ini div 1', contohDiv1);
var contohP1 = contohDiv1.children[0]
console.log('ini p1',contohP1);
var strongElm = contohP1.children[0];
console.log('ini strongElm',strongElm);

var strElm = contohDiv1.children[0].children[0];
console.log('ini juga strongElm', strElm);

var emElm = contohDiv1.children[0].children[1];
console.log('ini emElm', emElm);


var contohDiv1 = document.getElementById('contoh-div-1');
console.log('ini div 1', contohDiv1);
var h1Elm = contohDiv1.previousElementSibling;
console.log('ini h1Elm', h1Elm);
var justNull = h1Elm.previousElementSibling;
console.log('ini justNull', justNull);

var jstNll = contohDiv1.previousElementSibling.previousElementSibling;
console.log('ini juga justNull', jstNll);