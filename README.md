# Own Up Rate Quote Challenge

This is a frontend webpage created with React and Redux I created for Own Up. The user inputs their loan information and the results from Own Up's API are shown in a table.

![demo gif](https://media.giphy.com/media/lS7NrLUaha3hrOVHdg/giphy.gif)

## Installation

1. Clone the repository to your local computer<br />
```
git clone https://github.com/hodelly/own-up-rate-quotes.git
```

2. Move into the project directory<br />
```
cd own-up-rate-quotes
```

3. Install the Node dependencies<br />
```
npm install
```

4. Run the app in development mode<br />
```
npm start
```

This will automatically open [http://localhost:3000](http://localhost:3000)
The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Testing

In the project directory, you can run:<br />
```
npm test
```

This launches the test runner in the interactive watch mode.<br />

### App Tests
This test makes sure the site loads properly without crashing.

### Rate Quote Input Tests
These tests are to confirm the Input component renders and checks the input parameters correctly before sending them to the API. I created the following tests:
* initial snapshot of input section
* verifyInput() method with an empty state - returns false
* verifyInput() method with an empty creditScore field - returns false
* verifyInput() method with a credit score that is not between 300 and 800 - returns false
* verifyInput() method with a credit score that is not an integer - returns false
* verifyInput() method with a correct state - returns true

### Rate Quote Table Tests
These tests are to assert the Table component renders correctly no matter what the values of the redux store are. I used snapshots to make sure the component rendered correctly. I took the following snapshots:
* initial redux store
* table loading
* API error response
* API success response with table filled in

## Tools & Libraries
This project was created using [Create React App](https://github.com/facebook/create-react-app).<br />
I also used [React Bootstrap](https://react-bootstrap.github.io/) to help with styling. I implemented Bootstrap because it makes creating clean components easy. I also noticed that Own Up uses Bootstrap, and one of my goals was to match their style and color scheme.<br />
I used Axios to make calls to the API, because I find it easy to use and makes for readable asynchronous code.<br />
For testing I used Jest snapshots and Enzyme to test methods inside my RateQuoteInput component
