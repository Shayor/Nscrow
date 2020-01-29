$(document).ready(function() {
    var countries = $("#countries");
    $.ajax({
        type: "GET",
        url: "js/countries.json", // Using our resources.json file to serve results
        success: function(result) {
          console.log(result);
          var output ="";
          for (var i in result) {
            output +=
              "<option>" +
              result[i].name +
              "</option>"
          }
          console.log(output)
          $(countries).append(`${output}`)
        //   displayResources.append(output);
        //   $("table").addClass("table");
        }
      });
  });
  