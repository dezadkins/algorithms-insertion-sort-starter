function insertionSort(list) {

  let length = list.length;
  for (let i = 1; i < length; i++) {
      let key = list[i];
      let j = i - 1;
      while (j >= 0 && list[j] > key) {
          list[j + 1] = list[j];
          j = j - 1;
      }
      list[j + 1] = key;
  }
  return list;
};


function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currElement = arr[i];
    for (var j = i - 1; j >= 0 && currElement < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currElement;
  }
  return arr;
}


// for i from 1 to length(list) inclusive do:

//   /* select value to be inserted */
//   valueToInsert = list[i]
//   holePosition = i

//   /* locate hole position for the element to be inserted */

//   while holePosition > 0 and list[holePosition-1] > valueToInsert do:
//     list[holePosition] = list[holePosition-1]
//     holePosition = holePosition -1
//   end while

//   /* insert the number at hole position */
//   list[holePosition] = valueToInsert

// end for


module.exports = {
  insertionSort
};
