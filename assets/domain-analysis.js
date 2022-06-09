
const HAPPINESS = 'Happiness Paradise (HK) Limited';
const AMAZING = 'Amazing Grand（HK）Limited';

if (/HappinessParadiseSoft/i.test(window.location.host)) {
    document.getElementById('logoA').innerHTML = HAPPINESS;
    document.getElementById('logoB').innerHTML = HAPPINESS;
    document.getElementById('footerSpan').innerHTML = HAPPINESS;
} else {
    document.getElementById('logoA').innerHTML = AMAZING;
    document.getElementById('logoB').innerHTML = AMAZING;
    document.getElementById('footerSpan').innerHTML = AMAZING;
}