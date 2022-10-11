$(function() {
  var $formDiv = $("#form");
  var $newItem = $("#new-item");
  var $add = $("#add");
  var $inputValue = $("#itemDescription");
  var $counter = $("#counter");
  var $ulList = $("#list-group");
  

  $formDiv.hide();

  $newItem.on('click',function()
  {
    $newItem.hide();
    $formDiv.show();
  })

  $add.on('click',function()
  {
    var newText = $inputValue.val();
    $('li:last').after('<li class="">' + newText + '</li>');
    let valores = $ulList.children().length;
   $counter.text("");
   $counter.text(valores);

    $newItem.show();
    $formDiv.hide();
    $inputValue.val('');
  })



})