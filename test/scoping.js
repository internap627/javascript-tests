describe('scoping', function () {
  it('should correctly deal with scoping `this` back to the callee', function () {
    var mod = new Module(),
        request;

    request = function (callback) {
      return callback();
    };

    function Module () {
      this.foo = 'bar';
    }

    Module.prototype.method = function() {
      return this.foo;
    };

    Module.prototype.req = function() {
      return request(this.method);
    };

    expect(mod.req()).toBe('bar');
  });
});

const cat = {
  name: 'Fluff',
  color: 'white',
  speak: function() {
   return `Meow, my name is ${this.name}`
  }
}