 let bts = document.querySelectorAll("#ripetizioni button");
      
      function hideBorder(indx) {
	  for (let i=0; i<bts.length; i++) {
	      if (indx === i)
		  bts[i].style = "border: 2px solid black; border-bottom: 2px none black";
	      else
		  bts[i].style = "border: 2px solid black";
	  }
	  
      }
      
      for(let i=0; i<bts.length; i++)
	  bts[i].addEventListener("click", function() {hideBorder(i)});
