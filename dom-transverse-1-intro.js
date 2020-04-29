// document.getElementsByTagName('body')
// document.querySelector('body')
var body = document.body;
console.log('ini body', body);
var bodyChilds = body.children;
console.log('ini children dari body', bodyChilds);

var contohDiv1 = document.getElementById('contoh-div-1');
console.log('ini div 1', contohDiv1);
var contohDiv1Childs = contohDiv1.children;
console.log('ini anaknya',contohDiv1Childs);
var contohDiv1FirstChild = contohDiv1Childs[0];
console.log('ini anak pertamanya',contohDiv1FirstChild);

var contohDiv2 = document.getElementById('contoh-div-2');
console.log('ini div 2',contohDiv2);
var contohDiv2Childs = contohDiv2.children;
console.log('ini anaknya',contohDiv2Childs);
for (var n = 0; n < contohDiv2Childs.length; n++) {
    var contohDiv2NthChild = contohDiv2Childs[n];
    console.log(`ini anak ke ${n+1}`,contohDiv2NthChild);
}

var contohP1 = document.querySelector('#contoh-p-1');
console.log('ini p1',contohP1);
var contohP1Parent = contohP1.parentNode;
console.log('ini parentnya parentNode',contohP1Parent);
var contohP1ParentEL = contohP1.parentElement;
console.log('ini parentnya parentElement',contohP1ParentEL);





