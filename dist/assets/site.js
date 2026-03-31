(function () {
  const searchInput = document.querySelector('[data-tool-search]');
  const toolGrid = document.querySelector('[data-tool-grid]');

  if (searchInput && toolGrid) {
    const cards = Array.from(toolGrid.querySelectorAll('[data-search]'));

    searchInput.addEventListener('input', () => {
      const query = searchInput.value.trim().toLowerCase();

      cards.forEach((card) => {
        const match = card.dataset.search.includes(query);
        card.hidden = !match;
      });
    });
  }

  document.addEventListener('click', async (event) => {
    const button = event.target.closest('[data-copy]');
    if (!button) return;

    const text = button.getAttribute('data-copy') || '';

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      }

      const original = button.textContent;
      button.textContent = 'Copied';
      button.classList.add('copied');

      setTimeout(() => {
        button.textContent = original;
        button.classList.remove('copied');
      }, 1400);
    } catch (error) {
      button.textContent = 'Copy failed';
    }
  });

  const toolDataScript = document.getElementById('tool-data');
  const resultList = document.querySelector('[data-result-list]');
  const form = document.querySelector('[data-generator-form]');
  const randomizeButton = document.querySelector('[data-randomize]');

  if (!toolDataScript || !resultList || !form) return;

  const data = JSON.parse(toolDataScript.textContent);

  function renderCaptionItem(text) {
    return `
      <article class="caption-card">
        <p>${escapeHtml(text)}</p>
        <button type="button" data-copy="${escapeHtml(text)}">Copy Caption</button>
      </article>
    `;
  }

  function buildResults(values) {
    const { platform, tone, length, topic } = values;
    const base = [
      `${topic} on ${platform}, ${tone.toLowerCase()} delivery.`,
      `${tone} enough for ${platform}, short enough to post fast.`,
      `${topic} mood, ${length.toLowerCase()} caption, clean ${platform} energy.`,
      `${platform} post ready. ${tone} line, ${topic} focus.`,
      `${topic} and ${tone.toLowerCase()} timing just work here.`,
      `${length} caption, ${platform} fit, ${topic} locked in.`,
      `${tone} copy for ${topic}, built for ${platform}.`,
      `${topic} energy, zero overthinking, better ${platform} flow.`,
    ];

    const seeded = data.captions.filter((item) => {
      const lower = item.toLowerCase();
      return lower.includes(topic.toLowerCase()) || lower.includes(tone.toLowerCase());
    });

    return [...seeded, ...base].slice(0, 12);
  }

  function draw(values) {
    resultList.innerHTML = buildResults(values).map(renderCaptionItem).join('');
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(form).entries());
    draw(values);
  });

  if (randomizeButton) {
    randomizeButton.addEventListener('click', () => {
      form.platform.selectedIndex = Math.floor(Math.random() * form.platform.options.length);
      form.tone.selectedIndex = Math.floor(Math.random() * form.tone.options.length);
      form.length.selectedIndex = Math.floor(Math.random() * form.length.options.length);
      form.topic.selectedIndex = Math.floor(Math.random() * form.topic.options.length);
      const values = Object.fromEntries(new FormData(form).entries());
      draw(values);
    });
  }

  draw(Object.fromEntries(new FormData(form).entries()));

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
})();
