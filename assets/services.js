// Live preview: the visitor types a business name and picks a kind; the phone shows its page.
const KINDS = {
  bakery:  { bg: '#8C2F39', fg: '#fff', line: 'Cakes and brownies baked to order. Delivery across DHA and Gulberg.', cta: 'Order on WhatsApp', foot: 'Open daily, 10 am to 9 pm',
             items: [['Chocolate fudge cake, 2 lb', 'Rs 3,200'], ['Lotus Biscoff cake, 2 lb', 'Rs 3,800'], ['Fudge brownies, box of 6', 'Rs 1,400'], ['Brown butter cookies, 8', 'Rs 1,600']] },
  clinic:  { bg: '#0E6E6E', fg: '#fff', line: 'Check-ups, cleaning and fillings. Female doctor available. Walk-ins until 8 pm.', cta: 'Book on WhatsApp', foot: 'Monday to Saturday, 11 am to 8 pm',
             items: [['Consultation', 'Rs 1,500'], ['Scaling and polishing', 'Rs 4,000'], ['Tooth-coloured filling', 'Rs 5,000'], ['Root canal', 'Rs 15,000']] },
  academy: { bg: '#2B3A8C', fg: '#fff', line: 'O Level, A Level and Matric in batches of 12. Admissions open.', cta: 'Ask about admission', foot: 'Classes 3 pm to 8 pm, Monday to Saturday',
             items: [['O Level Maths, monthly', 'Rs 9,000'], ['O Level Physics, monthly', 'Rs 9,000'], ['A Level Chemistry, monthly', 'Rs 12,000'], ['Matric Science, monthly', 'Rs 7,500']] },
  salon:   { bg: '#1E1B18', fg: '#F3D9B1', line: 'Hair, skin and bridal makeup by appointment. Ladies only.', cta: 'Book on WhatsApp', foot: 'Tuesday to Sunday, 11 am to 8 pm',
             items: [['Haircut and blow-dry', 'Rs 2,500'], ['Hydrating facial', 'Rs 4,500'], ['Party makeup', 'Rs 8,000'], ['Bridal makeup', 'Rs 45,000']] },
  shop:    { bg: '#E9E3D6', fg: '#1F2A44', line: 'Unstitched lawn and ready-to-wear. Cash on delivery across Pakistan.', cta: 'Order on WhatsApp', foot: 'Delivery in 3 to 5 days',
             items: [['Printed lawn, 3-piece', 'Rs 6,500'], ['Embroidered kurta', 'Rs 4,200'], ['Chiffon dupatta', 'Rs 2,800'], ['Cotton trouser', 'Rs 1,900']] },
};
const WA = 'https://wa.me/923094413394?text=';
const $ = (id) => document.getElementById(id);
const nameIn = $('try-name'), kindIn = $('try-kind');

function render() {
  const k = KINDS[kindIn.value];
  const name = nameIn.value.trim() || 'Your shop';
  const screen = $('screen');
  screen.style.background = k.bg;
  screen.style.color = k.fg;
  $('s-name').textContent = name;
  $('s-line').textContent = k.line;
  screen.querySelector('.s-wa').textContent = k.cta;
  $('s-list').replaceChildren(...k.items.map(([item, price]) => {
    const li = document.createElement('li'), b = document.createElement('b');
    b.textContent = price; li.append(item + ' ', b); return li;
  }));
  $('s-foot').textContent = k.foot;
  $('answer').textContent = k.items[0][1];
  $('answer-cap').textContent = k.items[0][1];
  const kind = kindIn.options[kindIn.selectedIndex].text.toLowerCase();
  $('try-send').href = WA + encodeURIComponent(`Assalam o alaikum, I want a website like this for ${name} (${kind}).`);
}
nameIn.addEventListener('input', render);
kindIn.addEventListener('change', render);
$('try-form').addEventListener('submit', (e) => e.preventDefault());
render();
$('year').textContent = new Date().getFullYear();

// The one loud scroll moment: the question piles up, then the answer rises.
addEventListener('load', () => {
  if (!window.gsap || !window.ScrollTrigger || !matchMedia('(min-width: 64em) and (prefers-reduced-motion: no-preference)').matches) return;
  gsap.registerPlugin(ScrollTrigger);
  const count = { n: 1 };
  const out = $('count');
  gsap.timeline({
    scrollTrigger: { trigger: '.specimens', start: 'top 85%', end: 'bottom 35%', scrub: 0.6 },
  })
    .from('#ask', { yPercent: 22, ease: 'none', duration: 1 })
    .to(count, { n: 40, ease: 'none', duration: 1, onUpdate: () => { out.textContent = Math.round(count.n); } }, 0)
    .from('#answer', { yPercent: 45, ease: 'none', duration: 1 }, 0.5);
});
