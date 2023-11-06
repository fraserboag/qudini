### Running this project locally

- Clone the repo
- Run `npm install`
- Run `npm run start`
- You should automatically be navigated to http://localhost:3000

### Notes

Having completed the test, I just wanted to make a couple of notes on my thinking so that it doesn’t seem like I overlooked anything.

In reality if I was owning this project longer term, I would probably refactor even more widely than I did. For example perhaps revisiting the folder structure, and updating all components to React function components for consistency throughout the project. I would also like to update all dependencies in package.json to more recent versions.

I personally may also choose to replace Styled Components with Tailwind or CSS Modules, but this would be a team decision. Or, if sticking with Styled Components, I would look to implement a more reusable theme, instead of repeatedly applying individual styles to every component.

Test coverage could also be extended to include things like Snapshot Testing for the UI, however I’ve stuck to simple function testing for the time being.
