const judulPortfolio = document.createElement('h1');
const teksJudulPortfolio = document.createTextNode('PORTFOLIO');
judulPortfolio.appendChild(teksJudulPortfolio);

const portfolio = document.getElementById('portfolio');
const upsideRow = document.querySelector('.upside-row');
portfolio.insertBefore(judulPortfolio,upsideRow);

judulPortfolio.style.textDecoration = 'underline';
judulPortfolio.style.textAlign = 'center';
judulPortfolio.style.fontSize = '40px';
judulPortfolio.style.paddingBottom = '20px';

