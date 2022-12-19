var input1=document.createElement("INPUT");
	input1.setAttribute("type","text");
	input1.setAttribute("placeholder","Enter a number:");
	input1.setAttribute("id","nithi");
	input1.classList.add("style");
	document.body.appendChild(input1);
	document.write('<br/>')
	document.write('<br/>')
	document.write('<br/>')
	

	document.body.style.textAlign="center";

	
	button=document.createElement("button");
	button.setAttribute("onclick","palindrome()");
	button.innerText="Click";
	button.classList.add("box");
    document.body.appendChild(button)
	
	function palindrome(){
	 var num=document.getElementById("nithi").value;
b=num;
	sum=0
	while(num>0)
	{
		var rem =num%10
		sum=rem+(sum*10)
		num=(num-rem)/10
	}
	if(b==sum)
	{
		alert("number is palindrome")
	}
	else
	{
		alert("number is not palindrome")
	}
}