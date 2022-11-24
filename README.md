# xhr-ajax.js
A ajax script that implements 2 common wrappers for get and post requests.
Most of the time we just send some simple requests, right?

# Usage
A simple reference is all you need:
```html
<script src="./xhr-ajax.js"></script>
```
Declaration:
```js
post: function (path, data, callback, prepare)
get: function (path, param, callback, prepare)
```
Get and Post methods are almost identical:
```js
Ajax.post(
    "/path",
    {
        name: "testtestparam",
        tttt: "dasdsad"
    },
    (res) => {
        console.log(res["status"]);
    }
)
```
You may not need to use the `prepare` parameter for a simple request, but you can still use it to modify the properties of xhr objects.
```js
Ajax.post(
    "/path",
    {
        name: "testtestparam",
        tttt: "dasdsad"
    },
    (res) => {
        console.log(res["status"]);
    },
    (xhr) => {
        xhr.withCredentials = true;
    }
)
```
If it is a more complex call, it is beyond the scope of this script.
