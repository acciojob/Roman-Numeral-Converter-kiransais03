function convertToRoman(num) {
  	const obj = {
      '1000':'M', 
      '500':'D', 
      '100':'C', 
      '50':'L', 
      '10':'X', 
      '5':'V', 
      '1':'I',
    };
let romanstr='';
  //your code here
	while(num>=1) {
		if(num>=1000)
		{
			let rem=num%1000;
			let addct=parseInt(num/1000);
			for(let i=1;i<=addct;i++)
				{
					romanstr+=obj[1000];
				}
			num=rem;
		} else if(num>=900) {
			romanstr+='CM';
			num=num-900;
		} else if(num>=500)
		  {
			let rem=num%500;
			let addct=parseInt(num/500);
			for(let i=1;i<=addct;i++)
				{
					romanstr+=obj[500];
				}
			num=rem;
		}  else if(num>=400) {
			romanstr+='CD';
			num=num-400;
		} else if(num>=100)
		  {
			let rem=num%100;
			let addct=parseInt(num/100);
			for(let i=1;i<=addct;i++)
				{
					romanstr+=obj[100];
				}
			num=rem;
		} else if(num>=90) {
			romanstr+='XC';
			num=num-90;
		} else if(num>=50)
		  {
			let rem=num%50;
			let addct=parseInt(num/50);
			for(let i=1;i<=addct;i++)
				{
					romanstr+=obj[50];
				}
			num=rem;
		} else if(num>=40) {
			romanstr+='XL';
			num=num-40;
		}  else if(num>=10)
		  {
			let rem=num%10;
			let addct=parseInt(num/10);
			for(let i=1;i<=addct;i++)
				{
					romanstr+=obj[10];
				}
			num=rem;
		} else if(num==9) {
			romanstr+='IX';
			num=0;
		} else if(num>=5)
		  {
			let rem=num%5;
			let addct=parseInt(num/5);
			for(let i=1;i<=addct;i++)
				{
					romanstr+=obj[5];
				}
			num=rem;
		} else if(num==4) {
			romanstr+='IV';
			num=0;
		} else if(num>=1)
		  {
			let rem=num%1;
			let addct=parseInt(num/1);
			for(let i=1;i<=addct;i++)
				{
					romanstr+=obj[1];
				}
			num=rem;
		}
	}
  return romanstr;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
