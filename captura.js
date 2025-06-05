const texto = `Acesse alura.com.br para mais informações, 
Veja também https://g1.globo.com/politica/noticia/2025/05/30/venda-de-sentencas-pf-mira-suspeitos-no-tocantins-em-nova-fase.ghtml
Evite erros com htp://errado.com
apenas .com https://errado.com`;
function extraiLinksValidos(texto) {
    const possiveisLinks = texto.match((/\https?:\/\/[^\s]+/gi) || []);
    const linksValidos = [];
    for (const link of possiveisLinks) {
        try {
            console.log("Tendeir");
            const url = new URL(link);
            if (url.protocol === "http:" || url.protocol === "https:") {
                linksValidos.push({
                    href: url.href,
                    host: url.hostname,
                    caminho: url.pathname,
                    params: url.search
                });
            }
        } catch{}}
        return linksValidos;
}
console.table(extraiLinksValidos(texto));

// ‾\_(ツ)_/‾