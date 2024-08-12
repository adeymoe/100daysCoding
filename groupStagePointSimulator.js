function points(games) {
    let point = 0
    for (let i = 0; i<games.length; i++){
      let gameScore = games[i].split(":")
      let x = gameScore[0]
      let y = gameScore[1]
      if(x > y){
        point += 3
      }
      else if(x == y){
        point += 1
      }
      else{
        point += 0
      }
      
    }
    
    return point
  }