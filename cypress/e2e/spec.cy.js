const CODE_OK = 200
const CODE_UNAUTHORIZED = 401

const API_KEY = '0fiuZFh4'

const INVOLVED_MAKER = 'Rembrandt van Rijn'
const ELEMENTS_NUMBER = 3618
const ART_OBJECT_NUMBER = 'SK-C-5'


describe('visit rijksmuseum website', () => {
  it('visit rijksmuseum website', () => {
    cy.visit('https://www.rijksmuseum.nl/nl/rijksstudio')
	cy.url().should('include', '/nl/rijksstudio');
	cy.url().should('equal', 'https://www.rijksmuseum.nl/nl/rijksstudio');
})
})

describe('Rijksmuseum API `GET /collection`', () => {
    it('WHEN no api key THEN status IS 401', () => {
		
			cy.request({
				method: 'GET',
				url: '/collection',
				failOnStatusCode: false}).then((response) => {
				
				console.log(response);
				expect(response.status).to.eq(CODE_UNAUTHORIZED)
				})
	})

    
    it('WHEN api key present THEN status IS ' + CODE_OK, () => {
		cy.request({
				method: 'GET',
				url: '/collection?key='+ API_KEY +'&involvedMaker=' + INVOLVED_MAKER,
				failOnStatusCode: false}).then((response) => {
				
				console.log(response);
				expect(response.status).to.eq(CODE_OK)
				})
	})

    it('WHEN api key AND involvedMaker IS ' + INVOLVED_MAKER + ' THEN body IS Not Empty', () => {
		cy.request({
				method: 'GET',
				url: '/collection?key='+ API_KEY +'&involvedMaker=' + INVOLVED_MAKER,
				failOnStatusCode: false}).then((response) => {
				
				console.log(response);
				expect(response.body).to.exist
				assert.isNotEmpty(response.body)
				})
	})

    it('WHEN api key AND involvedMaker IS ' + INVOLVED_MAKER + ' THEN response elements number IS ' + ELEMENTS_NUMBER, () => {
		cy.request({
				method: 'GET',
				url: '/collection?key='+ API_KEY +'&involvedMaker=' + INVOLVED_MAKER,
				failOnStatusCode: false}).then((response) => {
				
				console.log(response);
                assert.equal(response.body.count, ELEMENTS_NUMBER);
            })
	})
	
	it('WHEN api key and involved maker present then parsing the response json array to read the object details', () => {
		cy.request({
				method: 'GET',
				url: '/collection?key='+ API_KEY +'&involvedMaker=' + INVOLVED_MAKER,
				failOnStatusCode: false}).then((response) => {
			cy.log('long title is -', response.body.artObjects[0].longTitle)
			cy.log(response.body.artObjects[0].title)
			cy.log(response.body.artObjects[0].id)
			cy.log(response.body.artObjects[1].longTitle)
			cy.log(response.body.artObjects[1].title)
			cy.log(response.body.artObjects[1].id)
			
	})
})
})
  
describe('Rijksmuseum API `GET /collection/artobjectnumber', () => {

    it('WHEN art object number present and also api key THEN status IS ' + CODE_OK, () => {
		cy.request({
				method: 'GET',
				url: '/collection/'+ ART_OBJECT_NUMBER + '?key='+ API_KEY,
				failOnStatusCode: false}).then((response) => {
				
				console.log(response);
				expect(response.status).to.eq(CODE_OK)
				})
	})
	
	it('WHEN art object number present and key is present its details like title , Object number should be present', () => {
		cy.request({
				method: 'GET',
				url: '/collection/' + ART_OBJECT_NUMBER + '?key=' + API_KEY ,
				failOnStatusCode: false}).then((response) => {
				
				console.log(response);
				expect(response.body.artObject.title).to.exist
				expect(response.body.artObject.objectNumber).to.exist
                assert.equal(response.body.artObject.objectNumber, ART_OBJECT_NUMBER);
				cy.log(response.body.artObject.objectNumber)
				cy.log(response.body.artObject.title)
				cy.log(response.body.artObject.id)
				cy.log(response.body.artObject.webImage.url)
            })
			})
		})
		