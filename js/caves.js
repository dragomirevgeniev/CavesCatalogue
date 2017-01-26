function loadXMLDoc(filename){
    if (window.ActiveXObject) {
      xhttp = new ActiveXObject("Msxml2.XMLHTTP");
    }
    else {
      xhttp = new XMLHttpRequest();
    }
    
    xhttp.open("GET", filename, false);
    try {
        xhttp.responseType = "msxml-document"
    } catch(err) {} // Helping IE11
    xhttp.send("");
    return xhttp.responseXML;
}

function displayResult(number) {
     xml = loadXMLDoc("caves.xml");
     if(number == 1) {
        xsl = loadXMLDoc("caves.xsl");
     } else if (number == 2) {
        xsl = loadXMLDoc("cavesSortByDen.xsl");
     } else if (number == 3) {
        xsl = loadXMLDoc("cavesSortByType.xsl");
     } else if (number == 4) {
        xsl = loadXMLDoc("cavesSortByLength.xsl");
     } else if (number == 5) {
        xsl = loadXMLDoc("cavesSortByRegion.xsl");
     } else if (number == 6) {
        xsl = loadXMLDoc("cavesSortByName.xsl");
     }


    if (window.ActiveXObject || xhttp.responseType == "msxml-document") { // code for IE
      ex = xml.transformNode(xsl);
      document.getElementById("example").innerHTML = ex;
    } else if (document.implementation && document.implementation.createDocument) { // code for Chrome, Firefox, Opera, etc.
      xsltProcessor = new XSLTProcessor();
      xsltProcessor.importStylesheet(xsl);
      resultDocument = xsltProcessor.transformToFragment(xml, document);
      document.getElementById("example").innerHTML = "";
      document.getElementById("example").appendChild(resultDocument);
    }
}
