// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Click-to-copy for any element with [data-copy="..."]. For mailto links, the
// browser still opens the mail client — copying happens alongside that.
document.querySelectorAll('[data-copy]').forEach((el) => {
  el.addEventListener('click', async () => {
    const value = el.getAttribute('data-copy');
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = value;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    const feedback = el.querySelector('.copy-pill__feedback');
    if (!feedback) return;
    feedback.classList.add('show');
    setTimeout(() => feedback.classList.remove('show'), 1600);
  });
});
