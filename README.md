# React Shopping Cart

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\

## Miscellaneous

### Improvement possibilities

If this project was going to grow in time, some improvements could be made, for instance: 
- Give the user the chance to register and login.
- Use of API Context, Redux or Zustand for state management.
- Use of TypeScript to reduce errors when developing the code.
- Create prettier components for the user, maybe by using libraries like Material UI and customize their components.
- Validate the form fields in a more exhaustive way -React Hook Form or similar tools might be useful for that purpose-.
- Create more and better tests.
- Add i18n to support different languages.
- Add a spinner to improve the loading experience.

### Technical decisions taken and reasons

- I decided to make use of the Adapter Pattern to encapsulate the API calls. In this way, if I wanted to use an alternative to Axios for HTTP calls, that would not be a challenge or break the app, only the adapter would need to be modified.
- Due to the lack of some information in the API products, such as the available promotions, I decided to always show in the Checkout view the details from the JSON product. I have added a little delay to the JSON request to pretend it is a real API call.
- As both the navBar and the footer in the checkout example are different from the one in the current website, but not all the proper icons were available in the cloned project, I decided to create a mix of both versions -the Checkout's example and the current website-. 
- Even though it was not required and nothing was supposed to be done with the customer data, I created a basic field validation. In a real case, I would also validate the fields' content, such as the right formats for the ID or Phone fields.
- As there was no need to keep any information available through the entire app, I decided to keep the state information simple by using just the useState hook. If a login was required for instance, I would have used API Context or a state management library.
- As I was running out of time, I decided to create tests only for the most critical files, such as the HTTP Adapter, the custom hooks or some components as example.
