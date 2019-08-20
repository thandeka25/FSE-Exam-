
    $(document).ready(function(){
      $(".add-row").click(function(){
          var Br = $("#brand").val();
          var Sty = $("#style").val();
          var Col = $("#color").val();
          var Zuva = $("#purdate").val();
          var Mari = $("#shoeprice").val();
          var markup = "<tr><td>" + Br +"</td><td>" + Sty + "</td><td>" + Col +  "</td><td>" + Zuva +  "</td><td>" + Mari +  "</td></tr>";
          $("#dataTable tbody").append(markup);
      });
    })