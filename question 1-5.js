<!-- question 1 starts here -->
<script type="text/javascript">
let thisday = new Date();
  let day = thisday.getDay();
  let daylist = ["Sunday","Monday","Tuesday","Wednesday ",
                  "Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");
  let hour = thisday.getHours();
  let min = thisday.getMinutes();
  let sec = thisday.getSeconds();
  let period = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && period===' PM ')
    {
      if (min===0 && sec===0)
      {
        hour=12;
        period=' Noon';
        }
        else
        {
        hour=12;
        period=' PM';
        }

    }
    if (hour===0 && period===' AM ')
    {
      if (min===0 && sec===0)
      {
        hour=12;
        period=' Midnight';
      }
      else
      {
        hour=12;
        period=' AM';
      }
    }

console.log("Current Time : "+hour + period + " : " + min + " : " + sec);
	</script>
<!--question 1 ends -->

<!--question 2 starts here -->

<button onclick="prnt()">Print this page</button>

<script>
function prnt()
{
    window.print();
}

<p>Click the button above to print the current window.</p>

console.log(myFunction);
</script>

<!--question  3 starts here -->

<script>
let thisday = new Date();
let dd = today.getDate();

let mm = thisday.getMonth()+1;
let yyyy = thisday.getFullYear();

today = mm+'-'+dd+'-'+yyyy;
console.log(thisday);
today = mm+'/'+dd+'/'+yyyy;
console.log(thisday);
today = dd+'-'+mm+'-'+yyyy;
console.log(thisday);
today = dd+'/'+mm+'/'+yyyy;
console.log(thisday);
</script>


<!-- question 2 and 3 ends -->

<!-- question 5 starts here -->
<!DOCTYPE html>
<html>
<head>
	<title>Reverse Character</title>
</head>
<body onload="reverse_string('target')"
  <pre id="target">w3resource</pre>

<script>
function reverse_string(id)
{
        const element = document.getElementById(id);
        const textNode = element.childNodes[0];
        let text = textNode.data;

    setInterval(() =>
    {
     text = text[text.length - 1] + text.substring(0, text.length - 1);
      textNode.data = text;
    }, 300);

}
</script>

</body>
</html>
<!-- question ends -->
