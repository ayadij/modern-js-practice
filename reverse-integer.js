
var reverse = function(x) {
    if(x < 0){
        x = Math.abs(x);
        
        var number = parseInt(x.toString().split("").reverse().join(""));
        if(number > Math.pow(2,31)){
            return 0;
        }
        return -number;
    }if(x == 0){
        return 0;
    }else{
       
        var number = parseInt(x.toString().split("").reverse().join(""));
        if(number > Math.pow(2,31)-1){
            return 0;
        }
        return number;
    }
};