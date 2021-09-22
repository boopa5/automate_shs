const puppeteer = require('puppeteer');
var username = env.password;
var p1 = env.password;
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://studenthealthoc.sa.ucsb.edu/home.aspx');

  await page.click("#cmdStudentDualAuthentication");
  await page.waitForSelector('#txtUsername', {
    visible: true,
  })
  await page.waitForSelector('#txtPassWord', {
    visible: true,
  })
  await page.type("#txtUsername", username, {delay:50})
  await page.type("#txtPassWord", p1, {delay:50})
  await page.click("#cmdStandardProceed", {delay:200});
  await page.waitForSelector("#showQuarantineBadge", {
    visible:true,
  })
  const element = await page.$("#showQuarantineBadge");
  const badgeStatus = await page.evaluate(element => element.innerText, element);
  if(badgeStatus == "Show Badge (Clearance Status: Cleared to be On-Site)")
    page.click("#showQuarantineBadge");
  sleep(1000);
  await page.waitForSelector("#ctl03 > div:nth-child(6) > div > a", {
    visible: true,
  })
  await page.click("#ctl03 > div:nth-child(6) > div > a", {delay:200});
  await page.waitForSelector("#mainbody > div.container-fluid > div.header.ta-center.mb-3 > div > div.col-xs-6.ta-right > a", {
    visible: true,
  });
  await page.waitForSelector("#mainbody > div.container-fluid > div.header.ta-center.mb-3 > div > div.col-xs-6.ta-right > a", {
    visible: true,
  });
  await page.click("#mainbody > div.container-fluid > div.header.ta-center.mb-3 > div > div.col-xs-6.ta-right > a");
  await page.waitForSelector("#mainbody > main > form > div:nth-child(60) > fieldset > div > div:nth-child(2) > div", {
    visible: true,
  })
  await page.click("#mainbody > main > form > div:nth-child(60) > fieldset > div > div:nth-child(2) > div", {delay:200});
  await page.click("#mainbody > main > form > div:nth-child(89) > fieldset > div > div:nth-child(2) > div", {delay:200});
  await page.click("#mainbody > main > form > div:nth-child(118) > fieldset > div > div:nth-child(2) > div", {delay:200});
  await page.click("#mainbody > main > form > div:nth-child(176) > fieldset > div > div:nth-child(2) > div", {delay:200});
  await page.click("#mainbody > main > form > div:nth-child(147) > fieldset > div > div:nth-child(2) > div", {delay:200});
  await page.click("#mainbody > footer > div > div.col-xs-6.ta-right > input", {delay:200});
  await page.waitForSelector("#showQuarantineBadge",{
    visible: true,
  })
  await page.click("#showQuarantineBadge"); 
})();
  
