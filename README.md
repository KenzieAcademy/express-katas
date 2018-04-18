# Express Katas
In this exercise, you'll be practicing using several of Express.js's features.

# Getting Started
Getting started is a matter of doing the following:
1. Install dependencies
2. Run tests
3. Complete katas

## Installing Dependencies
To install dependencies, fork this repository, and clone it clone it to your
machine. From the root of the repository. Remember that because you are
_forking_ a repository, there is no need to create a new directory or run
`npm init` in it first. Once you have this repository on your machine, you
can install the dependencies from the root of the repository using `npm`:
```bash
npm install
```

## Running Tests
The output of tests will be your hint at how close you are to completing various katas. you'll want to run the following command in a new terminal (such as the one found at the bottom of vs code):
```bash
npm test
```

You should then see some output like the following:
![test output screenshot](https://raw.githubusercontent.com/kenzieacademy/express-katas/master/test_output.png)

here, you can see that we have several test failing, as well as a hint at what we were expecting.

### Completing Katas
Next, you should open up whichever kata you want to work on next. we suggest starting with `katas/routing.js`. in each module, you'll find explaining what feature to implement. For example, the first "routing" kata add a route the responds to GET requests to /hello and responds with "Hello, World!". The answer to that one would look like this:
```javascript
app.get('/hello', (req, res) => {
    res.send('Hello, World!');
})
```

# Getting Updates
You may have noticed that we asked you to fork this repository rather than
clone it. That's so that you can save your work and push it to GitHub. That
also, however, means that getting updated katas isn't as straight forward.

You'll need to add the original KenzieAcademy/express-katas repository as a
remote and pull from _that_ to get updates.
You can add a new origin as follows:
```bash
git remote add kenzie git@github.com:KenzieAcademy/express-katas.git
```

Before updating, make sure you have a clean working directory (You've
committed first). Then pull in updates as follows:
```bash
git pull kenzie master
```

# FAQ
- What are [mocha](https://mochajs.org/) and [chai](http://www.chaijs.com/)? 
    - They are libraries to make writing unit tests easier. if we had just
      used `console.assert`, we wouldn't have had the ability to provide as
      usfeul of hints for how to solve each kata.
- In `package.json`, I see that the testing libraries are written in
  `devdependencies` instead of `dependencies`, why?
    - We use `dependencies` for librarires that are _required_ for the
      application to run, and `devdependencies` for libraires that assist in
      the development of an application, but aren't needed to actually run it.
      In this particular case, the application is just a bunch of katas, and we
      can technically use those functions without running tests, thus
      `devDependencies` is used.