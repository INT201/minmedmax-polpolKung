const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  let min = n1
  let mid
  let max
  let objmmm = {min, mid, max}
  
  if(min > n2) {
    min = n2
  } 
  if(min > n3) {
    min = n3
  }
  


  return objmmm
}
module.exports = minMedMax
