function generarPDF() {
  
    let hora = document.getElementById("hora").value;
    let fechaInicio = document.getElementById("inicio").value;
    let fechaFinal = document.getElementById("final").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let cedula =  document.getElementById("cedula").value;
    let motivo =  document.getElementById("motivo").value;
    let sisben = document.getElementById("sisben"); 
    let categoria = document.getElementById("categoria"); 
    
    
    if(sisben.checked==true){
      sisben ="si";
    }else{
      sisben = "no";
    }
    if(categoria.checked==true){
      categoria = "a";
    }else{
      categoria = "b";
    }
    

    var documentPDF = new jsPDF();
    documentPDF.setTextColor(37, 74, 115);
    documentPDF.setFont("roboto");
    documentPDF.setFontSize(25);
    documentPDF.text(80, 10, 'Citas Medicas');
    documentPDF.setFontSize(16);
    documentPDF.text(20, 30, 'fecha: ' + new Date());
    documentPDF.setFontSize(12,);
    documentPDF.text(20, 40,  "nombre:"  +  nombre);
    documentPDF.text(20, 50,  "apellido:"  +  apellido);
    documentPDF.text(20, 60,  "cedula:"  +  cedula);
    documentPDF.text(20, 70,  "motivo:"  +  motivo);
    documentPDF.text(20, 80,  "inicio:"  +  fechaInicio);
    documentPDF.text(20, 90,  "final:"  +  fechaFinal);
    documentPDF.text(20, 100, "hora: "  +  hora);
    documentPDF.text(20, 110, "sisben: "  +  sisben);
    documentPDF.text(20, 120, "categoria: "  +  categoria);
    documentPDF.save("citas medicas");
 }
 