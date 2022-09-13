function graficos(){
    let espacio = document.getElementById("graf");
    let mario = document.getElementById('marioBros').value;
    let luigi = document.getElementById("luigi").value;
    let princesa = document.getElementById("princesa").value;

    var trace1 = {
        x: ["¿Le gustó jugar Super Mario ?", "¿Qué tanto le gusto jugar Super Mario?", "¿Le guta el Diseño de la pagina?"],
        y: [mario, luigi, princesa],
        mode: 'markers',
        marker: {
            size: [20, 40, 25, 10, 60, 90, 30],
        }
    };
    
    var data = [trace1];
    
    var layout = {
        title: 'Create a Static Chart',
        showlegend: false
    };
    
    Plotly.newPlot(espacio , data, layout, {staticPlot: true});
    

 
//var traceA = {
  //x: ["¿Le gustó jugar Super Mario ?", "¿Qué tanto le gusto jugar Super Mario?", "¿Le guta el Diseño de la pagina?"],
  //y: [mario, luigi, princesa],
  //type: 'scatter'
//};
 
//var data = [traceA];
 
//var layout = {
  //title:'A graf in Plotly'
//};
//Plotly.newPlot( espacio, data, layout );

}
