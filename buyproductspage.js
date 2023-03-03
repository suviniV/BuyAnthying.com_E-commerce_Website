/* function to decrease the font size*/	
function zoom_out(){
	let i;
	let paragraphs=document.getElementsByTagName('p');
    for (i=0;i<paragraphs.length;i++)  
	{ 
		paragraphs[i].style.fontSize = "1rem";     
	}
	let headings_3=document.getElementsByTagName('h3');
	for (i=0;i<headings_3.length;i++)  
	{  
		headings_3[i].style.fontSize = "1rem";     
	}
}	
/* function to increase the font size*/			
function zoom_in(){
	let j;
	let paragraphs=document.getElementsByTagName('p');
	for (j=0;j<paragraphs.length;j++)  
	{  
		paragraphs[j].style.fontSize = "1.3rem";     
	}
	let headings_3=document.getElementsByTagName('h3');
	for (j=0;j<headings_3.length;j++)  
	{  
		headings_3[j].style.fontSize = "1.3rem";     
	}
}	
/*function to reset the font size */
function normal_font(){
	let x;
	let paragraphs=document.getElementsByTagName('p');
	for (x=0;x<paragraphs.length;x++)  
	{  
		paragraphs[x].style.fontSize = "1.25rem";     
	}
	let headings_3=document.getElementsByTagName('h3');
	for (x=0;x<headings_3.length;x++)  
	{  
		headings_3[x].style.fontSize = "1.17em";     
	}
}

/*storing all the classes with the classname add-btn*/
const buttonList = document.querySelectorAll('.add-btn');
/*an eventlistener when buttons are clicked*/
buttonList.forEach(node => {
  node.addEventListener('click', addToCart);
  
});

/*Assigning the varaiables required*/
let itemsInCart = [];
let productDetailsText = ""
let totalPriceOfTheOrder = 0;

