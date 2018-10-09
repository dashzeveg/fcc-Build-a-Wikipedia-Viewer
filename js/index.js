$(document).ready(function() {
	$("#inputSuccess1").on("focus", function() {
		$(".randomLink").animate({
			marginTop: "50px"
		}, 500);
		$("#inputSuccess1").css("width", "100%");
	});
	$("#inputSuccess1").on("focusout", function() {
		if ($("#inputSuccess1").val() == "") {
			$(".randomLink").animate({
				marginTop: "200px"
			}, 500);
			$("#inputSuccess1").css("width", "230px");
      $("#content").html('');
		} else {
			$("#inputSuccess1").css("width", "100%");
		}
	});
	$("#inputSuccess1").keypress(function(event) {
		if (event.which == 13 && $("#inputSuccess1").val() != "") {
      var searchTerm=$("#inputSuccess1").val();
      var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm + "&format=json&callback=?";
			$.ajax( {
    url: url,
    dataType: 'json',
    type: 'POST',
    headers: { 'Api-User-Agent': 'Example/1.0' },
    success: function(json) {
      $("#content").html('');
      $("#content").hide();
      var str='';
      for(i=0; i<json[1].length; i++){
        str+='<a href="'+json[3][i]+'" rel="nofollow" target="_blank" class="wikiLink" style="text-decoration: none;"><div class="wikiBox wikiLink'+i+'"><h4>'+json[1][i]+'</h4>'+json[2][i]+'</div></a>';
      }
      $("#content").html(str);
      $("#content").slideDown(800, "swing").show('slow');
    }
} );
		}
	});
});