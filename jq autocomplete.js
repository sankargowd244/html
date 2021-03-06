<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>jQuery UI Datepicker - Default functionality</title>
  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <link rel="stylesheet" href="/resources/demos/style.css">
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  </head>
<body>
 <div id="subject_select_dialog" class="ui-dialog-content ui-widget-content" style="width: auto; min-height: 0px; height: 141px; " scrolltop="0" scrollleft="0">
   <input id="subject_select" name="subject" size="70" type="text" class="ui-autocomplete-input" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true">
   <button id="subject_select_clear" name="button" type="clear">Clear</button>
   ...
</div>>
 <scrip>
 $("#subject_select").autocomplete({
  source: "/users/autocomplete", 
  minLength: 2,
  focus: function( event, ui ) {
    $( "#subject_select" ).val( ui.item.label );
    return false;
  },
  select: function(event, ui) {
    $("#subject_select").val( ui.item.label )
    $("#subject_select_results").html( ui.item.label )
    $("#subject_select_id").val( ui.item.value )
    return false;
  }
});
  </script>

 
</body>
</html>