
setTimeout(
    function scroll(){
        window.scrollTo(0,0);
    },100
)

setTimeout(
    function im(){
            //hi
    document.getElementById("hi").style.color="black";
    document.getElementById("hi").style.transition="1s ease-in-out";
    },200
)



setTimeout(
    function anim(){
    //s
    document.getElementById("s").style.fontSize="80px";
    document.getElementById("s").style.marginTop="-345px";
    document.getElementById("s").style.padding="100px";
    document.getElementById("s").style.paddingLeft="270px";
    document.getElementById("s").style.color="#e88d8d";
    document.getElementById("s").style.transition="0.1s ease-in-out";

    //r1
    document.getElementById("r1").style.fontSize="65px";
    document.getElementById("r1").style.marginTop="-347px";
    document.getElementById("r1").style.padding="100px";
    document.getElementById("r1").style.paddingLeft="320px";
    document.getElementById("r1").style.color="#e88d8d";
    document.getElementById("r1").style.transition="0.2s ease-in-out";
    //e1
    document.getElementById("e1").style.fontSize="65px";
    document.getElementById("e1").style.marginTop="-340px";
    document.getElementById("e1").style.padding="100px";
    document.getElementById("e1").style.paddingLeft="344px";
    document.getElementById("e1").style.color="#e88d8d";
    document.getElementById("e1").style.transition="0.3s ease-in-out";
    //e2
    document.getElementById("e2").style.fontSize="65px";
    document.getElementById("e2").style.marginTop="-343px";
    document.getElementById("e2").style.padding="100px";
    document.getElementById("e2").style.paddingLeft="380px";
    document.getElementById("e2").style.color="#e88d8d";
    document.getElementById("e2").style.transition="0.4s ease-in-out";
    //c
    document.getElementById("c").style.fontSize="65px";
    document.getElementById("c").style.marginTop="-340px";
    document.getElementById("c").style.padding="100px";
    document.getElementById("c").style.paddingLeft="430px";
    document.getElementById("c").style.color="#e88d8d";
    document.getElementById("c").style.transition="0.5s ease-in-out";
    //h
    document.getElementById("h").style.fontSize="65px";
    document.getElementById("h").style.marginTop="-343px";
    document.getElementById("h").style.padding="100px";
    document.getElementById("h").style.paddingLeft="475px";
    document.getElementById("h").style.color="#e88d8d";
    document.getElementById("h").style.transition="0.6s ease-in-out";
    //a1
    document.getElementById("a1").style.fontSize="65px";
    document.getElementById("a1").style.marginTop="-340px";
    document.getElementById("a1").style.padding="100px";
    document.getElementById("a1").style.paddingLeft="512px";
    document.getElementById("a1").style.color="#e88d8d";
    document.getElementById("a1").style.transition="0.7s ease-in-out";
    //r2
    document.getElementById("r2").style.fontSize="65px";
    document.getElementById("r2").style.marginTop="-341px";
    document.getElementById("r2").style.padding="100px";
    document.getElementById("r2").style.paddingLeft="546px";
    document.getElementById("r2").style.color="#e88d8d";
    document.getElementById("r2").style.transition="0.8s ease-in-out";
    //a2
    document.getElementById("a2").style.fontSize="65px";
    document.getElementById("a2").style.marginTop="-341px";
    document.getElementById("a2").style.padding="100px";
    document.getElementById("a2").style.paddingLeft="568px";
    document.getElementById("a2").style.color="#e88d8d";
    document.getElementById("a2").style.transition="0.9s ease-in-out";
    //n
    document.getElementById("n").style.fontSize="65px";
    document.getElementById("n").style.marginTop="-341px";
    document.getElementById("n").style.padding="100px";
    document.getElementById("n").style.paddingLeft="600px";
    document.getElementById("n").style.color="#e88d8d";
    document.getElementById("n").style.transition="1.0s ease-in-out";
},500)

