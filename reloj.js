(() => {
  const clock = document.getElementById('zetaClock');
  if (!clock) return;
  const formatter = new Intl.DateTimeFormat('es-AR', {
    timeZone: 'America/Argentina/Buenos_Aires',
    hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23'
  });
  function updateClock() {
    const now = new Date();
    clock.textContent = formatter.format(now);
    clock.dateTime = now.toISOString();
  }
  updateClock();
  setInterval(updateClock, 1000);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) updateClock();
  });
})();
