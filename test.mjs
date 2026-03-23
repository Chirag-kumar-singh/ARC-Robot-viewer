import { chromium } from 'playwright-chromium';

(async () => {
    const browser = await chromium.launch({ args: ['--no-sandbox'] });
    const context = await browser.newContext();
    const page = await context.newPage();

    page.on('console', msg => {
        if (msg.type() === 'error' || msg.type() === 'warning') {
            console.log(`[BROWSER ${msg.type().toUpperCase()}] ${msg.text()}`);
        }
    });

    page.on('pageerror', err => {
        console.error(`[BROWSER UNCAUGHT EXCEPTION] ${err.message}`);
    });

    page.on('requestfailed', request => {
        console.log(`[NETWORK ERROR] ${request.url()} failed: ${request.failure().errorText}`);
    });

    page.on('response', response => {
        if (!response.ok()) {
            console.log(`[HTTP ERROR] ${response.url()} returned ${response.status()}`);
        }
    });

    console.log("Navigating to http://localhost:3001/?robot=mycobot");
    await page.goto('http://localhost:3001/?robot=mycobot', { waitUntil: 'networkidle' });

    // Wait a few more seconds just in case models are loading slowly
    await new Promise(resolve => setTimeout(resolve, 5000));

    await browser.close();
    console.log("Done checking.");
})();
