const { test, expect } = require('@playwright/test');


test('Pos_Fun_001: Simple sentences', async ({ page }) => {
  test.setTimeout(60000); 
  await page.goto('https://www.swifttranslator.com');
  await page.locator('textarea').first().type('mama ammata kiyanavaa', { delay: 100 });
  const outputBox = page.locator('div.overflow-y-auto');
  await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('මම අම්මට කියනවා');
});

test('Pos_Fun_002: Compound sentences (two ideas joined)', async ({ page }) => {
  test.setTimeout(60000); 
  await page.goto('https://www.swifttranslator.com');
  await page.locator('textarea').first().type('mata nam mahansi, oyaata kohomadha?', { delay: 100 });
  const outputBox = page.locator('div.overflow-y-auto');
  await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('මට නම් මහන්සි, ඔයාට කොහොමද?');
});

test('Pos_Fun_003: Complex sentences', async ({ page }) => {
  test.setTimeout(60000); 
  await page.goto('https://www.swifttranslator.com');
  await page.locator('textarea').first().type('amaaru unath api meeka karanna epaeyii ithin', { delay: 100 });
  const outputBox = page.locator('div.overflow-y-auto');
  await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('අමාරු උනත් අපි මේක කරන්න එපැයී ඉතින්');
});

test('Pos_Fun_004: Interrogative (questions) form', async ({ page }) => {
  test.setTimeout(60000); 
  await page.goto('https://www.swifttranslator.com');
  await page.locator('textarea').first().type('oyaa vaeda ivara venne kiyatadha?', { delay: 100 });
  const outputBox = page.locator('div.overflow-y-auto');
  await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('ඔයා වැඩ ඉවර වෙන්නෙ කියටද?');
});

test('Pos_Fun_005: Imperative (commands) forms', async ({ page }) => {
  test.setTimeout(60000); 
  await page.goto('https://www.swifttranslator.com');
  await page.locator('textarea').first().type('dhanma gedhara enna', { delay: 100 });
  const outputBox = page.locator('div.overflow-y-auto');
  await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('දන්ම ගෙදර එන්න');
});

test('Pos_Fun_006: Positive forms', async ({ page }) => {
  test.setTimeout(60000); 
  await page.goto('https://www.swifttranslator.com');
  await page.locator('textarea').first().type('mama dhinnaa', { delay: 100 });
  const outputBox = page.locator('div.overflow-y-auto');
  await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('මම දින්නා');
});

test('Pos_Fun_007: Negative forms', async ({ page }) => {
  test.setTimeout(60000); 
  await page.goto('https://www.swifttranslator.com');
  await page.locator('textarea').first().type('mama paradhunaa', { delay: 100 });
  const outputBox = page.locator('div.overflow-y-auto');
  await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('මම පරදුනා');
});

test('Pos_Fun_008: Greetings', async ({ page }) => {
  test.setTimeout(60000); 
  await page.goto('https://www.swifttranslator.com');
  await page.locator('textarea').first().type('suba rathriyak veevaa', { delay: 100 });
  const outputBox = page.locator('div.overflow-y-auto');
  await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('සුබ රත්‍රියක් වේවා');
});

test('Pos_Fun_009: Requests', async ({ page }) => {
  test.setTimeout(60000); 
  await page.goto('https://www.swifttranslator.com');
  await page.locator('textarea').first().type('mata vathura tikak dhenna puluvandha?', { delay: 100 });
  const outputBox = page.locator('div.overflow-y-auto');
  await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('මට වතුර ටිකක් දෙන්න පුලුවන්ද?');
});

test('Pos_Fun_010: Responses', async ({ page }) => {
  test.setTimeout(60000); 
  await page.goto('https://www.swifttranslator.com');
  await page.locator('textarea').first().type('ov oya hari', { delay: 100 });
  const outputBox = page.locator('div.overflow-y-auto');
  await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('ඔව් ඔය හරි');
});

test('Pos_Fun_011: Polite phrasing', async ({ page }) => {
  test.setTimeout(60000); 
  await page.goto('https://www.swifttranslator.com');
  await page.locator('textarea').first().type('mama eeka hithala karee naee samavenna', { delay: 100 });
  const outputBox = page.locator('div.overflow-y-auto');
  await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('මම ඒක හිතල කරේ නෑ සමවෙන්න');
});

test('Pos_Fun_012: Informal phrasing', async ({ page }) => {
  test.setTimeout(60000); 
  await page.goto('https://www.swifttranslator.com');
  await page.locator('textarea').first().type('ooka meheta dhiipan', { delay: 100 });
  const outputBox = page.locator('div.overflow-y-auto');
  await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('ඕක මෙහෙට දීපන්');
});

test('Pos_Fun_013: Frequently used day-to-day expressions', async ({ page }) => {
  test.setTimeout(60000); 
  await page.goto('https://www.swifttranslator.com');
  await page.locator('textarea').first().type('anee mata kammaeli', { delay: 100 });
  const outputBox = page.locator('div.overflow-y-auto');
  await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('අනේ මට කම්මැලි');
});

