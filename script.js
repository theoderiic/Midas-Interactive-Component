
  $(document).ready(function(){
 
    $('.year').on('click', function() {
        $(this).toggleClass('clicked');
      });
      var slider = document.getElementById("myRange");
      var dolar = document.getElementById("dolar-amount");
      var output = 100;
      var dolarvirgulsuz = document.getElementById("fund");
      var dolarsirket = 1.2;
      var dolaryil = 2; 
      let teslaDeger = [3 , 2.4 , 1.31];
      let appleDeger = [1.2 , 3.4 , 3.6];
      let googleDeger = [1.3 , 4.4 , 1.4];
   
    
      function updateUI(){
        //genel islem
        ilksonuc = output * dolarsirket * dolaryil;


        //virgulu kaldiran fonks
          function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        var commanumber = numberWithCommas(ilksonuc);

        
        $(dolar).text(output);
        const removedDecimal = Math.round(parseFloat(commanumber));
        
        $(dolarvirgulsuz).text(removedDecimal);
        
      }

      updateUI();
     
  



      $('#Cone').on('click', function() {
        
        dolarsirket = 1.2;
       
        if (document.getElementById("one").checked == true) {
          dolaryil = teslaDeger[0];
          updateUI();
          console.log(dolaryil);
        } else if (document.getElementById("two").checked == true){
          dolaryil = teslaDeger[1];
          updateUI();
          console.log(dolaryil);
        } else if (document.getElementById("three").checked == true){
          dolaryil = teslaDeger[2];
          updateUI();
          console.log(dolaryil);
        }
       
        updateUI();
      });

      $('#Ctwo').on('click', function() {
        
        dolarsirket = 1.5;
       
        if (document.getElementById("one").checked == true) {
          dolaryil = appleDeger[0];
          updateUI();
          console.log(dolaryil);
        } else if (document.getElementById("two").checked == true){
          dolaryil = appleDeger[1];
          updateUI();
          console.log(dolaryil);
        } else if (document.getElementById("three").checked == true){
          dolaryil = appleDeger[2];
          updateUI();
          console.log(dolaryil);
        }
       
        updateUI();
      });

      $('#Cthree').on('click', function() {
        
        dolarsirket = 2;
       
        if (document.getElementById("one").checked == true) {
          dolaryil = googleDeger[0];
          updateUI();
          console.log(dolaryil);
        } else if (document.getElementById("two").checked == true){
          dolaryil = googleDeger[1];
          updateUI();
          console.log(dolaryil);
        } else if (document.getElementById("three").checked == true){
          dolaryil = googleDeger[2];
          updateUI();
          console.log(dolaryil);
        }
       
        updateUI();
      });

      $('#one').on('click', function() {
        updateUI();
      if ((document.getElementById("Cone").checked == true)){
        dolaryil = teslaDeger[0];
        console.log(dolaryil);
      } else if  ((document.getElementById("Ctwo").checked == true)) {
        dolaryil = appleDeger[0];
        console.log(dolaryil);
      } else if  ((document.getElementById("Cthree").checked == true)){
        dolaryil = googleDeger[0];
        console.log(dolaryil);
      }
      });

      $('#two').on('click', function() {
        updateUI();
        if ((document.getElementById("Cone").checked == true)){
          dolaryil = teslaDeger[1];
          console.log(dolaryil);
        } else if  ((document.getElementById("Ctwo").checked == true)) {
          dolaryil = appleDeger[1];
          console.log(dolaryil);
        } else if  ((document.getElementById("Cthree").checked == true)){
          dolaryil = googleDeger[1];
          console.log(dolaryil);
        }
        });

        $('#three').on('click', function() {
          updateUI();
          if ((document.getElementById("Cone").checked == true)){
            dolaryil = teslaDeger[2];
            console.log(dolaryil);
          } else if  ((document.getElementById("Ctwo").checked == true)) {
            dolaryil = appleDeger[2];
            console.log(dolaryil);
          } else if  ((document.getElementById("Cthree").checked == true)){
            dolaryil = googleDeger[2];
            console.log(dolaryil);
          }
          });
  

         
      slider.oninput = function () {
        output = this.value;
        updateUI();
        console.log(dolaryil);
      }
      var slider = $("#myRange");
      var fill = $(".bar .fill");

      function setBar () {
        fill.css("width", slider.val() + "%");
      }
      slider.on("input", setBar);
      setBar();
 });
