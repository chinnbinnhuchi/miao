
var huchisama = {
  chunk: function (array, size = 1) {
    let arr = []
    for (let i = size; i <= array.length; i = size) {
      arr.push(array.splice(0, i))
    }
    arr.push(array)
    return arr
  }
}
