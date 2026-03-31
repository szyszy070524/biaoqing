const SITE_NAME = 'Caption Pilot';
const SITE_TAGLINE = 'Free caption generators for social media posts, moods, and viral moments.';
const SITE_DESCRIPTION =
  'Generate funny, aesthetic, short, romantic, sad, and viral captions for Instagram, TikTok, and more with a fast, static English tool site.';
const SITE_URL = process.env.SITE_URL || '';

const toneOptions = ['Funny', 'Aesthetic', 'Cute', 'Bold', 'Romantic', 'Sad', 'Emo'];
const platformOptions = ['Instagram', 'TikTok', 'Facebook', 'X', 'Threads'];
const lengthOptions = ['Short', 'Medium', 'Long', 'One-word'];

const tools = [
  tool({
    slug: 'instagram-caption-generator',
    name: 'Instagram Caption Generator',
    title: 'Instagram Caption Generator: Free Captions for Any Post',
    metaDescription:
      'Generate Instagram captions for selfies, travel, friends, love, and everyday posts. Copy short, catchy, and engaging caption ideas instantly.',
    category: 'Social',
    mood: 'All-purpose',
    intro:
      'Generate polished Instagram captions for daily posts, quick dumps, confident selfies, and share-ready updates.',
    keywords: ['instagram captions', 'caption generator', 'social post ideas'],
    heroLabel: 'Daily Social Copy',
    topics: ['selfie', 'travel', 'friends', 'love', 'daily life'],
  }),
  tool({
    slug: 'tiktok-caption-generator',
    name: 'TikTok Caption Generator',
    title: 'TikTok Caption Generator: Viral Caption Ideas for Free',
    metaDescription:
      'Create TikTok captions for funny videos, photo dumps, trends, and daily posts. Get short, catchy, and scroll-stopping captions in seconds.',
    category: 'Social',
    mood: 'Trending',
    intro:
      'Build punchy TikTok captions that feel native to trends, dumps, edits, and replay-worthy short videos.',
    keywords: ['tiktok captions', 'viral captions', 'short video captions'],
    heroLabel: 'Trend-Ready Copy',
    topics: ['photo dump', 'trend', 'daily life', 'friends', 'weekend'],
  }),
  tool({
    slug: 'funny-caption-generator',
    name: 'Funny Caption Generator',
    title: 'Funny Caption Generator: Short and Witty Caption Ideas',
    metaDescription:
      'Generate funny captions for Instagram, TikTok, selfies, and group photos. Find witty, playful, and shareable captions you can copy instantly.',
    category: 'Mood',
    mood: 'Funny',
    intro:
      'Create witty captions that add personality fast, whether you are posting a selfie, a chaotic dump, or a casual story.',
    keywords: ['funny captions', 'witty captions', 'playful social copy'],
    heroLabel: 'Humor First',
    topics: ['selfie', 'group photo', 'daily life', 'weekend', 'food'],
  }),
  tool({
    slug: 'aesthetic-caption-generator',
    name: 'Aesthetic Caption Generator',
    title: 'Aesthetic Caption Generator: Stylish and Cool Caption Ideas',
    metaDescription:
      'Create aesthetic captions for selfies, sunsets, travel, and photo dumps. Find short, classy, and trendy caption ideas for your next post.',
    category: 'Mood',
    mood: 'Aesthetic',
    intro:
      'Generate clean, restrained captions with a soft, modern tone that works for polished edits and photo dumps.',
    keywords: ['aesthetic captions', 'cool captions', 'classy short captions'],
    heroLabel: 'Clean and Curated',
    topics: ['sunset', 'travel', 'mirror pic', 'photo dump', 'coffee'],
  }),
  tool({
    slug: 'selfie-caption-generator',
    name: 'Selfie Caption Generator',
    title: 'Selfie Caption Generator: Cute, Funny, and Short Captions',
    metaDescription:
      'Generate selfie captions for Instagram and TikTok. Discover cute, funny, confident, and aesthetic captions for mirror pics and close-up shots.',
    category: 'Scenario',
    mood: 'Selfie',
    intro:
      'Create confident, playful, and highly copyable selfie captions without overthinking the post.',
    keywords: ['selfie captions', 'mirror pic captions', 'cute captions'],
    heroLabel: 'Selfie Ready',
    topics: ['mirror pic', 'close-up', 'get ready', 'weekend', 'daily life'],
  }),
  tool({
    slug: 'travel-caption-generator',
    name: 'Travel Caption Generator',
    title: 'Travel Caption Generator: Vacation and Adventure Captions',
    metaDescription:
      'Create travel captions for vacation photos, beach posts, road trips, and adventure shots. Get short, aesthetic, and memorable caption ideas fast.',
    category: 'Scenario',
    mood: 'Travel',
    intro:
      'Generate travel captions for beach escapes, city breaks, and casual adventure posts with a lighter editorial tone.',
    keywords: ['travel captions', 'vacation captions', 'trip captions'],
    heroLabel: 'Go Anywhere',
    topics: ['vacation', 'beach', 'road trip', 'city break', 'sunset'],
  }),
  tool({
    slug: 'love-caption-generator',
    name: 'Love Caption Generator',
    title: 'Love Caption Generator: Romantic Captions for Couples',
    metaDescription:
      'Generate love captions for couple photos, date nights, anniversaries, and sweet posts. Find romantic, cute, and heartfelt captions to copy.',
    category: 'Mood',
    mood: 'Romantic',
    intro:
      'Create soft, romantic captions for sweet moments, date nights, anniversaries, and subtle couple posts.',
    keywords: ['love captions', 'romantic captions', 'sweet couple lines'],
    heroLabel: 'Romantic Copy',
    topics: ['date night', 'anniversary', 'couple photo', 'soft launch', 'daily life'],
  }),
  tool({
    slug: 'couple-caption-generator',
    name: 'Couple Caption Generator',
    title: 'Couple Caption Generator: Cute and Romantic Caption Ideas',
    metaDescription:
      'Create couple captions for Instagram, TikTok, anniversaries, and relationship posts. Discover cute, funny, and romantic lines in seconds.',
    category: 'Scenario',
    mood: 'Couple',
    intro:
      'Build cute or low-key relationship captions for feeds, stories, soft launches, and celebration posts.',
    keywords: ['couple captions', 'relationship captions', 'cute romantic lines'],
    heroLabel: 'For Two',
    topics: ['couple photo', 'date night', 'trip', 'anniversary', 'selfie'],
  }),
  tool({
    slug: 'birthday-caption-generator',
    name: 'Birthday Caption Generator',
    title: 'Birthday Caption Generator: Fun Caption Ideas for Birthday Posts',
    metaDescription:
      'Generate birthday captions for your party photos, selfies, and celebration posts. Find funny, cute, and short birthday caption ideas instantly.',
    category: 'Scenario',
    mood: 'Celebration',
    intro:
      'Generate birthday captions for party dumps, cake photos, selfies, and milestone posts without sounding forced.',
    keywords: ['birthday captions', 'party captions', 'celebration posts'],
    heroLabel: 'Celebrate Better',
    topics: ['birthday', 'party', 'friends', 'selfie', 'cake'],
  }),
  tool({
    slug: 'friendship-caption-generator',
    name: 'Friendship Caption Generator',
    title: 'Friendship Caption Generator: Best Friend Caption Ideas',
    metaDescription:
      'Create friendship captions for best friend photos, group selfies, and fun moments. Get cute, funny, and heartfelt captions ready to copy.',
    category: 'Scenario',
    mood: 'Friends',
    intro:
      'Create best-friend captions that feel natural for dumps, road trips, group selfies, and goofy moments.',
    keywords: ['friendship captions', 'best friend captions', 'group photo captions'],
    heroLabel: 'Friends Only',
    topics: ['besties', 'group photo', 'road trip', 'birthday', 'weekend'],
  }),
  tool({
    slug: 'short-caption-generator',
    name: 'Short Caption Generator',
    title: 'Short Caption Generator: Simple and Catchy Caption Ideas',
    metaDescription:
      'Generate short captions for Instagram, TikTok, selfies, and everyday posts. Find quick, clean, and engaging captions that are easy to copy.',
    category: 'Format',
    mood: 'Short',
    intro:
      'Generate compact captions that land quickly, making them ideal for polished feeds and fast social posting.',
    keywords: ['short captions', 'simple captions', 'clean social copy'],
    heroLabel: 'Short Works',
    topics: ['daily life', 'selfie', 'travel', 'coffee', 'weekend'],
  }),
  tool({
    slug: 'one-word-caption-generator',
    name: 'One-Word Caption Generator',
    title: 'One-Word Caption Generator: Minimal Caption Ideas for Posts',
    metaDescription:
      'Create one-word captions for selfies, aesthetic photos, and social media posts. Find clean, bold, and simple caption ideas in one click.',
    category: 'Format',
    mood: 'Minimal',
    intro:
      'Create one-word captions with a sharper, cleaner feel for aesthetic posts, personal brands, and mood-led uploads.',
    keywords: ['one word captions', 'minimal captions', 'single word post ideas'],
    heroLabel: 'Minimal Mode',
    topics: ['mirror pic', 'fit check', 'sunset', 'travel', 'mood'],
  }),
  tool({
    slug: 'sad-caption-generator',
    name: 'Sad Caption Generator',
    title: 'Sad Caption Generator: Deep and Emotional Caption Ideas',
    metaDescription:
      'Generate sad captions for late-night posts, heartbreak photos, and emotional moments. Find short, deep, and relatable captions to copy.',
    category: 'Mood',
    mood: 'Sad',
    intro:
      'Generate sad captions that feel honest, quiet, and readable instead of overly dramatic or awkwardly poetic.',
    keywords: ['sad captions', 'deep captions', 'emotional post ideas'],
    heroLabel: 'Quiet Emotion',
    topics: ['late night', 'heartbreak', 'rain', 'selfie', 'memory'],
  }),
  tool({
    slug: 'emo-caption-generator',
    name: 'Emo Caption Generator',
    title: 'Emo Caption Generator: Short Emo Captions and Deep Lines',
    metaDescription:
      'Create emo captions for Instagram, TikTok, and mood posts. Discover dark, emotional, and expressive caption ideas with a copy-ready format.',
    category: 'Mood',
    mood: 'Emo',
    intro:
      'Build dark, expressive captions for moody edits, night posts, and short-form emotional content.',
    keywords: ['emo captions', 'emo lines', 'dark mood captions'],
    heroLabel: 'Dark Mood',
    topics: ['late night', 'neon', 'rain', 'mirror pic', 'playlist'],
  }),
  tool({
    slug: 'attitude-caption-generator',
    name: 'Attitude Caption Generator',
    title: 'Attitude Caption Generator: Bold and Confident Caption Ideas',
    metaDescription:
      'Generate attitude captions for selfies, boss posts, and bold social media updates. Find confident, stylish, and powerful lines to copy.',
    category: 'Mood',
    mood: 'Bold',
    intro:
      'Generate confident captions with a cleaner edge for style shots, main-character posts, and bold updates.',
    keywords: ['attitude captions', 'confident captions', 'boss lines'],
    heroLabel: 'Confident Energy',
    topics: ['fit check', 'selfie', 'success', 'night out', 'daily life'],
  }),
  tool({
    slug: 'savage-caption-generator',
    name: 'Savage Caption Generator',
    title: 'Savage Caption Generator: Sharp and Bold Caption Ideas',
    metaDescription:
      'Create savage captions for selfies, clapbacks, and bold posts. Find fierce, witty, and attention-grabbing caption ideas in seconds.',
    category: 'Mood',
    mood: 'Savage',
    intro:
      'Create sharper captions for posts that need edge, wit, and a stronger personality without becoming messy.',
    keywords: ['savage captions', 'bold captions', 'clapback lines'],
    heroLabel: 'Sharp Delivery',
    topics: ['fit check', 'night out', 'selfie', 'daily life', 'friends'],
  }),
  tool({
    slug: 'gym-caption-generator',
    name: 'Gym Caption Generator',
    title: 'Gym Caption Generator: Fitness and Workout Caption Ideas',
    metaDescription:
      'Generate gym captions for workout selfies, fitness progress photos, and training posts. Get motivational, strong, and short caption ideas fast.',
    category: 'Scenario',
    mood: 'Fitness',
    intro:
      'Generate fitness captions for gym mirrors, progress updates, and hard-training posts that still feel natural.',
    keywords: ['gym captions', 'fitness captions', 'workout post ideas'],
    heroLabel: 'Training Mode',
    topics: ['gym', 'fitness', 'progress', 'selfie', 'routine'],
  }),
  tool({
    slug: 'food-caption-generator',
    name: 'Food Caption Generator',
    title: 'Food Caption Generator: Tasty and Fun Caption Ideas',
    metaDescription:
      'Create food captions for restaurant shots, homemade meals, desserts, and coffee posts. Find funny, cute, and delicious caption ideas to copy.',
    category: 'Scenario',
    mood: 'Food',
    intro:
      'Build tasty, fun captions for casual food posts, coffee runs, desserts, and restaurant photos.',
    keywords: ['food captions', 'coffee captions', 'dessert captions'],
    heroLabel: 'Taste First',
    topics: ['coffee', 'dessert', 'brunch', 'dinner', 'daily life'],
  }),
  tool({
    slug: 'pet-caption-generator',
    name: 'Pet Caption Generator',
    title: 'Pet Caption Generator: Cute Dog and Cat Caption Ideas',
    metaDescription:
      'Generate pet captions for dog photos, cat selfies, and adorable animal posts. Discover cute, funny, and heartwarming captions instantly.',
    category: 'Scenario',
    mood: 'Pets',
    intro:
      'Generate cute and funny pet captions for dog walks, cat mood posts, and wholesome everyday animal photos.',
    keywords: ['pet captions', 'dog captions', 'cat captions'],
    heroLabel: 'Pet Energy',
    topics: ['dog', 'cat', 'walk', 'nap', 'daily life'],
  }),
  tool({
    slug: 'graduation-caption-generator',
    name: 'Graduation Caption Generator',
    title: 'Graduation Caption Generator: Graduation Post Caption Ideas',
    metaDescription:
      'Create graduation captions for ceremony photos, cap-and-gown selfies, and celebration posts. Find proud, short, and memorable caption ideas.',
    category: 'Scenario',
    mood: 'Milestone',
    intro:
      'Build polished graduation captions for cap-and-gown posts, stage photos, and celebration updates that feel proud and clean.',
    keywords: ['graduation captions', 'ceremony captions', 'milestone post ideas'],
    heroLabel: 'Milestone Copy',
    topics: ['graduation', 'ceremony', 'friends', 'family', 'success'],
  }),
];

