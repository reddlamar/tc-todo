import {device, element, by, waitFor} from 'detox';

describe('Login Flow', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('should sign in, add a task, update a task, delete a task, and sign out', async () => {
    await element(by.id('emailInput')).typeText('lamar@gmail.com');
    await element(by.id('passwordInput')).typeText('123456');

    const loginButton = element(by.id('signIn'));
    await loginButton.tap();
    waitFor(loginButton).not.toExist();

    const editIcon = element(by.id('test-edit'));
    waitFor(editIcon).toBeVisible();

    const trashIcon = element(by.id('test-delete'));
    waitFor(trashIcon).toBeVisible();

    const addNewTasksButton = element(by.text('Add a task'));
    await waitFor(addNewTasksButton).toBeVisible().withTimeout(1000);
    await addNewTasksButton.tap();

    const addTaskBtn = element(by.text('Add Task'));
    waitFor(addTaskBtn).toBeVisible();

    const title = element(by.id('title'));
    waitFor(title).toBeVisible();
    await title.typeText('New Task');

    await addTaskBtn.tap();
    await element(by.id('close-btn')).tap();

    await editIcon.tap();

    await title.clearText();
    await title.typeText('Updated Task');
    await element(by.text('Update Task')).tap();
    await element(by.text('OK')).tap();

    await trashIcon.tap();

    const settingsTab = element(by.text('Settings'));
    await waitFor(settingsTab).toBeVisible().withTimeout(1000);
    await settingsTab.tap();

    const signOutBtn = element(by.text('Sign Out'));
    await waitFor(signOutBtn).toBeVisible().withTimeout(1000);
    await signOutBtn.tap();
  });
});
