const text = `Um site https://google.com
Um site incompleto http://google
Um site que não existe htp://gooe.com
Outro site https://g1.globo.com/politica/noticia/2025/05/30/venda-de-sentencas-pf-mira-suspeitos-no-tocantins-em-nova-fase.ghtml`;

function extraiLinks(texto) {
    
    const possiveisLinks = texto.match(/https?:\/\/[^\s]+/gi) || [];
    console.log(possiveisLinks);
}
extraiLinks(text);