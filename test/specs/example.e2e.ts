import LoginPage from  '../pages/login.page';
// import SecurePage from '../pages/secure.page';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {

        await LoginPage.open();
    await LoginPage.login('ankitc@360logica.com', 'Welc0me19ALPHA-Q@');

       // testdfddfdfdfdfd
    });
});