//img
setTimeout(
    function Image(){
        document.getElementById("cartoon-me").style.opacity=1;
        document.getElementById("cartoon-me").style.transition='3s';
        document.getElementById("cartoon-me").style.marginTop='-1000px';
    },2000)

    document.getElementById("nav").style.height="500px";    

    const text = "Code Enthusiast on a Journey...";

    let index = 0;
    
    function type() {
        if (index < text.length) {
            document.getElementById("typing-text").textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }
    setTimeout(type, 3500);


function block_1_anim(){

    document.getElementById("block-1_h1").style.color="black";
    document.getElementById("block-1_h1").style.transition="0.4s";

    document.getElementById("block-1_img").style.opacity=1;
    document.getElementById("block-1_img").style.transition='0.4s';
    document.getElementById("block-1_img").style.padding='-100px';
    document.getElementById("block-1_img").style.marginTop='-100px';

    document.getElementById("p1").style.marginBottom='0px';
    document.getElementById("p1").style.color="grey";
    document.getElementById("p1").style.transition='1s ease-in-out';

    document.getElementById("p2").style.marginBottom='0px';
    document.getElementById("p2").style.color="grey";
    document.getElementById("p2").style.transition='1s ease-in-out';

    document.getElementById("p3").style.marginBottom='0px';
    document.getElementById("p3").style.color="grey";
    document.getElementById("p3").style.transition='1s ease-in-out';

    document.getElementById("p4").style.marginBottom='0px';
    document.getElementById("p4").style.color="grey";
    document.getElementById("p4").style.transition='1s ease-in-out';

    document.getElementById("p5").style.marginBottom='0px';
    document.getElementById("p5").style.color="grey";
    document.getElementById("p5").style.transition='1s ease-in-out';
}


//glowinganim

setInterval(
    function glow_anim1(){
        document.getElementById("block-1_img").style.boxShadow="4px 4px 10px yellow";
    },1000
)
setInterval(
    function glow_anim2(){
        document.getElementById("block-1_img").style.boxShadow="4px 4px 10px transparent";
        document.getElementById("block-1_img").style.transition="1s ease-in-out";
    },2100
)

//Skills

function para(){

    document.getElementById("s_p1").style.paddingLeft='150px';
    document.getElementById("s_p1").style.color="grey";
    document.getElementById("s_p1").style.transition='1s ease-in-out';

    document.getElementById("s_p2").style.paddingLeft='150px';
    document.getElementById("s_p2").style.color="grey";
    document.getElementById("s_p2").style.transition='1s ease-in-out';

    document.getElementById("s_p3").style.paddingLeft='150px';
    document.getElementById("s_p3").style.color="grey";
    document.getElementById("s_p3").style.transition='1s ease-in-out';

    document.getElementById("s_img").style.marginLeft='-60px';
    document.getElementById("s_img").style.opacity=1;
    document.getElementById("s_img").style.transition='1s ease-in-out';
}

// projects

function projects(){

    document.getElementById("s_p1").style.marginBottom='0px';
    document.getElementById("s_p1").style.color="grey";
    document.getElementById("s_p1").style.transition='1s ease-in-out';

    document.getElementById("s_p2").style.marginBottom='0px';
    document.getElementById("s_p2").style.color="grey";
    document.getElementById("s_p2").style.transition='1s ease-in-out';

    document.getElementById("s_p3").style.marginBottom='0px';
    document.getElementById("s_p3").style.color="grey";
    document.getElementById("s_p3").style.transition='1s ease-in-out';

    document.getElementById("s_img").style.marginBottom='0px';
    document.getElementById("s_img").style.opacity=1;
    document.getElementById("s_img").style.transition='1s ease-in-out';
}
function block_3(){
    function block_3_p_box_1_on(){
        document.getElementById("p_box1").style.boxShadow="16px 16px 40px blue";
        document.getElementById("p_box1").style.transition="1s";
    }
    function block_3_p_box_2_on(){
        document.getElementById("p_box2").style.boxShadow="16px 16px 40px yellow";
        document.getElementById("p_box2").style.transition="1s";
    }
    function block_3_p_box_3_on(){
        document.getElementById("p_box3").style.boxShadow="16px 16px 40px green";
        document.getElementById("p_box3").style.transition="1s";
    }
    function block_3_p_box_4_on(){
        document.getElementById("p_box4").style.boxShadow="16px 16px 40px red";
        document.getElementById("p_box4").style.transition="1s";
    }
    setTimeout(block_3_p_box_1_on,500);
    setTimeout(block_3_p_box_2_on,600);
    setTimeout(block_3_p_box_3_on,700);
    setTimeout(block_3_p_box_4_on,800);
    function block_3_p_box_1_off(){
        document.getElementById("p_box1").style.boxShadow="2px 2px 5px black";
        document.getElementById("p_box1").style.transition="1s";
    }
    function block_3_p_box_2_off(){
        document.getElementById("p_box2").style.boxShadow="2px 2px 5px black";
        document.getElementById("p_box2").style.transition="1s";
    }
    function block_3_p_box_3_off(){
        document.getElementById("p_box3").style.boxShadow="2px 2px 5px black";
        document.getElementById("p_box3").style.transition="1s";
    }
    function block_3_p_box_4_off(){
        document.getElementById("p_box4").style.boxShadow="2px 2px 5px black";
        document.getElementById("p_box4").style.transition="1s";
    }
    setTimeout(block_3_p_box_1_off,1510);
    setTimeout(block_3_p_box_2_off,1610);
    setTimeout(block_3_p_box_3_off,1710);
    setTimeout(block_3_p_box_4_off,1810);
}
document.getElementById("card1").style.color="transparent";
document.getElementById("card2").style.color="transparent";
document.getElementById("card3").style.color="transparent";
document.getElementById("card4").style.color="transparent";
function block_3_p_box_1_hover(){
    document.getElementById("p_box1").style.boxShadow="16px 16px 40px blue";
    document.getElementById("p_box1").style.transition="1s";
    document.getElementById("p_box1").style.visibility="visible";
    document.getElementById("card1").style.color="blue";
    document.getElementById("card1").style.fontSize="30px";
    document.getElementById("card1").style.transition="1s";
}
function block_3_p_box_2_hover(){
    document.getElementById("p_box2").style.boxShadow="16px 16px 40px yellow";
    document.getElementById("p_box2").style.transition="1s";
    document.getElementById("p_box2").style.visibility="visible";
    document.getElementById("card2").style.color="white";
    document.getElementById("card2").style.fontSize="30px";
    document.getElementById("card2").style.transition="1s";
}
function block_3_p_box_3_hover(){
    document.getElementById("p_box3").style.boxShadow="16px 16px 40px grey";
    document.getElementById("p_box3").style.transition="1s";
    document.getElementById("p_box3").style.visibility="visible";
    document.getElementById("card3").style.color="black";
    document.getElementById("card3").style.transition="1s";
}
function block_3_p_box_4_hover(){
    document.getElementById("p_box4").style.boxShadow="16px 16px 40px grey";
    document.getElementById("p_box4").style.transition="1s";
    document.getElementById("p_box4").style.visibility="visible";
    document.getElementById("card4").style.color="black";
    document.getElementById("card4").style.transition="1s";
}
function block_3_p_box_1_leave(){
    document.getElementById("p_box1").style.boxShadow="2px 2px 5px black";
    document.getElementById("p_box1").style.transition="1s";
    document.getElementById("card1").style.color="transparent";
    document.getElementById("card1").style.transition="1s";
}
function block_3_p_box_2_leave(){
    document.getElementById("p_box2").style.boxShadow="2px 2px 5px black";
    document.getElementById("p_box2").style.transition="1s";
    document.getElementById("card2").style.color="transparent";
    document.getElementById("card2").style.transition="1s";
}

function block_3_p_box_3_leave(){
    document.getElementById("p_box3").style.boxShadow="2px 2px 5px black";
    document.getElementById("p_box3").style.transition="1s";
    document.getElementById("card3").style.color="transparent";
    document.getElementById("card3").style.transition="1s";
}
function block_3_p_box_4_leave(){
    document.getElementById("p_box4").style.boxShadow="2px 2px 5px black";
    document.getElementById("p_box4").style.transition="1s";
    document.getElementById("card4").style.color="transparent";
    document.getElementById("card4").style.transition="1s";
}

setInterval(
    function resume_on(){
        document.getElementById("resume").style.backgroundColor="black";
        document.getElementById("resume").style.borderColor="white";
        document.getElementById("resume").style.color="white";
        document.getElementById("resume").style.transition="1s";
    },1000
)



function resume_of(){
    document.getElementById("resume").style.backgroundColor="white";
    document.getElementById("resume").style.color="black";
    document.getElementById("resume").style.borderColor="black";
    document.getElementById("resume").style.transition="1s";
}

setInterval(resume_on,1000)
setInterval(resume_of,2000)