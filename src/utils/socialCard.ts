export function downloadSocialCard(
  title: string,
  archetype: string,
  items: { label: string; value: string }[],
  language: 'id' | 'en'
) {
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 675;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, 1200, 675);
  gradient.addColorStop(0, '#0F0D15');
  gradient.addColorStop(0.5, '#1D1929');
  gradient.addColorStop(1, '#0C0A12');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1200, 675);

  // Decorative circles
  ctx.save();
  ctx.strokeStyle = 'rgba(147, 112, 219, 0.12)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(1080, 120, 240, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(120, 580, 180, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();

  // Subtle border frame
  ctx.strokeStyle = 'rgba(208, 188, 255, 0.2)';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(35, 35, 1130, 605);

  // Brand Header
  ctx.fillStyle = '#D0BCFF';
  ctx.font = 'bold 16px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('OPT • ORIAS PERSONALITY TEST', 65, 80);

  // Verified Badge
  ctx.fillStyle = '#4F378B';
  ctx.beginPath();
  ctx.roundRect(990, 58, 175, 32, 16);
  ctx.fill();
  ctx.fillStyle = '#EADDFF';
  ctx.font = 'bold 12px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('PERSONALITY DOSSIER', 1008, 78);

  // Title (truncate if long)
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 36px "Plus Jakarta Sans", sans-serif';
  const displayTitle = title.length > 45 ? `${title.slice(0, 42)}...` : title;
  ctx.fillText(displayTitle, 65, 140);

  // Archetype
  ctx.fillStyle = '#D0BCFF';
  ctx.font = '600 20px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(archetype, 65, 178);

  // Separator line
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
  ctx.beginPath();
  ctx.moveTo(65, 208);
  ctx.lineTo(1135, 208);
  ctx.stroke();

  // 8 Grid items (2 rows x 4 columns)
  const startX = 65;
  const startY = 230;
  const colW = 255;
  const rowH = 150;

  items.slice(0, 8).forEach((item, idx) => {
    const col = idx % 4;
    const row = Math.floor(idx / 4);
    const x = startX + col * (colW + 16);
    const y = startY + row * (rowH + 16);

    // Card background
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.strokeStyle = 'rgba(208, 188, 255, 0.25)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(x, y, colW, rowH, 12);
    ctx.fill();
    ctx.stroke();

    // Label
    ctx.fillStyle = '#CAC4D0';
    ctx.font = 'bold 11px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(item.label.toUpperCase(), x + 18, y + 36);

    // Value
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 22px "Plus Jakarta Sans", sans-serif';
    const displayVal = item.value.length > 18 ? `${item.value.slice(0, 16)}...` : item.value;
    ctx.fillText(displayVal, x + 18, y + 80);
  });

  // Footer text
  ctx.fillStyle = '#938F99';
  ctx.font = '500 13px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(
    language === 'id'
      ? '8 Dimensi Psikologi Terpadu (MBTI, Enneagram, Jungian, Socionics, AP, Big 5, Alignment) • opt-personality.web.app'
      : '8 Integrated Typology Systems (MBTI, Enneagram, Jungian, Socionics, AP, Big 5, Alignment) • opt-personality.web.app',
    65,
    605
  );

  // Trigger download
  const link = document.createElement('a');
  link.download = `orias_personality_test_card_${Date.now()}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}
