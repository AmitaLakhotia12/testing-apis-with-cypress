const request = require('Cypress')('https://www.rijksmuseum.nl/api/en/');

const CODE_OK = 200
const CODE_UNAUTHORIZED = 401
const TEXT_UNAUTHORIZED = 'Invalid key'

const API_KEY = '0fiuZFh4'

const INVOLVED_MAKER = 'Rembrandt van Rijn'
const ELEMENTS_NUMBER = 3608
const ART_OBJECT_NUMBER = 'SK-C-5'

const DEFAULT_NUMBER_OF_RESULTS_PER_PAGE = 10
const NUMBER_OF_RESULTS_PER_PAGE = 1
const PAGE_NUMBER = 1

describe('visit rijksmuseum website', () => {
  it('passes', () => {
    cy.visit('https://www.rijksmuseum.nl/nl/rijksstudio')
  })
})

describe('Rijksmuseum API `GET /collection`', () => {

   it('Get all Collection', () => {
        const CODE_UNAUTHORIZED = 401
	const INVOLVED_MAKER = 'Rembrandt van Rijn'
        cy.request(`/collection`).query(
                {   
                    involvedMaker: INVOLVED_MAKER
                }).expect(CODE_UNAUTHORIZED)
        })
  
