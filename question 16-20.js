<!Question 16 Starts Here -->
<!DOCTYPE html>
<html>
  <head>
  	<title>Frontend X</title>
  </head>
  <body>
      <form>
      	Enter First Number: <input type="text" id="one"/><br>
      	Enter Second Number: <input type="text" id="two"/><br>

      	<input type="button" onClick="sum()" Value="AddNums" />
      </form>

      <script>

      function sum()
       {
         	let number1 = document.getElementById("one").value;
         	let number2 = document.getElementById("two").value;

            if (num1 !== num2)
            {
                result = (+num1 + +num2);
            }
            else
            {

                  result = (+num1 + +num2) * 3;
            }

            console.log(result);
       }


      </script>

  </body>
</html>
<!-- Question 16 Ends -->

<!--Question 17 Starts Here -->

<!DOCTYPE html>
<html>
<head>
	<title>Frontend X</title>
</head>
<body>
<form>
	Enter A Number: <input type="text" id="integers"/><br>

	<input type="button" onClick="difference()" Value="Get Difference" />
</form>

<script>

function diff() 
{
 	let num1 = document.getElementById("integers").value;

    if (num1 > 19)
    {
        result = (+num1 - 19) * 3;
    }
    else
    {
        result = (19 - +num1);
    }

    console.log(result);
 }


</script>

</body>
</html>

<!-- Question 17 Ends Here-->

<!-- QUestion 19 Begins -->
<!DOCTYPE html>
<html>
<head>
	<title>Frontend X</title>
</head>
<body>
<form>
	Enter First Number: <input type="text" id="one"/><br>

	<input type="button" onClick="check()" Value="Check" />
</form>

<script>

function check()
{
	let num = document.getElementById("one").value
	let result =  (( (Math.abs(400 - +num) <= 20 || Math.abs(100 - +num) <= 20)));
  console.log(result);
}


</script>

</body>
</html>

<!-- Question 19 Ends Here -->


<!--Question 20 Starts Here -->
<!DOCTYPE html>
<html>
<head>
	<title>Frontend X</title>
</head>
<body>
<form>
	Enter First Number: <input type="text" id="one"/><br>
	Enter Second Number: <input type="text" id="two"/><br>

	<input type="button" onClick="check()" Value="check" />
</form>

<script>

function check()
{
 	let number1 = document.getElementById("one").value;
 	let number2 = document.getElementById("two").value;

    if ((number1 > 0 && number2 < 0)  || (number1 < 0 && number2 > 0))
    {
        result = true;
    }
    else
    {
        result = false;
    }

    console.log(result);
 }


</script>

</body>
</html>
<!-- Questio 20 Ends Here -->

<!--Question 18 STarts Here-->
<!DOCTYPE html>
<html>
<head>
	<title>Frontend X</title>
</head>
<body>
<form>
	Enter First Number: <input type="text" id="number1"/><br>
	Enter Second Number: <input type="text" id="number2"/><br>

	<input type="button" onClick="check()" Value="Add Numbers" />
</form>

<script>

function check()
{
 	let num1 = document.getElementById("number1").value;
 	let num2 = document.getElementById("number2").value;

    if ((num1 || num2) !== 50 || (+num1 + +num2) !== 50)
    {
        result = false;
    }
    else
    {
        result = true;
    }

    console.log(result);
 }


</script>

</body>
</html>
<!-- Question 18 Ends -->
