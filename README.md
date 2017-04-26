# graceful-catch
Gracefully handle promise rejections within express routes

### Usage

`$ yarn install graceful-catch --save` or `$ npm install graceful-catch --save`

```javascript
const express = require('express'),
    gracefulCatch = require('graceful-catch'),
    app = express();

app.get('/test', (req, res, next) => {
    somePromise
        .then(success)
        .catch(gracefulCatch(res));
});
```
