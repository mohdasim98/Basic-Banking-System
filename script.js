function sendMoney(){
   var Name = document.getElementById("enterName").value;
   var Amount = parseInt(document.getElementById("enterAmount").value);
   
   var SName = document.getElementById("enterName1").value;
   
   
     var SUserBankAccount = SName + "Balance";
	 var UserBankAccount = Name + "Balance"; 
	 var Sfinal = parseInt(document.getElementById(SUserBankAccount).innerHTML);
	 if(Sfinal< Amount){
		alert("Insufficient Amount In Sender's Bank Account");
	 }
	 else{
	  var SfinalAmount = parseInt(document.getElementById(SUserBankAccount).innerHTML) - Amount;
   
	       
	  var finalAmount = parseInt(document.getElementById(UserBankAccount).innerHTML) + Amount;
	  document.getElementById(UserBankAccount).innerHTML = finalAmount;
	  document.getElementById(SUserBankAccount).innerHTML = SfinalAmount;
	  
      alert(`Successful Transaction !!  
      Rs.${Amount} is sent to ${Name}@email.com. by ${SName}@email.com. `)

      // transaction history 
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`Rs.${Amount} is sent to ${Name} by ${SName} on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
   }
}