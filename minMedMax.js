const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  let min = n1
  let mid 
  let max = n3

  if (min > n2) {
      min = n2
      if (min > n3) {
          min = n3
      }
  }

  if (max < n1) {
      max = n1
      if (max < n2) {
          max = n2
      }
  }

  
  if (n1 > min & n1 < max) {
      mid = n1
      let objmmm = { min, mid, max }
      return objmmm
  }
  
  if (n2 > min & n2 < max) {
      mid = n2 
      let objmmm = { min, mid, max }
      return objmmm
  } else if (n2 === min) {
      mid = n2 
      let objmmm = { min, mid, max }
      return objmmm
  }
  
  if (n3 > min & n3 < max) {
      mid = n3 
      let objmmm = { min, mid, max }
      return objmmm
  }
}
module.exports = minMedMax