/*function to generate the total bill of the order according to the quantity of items selected by the user.*/
function addToCart(){
	
	/* Mobile Phones*/

	let quantityOfItem1 = document.forms['mobilephones1'].electronicsitem1.value;
	const priceOfItem1 = 580;
	let totalPriceOfItem1 = priceOfItem1*quantityOfItem1;
	
	let quantityOfItem2 = document.forms['mobilephones2'].electronicsitem2.value;
	const priceOfItem2 = 590;
	let totalPriceOfItem2 = priceOfItem2*quantityOfItem2;
	
	let quantityOfItem3 = document.forms['mobilephones3'].electronicsitem3.value;
	const priceOfItem3 = 450;
	let totalPriceOfItem3 = priceOfItem3*quantityOfItem3;
	
    let quantityOfItem4 = document.forms['mobilephones4'].electronicsitem4.value;
	const priceOfItem4 = 455;
	let totalPriceOfItem4 = priceOfItem4*quantityOfItem4;    
	
	/* Laptops */
	let quantityOfItem5 = document.forms['laptops1'].electronicsitem5.value;
	const priceOfItem5 = 1095;
	let totalPriceOfItem5 = priceOfItem5*quantityOfItem5;
	
	let quantityOfItem6 = document.forms['laptops2'].electronicsitem6.value;
	const priceOfItem6 = 1010;
	let totalPriceOfItem6 = priceOfItem6*quantityOfItem6;
	
	let quantityOfItem7 = document.forms['laptops3'].electronicsitem7.value;
	const priceOfItem7 = 2000;
	let totalPriceOfItem7 = priceOfItem7*quantityOfItem7;
	
	let quantityOfItem8 = document.forms['laptops4'].electronicsitem8.value;
	const priceOfItem8 = 1000;
	let totalPriceOfItem8 = priceOfItem8*quantityOfItem8; 
    
	/* Earphones*/
	let quantityOfItem9 = document.forms['earphones1'].electronicsitem9.value;
	const priceOfItem9 = 400;
	let totalPriceOfItem9 = priceOfItem9*quantityOfItem9;
	
	let quantityOfItem10 = document.forms['earphones2'].electronicsitem10.value;
	const priceOfItem10 = 350;
	let totalPriceOfItem10 = priceOfItem10*quantityOfItem10;
	
	let quantityOfItem11 = document.forms['earphones3'].electronicsitem11.value;
	const priceOfItem11 = 300;
	let totalPriceOfItem11 = priceOfItem11*quantityOfItem11;
	
	let quantityOfItem12 = document.forms['earphones4'].electronicsitem12.value;
	const priceOfItem12 = 600;
	let totalPriceOfItem12 = priceOfItem12*quantityOfItem12;   
	
	/* Television */
	let quantityOfItem13 = document.forms['tv1'].electronicsitem13.value;
	const priceOfItem13 = 700;
	let totalPriceOfItem13 = priceOfItem13*quantityOfItem13;
	
	let quantityOfItem14 = document.forms['tv2'].electronicsitem14.value;
	const priceOfItem14 = 750;
	let totalPriceOfItem14 = priceOfItem14*quantityOfItem14;
	
	let quantityOfItem15 = document.forms['tv3'].electronicsitem15.value;
	const priceOfItem15 = 650;
	let totalPriceOfItem15 = priceOfItem15*quantityOfItem15;
	
	let quantityOfItem16 = document.forms['tv4'].electronicsitem16.value;
	const priceOfItem16 = 800;
	let totalPriceOfItem16 = priceOfItem16*quantityOfItem16;   
	
	/* Speakers*/
	let quantityOfItem17 = document.forms['speaker1'].electronicsitem17.value;
	const priceOfItem17 = 300;
	let totalPriceOfItem17 = priceOfItem17*quantityOfItem17;
	
	let quantityOfItem18 = document.forms['speaker2'].electronicsitem18.value;
	const priceOfItem18 = 400;
	let totalPriceOfItem18 = priceOfItem18*quantityOfItem18;
	
	let quantityOfItem19 = document.forms['speaker3'].electronicsitem19.value;
	const priceOfItem19 = 250;
	let totalPriceOfItem19 = priceOfItem19*quantityOfItem19;
	
	let quantityOfItem20 = document.forms['speaker4'].electronicsitem20.value;
	const priceOfItem20 = 270;
	let totalPriceOfItem20 = priceOfItem20*quantityOfItem20;

	/*calculating the total price*/
	totalPriceOfTheOrder = totalPriceOfItem1+totalPriceOfItem2+totalPriceOfItem3+totalPriceOfItem4+totalPriceOfItem5+totalPriceOfItem6+totalPriceOfItem7+totalPriceOfItem8+totalPriceOfItem9+totalPriceOfItem10+totalPriceOfItem11+totalPriceOfItem12+totalPriceOfItem13+totalPriceOfItem14+totalPriceOfItem15+totalPriceOfItem16+totalPriceOfItem17+totalPriceOfItem18+totalPriceOfItem19+totalPriceOfItem20;	
	/*converting the double value totalPrice to a string*/
	let stringTotalPrice = totalPriceOfTheOrder.toString();
	/*adding the total price to the section in the products page*/
	document.getElementById("total").innerHTML = stringTotalPrice;
	
}
/*function to add the products the user purchases to an array*/
function addingItemsToArray(itemName,itemPrice){

	itemsInCart.push(itemName +","+ itemPrice);
	productDetailsText = "";
	for(let a=0;a<itemsInCart.length;a++){
		productDetailsText += itemsInCart[a].split(",")[0]+ " at a cost of ";
		productDetailsText += itemsInCart[a].split(",")[1]+ " , ";
	}
}
/*Validating form and displaying the match summary*/
function validatingform(form){
	let first_Name = document.forms["form3"].fname.value;
	let last_Name = document.forms["form3"].lname.value;
	let address = document.forms["form3"].address.value;
	let email = document.forms["form3"].email.value;
	let telephone_No = document.forms["form3"].tel.value;
															
		if(first_Name==""){
			alert("First Name must be filled out!!");	
	    }
		else if(last_Name==""){
			alert("Last Name must be filled out!!");
		}
		else if(address == ""){
			alert("Address must be filled out!!");
		}
		else if(email == ""){
			alert("Email Address must be filled out!!");
		}
		else if(telephone_No == ""){
			alert("Telephone number must be filled out!!");
		}
		else{
			alert("Dear "+first_Name+ ", you have ordered " + productDetailsText + " Your total Bill is $" + totalPriceOfTheOrder);
		}
}		




	








































