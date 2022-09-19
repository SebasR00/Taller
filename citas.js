function generarPDF() {

    let hora = document.getElementById("hora").value;
    let fecha = document.getElementById("fecha").value;
    let citas = document.getElementById("cit").value;
   

    


    var documentPDF = new jsPDF();
    documentPDF.setTextColor(0,0,255);
    documentPDF.setFont("cursive");
    documentPDF.setFontSize(25);
    documentPDF.text(70, 10, 'Reporte de Ranking');
    documentPDF.setFontSize(16);
    documentPDF.text(20, 30, 'fecha: ' + new Date());
    documentPDF.setFontSize(12,);
    documentPDF.text(20, 40, "cit" + citas);
    documentPDF.text(20, 50,  "fecha:"  +  fecha);
    documentPDF.text(20, 60, "hora: "  +  hora);
    documentPDF.save("citas medicas");

  }