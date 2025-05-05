describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio//'); // зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru') // нашли кнопку логина, ввели верный логин
         cy.get('#pass').type('iLoveqastudio1') // нашли кнопку пароля, ввели верный пароль
         cy.get('#loginButton').click(); // нажал войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверка текста
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // наличие крестика и его видно
        })

        it('Верный логин и неверный пароль', function () {
            cy.visit('https://login.qa.studio//'); // зашли на сайт
            cy.get('#mail').type('german@dolnikov.ru') // нашли кнопку логина, ввели верный логин
            cy.get('#pass').type('iLoveqastudio7') // нашли кнопку пароля, ввели верный пароль
            cy.get('#loginButton').click(); // нажал войти
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверка текста
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // наличие крестика и его видно
           })

         it('Неерный логин и верный пароль', function () {
            cy.visit('https://login.qa.studio//'); // зашли на сайт
            cy.get('#mail').type('erman@dolnikov.ru') // нашли кнопку логина, ввели верный логин
            cy.get('#pass').type('iLoveqastudio1') // нашли кнопку пароля, ввели верный пароль
            cy.get('#loginButton').click(); // нажал войти
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверка текста
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // наличие крестика и его видно
           })

         it('В логине есть @', function () {
            cy.visit('https://login.qa.studio//'); // зашли на сайт
            cy.get('#mail').type('ermandolnikov.ru') // нашли кнопку логина, ввели логин без @
            cy.get('#pass').type('iLoveqastudio1') // нашли кнопку пароля, ввели верный пароль
            cy.get('#loginButton').click(); // нажал войти
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //проверка текста
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // наличие крестика и его видно
           })
           
         it('Проверка Забыли пароль', function () {
            cy.visit('https://login.qa.studio//'); // зашли на сайт
            cy.get('#forgotEmailButton').click(); // нажал забыла пароль
            cy.get('#mailForgot').type('german@dolnikov.ru')
            cy.get('#restoreEmailButton').click();

            cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //проверка текста
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // наличие крестика и его видно   

            })
         it('Неверный логин и верный пароль', function () {
                cy.visit('https://login.qa.studio//'); // зашли на сайт
                cy.get('#mail').type('GerMan@Dolnikov.ru') // нашли кнопку логина, ввели верный логин
                cy.get('#pass').type('iLoveqastudio1') // нашли кнопку пароля, ввели верный пароль
                cy.get('#loginButton').click(); // нажал войти
                cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверка текста
                cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // наличие крестика и его видно
               })

        }) 