function tool(input) {
  const commonFaqs = [
    {
      question: `What is a ${input.name.toLowerCase()}?`,
      answer: `It is a fast tool that helps you generate ready-to-post ${input.name
        .replace(' Generator', '')
        .toLowerCase()} for social media without writing from scratch.`,
    },
    {
      question: 'Can I copy these captions for free?',
      answer:
        'Yes. Every result is formatted for quick copying so you can use it on Instagram, TikTok, Threads, X, or saved drafts.',
    },
    {
      question: 'Are these captions good for engagement?',
      answer:
        'They are written to be short, readable, and social-first, which makes them easier to pair with posts, reels, dumps, and stories.',
    },
    {
      question: 'Can I generate different tones?',
      answer:
        'Yes. Each page lets you switch tone, platform, topic, and length so the output feels more specific to the post.',
    },
    {
      question: 'Is this page useful for SEO content too?',
      answer:
        'Yes. Each tool page includes static caption collections, FAQs, and supporting copy so it works as both a quick tool and a useful landing page.',
    },
  ];

  return {
    ...input,
    platformOptions,
    toneOptions,
    lengthOptions,
    faqs: commonFaqs,
  };
}

function buildHomePageHtml() {
  const featuredSlugs = [
    'instagram-caption-generator',
    'tiktok-caption-generator',
    'funny-caption-generator',
    'aesthetic-caption-generator',
    'short-caption-generator',
    'love-caption-generator',
    'sad-caption-generator',
    'emo-caption-generator',
  ];
  const featuredTools = featuredSlugs.map((slug) => tools.find((item) => item.slug === slug));
  const moodGroups = [
    'Funny',
    'Aesthetic',
    'Cute',
    'Romantic',
    'Sad',
    'Emo',
    'Savage',
    'Bold',
  ];
  const platformGroups = ['Instagram', 'TikTok', 'Facebook', 'Threads', 'X'];
  const collections = [
    '100 Funny Instagram Captions',
    '80 Aesthetic Short Captions',
    '60 Emo Captions for Late-Night Posts',
    '75 Cute Couple Captions',
    '50 Short Captions for Selfies',
    '90 Sad Captions That Hit Hard',
  ];

  const content = `
    <section class="hero">
      <div class="hero__backdrop"></div>
      <div class="hero__content shell">
        <div class="hero__copy">
          <p class="eyebrow">Caption Tools for Social Growth</p>
          <h1>Find the perfect caption for any post.</h1>
          <p class="lede">Generate funny, aesthetic, short, romantic, sad, and viral captions for Instagram, TikTok, Threads, and more. Built for fast sharing, clean SEO, and instant copying.</p>
          <form class="search-panel" action="./tools/" method="get">
            <label class="sr-only" for="tool-search">Search caption tools</label>
            <input id="tool-search" type="search" name="q" placeholder="Search tools, moods, or post types" />
            <button type="submit">Explore Tools</button>
          </form>
          <div class="hero__quicklinks">
            ${featuredTools
              .slice(0, 5)
              .map(
                (item) =>
                  `<a href="./tools/${item.slug}/" class="chip">${escapeHtml(
                    item.name.replace(' Generator', '')
                  )}</a>`
              )
              .join('')}
          </div>
        </div>
        <div class="hero__visual" aria-hidden="true">
          <div class="hero-stack">
            <div class="hero-stack__panel">
              <span>Trending</span>
              <strong>Short captions that feel native to social</strong>
            </div>
            <div class="hero-stack__panel hero-stack__panel--accent">
              <span>Built for copy</span>
              <strong>20 ready-to-deploy caption tools</strong>
            </div>
            <div class="hero-stack__grid">
              <span>Funny</span>
              <span>Aesthetic</span>
              <span>Emo</span>
              <span>Travel</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section shell">
      <div class="section-heading">
        <p class="eyebrow">Popular</p>
        <h2>Popular Caption Tools</h2>
        <a href="./tools/" class="text-link">View all tools</a>
      </div>
      <div class="tool-grid tool-grid--featured">
        ${featuredTools.map((item) => renderToolCard(item, `./tools/${item.slug}/`)).join('')}
      </div>
    </section>

    <section class="section shell split-band">
      <div>
        <p class="eyebrow">Browse by Mood</p>
        <h2>Start from the feeling, not the format.</h2>
        <p class="section-copy">Mood-based browsing performs well on share-heavy sites because users often know the vibe before they know the wording.</p>
      </div>
      <div class="pill-cloud">
        ${moodGroups.map((item) => `<span class="pill">${item}</span>`).join('')}
      </div>
    </section>

    <section class="section shell split-band split-band--reverse">
      <div>
        <p class="eyebrow">Browse by Platform</p>
        <h2>Match the copy to the platform.</h2>
        <p class="section-copy">Instagram favors polished lines, TikTok favors quick hooks, and Threads or X often work better with shorter, sharper captions.</p>
      </div>
      <div class="pill-cloud">
        ${platformGroups.map((item) => `<span class="pill pill--outline">${item}</span>`).join('')}
      </div>
    </section>

    <section class="section shell">
      <div class="section-heading">
        <p class="eyebrow">Collections</p>
        <h2>Best Caption Collections</h2>
      </div>
      <div class="list-columns">
        ${collections
          .map((item) => `<article class="list-item"><h3>${escapeHtml(item)}</h3><p>Built as long-tail support content around copy intent, platform fit, and social shareability.</p></article>`)
          .join('')}
      </div>
    </section>

    <section class="section shell editorial-block">
      <div>
        <p class="eyebrow">SEO Focus</p>
        <h2>Short captions, emo lines, and social-first microcopy.</h2>
      </div>
      <div class="editorial-columns">
        <p>For your target keywords, the strongest English intent is not literal translation. “Advanced short copy” maps better to short captions, classy captions, deep short quotes, and aesthetic lines.</p>
        <p>For “emo sentences,” the stronger English clusters are emo captions, sad captions, deep emotional lines, late-night captions, and heartbreak post ideas. The site architecture reflects those search patterns directly.</p>
      </div>
    </section>

    <section class="section shell faq-band">
      <div class="section-heading">
        <p class="eyebrow">FAQ</p>
        <h2>Frequently Asked Questions</h2>
      </div>
      <div class="faq-list">
        ${[
          ['What is a caption generator?', 'A caption generator helps users create ready-to-post lines for social content, usually based on mood, platform, topic, and length.'],
          ['Can I use these captions for TikTok and Instagram?', 'Yes. The tools are written to work across Instagram, TikTok, Threads, X, and other short-form social platforms.'],
          ['Why do short captions perform well?', 'They are easier to scan, easier to copy, and more flexible across reels, photo dumps, stories, and feed posts.'],
          ['Can this site scale with more tools later?', 'Yes. The site is generated from structured data, so adding new modules later is straightforward.'],
          ['Is the whole website in English?', 'Yes. The finished pages, metadata, headings, and user-facing interface are all in English.'],
        ]
          .map(
            ([question, answer]) =>
              `<details><summary>${escapeHtml(question)}</summary><p>${escapeHtml(answer)}</p></details>`
          )
          .join('')}
      </div>
    </section>
  `;

  return layout({
    pageTitle: `${SITE_NAME} | Free Caption Generators for Social Media`,
    description: SITE_DESCRIPTION,
    path: '/',
    content,
    bodyClass: 'page-home',
  });
}

