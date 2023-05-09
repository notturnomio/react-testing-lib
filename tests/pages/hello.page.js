/* eslint-disable no-undef */

const Page = require('./page');

class HelloPage extends Page {
  get toggleBtn() {
    return $('#toggle');
  }

  get helloInput() {
    return $('#search');
  }

  get helloTitle() {
    return $('#hello');
  }

  async toggleTitleWithInput(text) {
    await this.helloInput.setValue(text);
    await this.toggleBtn.click();
    // await this.helloTitle.;
  }

  open() {
    return super.open('/hello');
  }
}

module.exports = new HelloPage();
