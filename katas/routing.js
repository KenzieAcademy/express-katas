const express = require('express');
const app = express();

const instructors = [
    { name: "David" },
    { name: "Edwin" },
    { name: "Mike" },
    { name: "Stan" },
];

/* 
 * 1. Add a route the responds to GET requests to /hello and responds with "Hello, World!"
 */

/* 
 * 2. Add a route the responds to GET requests to /bye and responds with "Goodbye, cruel World!"
 */

/* 
 * 3. Add a route the responds to GET requests to /instructors and responds
 *    with the array of instructors as JSON.
 */

module.exports = app;