function buildToolsIndexHtml() {
  const content = `
    <section class="subhero shell">
      <p class="eyebrow">All Tools</p>
      <h1>All Caption Tools</h1>
      <p class="lede">A static collection of English-first caption generators designed for viral social use cases, shareable content, and SEO-friendly landing pages.</p>
      <div class="search-panel search-panel--compact">
        <input type="search" placeholder="Filter tools by mood or topic" data-tool-search />
        <span class="muted" data-tool-count="${tools.length}">${tools.length} tools ready</span>
      </div>
    </section>
    <section class="section shell">
      <div class="tool-grid" data-tool-grid>
        ${tools.map((item) => renderToolCard(item, `./${item.slug}/`)).join('')}
      </div>
    </section>
  `;

  return layout({
    pageTitle: `All Caption Tools | ${SITE_NAME}`,
    description: 'Browse all caption generators, from funny and aesthetic captions to short, emo, travel, and social-first tools.',
    path: '/tools/',
    content,
    bodyClass: 'page-tools',
  });
}

function buildToolPageHtml(toolItem) {
  const relatedTools = tools.filter((entry) => entry.slug !== toolItem.slug).slice(0, 6);
  const generated = generateCaptionSet(toolItem);
  const featured = generated.slice(0, 12);
  const sectionGroups = buildSectionGroups(toolItem, generated);
  const toolJson = JSON.stringify(
    {
      name: toolItem.name,
      slug: toolItem.slug,
      mood: toolItem.mood,
      topics: toolItem.topics,
      toneOptions: toolItem.toneOptions,
      platformOptions: toolItem.platformOptions,
      lengthOptions: toolItem.lengthOptions,
      captions: generated,
    },
    null,
    2
  );

  const content = `
    <section class="tool-hero shell">
      <div class="tool-hero__copy">
        <p class="eyebrow">${escapeHtml(toolItem.heroLabel)}</p>
        <h1>${escapeHtml(toolItem.name)}</h1>
        <p class="lede">${escapeHtml(toolItem.intro)}</p>
        <div class="meta-row">
          <span>${escapeHtml(toolItem.category)}</span>
          <span>${escapeHtml(toolItem.mood)}</span>
          <span>${escapeHtml(toolItem.keywords[0])}</span>
        </div>
      </div>
      <aside class="tool-hero__aside">
        <div class="aside-card">
          <span>Built for</span>
          <strong>Instagram, TikTok, Threads, and quick-copy posting</strong>
          <p>Each page ships with a generator, static collections, FAQs, and internal links.</p>
        </div>
      </aside>
    </section>

    <section class="section shell tool-layout">
      <div class="generator-panel">
        <div class="generator-head">
          <h2>Generate captions</h2>
          <p>Switch tone, platform, length, and topic to refresh the output instantly.</p>
        </div>
        <form class="generator-form" data-generator-form>
          <label>
            <span>Platform</span>
            <select name="platform">
              ${toolItem.platformOptions
                .map((item) => `<option value="${escapeHtml(item)}">${escapeHtml(item)}</option>`)
                .join('')}
            </select>
          </label>
          <label>
            <span>Tone</span>
            <select name="tone">
              ${toolItem.toneOptions
                .map((item) => `<option value="${escapeHtml(item)}">${escapeHtml(item)}</option>`)
                .join('')}
            </select>
          </label>
          <label>
            <span>Length</span>
            <select name="length">
              ${toolItem.lengthOptions
                .map((item) => `<option value="${escapeHtml(item)}">${escapeHtml(item)}</option>`)
                .join('')}
            </select>
          </label>
          <label>
            <span>Topic</span>
            <select name="topic">
              ${toolItem.topics
                .map((item) => `<option value="${escapeHtml(item)}">${titleCase(item)}</option>`)
                .join('')}
            </select>
          </label>
          <div class="button-row">
            <button type="submit">Generate</button>
            <button type="button" class="button-secondary" data-randomize>Refresh</button>
          </div>
        </form>
      </div>

      <div class="results-panel">
        <div class="section-heading section-heading--tight">
          <p class="eyebrow">Copy-Ready Results</p>
          <h2>${featured.length} ${escapeHtml(toolItem.name.replace(' Generator', ''))} Ready to Copy</h2>
        </div>
        <div class="result-list" data-result-list>
          ${featured.map(renderCaptionCard).join('')}
        </div>
      </div>
    </section>

    <section class="section shell">
      <div class="section-heading">
        <p class="eyebrow">Top Picks</p>
        <h2>Best ${escapeHtml(toolItem.name.replace(' Generator', ''))}</h2>
      </div>
      <div class="quote-grid">
        ${featured.slice(0, 6).map(renderQuoteBlock).join('')}
      </div>
    </section>

    <section class="section shell">
      <div class="section-heading">
        <p class="eyebrow">Collections</p>
        <h2>Browse by caption angle</h2>
      </div>
      <div class="collection-grid">
        ${sectionGroups
          .map(
            (group) => `
              <article class="collection-block">
                <h3>${escapeHtml(group.title)}</h3>
                <ul>
                  ${group.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
                </ul>
              </article>
            `
          )
          .join('')}
      </div>
    </section>

    <section class="section shell split-band">
      <div>
        <p class="eyebrow">Use Cases</p>
        <h2>When these captions work best</h2>
      </div>
      <div class="editorial-columns">
        <p>These captions work well for ${toolItem.topics
          .map((item) => titleCase(item))
          .join(', ')}, plus social posts where the photo is doing most of the storytelling.</p>
        <p>Short captions typically perform better on visual-first platforms because they keep the focus on the image or reel while still giving the post a clear voice.</p>
      </div>
    </section>

    <section class="section shell">
      <div class="section-heading">
        <p class="eyebrow">Related</p>
        <h2>Related Tools</h2>
      </div>
      <div class="tool-grid tool-grid--related">
        ${relatedTools.map((item) => renderToolCard(item, `../${item.slug}/`)).join('')}
      </div>
    </section>

    <section class="section shell faq-band">
      <div class="section-heading">
        <p class="eyebrow">FAQ</p>
        <h2>Questions about ${escapeHtml(toolItem.name.replace(' Generator', ''))}</h2>
      </div>
      <div class="faq-list">
        ${toolItem.faqs
          .map(
            (faq) => `
              <details>
                <summary>${escapeHtml(faq.question)}</summary>
                <p>${escapeHtml(faq.answer)}</p>
              </details>
            `
          )
          .join('')}
      </div>
    </section>

    <section class="section shell editorial-block">
      <div>
        <p class="eyebrow">Why It Works</p>
        <h2>${escapeHtml(toolItem.name.replace(' Generator', ''))} for social-first SEO</h2>
      </div>
      <div class="editorial-columns">
        <p>${escapeHtml(toolItem.metaDescription)} This makes the page useful both as an instant tool and as a search-friendly landing page targeting ${escapeHtml(
          toolItem.keywords.join(', ')
        )}.</p>
        <p>Because the output is short, high-contrast, and easy to copy, it fits the habits of users browsing on mobile and looking for a line they can use right away.</p>
      </div>
    </section>

    <script id="tool-data" type="application/json">${escapeHtml(toolJson)}</script>
  `;

  return layout({
    pageTitle: toolItem.title,
    description: toolItem.metaDescription,
    path: `/tools/${toolItem.slug}/`,
    content,
    bodyClass: 'page-tool',
  });
}

function renderToolCard(item, href) {
  return `
    <article class="tool-card" data-search="${escapeHtml(
      `${item.name} ${item.mood} ${item.category} ${item.keywords.join(' ')}`
    ).toLowerCase()}">
      <p class="tool-card__meta">${escapeHtml(item.category)} / ${escapeHtml(item.mood)}</p>
      <h3>${escapeHtml(item.name)}</h3>
      <p>${escapeHtml(item.intro)}</p>
      <a href="${href}">Open tool</a>
    </article>
  `;
}

function renderCaptionCard(text) {
  return `
    <article class="caption-card">
      <p>${escapeHtml(text)}</p>
      <button type="button" data-copy="${escapeHtml(text)}">Copy Caption</button>
    </article>
  `;
}

function renderQuoteBlock(text) {
  return `
    <article class="quote-block">
      <p>${escapeHtml(text)}</p>
    </article>
  `;
}

function buildSectionGroups(toolItem, generated) {
  const labelMap = [
    `Short ${toolItem.name.replace(' Generator', '')}s`,
    `${titleCase(toolItem.topics[0])} ${toolItem.name.replace(' Generator', '')}s`,
    `${toolItem.platformOptions[0]} ${toolItem.name.replace(' Generator', '')}s`,
    `${toolItem.platformOptions[1]} ${toolItem.name.replace(' Generator', '')}s`,
  ];

  return labelMap.map((title, index) => ({
    title,
    items: generated.slice(index * 4, index * 4 + 6),
  }));
}

function generateCaptionSet(toolItem) {
  const subjects = {
    selfie: ['my face card', 'this mirror moment', 'the close-up', 'today’s angle'],
    travel: ['this passport mood', 'the view', 'the getaway', 'the trip'],
    friends: ['this crew', 'the group chat in real life', 'the lineup', 'the chaos'],
    love: ['this little love story', 'the soft part', 'this heart space', 'our timing'],
    'daily life': ['the ordinary day', 'this little routine', 'today’s scene', 'the small stuff'],
    'photo dump': ['this dump', 'the random roll', 'the messy gallery', 'the extra frames'],
    trend: ['the trend', 'the replay', 'this little clip', 'the internet mood'],
    weekend: ['the weekend', 'this off-duty mood', 'the reset', 'the main plan'],
    'group photo': ['the group shot', 'this lineup', 'the evidence', 'the classic pose'],
    food: ['the plate', 'the bite', 'the snack run', 'this little feast'],
    sunset: ['the glow', 'this last light', 'the golden hour', 'the horizon'],
    'mirror pic': ['the mirror shot', 'this reflection', 'the fit check', 'the angle'],
    coffee: ['the coffee run', 'this little ritual', 'the cup', 'the caffeine mood'],
    vacation: ['the escape', 'the vacation brain', 'this postcard moment', 'the beach day'],
    beach: ['the shoreline', 'the tan line agenda', 'this coast mood', 'the salty air'],
    'road trip': ['the road trip', 'the miles', 'this window view', 'the stop we kept'],
    'city break': ['the city break', 'the skyline', 'this street corner', 'the quick escape'],
    'date night': ['date night', 'this little plan', 'the dinner table', 'the soft launch'],
    anniversary: ['the anniversary post', 'this chapter', 'the celebration', 'the favorite yes'],
    'couple photo': ['this photo of us', 'the two of us', 'the easy part', 'our frame'],
    birthday: ['the birthday energy', 'this new chapter', 'the candles', 'the celebration'],
    party: ['the party', 'the late arrival', 'this loud little night', 'the dance floor'],
    cake: ['the cake', 'the extra frosting', 'this sweet moment', 'the birthday table'],
    besties: ['the besties', 'this ride-or-die crew', 'the day ones', 'the favorites'],
    'late night': ['the late-night feeling', 'the 2 a.m. thought', 'this quiet hour', 'the after-midnight mood'],
    heartbreak: ['the ache', 'this unfinished chapter', 'the empty reply', 'the almost'],
    rain: ['the rain', 'this grey weather', 'the window drops', 'the soft storm'],
    memory: ['the memory', 'this old chapter', 'the flashback', 'the thing that stayed'],
    neon: ['the neon glow', 'this dark corner', 'the city lights', 'the midnight color'],
    playlist: ['the playlist', 'this repeat song', 'the bridge hit', 'the headphones'],
    'fit check': ['the fit', 'this outfit mood', 'the look', 'the front-facing camera'],
    success: ['the win', 'this quiet flex', 'the progress', 'the level-up'],
    'night out': ['the night out', 'this little entrance', 'the after-dark mood', 'the flash photo'],
    gym: ['the gym mirror', 'this last set', 'the sweat', 'the training block'],
    fitness: ['the work', 'this stronger version', 'the progress check', 'the discipline'],
    progress: ['the progress shot', 'this little gain', 'the consistency', 'the next level'],
    routine: ['the routine', 'this early start', 'the habit', 'the repeat work'],
    dessert: ['the dessert', 'this sugar rush', 'the sweet ending', 'the little treat'],
    brunch: ['the brunch spread', 'this slow morning', 'the table', 'the weekend order'],
    dinner: ['the dinner plan', 'this plate', 'the night meal', 'the menu choice'],
    dog: ['the dog content', 'this good boy energy', 'the walk', 'the paws'],
    cat: ['the cat mood', 'this tiny boss', 'the nap schedule', 'the stare'],
    walk: ['the walk', 'this little outside break', 'the fresh air', 'the sidewalk moment'],
    nap: ['the nap', 'this low-effort icon', 'the blanket mood', 'the sleepy look'],
    graduation: ['the cap toss', 'this final chapter', 'the diploma day', 'the next step'],
    ceremony: ['the ceremony', 'this walk across the stage', 'the applause', 'the big room'],
    family: ['the family photo', 'this support system', 'the proud faces', 'the people behind it'],
  };

  const toneFragments = {
    Funny: ['is doing all the work', 'was never going to stay quiet', 'deserved better lighting', 'came with zero context and full confidence'],
    Aesthetic: ['sits softly in the frame', 'keeps the mood clean', 'belongs in a slower scroll', 'lands best with less noise'],
    Cute: ['makes everything feel lighter', 'looks even better in daylight', 'keeps the mood sweet', 'deserves a soft little caption'],
    Bold: ['did not come to whisper', 'owns the timeline', 'walks in like a headline', 'keeps the energy direct'],
    Romantic: ['feels better with you in it', 'turns ordinary days into something soft', 'makes the whole feed warmer', 'belongs to the easy kind of love'],
    Sad: ['still lingers after the post ends', 'knows exactly how quiet can feel', 'says more when it says less', 'hits harder after midnight'],
    Emo: ['sounds best with the volume up', 'turns silence into a caption', 'keeps the lights low and the feelings loud', 'fits the mood without explaining too much'],
    Savage: ['said enough without trying hard', 'keeps the caption colder than the room', 'does not need extra explanation', 'lets the post stare back'],
    Short: ['says enough and leaves', 'works best without extra words', 'keeps the scroll moving', 'proves short can still hit'],
    Minimal: ['lands in one clean word', 'keeps the message stripped back', 'stays sharp with less', 'feels stronger when it stays simple'],
    'All-purpose': ['works on almost any post', 'fits the feed without effort', 'keeps the caption flexible', 'is easy to reuse'],
    Trending: ['fits the pace of the feed', 'lands faster than a long caption', 'keeps the hook moving', 'was built for replay energy'],
    Celebration: ['earned the extra noise', 'belongs in the camera roll forever', 'makes the moment louder', 'holds the memory well'],
    Friends: ['gets better when everyone is in frame', 'belongs in the group chat later', 'keeps the energy loose', 'feels like a shared inside joke'],
    Selfie: ['lets the photo speak first', 'keeps the confidence light', 'works with one good angle', 'pairs well with zero explanation'],
    Travel: ['makes the passport worth it', 'belongs under the best frame', 'keeps the trip in motion', 'travels well from post to post'],
    Couple: ['sounds better with two people in the picture', 'keeps the post soft, not loud', 'works when the photo already says enough', 'fits the easy part of being together'],
    Fitness: ['matches the work behind the post', 'keeps the progress visible', 'makes the routine look earned', 'stays strong without overselling it'],
    Food: ['works best before the first bite', 'turns the plate into the headline', 'keeps the craving immediate', 'belongs in the saved folder'],
    Pets: ['matches the cute chaos perfectly', 'lets the pet take center stage', 'sounds like a tiny personality', 'belongs next to the best paw photo'],
    Milestone: ['marks the moment cleanly', 'fits the pride in the frame', 'works for a chapter close and a chapter open', 'keeps the post memorable'],
  };

  const lengthFragments = {
    Short: ['Short enough to hit fast.', 'Just enough words.', 'Small line, clear mood.', 'Quick copy, strong vibe.'],
    Medium: ['A medium-length caption that keeps the post readable without feeling empty.', 'Long enough to add voice, short enough to stay social.'],
    Long: ['A longer caption gives the post a bit more atmosphere while still staying easy to scan on mobile.', 'More room, same social rhythm.'],
    'One-word': ['Iconic.', 'Unbothered.', 'Offline.', 'Glow.'],
  };

  const result = [];

  toolItem.toneOptions.forEach((tone, toneIndex) => {
    toolItem.topics.forEach((topic, topicIndex) => {
      const subjectPool = subjects[topic] || ['this post', 'the frame', 'this mood', 'the moment'];
      const subject = subjectPool[(toneIndex + topicIndex) % subjectPool.length];
      const tonePool = toneFragments[tone] || toneFragments[toolItem.mood] || toneFragments['All-purpose'];
      const toneLine = tonePool[(toneIndex + topicIndex) % tonePool.length];
      const lengthKey = toolItem.lengthOptions[(toneIndex + topicIndex) % toolItem.lengthOptions.length];
      const shortLine = lengthFragments[lengthKey];
      const extra = shortLine[(toneIndex + topicIndex) % shortLine.length];
      result.push(`${capitalize(subject)} ${toneLine}. ${extra}`);
    });
  });

  toolItem.topics.forEach((topic, index) => {
    const platform = toolItem.platformOptions[index % toolItem.platformOptions.length];
    result.push(`${titleCase(topic)} on ${platform}, caption handled.`);
    result.push(`${titleCase(topic)} energy, ${toolItem.mood.toLowerCase()} delivery.`);
  });

  return dedupe(result).slice(0, 32);
}

function layout({ pageTitle, description, path, content, bodyClass }) {
  const canonical = SITE_URL ? `${SITE_URL}${path}` : '';
  const canonicalTags = canonical
    ? `
    <link rel="canonical" href="${escapeHtml(canonical)}" />
    <meta property="og:url" content="${escapeHtml(canonical)}" />`
    : '';
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(pageTitle)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="theme-color" content="#0e1116" />
    <link rel="icon" type="image/png" href="${assetPath(path, 'assets/logo.png')}" />
    <link rel="shortcut icon" href="${assetPath(path, 'assets/logo.png')}" />
    <link rel="apple-touch-icon" href="${assetPath(path, 'assets/logo.png')}" />
    ${canonicalTags}
    <meta property="og:title" content="${escapeHtml(pageTitle)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${SITE_NAME}" />
    <link rel="stylesheet" href="${assetPath(path, 'assets/styles.css')}" />
  </head>
  <body class="${escapeHtml(bodyClass)}">
    <header class="site-header">
      <div class="shell site-header__inner">
        <a href="${assetPath(path, '')}" class="brand">
          <img src="${assetPath(path, 'assets/logo.png')}" alt="${SITE_NAME} logo" class="brand__logo" />
          <span>
            <strong>${SITE_NAME}</strong>
            <small>${SITE_TAGLINE}</small>
          </span>
        </a>
        <nav class="site-nav">
          <a href="${assetPath(path, '')}">Home</a>
          <a href="${assetPath(path, 'tools/')}">Tools</a>
          <a href="${assetPath(path, 'tools/')}#collections">Collections</a>
        </nav>
      </div>
    </header>
    <main>${content}</main>
    <footer class="site-footer">
      <div class="shell footer-grid">
        <div>
          <p class="eyebrow">Caption Pilot</p>
          <p>English-first social caption tools built for static deployment, shareable traffic, and fast content scaling.</p>
        </div>
        <div>
          <h2>Popular Tools</h2>
          <ul>
            ${tools
              .slice(0, 5)
              .map((item) => `<li><a href="${assetPath(path, `tools/${item.slug}/`)}">${escapeHtml(item.name)}</a></li>`)
              .join('')}
          </ul>
        </div>
        <div>
          <h2>Top Categories</h2>
          <ul>
            <li><a href="${assetPath(path, 'tools/funny-caption-generator/')}">Funny Captions</a></li>
            <li><a href="${assetPath(path, 'tools/aesthetic-caption-generator/')}">Aesthetic Captions</a></li>
            <li><a href="${assetPath(path, 'tools/short-caption-generator/')}">Short Captions</a></li>
            <li><a href="${assetPath(path, 'tools/emo-caption-generator/')}">Emo Captions</a></li>
            <li><a href="${assetPath(path, 'tools/travel-caption-generator/')}">Travel Captions</a></li>
          </ul>
        </div>
      </div>
    </footer>
    <script src="${assetPath(path, 'assets/site.js')}" defer></script>
  </body>
</html>`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function titleCase(value) {
  return value
    .split(' ')
    .map((part) => capitalize(part))
    .join(' ');
}

function dedupe(list) {
  return [...new Set(list)];
}

function assetPath(pagePath, target) {
  const segments = pagePath.split('/').filter(Boolean);
  const depth = pagePath === '/' ? 0 : segments.length;
  const prefix = depth <= 0 ? './' : '../'.repeat(depth);
  return `${prefix}${target}`;
}

module.exports = {
  SITE_NAME,
  SITE_DESCRIPTION,
  tools,
  buildHomePageHtml,
  buildToolsIndexHtml,
  buildToolPageHtml,
  generateCaptionSet,
};
