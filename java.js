$(function() {
  var $formDiv = $("#form");
  var $newItem = $("#new-item");
  var $add = $("#add");
  var $inputValue = $("#itemDescription");
  var $counter = $("#counter");
  var $ulList = $("#list-group");
  var countId  = 0;
  
  $ulList.on("click",function(e)
  {

    if (e.target.className == "complete")
    {
      $ulList.find("#" + e.target.id).animate({
        opacity:0.0,
        paddingLeft: '+=80'
      },500, function()
      {
        $(this).remove();
      })
    }
 
    var newItem =  $ulList.find("#" + e.target.id);
    console.log(newItem);
    newItem.removeClass("hot");
    newItem.addClass("complete");
    $ulList.find("#" + e.target.id).remove();
    $ulList.find('li:last').after(newItem);

  })



  $formDiv.hide();

  $newItem.on('click',function()
  {
    $newItem.hide();
    $formDiv.show();
  })

  $add.on('click',function()
  {
    countId += 1;
    var newText = $inputValue.val();
    $('li:last').after(`<li class="hot" id="newItem${countId}">  ${newText} </li>`);
    let valores = $ulList.children().length;
   $counter.text("");
   $counter.text(valores);

    $newItem.show();
    $formDiv.hide();
    $inputValue.val('');
  })
})