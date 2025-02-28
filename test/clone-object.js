describe('clone object', function () {
  it('should clone an object', function () {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
        obj = {};

    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});

const clone = (object) => {
  let obj = {}
  for(key in object){
    obj[key] = object[key]
  }
  return obj
}