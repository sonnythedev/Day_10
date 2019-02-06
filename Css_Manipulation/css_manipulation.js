function changeBGColor(val,type){
    if(type=='R'){
        document.querySelector('#spanBGR').innerText=val;
    }
    else if(type=='G'){
        document.querySelector('#spanBGG').innerText=val;
    }
    else if(type=='B'){
        document.querySelector('#spanBGB').innerText=val;
    }

    let rVal=document.querySelector('#rValBG').value;
    let gVal=document.querySelector('#gValBG').value;
    let bVal=document.querySelector('#bValBG').value;

    //document.querySelector('#outputArea').style.backgroundColor='rgb('+rVal+','+gVal+','+bVal+')';

    document.querySelector('#outputArea').style.backgroundColor=`rgb(${rVal},${gVal},${bVal})`;
}

function changeTransColor(val,type){
    if(type=='R'){
        document.querySelector('#spanTransR').innerText=val;
    }
    else if(type=='G'){
        document.querySelector('#spanTransR').innerText=val;
    }
    else if(type=='B'){
        document.querySelector('#spanTransB').innerText=val;
    }

    let rVal=document.querySelector('#rValTrans').value;
    let gVal=document.querySelector('#gValTrans').value;
    let bVal=document.querySelector('#bValTrans').value;

    console.log(rVal,gVal,bVal);

    document.querySelector('#transDiv').style.backgroundColor='rgb('+rVal+','+gVal+','+bVal+')';
    
    //document.querySelector('#imgDiv').style.backgroundColor='rgb('+rVal+','+gVal+','+bVal+')';

    //document.querySelector('#outputArea').style.backgroundColor=`rgb(${rVal},${gVal},${bVal})`;
}

function changeTransLevel(val){
   //console.log(val);
   console.log(document.getElementById('img_1').height);
   
   document.getElementById('transDiv').style.opacity=val;
}

function changeTxt(val){
    console.log(val);
    document.getElementById('textHolder').innerText=val;
}
function changePic(){
    //console.log(val);
    console.log(document.getElementById('file_1').files[0]);
    document.getElementById('img_1').src=document.getElementById('file_1').files[0].name;
    //set the image's height to the trans div's height
    document.getElementById('transDiv').style.height=document.getElementById('img_1').height+'px'
   ;
}