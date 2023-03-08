$(document).ready(function(){
    $("#submit").click(function(){
        $("#div").submit();
    });
});
 $('#pnu').blur(function(e) {
        if (validatePhone(pnu)) {
          return true;

        }
        else {
           alert("Not a valid Phone Number");
        }
    });


function validatePhone(pnu)
{
  var phoneno = /^\d{10}$/;
  if(pnu.value.match(phoneno))
  {
      return true;
  }
  else
  {
     return false;
  }
}

var rowIdx = 0;
  $(".Save").click(function(){
  var pname = $("#pname").val();
  var pnu= $("#pnu").val();
  let display = $('table').css('display')
  if(display == 'none')
  $('table').css('display', 'table')
  $("tbody").append('<tr id="R${++rowIdx}" data-name="'+pname+'" data-numb="'+pnu+'"><td>'+pname+' </td><td>'+pnu+'</td><td><button class="btn1 btn-edit" type="button"><i class="fa-solid fa-pen"></i></button></td><td><button class="btn" type="button"><i class="fa-solid fa-trash"></i></button></button></td></tr>');
  });

$('tbody').on('click', '.btn', function () {
    $(this).closest('tr').remove();
    let display = $('table').css('display')
    if(display == 'none')
    $('table').css('display', 'table')
 });
$('tbody').on('click', '.btn-edit', function () {
 var pname = $(this).parents("tr").attr('data-name');
 var pnu = $(this).parents("tr").attr('data-numb');
        $(this).parents("tr").find("td:eq(0)").html('<input name="edit_name" value="'+pname+'">');
        $(this).parents("tr").find("td:eq(1)").html('<input name="edit_numb" value="'+pnu+'">');
        $(this).parents("tr").find("td:eq(2)").prepend("<button class='btn2 btn-info btn-update'>UPDATE</button><button class='btn3 btn-info btn-cancel'>CANCEL</button>");
        $(this).hide();
});


$('tbody').on('click', '.btn-update', function () {
var pname = $(this).parents("tr").find("input[name=edit_name]").val();
var pnu = $(this).parents("tr").find("input[name=edit_numb]").val();
var phoneno = /^\d{10}$/;
  if(pnu.match(phoneno))
  {
     $(this).parents("tr").find("td:eq(0)").text(pname);
     $(this).parents("tr").find("td:eq(1)").text(pnu);

       $(this).parents("tr").attr('data-name', pname);
       $(this).parents("tr").attr('data-numb',pnu);
       $(this).parents("tr").find('.btn-edit').show();
       $(this).parents("tr").find('.btn-cancel').remove();
       $(this).remove();
  }
  else
  {
     alert("Enter valid number")
  }

});
$('tbody').on('click', '.btn-cancel', function () {
 var pname = $(this).parents("tr").attr('data-name');
 var pnu = $(this).parents("tr").attr('data-numb');
$(this).parents("tr").find("td:eq(0)").text(pname);
$(this).parents("tr").find("td:eq(1)").text(pnu);
$(this).parents("tr").find('.btn-edit').show();
$(this).parents("tr").find('.btn-update').remove();
$(this).remove();
});
