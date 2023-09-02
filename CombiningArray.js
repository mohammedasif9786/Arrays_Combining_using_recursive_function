let addArr =[]
function combArr(input){
for(i in input){
  if(input[i].length ==undefined ){
     addArr.push(input[i])
      }
    else{
        combArr(input[i])
    }
}

}
combArr([1,2,3,[1,2,3,[1,2,3,[1,2,3,4,[1,2,3,4,5,[1,2,3,4,5,6,7]]]]]])