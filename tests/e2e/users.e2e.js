const UsersPage = require('../pages/users.page');

describe('My Users list page ', () => {
  it('should load a list of users', async () => {
    await UsersPage.loadData();
  });
  it('should remove a user', async () => {
    await UsersPage.loadData();
    await UsersPage.deleteUser();
  });
});