test('Pos_Fun_014: Proper spacing', async ({ page }) => {
  test.setTimeout(60000); 
  await page.goto('https://www.swifttranslator.com');
  await page.locator('textarea').first().type('mama vahaneta naeggaa', { delay: 100 });
  const outputBox = page.locator('div.overflow-y-auto');
  await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('මම වහනෙට නැග්ගා');
});

test('Pos_Fun_015: Missing spaces / joined words (stress test)', async ({ page }) => {
  test.setTimeout(60000); 
  await page.goto('https://www.swifttranslator.com');
  await page.locator('textarea').first().type('mamadhannenaeoovaa', { delay: 100 });
  const outputBox = page.locator('div.overflow-y-auto');
  await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('මමදන්නෙනැඕවා');
});

test('Pos_Fun_016: Repeated word expressions used for emphasis', async ({ page }) => {
  test.setTimeout(60000); 
  await page.goto('https://www.swifttranslator.com');
  await page.locator('textarea').first().type('ovv ovv', { delay: 100 });
  const outputBox = page.locator('div.overflow-y-auto');
  await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('ඔව්ව් ඔව්ව්');
});

test('Pos_Fun_017: Past Tense', async ({ page }) => {
  test.setTimeout(60000); 
  await page.goto('https://www.swifttranslator.com');
  await page.locator('textarea').first().type('mama giyaa', { delay: 100 });
  const outputBox = page.locator('div.overflow-y-auto');
  await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('මම ගියා');
});

test('Pos_Fun_018: Present', async ({ page }) => {
  test.setTimeout(60000); 
  await page.goto('https://www.swifttranslator.com');
  await page.locator('textarea').first().type('mama mee bath kana gaman', { delay: 100 });
  const outputBox = page.locator('div.overflow-y-auto');
  await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('මම මේ බත් කන ගමන්');
});

test('Pos_Fun_019: Future Tense', async ({ page }) => {
  test.setTimeout(60000); 
  await page.goto('https://www.swifttranslator.com');
  await page.locator('textarea').first().type('api heta gamu', { delay: 100 });
  const outputBox = page.locator('div.overflow-y-auto');
  await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('අපි හෙට ගමු');
});

test('Pos_Fun_020: Negation patterns', async ({ page }) => {
  test.setTimeout(60000); 
  await page.goto('https://www.swifttranslator.com');
  await page.locator('textarea').first().type('mama karee naee', { delay: 100 });
  const outputBox = page.locator('div.overflow-y-auto');
  await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('මම කරේ නෑ');
});

test('Pos_Fun_021: Singular', async ({ page }) => {
  test.setTimeout(60000); 
  await page.goto('https://www.swifttranslator.com');
  await page.locator('textarea').first().type('mama dhaen nidhagannavaa', { delay: 100 });
  const outputBox = page.locator('div.overflow-y-auto');
  await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('මම දැන් නිදගන්නවා');
});

test('Pos_Fun_022: Plural', async ({ page }) => {
  test.setTimeout(60000); 
  await page.goto('https://www.swifttranslator.com');
  await page.locator('textarea').first().type('api okkoma ekata yamuu', { delay: 100 });
  const outputBox = page.locator('div.overflow-y-auto');
  await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('අපි ඔක්කොම එකට යමූ');
});

test('Pos_Fun_023: Request forms with varying degrees of politeness', async ({ page }) => {
  test.setTimeout(60000); 
  await page.goto('https://www.swifttranslator.com');
  await page.locator('textarea').first().type('guti nokaa ooka dhiipam', { delay: 100 });
  const outputBox = page.locator('div.overflow-y-auto');
  await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('ගුටි නොකා ඕක දීපම්');
});

test('Pos_Fun_024: English technical/brand terms embedded in Singlish', async ({ page }) => {
  test.setTimeout(60000); 
  await page.goto('https://www.swifttranslator.com');
  await page.locator('textarea').first().type('oyaa bus ekedha enne?', { delay: 100 });
  const outputBox = page.locator('div.overflow-y-auto');
  await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('ඔයා bus එකෙද එන්නෙ?');
});

test('Neg_Fun_001: Places and common English words', async ({ page }) => {
  test.setTimeout(60000); 
  await page.goto('https://www.swifttranslator.com');
  await page.locator('textarea').first().type('mage car eka', { delay: 100 });
  const outputBox = page.locator('div.overflow-y-auto');
  await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('මගේ car එක');
});

test('Neg_Fun_002: English abbreviations and short forms', async ({ page }) => {
  test.setTimeout(60000); 
  await page.goto('https://www.swifttranslator.com');
  await page.locator('textarea').first().type('puluwanda ok kiyanna', { delay: 100 });
  const outputBox = page.locator('div.overflow-y-auto');
  await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('පුලුවන්ද ok කියන්න');
});

