const letters =['s','z','r','d','H','j','t','b','a','-','y','w','h','n','m','l','k','q','f','g','Z','T','D','S','0','1','2','3','4','5','6','7','8','9'];
const values = ['س','ز','ر','د','ح','ج','ت','ب','ا','ء','ي','و','ن','م','ه','ل','ك','ق','ف','ع','ظ','ط','ض','ص','٠','١','٢','٣','٤','٥','٦','٧','٨','٩']
let prevLetter = '';
const res = document.getElementById('result')
res.dir = 'rtl'
function buttonHandler(key){
    res.focus()
    key = key.trim()
    if(key != "'"){
        res.value += key
    }
}  
function headercontrols(val){
    switch(val){
        case "copy":
            navigator.clipboard.writeText(res.value)
            alert('Text Copied')
            break;
        case "clear":
            res.value = ''
            break;
        case "space":
            res.value += ' '
            break;
        case "small":
            res.style.height = '200px';
            break;
        case "large":
            res.style.height = '800px';
            break;

    }
}      
window.addEventListener('keypress',(e)=>{
    if(e.keyCode === 32){
        buttonHandler(e.key);
        return
    }
    e.preventDefault();
    console.log(e.key);
    console.log(e.keyCode);
    if(e.key === "'" && prevLetter.length>0){
        res.value =  res.value.substring(0,res.value.length-1)
        switch(prevLetter){
            case 's': 
                res.value += 'ش';
                break;
            case 'd':
                res.value += 'ذ';
                break;
            case 'H':
                res.value += 'خ';
                break;
            case 't':
                res.value += 'ث';
                break;
            case 'g':
                res.value += 'غ';
                break;
        }
        prevLetter = ''
        
    }else{
        if(e.key!=="'"){
            prevLetter = e.key
        }
        for(let i=0; i<letters.length; i++){
            if(e.key === letters[i]){
                buttonHandler(values[i])
                break;
            }
        }
    }
    
})