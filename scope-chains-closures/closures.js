function foo () {
  var bar;
  quux = 'outside';
  function zip () {
    var quux = 'inside';
    bar = true;
  }
  return zip;
}
