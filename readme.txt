// get quote api 

we are getting our quote from api so for that we are going to use async function for out functionality.
like, async function getQuote(){
		const apiUrl = "...............";
---------------------------------------------
fetching data and using try and catch :

After that we can set try catch method to set some boundries of our function.
like, if we are not matching our required criteria at that situation we can set try and catch maethod. 
		In this quote functionality we are fetching data from the Api url.
		in try{
 			>we will create one constant to fetch data . Here we are creating response and by using that constant and await funtion we will fetch data.

	<---			 const response = await fetch(proxyUrl + apiUrl);  //   ---->
			
			> now we have data but how can we show that in our functionality?
			so for that question we are going to create one more "data" constant with same await method we will get that fetched data from the Url.
			and as per the url our data is in the json format so we have declare that what kind of data we are fecthing. '

               <---                            const data = await response.json();			      ---> 


  		//passing our data to the element 
          	<---			quoteText.innerText = data.quoteText;	     --->
----------------------------------------------------------------------------------------------------------------------------------
now we can set some condition on that function so for that we will use if and else.

		if(condtion ){
		print this.....
}
	else {
		"Error message"
	}     					

		
-------------------------------------
twitter functionality:

from this tweet api url we can get button intent of twitter. and we have to use some parameters for further data fetching functionlity.
		https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview

--------useful link: https://htmldom.dev/ --------------------------------
			