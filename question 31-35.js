<!--Questio 32 STarts Here -->
<form>
	Enter Number1: <input type="text" id="one"/><br>
	Enter Number2: <input type="text" id="two"/><br>

	<input type="button" onClick="check()" Value="Check" />
</form>

<script>

function check()
{
  	let num1 = document.getElementById("one").value;
  	let num2 = document.getElementById("two").value;

		let a = 100 - +one;
		let b = 100 - +two;

		if (check1 > check2)
		{
			console.log(two);
		}
		else
		{
			console.log(one);
		}
}
</script>

<!--Question 32 Ends Here -->


<!--Question 33 Starts Here -->
<form>
	Enter Number1: <input type="text" id="one"/><br>
	Enter Number2: <input type="text" id="two"/><br>

	<input type="button" onClick="check()" Value="Check" />
</form>

<script>

function check()
{
  	let one = document.getElementById("one").value;
  	let two = document.getElementById("two").value;

		if ( (one >= 40 && one <= 60 && two >= 40 && two <= 60) ||
	 				(one >= 70 && one<= 100 && two >= 70 && two<= 100))

			{
				console.log(true);
			}
			else
			{
				console.log(false);
			}
}
</script>

<!--Question 33 Ends Here -->

<!--Question 35 Starts Here -->
<form>
	Enter A String: <input type="text" id="string"/><br>
	Character To Check: <input type="text" id="cha"/><br>

	<input type="button" onClick="checkChar()" Value="Check" />
</form>

<script>

function checkChar()
{
		let string = document.getElementById("string").value;
		let cha = document.getElementById("cha").value;
	  let e = 0;
	  for (let i = 0; i < string.length; i++)
	  {
		    if (string.charAt(i) == cha)
				{
		      e++;
		    }
	  }
	  console.log(e >= 2 && e <= 4);
}
</script>
<!-- Question 35 Ends Here -->

<!--Question 31 Starts Here -->

<form>
	Enter Number1: <input type="text" id="one"/><br>
	Enter Number2: <input type="text" id="two"/><br>
	Enter Number3: <input type="text" id="three"/><br>

	<input type="button" onClick="check()" Value="Check" />
</form>

<script>

function check()
{
			let maxNumber = 0;
	  	let one = document.getElementById("one").value;
	  	let two = document.getElementById("two").value;
	  	let three = document.getElementById("three").value;


	  	if (+one > +two)
			{
	  		maxNum = one;
	  	}
			else
			{
	  		maxNum = two;
	  	}

	  	if (+three > +maxNum)
			{
	  		maxNum = three;
	  	}

	  	console.log(maxNum);
  }

</script>

<!--Question 31 Ends Here -->


<!-- Question 34 starts Here -->

<form>
	Enter Number1: <input type="text" id="one"/><br>
	Enter Number2: <input type="text" id="two"/><br>

	<input type="button" onClick="check()" Value="Check" />
</form>

<script>

function check()
{
  	let one = document.getElementById("one").value;
  	let two = document.getElementById("two").value;
		if ( (one >= 40 && one <= 60 && two >= 40 && two <= 60))
		{
				if (one > two)
				{
					console.log(one);
				}
				else

					console.log(two);
	  }

}
</script>

<!--Question 34 Ends Here -->
