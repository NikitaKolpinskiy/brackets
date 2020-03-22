module.exports = function check(str, bracketsConfig) {
  let bracer = bracketsConfig.map((e) => e.join(""));

  for (let i = 0; i < bracer.length; i++) {
    if( str.includes(bracer[i])) {
      str = str.replace(bracer[i], "");
      i = -1;
    }
  }
  return (str) ? false : true;
}