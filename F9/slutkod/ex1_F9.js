//ex1_F9.js

/*

	I följande räknestuga/workshop/F9 skall vi med JavaScript modifiera tabellen i ex1_F9.html.
	Om användaren har JavaScript aktiverat i sin webbläsare skall vi när sidan är
    laddad och Document Object Model (DOM) finns byggd exekvera en anonym callback funktion i vilken vi
    skall anropa funktionen createColumns(). I createColumns() skall vi lägga till en ny kolumn 
    till varje rad och dess värde skall vara summan av alla talen för aktuell rad där den nya kolumnen finns.

    Observera att ibland saknas text i en kolumn, ibland innehåller den ett mellanslag,
    ibland innehåller den vanligt text men oftast text som kan göras om till ett numeriskt värde.
    Observera också att i första uppgiften tillåter vi oss inte att använda egenskaperna:
    innehHTML, outerHTML, textContent eller innerText. Den enda globala variabeln, en objektreferens, som tillåts är dessutom oData!

	Därefter skall vi lägga till lyssnare för tabellen: click (inklusive timer-metoderna setInterval() och clearInterval()), 
    mouseover och mouseout samt fundera lite kring användadet av e.target, e.currentTarget och this.
	
*/

'use strict';

let oData = {
    counter : 0,
    timerId : null,
    h1Ref : document.querySelector("div h1")
};

addEventListener('load', function() {

    console.log('load');

    let tableRef = document.querySelector('table');
    let tableParent = tableRef.parentElement;

    console.log( tableRef, tableParent );

    tableRef.remove();

    console.log( tableRef, tableParent );

    createColumns(tableRef);


    tableParent.appendChild(tableRef);



});

function createColumns(tableNodeRef) {

    //tableNodeRef består av hela tabellen...

    console.log('createColumns');

    let sum = 0;
    let trRef = null;
    let tdRef = null;
    let tdTextRef = null;
    let trRefs = tableNodeRef.querySelectorAll('tr');
    //trRefs består av alla tabellrader...
    
    console.log( trRefs );

    for(let i = 0; i < trRefs.length; i++) {

        trRef = trRefs.item(i); 
        //trRef består av en tabellrad...

       // console.log( trRef.firstChild ); //Vad skrivs ut i consolen och varför?
        
        sum = sumOfAllColumns(trRef);

        tdRef = document.createElement('td');
        tdTextRef = document.createTextNode(sum);

        tdRef.appendChild(tdTextRef);
        trRef.appendChild(tdRef);

        tdRef.style.fontWeight = 'bold';
        tdRef.style.backgroundColor = 'lightblue';

    }

}

function sumOfAllColumns(trNodeRef) {
    //trNodeRef består av en tabellrad...

    //Här kommer det mer kod sedan...

    console.log('sumOfAllColumns');

    let sum = 0;
    let firstChildValue = 0;
    let tdRef = null;
    let tdRefs = trNodeRef.querySelectorAll('td');

    for(let j = 0; j < tdRefs.length; j++) {

        tdRef = tdRefs.item(j);

        if(tdRef.firstChild === null || tdRef.firstChild.nodeValue.trim() === '' || isNaN(tdRef.firstChild.nodeValue)) {

            tdRef.style.backgroundColor = 'red';
            firstChildValue = 0;

        } else {

            firstChildValue = parseInt(tdRef.firstChild.nodeValue);

        }

        sum += firstChildValue;


    }

    return sum;

}