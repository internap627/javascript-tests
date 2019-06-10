describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

    expect(arr).toEqual(expected);
  });
});

function flatten(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) === 'object') {
      newArr = newArr.concat(flatten(arr[i]))
    } else {
      newArr.push(arr[i])
    }
  }
  return newArr.sort((a,b) => a - b)
}