function graficoBarras(){
    let graficaUno = document.getElementById("grafUno");
    let mario = document.getElementById('marioBros').value;
    let luigi = document.getElementById("luigi").value;
    let princesa = document.getElementById("princesa").value;
var trace1 = {
    type: 'bar',
    x: ["¿Le gustó jugar Super Mario ?", "¿Qué tanto le gusto jugar Super Mario?", "¿Le guta el Diseño de la pagina?"],
    y: [mario, luigi, princesa],
    marker: {
        color: '#C8A2C8',
        line: {
            width: 2.5
        }
    }
  };
  
  var data = [ trace1 ];
  
  var layout = { 
    title: 'Responsive to window\'s size!',
    font: {size: 18}
  };
  
  var config = {responsive: true}
  
  Plotly.newPlot(graficaUno, data, layout, config );
}
