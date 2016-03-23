
window.addEventListener('DOMContentLoaded', function () {
    //When the page structure is loaded...
	var button = document.getElementsByTagName("input");
    
    button[2].addEventListener('click',function () {
        var b = parseInt(button[0].value);
       // alert(b);
        var a = parseInt(button[1].value);
       // alert(a);
        if(b%2 ==0)
        {
            button[0].value+=" is valid!";
         //   button[0].listClass.remove("invalid");
        }
        else
        {
            button[0].value+=" is invalid!";
          //  button[0].listClass.remove("valid");
        }
        
        if(a%2 !=0)
        {
            button[1].value+=" is valid!";
           // button[1].listClass.add("valid");
           // button[1].listClass.remove("invalid");
        }
        else
        {
            button[1].value+=" is invalid!";
           // button[1].listClass.add("invalid");
           // button[1].listClass.remove("valid");
        }
    },true);

});
