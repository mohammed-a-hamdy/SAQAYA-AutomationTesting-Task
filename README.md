# Devowelizer API Test

This repository contains automated tests for the Devowelizer API, which is responsible for removing vowels from input strings.

## Description

The tests in this suite are designed to validate the functionality of the Devowelizer API by sending various input strings and verifying that the API response removes all vowels as expected. The primary focus is to ensure that the API behaves correctly under different scenarios.

### Bug

There is a known issue where approximately 20% of API calls result in a Server Error. This flakiness in the API behavior needs to be addressed and resolved.

## Test Cases

The main test case iterates 100 times, each time selecting a random input string from a provided dataset containing strings with vowels. For each iteration, the following steps are executed:

1. Retrieve a random input string containing vowels from the dataset.
2. Calculate the expected result by removing vowels from the input string.
3. Send a GET request to the Devowelizer API endpoint with the input string.
4. Validate the response:
   - Ensure that the response status code is 200.
   - Ensure that the response body is not empty.
   - Compare the response body with the expected result.

## Usage

To run the tests locally, follow these steps:

1. Clone this repository to your local machine.
2. Ensure that you have [Cypress](https://www.cypress.io/) installed globally.
3. Install dependencies by running `npm install`.
4. Start the Devowelizer API server on `http://localhost:8080`.
5. Run Cypress tests by executing `npm run test` or `npx cypress open` in the terminal.
6. Select the desired test suite (`devowelizer-api.spec.js`) and observe the test execution.

## Dependencies

- [Cypress](https://www.cypress.io/): JavaScript end-to-end testing framework.

