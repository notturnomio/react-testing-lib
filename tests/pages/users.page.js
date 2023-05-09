/* eslint-disable no-undef */

const Page = require('./page');

class UsersPage extends Page {
  get loadingText() {
    return $('#users-loading');
  }

  get usersList() {
    return $('#users-list');
  }

  get userItems() {
    const appWrapper = browser.$('div#root');
    return appWrapper.react$$('User');
  }

  async loadData() {
    try {
      await this.open();
      await this.loadingText.waitForDisplayed({ timeout: 2000 });
      await this.usersList.waitForDisplayed({ timeout: 2000 });
    } catch (error) {
      throw new Error('Failed to load users list.');
    }
  }

  async deleteUser() {
    try {
      const usersCount = await this.userItems.length;

      if (!usersCount) {
        throw new Error('No users found.');
      }

      await this.userItems[0].$('#user-delete').click();

      const usersCountAfterDelete = await this.userItems.length;

      if (usersCount === usersCountAfterDelete) {
        throw new Error('User is not deleted.');
      }
    } catch (error) {
      throw new Error('Failed to remove user. ' + error.message);
    }
  }

  open() {
    return super.open('/users-test');
  }
}

module.exports = new UsersPage();
