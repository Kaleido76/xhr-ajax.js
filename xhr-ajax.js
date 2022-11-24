(function (globalWindow) {
    function paramToString(param) {
        let _res = [];
        Object.keys(param).forEach(item => _res.push(`${encodeURIComponent(item)}=${encodeURIComponent(param[item])}`));
        return _res.join("&");
    }

    function parseResponse(resText) {
        try {
            return JSON.parse(resText);
        } catch (e) {
            return resText;
        }
    }

    window.Ajax = {
        post: function (path, data, callback, prepare) {
            let xhr = new XMLHttpRequest();
            if (prepare) prepare(xhr);

            xhr.addEventListener("readystatechange", () => {
                if (xhr.readyState !== xhr.DONE) return;
                callback(parseResponse(xhr.responseText), xhr);
            });

            let xwfd = paramToString(data);

            xhr.open("POST", path);
            xhr.setRequestHeader("Accept", "*/*");
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send(xwfd);
        },

        get: function (path, param, callback, prepare) {
            let xhr = new XMLHttpRequest();
            if (prepare) prepare(xhr);

            let _finalpath = (Object.keys(param).length) ? `${path}?${paramToString(param)}` : path;

            xhr.addEventListener("readystatechange", () => {
                if (xhr.readyState !== xhr.DONE) return;
                callback(parseResponse(xhr.responseText), xhr);
            });

            xhr.open("GET", _finalpath);
            xhr.send(null);
        }
    }
})(window);