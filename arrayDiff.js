function arrayDiff(a, b) {
    const arrDiff = []
   a.forEach(item => {
     if(!b.includes(item)){
       arrDiff.push(item)
     }
   })
    return arrDiff
  }

  function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  }