$('#percent').on('change', function(){
    var val = parseInt($(this).val());
    var $circle = $('#svg #bar');
    
    if (isNaN(val)) {
     val = 60; 
    }
    else{
      var r = $circle.attr('r');
      var c = Math.PI*(r*2);
     
      if (val < 0) { val = 0;}
      if (val > 60) { val = 60;}
      
      var pct = ((60-val)/60)*c;
      
      $circle.css({ strokeDashoffset: pct});
      
      $('#cont').attr('data-pct',val);
    }
  });