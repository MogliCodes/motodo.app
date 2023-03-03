import {beforeEach, cy, describe, it} from 'local-cypress'

const driver = {
    goTo: (path: string) => {
        cy.visit(path)
    },
    login: () => {
        cy.login()
    }
}

const loginPage = {
    goTo: () => {
        driver.goTo('/')
    },
    login: () => {
        driver.login()
    }

}

describe('loginPage', () => {
    beforeEach(() => {
        cy.loginByGoogleApi()
    })
    it('should show todos', ( ) => {
        loginPage.goTo()
    })
})
