document.getElementById("loader-progress").style.display = "block";
var e;
! function() {
    function L(b, d, c, a) {
        G = b, h = G.length, H = d || K.normal, N = c || function() {}, q = a || function() {}, z()
    }

    function z() {
        var b = G[C];
        if (H === K.normal) {
            var a = document.createElement("script");
            a.setAttribute("src", b), a.setAttribute("type", "text/javascript"), a.onload = D, a.onerror = B, document.body.appendChild(a)
        } else {
            var c = new XMLHttpRequest;
            c.open("GET", b, !0), c.responseType = "text", c.send(null), c.onload = D, c.onerror = B, c.onprogress = P, c.onreadystatechange = M
        }
    }

    function F(b, a) {
        var c = document.createElement("script");
        c.setAttribute("type", "text/javascript"), c.text = a, document.body.appendChild(c)
    }

    function D(a) {
        if (H === K.xhr) {
            var b = a.target;
            if (4 !== b.readyState || 200 !== b.status) {
                return
            }
            F(G[C], b.responseText)
        }
        J += 100 / h + 0.5 | 0, N(J), C++, C < h ? z() : q()
    }

    function B(a) {
        k || (k = !0, document.getElementById("loader-progress").style.display = "none", alert("Error loading javascript source files!"))
    }

    function P(b) {
        if (b.lengthComputable) {
            var a = b.loaded / b.total * 100 + 0.5 | 0;
            a = a / h + 0.5 | 0, N(J + a)
        }
    }

    function M(b) {
        if (!b) {
            return void I()
        }
        var a = b.target;
        4 === a.readyState && 404 === a.status && B(b)
    }

    function I() {
        k || (k = !0, document.getElementById("loader-progress").style.display = "none", alert("Your browser is too old. Cannot load game."))
    }

    function A(a) {
        var d = document.getElementById("loader-pct-code"),
            c = K.xhr,
            b = window.location.hash || "";
        "#/chromeapp" === b && (c = K.normal), L(["f08a485810b185f392d1b8228cec6a25/js/libs.js", "f08a485810b185f392d1b8228cec6a25/js/main.js"], c, function(f) {
            d.textContent = f.toString()
        }, function() {
            var f = "undefined" != typeof Map;
            return "undefined" == typeof gameMain ? void alert("Error initializing game engine!") : f ? void gameMain() : void I()
        })
    }
    var H, N, q, K = {
            normal: 0,
            xhr: 1
        },
        C = 0,
        G = [],
        h = 0,
        J = 0,
        k = !1,
        O = "undefined" != typeof window.HTMLCanvasElement,
        j = "undefined" != typeof window.addEventListener,
        x = "undefined" != typeof window.XMLHttpRequest;
    O && j && x ? window.addEventListener("load", A, !1) : I()
}();