test('Neg_Fun_003: Inputs with punctuation (mixed)', async ({ page }) => {
  test.setTimeout(60000); 
  await page.goto('https://www.swifttranslator.com');
  await page.locator('textarea').first().type('eyaa eyidha? mata veida!', { delay: 100 });
  const outputBox = page.locator('div.overflow-y-auto');
  await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('එයා එයිද? මට වෙයිද!');
});

test('Neg_Fun_004: Currency', async ({ page }) => {
  test.setTimeout(60000); 
  await page.goto('https://www.swifttranslator.com');
  await page.locator('textarea').first().type('computaraya RS.50000', { delay: 100 });
  const outputBox = page.locator('div.overflow-y-auto');
  await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('කොම්පුටරය RS.50000');
});

test('Neg_Fun_005: Dates', async ({ page }) => {
  test.setTimeout(60000); 
  await page.goto('https://www.swifttranslator.com');
  await page.locator('textarea').first().type('shishyawage birthday eka 1999/10/05', { delay: 100 });
  const outputBox = page.locator('div.overflow-y-auto');
  await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('ශිෂ්‍යයාගේ birthday එක 1999/10/05');
});

test('Neg_Fun_006: Time formats', async ({ page }) => {
  test.setTimeout(60000); 
  await page.goto('https://www.swifttranslator.com');
  await page.locator('textarea').first().type('welaava 10.30 AM', { delay: 100 });
  const outputBox = page.locator('div.overflow-y-auto');
  await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('වේලාව 10.30 AM');
});

test('Neg_Fun_007: Units of measurements', async ({ page }) => {
  test.setTimeout(60000); 
  await page.goto('https://www.swifttranslator.com');
  await page.locator('textarea').first().type('bhara 50kg', { delay: 100 });
  const outputBox = page.locator('div.overflow-y-auto');
  await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('බර 50kg');
});

test('Neg_Fun_008: Multiple spaces', async ({ page }) => {
  test.setTimeout(60000); 
  await page.goto('https://www.swifttranslator.com');
  await page.locator('textarea').first().type('MAGEE  GAMA', { delay: 100 });
  const outputBox = page.locator('div.overflow-y-auto');
  await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('මගේ ගම');
});

test('Neg_Fun_009: Line breaks (multi-line input)', async ({ page }) => {
  test.setTimeout(60000); 
  await page.goto('https://www.swifttranslator.com');
  await page.locator('textarea').first().type('mage gama  ', { delay: 100 });
  const outputBox = page.locator('div.overflow-y-auto');
  await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('මගේ ගම ');
});

test('Neg_Fun_010: Slang and colloquial phrasing', async ({ page }) => {
  test.setTimeout(60000); 
  await page.goto('https://www.swifttranslator.com');
  await page.locator('textarea').first().type('qanda supiri', { delay: 100 });
  const outputBox = page.locator('div.overflow-y-auto');
  await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('කන්ද සුපිරි');
});

test('Neg_Fun_011: Paragraph-style input - medium', async ({ page }) => {
  test.setTimeout(60000); 
  await page.goto('https://www.swifttranslator.com');
  await page.locator('textarea').first().type('Wada loku zathiya ekak mama qanda yanawa.  Magee frend ekka api working karanawa office eke.  Oya kohomada kiyala ahuwoth mama fine kiyala reply karanawa.', { delay: 100 });
  const outputBox = page.locator('div.overflow-y-auto');
  await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('වැඩ ලොකු ජාතිය එකක් මම කන්ද යනවා. මගේ ෆ්‍රෙන්ඩ් එක්ක අපි working කරනවා office එකේ. ඔයා කොහොමද කියල ඇහුවොත් මම fine කියල reply කරනවා.');
});

test('Neg_Fun_012: Paragraph-style input - Long', async ({ page }) => {
  test.setTimeout(60000); 
  await page.goto('https://www.swifttranslator.com');
  await page.locator('textarea').first().type('Magee nama Sunil. Mama Nuvara inne...', { delay: 100 });
  const outputBox = page.locator('div.overflow-y-auto');
  await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('මගේ නම සුනිල්. මම නුවර ඉන්නේ...');
});

test('Pos_UI_001: Verify Swap Button functionality', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://www.swifttranslator.com');
  
  const inputArea = page.locator('textarea').first();
  await inputArea.type('mama', { delay: 100 });

  const swapBtn = page.locator('button:has(svg), .swap-btn').nth(1); 
  await swapBtn.click();


  await expect(inputArea).not.toHaveValue('mama', { timeout: 10000 });
});

test('Pos_UI_002: Verify Clear/Undo Button functionality', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://www.swifttranslator.com');

  const inputArea = page.locator('textarea').first();
  await inputArea.type('test', { delay: 100 });

  await page.waitForTimeout(1000);

  await page.locator('button.clear-btn, [aria-label="Clear"]').first().click({ force: true });
  await expect(inputArea).toHaveValue('', { timeout: 15000 });
});




