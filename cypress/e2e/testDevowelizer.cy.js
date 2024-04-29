
describe('Devowelizer API Test', () => {
  // Running the test 100 times to ensure reliability
  Cypress._.times(100, () => {
     /**
      * Bug : there is a flakiness in the API and around 20% of API calls result in Server Error
      */
      it.only(`should remove vowels from input string: attempt`, () => {
        // Getting the test data from fixture file
        cy.fixture('inputData.json').then((inputData) => {
          // pick a random item from the inputData array to test the API with
          const inputString = Cypress._.sample(inputData.inputDataWithVowels);
          // identify the expected result by replacing vowels with empty string 
          const expectedResult = inputString.replace(/[aeiou]/gi, '');
          // Perform API request to devowelizer endpoint
          cy.request('GET', `http://localhost:8080/${inputString}`)
            .then((response) => {
              // Assert response status code
              expect(response.status).to.eq(200);
              // Assert response body is not empty
              expect(response.body).not.to.be.empty;
              // Assert response body matches expected result
              expect(response.body).to.eq(expectedResult);
            });
      });
    });
  });
});
