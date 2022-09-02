const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  let min
  let med
  let max
  let objmmm = {min, med, max}
  if (n1>n2 && n1>n3) {
    max = n1
    if (n2>n3) {
      med = n2
      min = n3
    }
    else {med = n3
          min = n2}
  }
  else if (n1>n2 && n1<n3) {
    med = n1
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
      med = n3
    }
    else {max = n3
          med = n2}
  }
  else if (n1<n2 && n1>n3) {
    med = n1
    max = n2
    min = n3
  }
  else if (n1>n2 && n1<n3) {
    med = n1
    min = n2
    max = n3
  }
  return objmmm
}
module.exports = minMedMax
