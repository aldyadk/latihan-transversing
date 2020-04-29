// var mainDiv = document.createElement('div');
// // console.log(mainDiv)

// var mainDivAttrId = document.createAttribute('id');
// mainDivAttrId.value = "main"
// // console.log(mainDivAttrId) 

// var mainDivAttrClass = document.createAttribute('class')
// mainDivAttrClass.value = "tes"

// var mainDivAttrStyle = document.createAttribute('style')
// mainDivAttrStyle.value = "color:blue"

// mainDiv.setAttributeNode(mainDivAttrId)
// mainDiv.setAttributeNode(mainDivAttrClass)
// mainDiv.setAttributeNode(mainDivAttrStyle)
// // console.log(mainDiv)

// mainDiv.textContent = 'blablabla';
// // mainDiv.innerText = 'blablabla';
// // mainDiv.innerHTML = '<h1>blablabla</h1>';

// document.body.append(mainDiv)
// // document.body.prepend(mainDiv)


// // Selanjutnya, kita akan mengulangi hal yang serupa untuk menambahkan <div id="inside-main">
// var insideMainDiv = document.createElement('div');

// // Selain menggunakan .value kemudian setAttributeNode, kita bisa menggunakan shorthand berikut
// insideMainDiv.setAttribute('id', 'inside-main');

// // <div id="inside-main"> kita sudah siap, saatnya di append sebagai child ke <div id="main">
// mainDiv.append(insideMainDiv);




// // Selanjutnya, kita akan mencoba membuat sebuah <h1> dengan isi teks didalamnya.
// var h1 = document.createElement('h1');

// // Untuk membuat isi teks di dalam h1, kita bisa menggunakan createTextNode
// var h1Text = document.createTextNode('Heading Sample 1');

// // Kita append text ke dalam <h1>
// h1.appendChild(h1Text);
// var br = document.createElement('br')
// h1.append(br)
// h1.append('Heading Sample 1')

// // Kemudian, kita append h1 sebagai child dari <div id="inside-main">
// insideMainDiv.appendChild(h1);
// // insideMainDiv.removeChild(h1);

var text = "Heading Sample 1"
document.body.innerHTML += `
    <div id="main" style="color:blue">
        blablabla
        <div id="inside-main">    
            <h1>${text} <br> ${text}</h1>
        </div>
    </div>
`