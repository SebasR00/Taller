function citaSisben(){
    let sisben = document.getElementById("sisben").value; 
    let categoria = document.getElementById("categoria").value; 
  
    var documentPDF = new jsPDF();
    documentPDF.setFontSize(12,);
    documentPDF.text(20, 100,  "sisben:"  +  sisben);
    documentPDF.text(20, 110, "categoria: "  +  categoria);
    documentPDF.save("citas ");




}