const puppeteer = require('puppeteer');
var username ="harvardwang";
var p1 = "Tau628tau123!";
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://studenthealthoc.sa.ucsb.edu/home.aspx');
  await page.click(document.querySelector("#cmdStudentDualAuthentication"));
  await page.type(document.querySelector("#txtUsername"), username, {delay: 200});
  await page.type(document.querySelector("#txtPassWord"), p1, {delay: 200});
  await page.click(document.querySelector("#cmdStandardProceed"));
  await page.click(document.querySelector("#ctl03 > div:nth-child(6) > div > a"));
  await page.click(document.querySelector("#mainbody > main > form > div:nth-child(60) > fieldset > div > div:nth-child(2) > div"));
  await page.click(document.querySelector("#mainbody > main > form > div:nth-child(89) > fieldset > div > div:nth-child(2) > div"));
  await page.click(document.querySelector("#mainbody > main > form > div:nth-child(118) > fieldset > div > div:nth-child(2) > div"));
  await page.click(document.querySelector("#mainbody > main > form > div:nth-child(176) > fieldset > div > div:nth-child(2) > div"));
  await page.click(document.querySelector("#mainbody > main > form > div:nth-child(147) > fieldset > div > div:nth-child(2) > div"));
  await page.click(document.querySelector("#mainbody > footer > div > div.col-xs-6.ta-right > input"));
})
  
