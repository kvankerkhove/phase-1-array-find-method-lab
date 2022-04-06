function findWin(item) {
    return item.result === "W"
  }
  
  function superbowlWin(array) {
    if( array.find(findWin)) {
      return array.find(findWin).year;
    }
  }
  