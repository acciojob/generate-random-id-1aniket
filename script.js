function makeid(l) {
  // write your code here
	let e="abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let ans="";

	for(let i=0;i<l;i++)
	{
		let n = Math.random()*(52-0)+0;
		ans+=e[Math.floor(n)];
	}


	return ans;
	

	
	
	
	
}

//Do not change the code below.
const l = prompt("Enter a number.");

alert(makeid(l));

