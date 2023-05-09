const HelloPage = require('../pages/hello.page');

describe('My Hello World page', () => {
  it('should toggle if input is hello', async () => {
    await HelloPage.open();

    await HelloPage.toggleTitleWithInput('hello');
    await expect(HelloPage.helloTitle).toBeExisting();
    await HelloPage.toggleBtn.click();
    await expect(HelloPage.helloTitle).not.toBeExisting();
  });

  it('should not toggle with wrong input', async () => {
    await HelloPage.open();

    await HelloPage.toggleTitleWithInput('hi');
    await expect(HelloPage.helloTitle).not.toBeExisting();
  });
});
