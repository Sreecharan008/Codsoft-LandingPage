setTimeout(
    function execute(){
        document.getElementById("nav").style.backgroundColor="White";
        window.scrollTo(0,0);
        document.getElementById("content").style.marginLeft="0px";
        document.getElementById("content").style.borderLeft=" 6px solid black";
        document.getElementById("h1").style.transition='1s';

        document.getElementById("h1").style.color="black";
        document.getElementById("h1").style.padding="120px";
        document.getElementById("h1").style.paddingLeft="20px";
        document.getElementById("h1").style.transition='1s';

        document.getElementById("h2").style.color="black";
        document.getElementById("h2").style.paddingLeft="20px";
        document.getElementById("h2").style.transition='1s';

        document.getElementById("p").style.color="black";
        document.getElementById("p").style.paddingLeft="20px";
        document.getElementById("p").style.transition='1s';
    
        document.getElementById("buttons").style.color="black";
        document.getElementById("buttons").style.paddingLeft="20px";
        document.getElementById("buttons").style.visibility='visible';
        document.getElementById("buttons").style.marginLeft='0px';
        document.getElementById("buttons").style.transition='1s';

        document.getElementById("button").style.color="black";
        document.getElementById("button").style.paddingLeft="20px";
        document.getElementById("button").style.visibility='visible';
        document.getElementById("button").style.marginLeft='0px';
        document.getElementById("button").style.transition='1s';

        document.getElementById("sub-block1").style.color="black";
        document.getElementById("sub-block1").style.transition='0.5s ease-in-out'; 
            },500)

    function context_1_on(){
        document.getElementById("context1").style.visibility="visible";
        document.getElementById("card1").style.color="black";
        document.getElementById("card1").style.transition="1s";
    }


    function context_2_on(){
        document.getElementById("context2").style.visibility="visible";
        document.getElementById("card2").style.color="black";
        document.getElementById("card2").style.transition="1s";
    }


    function context_3_on(){
        document.getElementById("context3").style.visibility="visible";
        document.getElementById("card3").style.color="black";
        document.getElementById("card3").style.transition="1s";
    }

    function context_1_off(){
        document.getElementById("context1").style.visibility="hidden";
        document.getElementById("card1").style.color="transparent";
        document.getElementById("card1").style.transition="1s";
    }


    function context_2_off(){
        document.getElementById("context2").style.visibility="hidden";
        document.getElementById("card2").style.color="transparent";
        document.getElementById("card2").style.transition="1s";
    }


    function context_3_off(){
        document.getElementById("context3").style.visibility="hidden";
        document.getElementById("card3").style.color="transparent";
        document.getElementById("card3").style.transition="1s";
    }