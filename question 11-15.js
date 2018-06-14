<!--question 11 Starts Here -->

<form>
Enter A Number : <input type="text" id="value" /><br>

<input type="button" onClick="Cel()" Value="Convert To Celcius" /><br>

<input type="button" onClick="Fahr()" Value="Convert To Fahrenheit" />

</form>

<script>
function Fahr()
{
  var c = document.getElementById("value").value;
  var convert = c * 9 / 5 + 32;
  var message = c+'\xB0C is ' + Fahr + ' \xB0F.';
    console.log(message);
}

function Cel()
{
  var f = document.getElementById("value").value;
  var convert = (f - 32) * 5 / 9;
  var nugget = f+'\xB0F is ' + Cel + '\xB0C.';
    console.log(nugget);
}
</script>

<!--Question 11 ends -->


<!--Question 12 begins here -->

<script>
console.log(document.URL);
</script>

<!--Question 12 Ends -->


<!-- Question 13 begins Here -->

<script>

let initalName = 'Godswill Okokon';
let secondName = "javascript developer";
this[initalName] = secondName;
console.log(this[initalName])
</script>


<!--Question 13 ends -->

<!--Question 14 begins Here -->

<form>
	Enter Name Of File With Its Extension Here: <input type="text" id="file"/><br>
	<input type="button" onClick="getExtension()" Value="Get File Extension" />
</form>
<script>
function getFileExtension()
{
	let item = document.getElementById("item").value;
	let extension = item.split('.').pop();
	console.log(extension);
}
</script>

<!-- Question 14 Ends -->

<!--Question 15 Starts Here -->

<form>
	Enter a given Number: <input type="text" id="num"/><br>
	<input type="button" onClick="difference()" Value="Diff" />
</form>
<script>
function diff()
 {
 	let num = document.getElementById("num").value;
    if (num <= 13)
        result = 13 - num;
    else
        result = (num - 13) * 2;
    console.log(result);
 }
</script>

<!--Question 15 ends -->
