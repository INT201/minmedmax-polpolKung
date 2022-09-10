const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  let min
  let mid
  let max
  let objmmm = {min, mid, max}
  if (n1>n2 && n1>n3) {
    max = n1
    if (n2>n3) {
      mid = n2
      min = n3
    }
    else {mid = n3
          min = n2}
  }
  else if (n1>n2 && n1<n3) {
    mid = n1
    if (n2>n3) {
      max = n2
      min = n3
    }
    else {max = n3
          min = n2}
  }
  else if (n1<n2 && n1<n3) {
    min = n1
    if (n2>n3) {
      max = n2
      mid = n3
    }
    else {max = n3
          mid = n2}
  }
  else if (n1<n2 && n1>n3) {
    mid = n1
    max = n2
    min = n3
  }
  else if (n1>n2 && n1<n3) {
    mid = n1
    min = n2
    max = n3
  }
  return objmmm
}
module.exports = minMedMax
