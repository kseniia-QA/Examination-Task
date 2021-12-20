

describe('CRTWEB websites', () => {

  
    it('Checks the contacts', () => {
        cy.googleSearch()
        cy.get('h3.LC20lb.MBeuO.DKV0Md').eq(0).click()
        cy.get('div.hamburger.hamburger--squeeze').click()
        cy.get('a').contains('контакты').click()
        cy.get('a.tn-atom').eq(1).contains('+7 499 113-18-01')
        cy.get('a.tn-atom').eq(2).contains('sales7@crtweb.ru')

    })

    it('Checks status code', () => {

        cy.request({
            method: "GET",
            url: "/",
        }).then((response) => {
            cy.log(JSON.stringify(response.body));
            expect(response.status).to.eq(200)

        })
    })

    it('Checks developer info', () => {
        cy.visit('/')
        cy.get('span.t-store__card__btn-text').eq(0).click()
        cy.get('div.js-store-prod-name.js-product-name.t-store__prod-popup__name.t-name.t-name_xl').should('be.visible')
        cy.get('b').should('be.visible')


    })
})