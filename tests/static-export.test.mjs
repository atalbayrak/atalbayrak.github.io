import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = new URL("../", import.meta.url);

async function readOutput(relativePath) {
  return readFile(new URL(`../out/${relativePath}`, import.meta.url), "utf8");
}

async function listTextFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listTextFiles(absolute)));
    } else if (/\.(?:html|css|js|json|txt|xml)$/i.test(entry.name)) {
      files.push(absolute);
    }
  }

  return files;
}

test("exports English and Turkish portfolio routes", async () => {
  const [english, turkish] = await Promise.all([
    readOutput("index.html"),
    readOutput("tr/index.html"),
  ]);

  assert.match(english, /<html lang="en"/);
  assert.match(turkish, /<html lang="tr"/);
  assert.match(english, /Ahmet Taha Albayrak/);
  assert.match(english, /AI ENGINEER/);
  assert.match(english, /1B\+/);
  assert.match(turkish, /Yapay Zekâ Mühendisi/);
  assert.match(turkish, /1B\+/);
  assert.match(english, /href="\/tr\/"/);
  assert.match(turkish, /href="\/"/);

  for (const html of [english, turkish]) {
    assert.match(html, /id="expertise"/);
    assert.match(html, /id="impact"/);
    assert.match(html, /id="projects"/);
    assert.match(html, /id="experience"/);
    assert.match(html, /id="background"/);
    assert.doesNotMatch(html, /id="skills"/);
    assert.doesNotMatch(
      html,
      /<section class="(?:section manifesto|contact)"/,
    );

    const sectionOrder = [
      html.indexOf('id="impact"'),
      html.indexOf('id="projects"'),
      html.indexOf('id="experience"'),
      html.indexOf('id="expertise"'),
      html.indexOf('id="background"'),
    ];
    assert.deepEqual(sectionOrder, [...sectionOrder].sort((a, b) => a - b));
  }
});

test("publishes the correct contact and profile links", async () => {
  const english = await readOutput("index.html");

  assert.match(english, /mailto:ahmetahalbayrak@gmail\.com/);
  assert.doesNotMatch(english, /tel:\+905070214264|\+90 507 021 4264/);
  assert.match(english, /https:\/\/www\.linkedin\.com\/in\/atalbayrak/);
  assert.match(english, /https:\/\/github\.com\/atalbayrak/);
  assert.match(english, /https:\/\/atalbayrak\.github\.io\/1bitllm\//);
  assert.match(english, /https:\/\/github\.com\/atalbayrak\/1bitllm/);
  assert.match(english, /https:\/\/atalbayrak\.github\.io\/openttd\//);
  assert.match(english, /https:\/\/github\.com\/atalbayrak\/openttd/);
  assert.match(english, /\/Ahmet-Taha-Albayrak-CV\.pdf/);
  assert.match(
    english,
    /property="og:image" content="https:\/\/atalbayrak\.github\.io\/og\.png"/,
  );
  assert.match(english, /rel="icon" href="\/favicon\.png"/);
  assert.match(english, /rel="manifest" href="\/manifest\.webmanifest"/);
  assert.match(english, /application\/ld\+json/);
  assert.match(english, /"@type":"Person"/);
  assert.match(english, /Open to international AI engineering opportunities/);
  await access(new URL("public/Ahmet-Taha-Albayrak-CV.pdf", root));
  await access(new URL("public/og.png", root));
  await access(new URL("public/favicon.png", root));
  await access(new URL("out/Ahmet-Taha-Albayrak-CV.pdf", root));
  await access(new URL("out/og.png", root));
  await access(new URL("out/favicon.png", root));
  await access(new URL("out/robots.txt", root));
  await access(new URL("out/sitemap.xml", root));
  await access(new URL("out/manifest.webmanifest", root));
});

test("contains no legacy brand, stale contact targets, or mojibake", async () => {
  const outputDirectory = fileURLToPath(new URL("out/", root));
  const files = await listTextFiles(outputDirectory);
  const combined = (
    await Promise.all(files.map((file) => readFile(file, "utf8")))
  ).join("\n");

  assert.doesNotMatch(
    combined,
    /info@nuvemind\.com|Applied intelligence\. Built for impact\.|aria-label="Nuvemind home"|>Nuvemind</i,
  );
  assert.doesNotMatch(combined, /arasgungore09|905314204536/);
  assert.doesNotMatch(combined, /Google Scholar|1M\+/i);
  const portfolioPages = (
    await Promise.all([
      readOutput("index.html"),
      readOutput("tr/index.html"),
    ])
  ).join("\n");
  assert.doesNotMatch(portfolioPages, /60%|%60/i);
  assert.doesNotMatch(combined, /â†|TÃ¼rkiye|Â©|â€”/);
});

test("ships recruiter-focused copy and search metadata", async () => {
  const [english, turkish, notFound, robots, sitemap] = await Promise.all([
    readOutput("index.html"),
    readOutput("tr/index.html"),
    readOutput("404.html"),
    readOutput("robots.txt"),
    readOutput("sitemap.xml"),
  ]);

  assert.match(english, /AI Engineer turning/);
  assert.match(english, /advanced models into/);
  assert.match(english, /reliable production systems/);
  assert.match(english, /AI Engineer &amp; Co-Founder/);
  assert.match(english, /View selected work/);
  assert.match(english, /Graduate studies in Computer Engineering/);
  assert.match(english, /Left the program in Sep 2023/);
  assert.match(english, /Turkish · Native/);
  assert.match(turkish, /Gelişmiş modelleri/);
  assert.match(turkish, /güvenilir üretim sistemlerine/);
  assert.match(turkish, /dönüştüren bir AI Engineer/);
  assert.match(turkish, /Yapay Zekâ Mühendisi &amp; Kurucu Ortak/);
  assert.match(turkish, /Eyl 2023’te programdan ayrıldı/);
  assert.match(turkish, /Türkçe · Ana dil/);
  assert.match(notFound, /404 · ROUTE NOT FOUND/);
  assert.match(notFound, /Return home/);
  assert.match(robots, /Sitemap: https:\/\/atalbayrak\.github\.io\/sitemap\.xml/);
  assert.match(sitemap, /hreflang="en"/);
  assert.match(sitemap, /hreflang="tr"/);

  const englishHero = english.slice(
    english.indexOf('<section class="hero"'),
    english.indexOf("</section>", english.indexOf('<section class="hero"')),
  );
  const turkishHero = turkish.slice(
    turkish.indexOf('<section class="hero"'),
    turkish.indexOf("</section>", turkish.indexOf('<section class="hero"')),
  );
  assert.doesNotMatch(englishHero, /Co-Founder/);
  assert.doesNotMatch(turkishHero, /Kurucu Ortak/);
});
