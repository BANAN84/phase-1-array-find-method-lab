// code your solution here

  
  function check(n){
   return n.result==="W"
  }
function superbowlWin(record){
    let newarr=record.find(check)
        
    return newarr? newarr.year : undefined ;
}