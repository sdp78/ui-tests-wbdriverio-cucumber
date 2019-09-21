import { assert } from 'chai';

class LoginPage {
    open() {
        browser.url('/');
    }

    get buttonLogin() {
        return $('input[type="submit"]');
    }

    get inputUsername() {
        return $('input[id="user-name"]');
    }

    get inputPassword() {
        return $('input[id="password"]');
    }

    login(user) {
        assert.isTrue(this.inputUsername.isExisting(), 'Username field is missing');
        assert.isTrue(this.inputPassword.isExisting(), 'Password field is missing');

        this.inputUsername.setValue(user.login);
        this.inputPassword.setValue(user.password);
        this.buttonLogin.click();
    }
}

export const loginPage = new LoginPage();
