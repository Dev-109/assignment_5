$(document).ready(function(){
var flag = 0;
    $("#row_header1").click(function(event){
    

        
        if(flag==0){
        d3.selectAll("#row1").style("background-color", "#e0e0ff");
        flag =1;
        }
        else{
            d3.selectAll("#row1").style("background-color", "white");
            flag = 0;
        }
        

      });


      $("#row_header2").click(function(event){
    
        if(flag==0){
        d3.selectAll("#row2").style("background-color", "#e0e0ff");
        flag =1;
        }
        else{
            d3.selectAll("#row2").style("background-color", "white");
            flag = 0;
        }
        

      });

      $("#row_header3").click(function(event){
    
        if(flag==0){
        d3.selectAll("#row3").style("background-color", "#e0e0ff");
        flag =1;
        }
        else{
            d3.selectAll("#row3").style("background-color", "white");
            flag = 0;
        }
        

      });

     



});
