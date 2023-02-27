// chromosome test for child's biological gender. XX for female , XY for male


function chromosomeCheck(sperm) {
    const spermSplit = sperm.split('') 
    if(spermSplit[0]===spermSplit[1]){
      return  "Congratulations! You're going to have a daughter."
      }else{
        return "Congratulations! You're going to have a son."
      }
    }