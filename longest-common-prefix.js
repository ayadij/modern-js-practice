
var longestCommonPrefix = function(strs) {
   if(strs.length == 0) return "";
   var prefix = strs[0];
   for(var a = 0;a<strs.length;a++){
       while(strs[a].indexOf(prefix) != 0){
           prefix = prefix.substring(0,prefix.length-1)
           if(prefix == ""){
               return "";
           }
       }
   }
    return prefix;
};