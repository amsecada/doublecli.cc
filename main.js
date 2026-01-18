

document.addEventListener('DOMContentLoaded', () => {
  setupForm();
  setupFAQ();
});

function setupForm() {
  const form = document.getElementById('waitlist-form');
  const messageEl = document.getElementById('form-message');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Reset state
    messageEl.textContent = 'TRANSMITTING...';
    messageEl.className = 'mono text-orange';
    messageEl.style.opacity = '1';

    const email = emailInput.value;
    const message = messageInput.value;
    const endpoint = window.DOUBLECLI_CONFIG?.waitlistEndpoint;

    if (!endpoint) {
      console.error('Configuration missing: waitlistEndpoint');
      messageEl.textContent = 'SYSTEM ERROR: CONFIG MISSING';
      messageEl.className = 'mono text-magenta';
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email, message })
      });

      if (response.ok) {
        messageEl.textContent = 'ACCESS REQUESTED. STAND BY.';
        messageEl.className = 'mono text-orange';
        form.reset();
      } else {
        const data = await response.json().catch(() => ({}));
        messageEl.textContent = `ERROR: ${data.error || 'The system rejected your request.'}`;
        messageEl.className = 'mono text-magenta';
      }

    } catch (err) {
      console.warn('Submission error:', err);
      messageEl.textContent = 'CONNECTION FAILURE. RETRY.';
      messageEl.className = 'mono text-magenta';
    }
  });
}

function setupFAQ() {
  const faqItems = document.querySelectorAll('.faq-question');

  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      const parent = item.parentElement;
      const answer = parent.querySelector('.faq-answer');
      const icon = item.querySelector('span:last-child');

      const isOpen = answer.classList.contains('open');

      if (isOpen) {
        answer.classList.remove('open');
        icon.textContent = '+';
      } else {
        answer.classList.add('open');
        icon.textContent = '-';
      }
    });
  });
}
