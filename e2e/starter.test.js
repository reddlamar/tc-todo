import {device, element, by, waitFor} from 'detox';

describe('Login Flow', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  // it('should display The app that will help you manage your tasks.', async () => {
  //   await expect(
  //     element(by.text('The app that will help you manage your tasks.')),
  //   ).toBeVisible();
  // });

  it('should login successfully', async () => {
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
  });

  // it('should show Add Task button', async () => {
  //   await expect(element(by.id('task-btn'))).toBeVisible();
  // });
});
