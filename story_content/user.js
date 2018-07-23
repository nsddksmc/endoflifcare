function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6BVOILHC1oy":
        Script1();
        break;
      case "5nsApcFpdW0":
        Script2();
        break;
      case "6hFoKH1XQsW":
        Script3();
        break;
      case "5lxItkdaGXj":
        Script4();
        break;
      case "5taeR70te2F":
        Script5();
        break;
      case "6fVYHmuPeo2":
        Script6();
        break;
      case "6GbYvCpoVnP":
        Script7();
        break;
      case "5f5PAOkGaDk":
        Script8();
        break;
      case "5kjjBvq49WU":
        Script9();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  $("#tab-customlink").hide();
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script6()
{
  $("#tab-customlink").hide();
}

function Script7()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script8()
{
  $("#tab-customlink").show();
}

function Script9()
{
  window.print();
$(".volume").after($("#tab-customlink"));
$("#tab-customlink").addClass('btn cs-button');

}

