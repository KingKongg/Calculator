$(document).ready(function(){
  let prevVal="";
  let newVal="";
  let resultVal="";
  let mathOperator="";
  $('#calcScreen').html("0");
  
  $('.clearBtn').click(function(){
    prevVal="";
    newVal="";
    resultVal="";
    mathOperator="";
    $('#calcScreen').html("0");
  });

  
  $('.numBtn').click(function(){
    if(resultVal){
      newVal=this.value;
      resultVal="";
    }
      else{
        newVal += this.value
        console.log(newVal);
      }
      if(newVal.length >= 12){
        alert("You can only input a maximum of 11 digits :)")
        let shortnedStr="";

        for(let i=0;i<11;i++){
          shortnedStr += newVal.charAt(i);
        }
        newVal=shortnedStr;
      }
      $('#calcScreen').html(newVal);
    }
    );


    $('#clearEntry').click(function(){
      newVal= newVal.slice(0,-1);
      $('#calcScreen').html(newVal);
    });


    $('#percentage').click(function(){
     if(resultVal){
        resultVal =parseFloat(resultVal);
        resultVal =resultVal /100;
        resultVal =resultVal.toString();
        $('#calcScreen').html(resultVal);    
      }

      else if(newVal){
        newVal =parseFloat(newVal);
        newVal =newVal / 100;
        newVal =newVal.toString();
        $('#calcScreen').html(newVal);
      }
    });

    

    $('#negative').click(function(){
      if(resultVal){
        resultVal =parseFloat(resultVal);
        resultVal =resultVal *-1;
        resultVal =resultVal.toString();
        $('#calcScreen').html(resultVal);
      }

      else if(newVal){
        newVal =parseFloat(newVal);
        newVal =newVal * -1;
        newVal =newVal.toString();
        $('#calcScreen').html(newVal)
      }


    });

  $('.operatorBtn').click(function(){
  
    if(!resultVal){
      prevVal=newVal;
    }

    else{
      prevVal=resultVal;
    }
    newVal="";
    mathOperator = this.value;
    resultVal="";
    $('#calcScreen').html('');
  });

  $('.decimalBtn').click(function(){
    if( !newVal.includes(".")){
      newVal += ".";
      $('#calcScreen').html(newVal);
    }
  })



  $('#operateSum').click(function(){
    prevVal=parseFloat(prevVal);
    newVal=parseFloat(newVal);

    function shortendResultStr(){
      resultVal =resultVal.toString();
      let shortnedResStr="";
    
    if(resultVal.length>= 12){
            
            let shortnedResStr="";    
            for(let i=0;i<11;i++){
              shortnedResStr += resultVal.charAt(i);
            }
            return parseFloat(resultVal=shortnedResStr);
          }
    
    };
    
  
    switch(mathOperator){
      case '+':
        resultVal= prevVal + newVal;
        shortendResultStr(resultVal);
        break;
        
      case '/':
          resultVal= prevVal / newVal;
          shortendResultStr(resultVal);
          break;
      
      case '*':
        resultVal= prevVal * newVal;
        shortendResultStr(resultVal);

        break;
        
      case '-':
        resultVal =prevVal - newVal;
        shortendResultStr(resultVal);

        break;
  
        default:
          resultVal= newVal;
    }
    prevVal=resultVal;
    $('#calcScreen').html(resultVal);    

  });


});


