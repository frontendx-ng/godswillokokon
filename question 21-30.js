<!-- Question 21 Starts Here -->
<form>
	Enter A String: <input type="text" id="string"/><br>

	<input type="button" onClick="check()" />
</form>

<script>

function py()
{
 	let str = document.getElementById("string").value;

    if (str.substring(0 , 2) === 'Py')
    {
        result = str;
    }
    else
    {
        result = "Py" + str;
    }

    console.log(result);
 }


</script>

<!-- QUestion 21 Ends -->

<!--QUestion 22 Starts Here -->

<form>
	Enter A String: <input type="text" id="string"/><br>
	Enter A Position: <input type="text" id="pos"/><br>

	<input type="button" onClick="removeChar()" Value="check" />
</form>

<script>

function removeChar()
{
	let string = document.getElementById("string").value
	let pos = document.getElementById("pos").value
  console.log( string.replace(string.substring(pos - 1, pos), ''));
}

</script>

<!-- Question 22 Ends -->


<!-- Question 23 Starts Here -->

<form>
	Enter A String: <input type="textarea" id="string"/><br>

	<input type="button" onClick="swap()" Value="Swap" />
</form>

<script>

function swap() {
  let string = document.getElementById("string").value
  if (string.length <= 1)
  {
    return string;
  }
    mid_char = string.substring(1, string.length - 1);
    console.log( (string.charAt(string.length - 1)) +
                  mid_char + string.charAt(0));
}
</script>

<!-- Question 23 Ends -->


<!-- Question 24 Strats Here -->

<form>
	Enter A String: <input type="text" id="string"/><br>

	<input type="button" onClick="swap()" Value="Swap" />
</form>

<script>

function swap()
{
  	let string = document.getElementById("string").value
    console.log( (string.charAt(0)) + string + string.charAt(0));
}
</script>

<!-- QUestion 24 Ends -->


<!--Question 25 Starts Here -->


<form>
	Enter A Number: <input type="text" id="num"/><br>

	<input type="button" onClick="check()" Value="Check" />
</form>

<script>

function check()
{
  	let num = document.getElementById("num").value
  	if ((num % 3 !== 0) || (num % 7 !== 0))
    {
  		console.log("The number is not a multiple of 3 or a multiple of 7.");
  	}
    else
    {
      console.log("The number is  a multiple of 3 or a multiple of 7.");
  	}

}
</script>

<!--QUestion 25 Ends -->

<!--Question 26 Starts Here -->


<form>
	Enter A String: <input type="text" id="str"/><br>

	<input type="button" onClick="swap()" Value="Swap" />
</form>

<script>

function ChecknSwap()
{
    	let string = document.getElementById("string").value
    	if (string.length >=3)
      {
    	let lastcha = string.substring(string.length-3);
    console.log( lastcha + string + lastcha );
  }
   else

  	console.log("The String Must Be 3 Characters or more.");
}

</script>

<!--Question 26 Ends Here -->


<!-- Question 27 Starts Here -->

<form>
	Enter A String: <input type="text" id="string"/><br>

	<input type="button" onClick="check()" Value="Check" />
</form>

<script>

function check()
   {
    	let string = document.getElementById("string").value;

    	let firstcha = string.substring(0, 4);
    	if (firstcha == 'Java')
      {
        console.log(true);
      }
   else
  	console.log(false);
}

</script>


<!-- QUestion 27 Ends-->


<!--Question 28 Starts Here -->

<form>
	Enter Number one: <input type="text" id="num1"/><br>
	Enter Number two: <input type="text" id="num2"/><br>

	<input type="button" onClick="check()" Value="Check" />
</form>

<script>

function check()
{
  	let num1 = document.getElementById("num1").value;
  	let num2 = document.getElementById("num2").value;

  	if ((num1 >= 50 && num1 <= 99  ) || (num2 >= 50 && num2 <= 99))
     {
       console.log(true);
     }
     else
	    console.log(false);
}

</script>

<!--Question 28 Ends  -->


<!--Question 29 Starts Here -->

<form>
	Enter Number 1: <input type="text" id="num1"/><br>
	Enter Number 2: <input type="text" id="num2"/><br>
	Enter Number 3: <input type="text" id="num3"/><br>

	<input type="button" onClick="check()" Value="Check" />
</form>

<script>

function check()
{
  	let num1 = document.getElementById("num1").value;
  	let num2 = document.getElementById("num2").value;
  	let num3 = document.getElementById("num3").value;

  	if ((num1 >= 50 && num1 <= 99  ) || (num2 >= 50 && num2 <= 99)
          || (num3 >= 50 && num3 <= 99))
    {
      console.log(true);
    }
    else
	   console.log(false);
}

</script>

<!-- Question 29 Ends Here-->


<!--Question 30 Starts Here -->

<form>
	Enter A String: <input type="text" id="string"/><br>

	<input type="button" onClick="swap()" Value="Swap" />
</form>

<script>

function ChecknSwap()
{
  	let string = document.getElementById("string").value
  	let lastcha = string.substring(10, 4);
  	if (lastcha == 'script')
    {
      console.log(string.substring(0, 4) + string.substring(10,string.length));
    }
  else
  	  console.log(string);
}

</script>
<!--Question 30 Ends Here -->
