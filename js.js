const text = `Um site https://google.com
Um site incompleto http://google
Um site que não existe htp://gooe..com`;

const regex = /https?:\/\/[^\s]+/g;
const linksValidos =  text.match(regex);
console.log(linksValidos);