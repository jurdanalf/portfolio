const judulAbout = document.createElement('h1');
const teksJudulِAbout = document.createTextNode('ِAbout');
judulAbout.appendChild(teksJudulِAbout);

const about = document.getElementById('about');
const classAbout = document.querySelector('.about');
about.insertBefore(judulAbout,classAbout);

judulAbout.style.textDecoration = 'none';
judulAbout.style.textAlign = 'center';
judulAbout.style.fontSize = '40px';
judulAbout.style.paddingBottom = '20px';
judulAbout.style.borderBottom = '3px solid darkcyan';
judulAbout.style.width = '240px';
judulAbout.style.margin = 'auto';

const judulPortfolio = document.createElement('h1');
const teksJudulPortfolio = document.createTextNode('Portfolio');
judulPortfolio.appendChild(teksJudulPortfolio);

const portfolio = document.getElementById('portfolio');
const upsideRow = document.querySelector('.upside-row');
portfolio.insertBefore(judulPortfolio,upsideRow);

judulPortfolio.style.textDecoration = 'none';
judulPortfolio.style.textAlign = 'center';
judulPortfolio.style.fontSize = '40px';
judulPortfolio.style.paddingBottom = '20px';
judulPortfolio.style.borderBottom = '3px solid darkcyan';
judulPortfolio.style.width = '240px';
judulPortfolio.style.margin = 'auto';

const judulContact = document.createElement('h1');
const teksJudulContact = document.createTextNode('Contact Me');
judulContact.appendChild(teksJudulContact);

const contact = document.getElementById('contact');
const classContact = document.querySelector('.contact');
contact.insertBefore(judulContact,classContact);

judulContact.style.textDecoration = 'none';
judulContact.style.textAlign = 'center';
judulContact.style.fontSize = '40px';
judulContact.style.paddingBottom = '20px';
judulContact.style.borderBottom = '3px solid darkcyan';
judulContact.style.width = '240px';
judulContact.style.margin = 'auto';