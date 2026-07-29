// ── Matrix rain canvas ──
const canvas = document.getElementById('rain');
const ctx = canvas.getContext('2d');
const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let cols, drops;

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  cols = Math.floor(canvas.width / 16);
  drops = Array(cols).fill(1);
}
resize();
window.addEventListener('resize', resize);

function drawRain() {
  ctx.fillStyle = 'rgba(10,10,10,0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = '14px "Share Tech Mono", monospace';
  for (let i = 0; i < drops.length; i++) {
    const bright = Math.random() > 0.9;
    ctx.fillStyle = bright ? '#ffffff' : '#00ff41';
    ctx.globalAlpha = bright ? 0.9 : 0.5 + Math.random() * 0.4;
    const ch = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(ch, i * 16, drops[i] * 16);
    ctx.globalAlpha = 1;
    if (drops[i] * 16 > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}
setInterval(drawRain, 50);

// ── Poster rain columns ──
const posterRain = document.getElementById('posterRain');
const rainChars = '01アイウエオ10カキクアイ10ウエオ';
for (let i = 0; i < 12; i++) {
  const col = document.createElement('div');
  col.className = 'poster-col';
  col.style.setProperty('--d', (Math.random() * 3) + 's');
  col.style.setProperty('--delay', '-' + (Math.random() * 5) + 's');
  col.style.animationDuration = (3 + Math.random() * 5) + 's';
  let txt = '';
  for (let j = 0; j < 30; j++) {
    txt += rainChars[Math.floor(Math.random() * rainChars.length)] + '<br>';
  }
  col.innerHTML = txt;
  posterRain.appendChild(col);
}