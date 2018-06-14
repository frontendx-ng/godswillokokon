<!--- question 6 begins here -->

<script>
year = window.prompt("Enter a Year : ");
x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
if (x == false)
  {
    console.log("This Year Is Not A Leap Year");
  }
  else
  {
  	console.log("This Year Is A Leap Year");
  }
</script>


<!-- question 6 ends -->

<!-- question 7 begins here -->

<script>

for (let year = 2014; year <= 2050; year++)
    {
      let day = new Date(year, 0, 1);
      if ( day.getDay() === 0 )
          console.log("1st January is a Sunday  "+year);
    }

</script>

<!-- question 7 ends -->

<!-- question 8 begins here -->


<script>
 let number = Math.ceil(Math.random() * 10);
 let guess = prompt('Guess any number between 1 and 10 ');
 if (guess == number)
   alert('Good Work');
  else
   alert('Not matched, ' + number 'was the right number');
</script>

<!-- question 8 ends -->

<!--question 9 begins here -->
<!DOCTYPE html>

<script>
thisday=new Date();
const xmas=new Date(thisday.getFullYear(), 11, 25);
if (thisday.getMonth()==11 && thisday.getDate()>25)
{
xmas.setFullYear(xmas.getFullYear()+1);
}
const a_day=1000*60*60*24;
console.log(`${Math.ceil((xmas.getTime()-thisday.getTime())/(a_day))} days are left until Christmas!`);

</script>


<!-- question 9 ends -->

<!-- Question 10 begins here -->


<form>

First Number : <input type="text" id="Number1" /><br>
Second Number: <input type="text" id="Number2" /><br>
<input type="button" onClick="multiply()" Value="Multiply" />
<input type="button" onClick="divide()" Value="Divide" />
</form>

<script>

function divide()
{
        num1 = document.getElementById("Number1").value;
        num2 = document.getElementById("Number2").value;
		result = num1 / num2;
		console.log(result);
}


function multiply()
{
        num1 = document.getElementById("Number1").value;
        num2 = document.getElementById("Number2").value;
        result = num1 * num2;
        console.log(result);
}

</script>

<!-- Question 10 ends-->
