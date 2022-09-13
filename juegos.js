function generarPDF() {

    let version = document.getElementById("version").value;
    let personaje = document.getElementById("personaje").value;
    let plataforma = document.getElementById("plataforma").value;
    let numero = document.getElementById("Cantidad").value;
    let nombre = document.getElementById("Nombre").value;
    let juegos = document.getElementById("juego");

    if(juegos.Checked == true){
      juegos = "si";
    }else{
      juegos = "no";
    }
   

    var documentPDF = new jsPDF();
    documentPDF.setTextColor(0,0,255);
    documentPDF.setFont("cursive");
    documentPDF.setFontSize(25);
    documentPDF.text(70, 10, 'Reporte de Ranking');
    documentPDF.setFontSize(16);
    documentPDF.text(20, 30, 'fecha: ' + new Date());
    documentPDF.setFontSize(12,);
    documentPDF.text(20, 50,  "version:"  +  version);
    documentPDF.text(20, 60, "personaje: "  +  personaje);
    documentPDF.text(20, 70, "plataforma:" +  plataforma);
    documentPDF.text(20, 80, "Cantidad:" +  numero);
    documentPDF.text(20, 90, "Nombre:" +  nombre);
    documentPDF.text(20, 100, "juegos:" +  juegos);
    documentPDF.save("mario bros");

  }