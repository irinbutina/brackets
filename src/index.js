module.exports = function check(str, bracketsConfig) { 
   res = bracketsConfig.map(el => el.join('')) 
   for (let i = 0; i < res.length; i++) {
    if (str.includes(res[i])) {
      str= str.replace(res[i], '');
      i = -1;
    }
   }
   return str.length === 0;
}
