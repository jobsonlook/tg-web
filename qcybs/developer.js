(function(b, h, q) {
    var f = {
        getViewportMeta: function() {
            var a = h.getElementsByTagName("meta"), c, n, b, d;
            d = 0;
            for (n = a.length; d < n; d += 1)
                if ((c = a[d].getAttribute("name")) && "viewport" === c) {
                    b = a[d];
                    break
                }
            f.getViewportMeta = function() {
                return b
            }
            ;
            return b
        },
        addEventListener: function() {
            var a;
            b.addEventListener ? a = function(a, b, d) {
                d.addEventListener(a, b, !1)
            }
            : b.attachEvent && (a = function(a, b, d) {
                d.attachEvent("on" + a, b)
            }
            );
            return a
        }()
    }, e = {
        MutationObserver: function() {
            return !!b.MutationObserver
        },
        WebKitMutationObserver: function() {
            return !!b.WebKitMutationObserver
        },
        MozMutationObserver: function() {
            return !!b.MozMutationObserver
        },
        DOMAttrModifiedEvent: function() {
            var a, c = !1;
            a = h.createElement("p");
            f.addEventListener("DOMAttrModified", function() {
                c = !0
            }, a);
            a.setAttribute("id", "test");
            return c
        },
        PropertyChangeEvent: function() {
            var a = !1;
            h.body && h.body.hasOwnProperty("onpropertychange") && (a = !0);
            return a
        }
    }, d = f.getViewportMeta(), l, g;
    g = function() {
        return e.MutationObserver() || e.WebKitMutationObserver() || e.MozMutationObserver() ? b[e.MutationObserver() ? "MutationObserver" : e.WebKitMutationObserver() ? "WebKitMutationObserver" : "MozMutationObserver"] : function(a) {
            return {
                observe: function(c) {
                    if (e.DOMAttrModifiedEvent())
                        f.addEventListener("DOMAttrModified", function(c) {
                            var b = [];
                            b.push({
                                attributeName: c.attrName
                            });
                            a.call(this, b)
                        }, c);
                    else if (e.PropertyChangeEvent())
                        f.addEventListener("propertychange", function() {
                            var c = [];
                            c.push({
                                attributeName: b.event.propertyName
                            });
                            a.call(this, c)
                        }, c);
                    else
                        return !1
                }
            }
        }
    }();
    var p = function(a) {
        var c, b;
        for (c in a)
            a.hasOwnProperty(c) && (b = a[c],
            a.hasOwnProperty(c) && "content" === b.attributeName && d.content !== l && (l = d.content,
            q.postMessage({
                mssg: "updateViewport",
                content: d.content
            }, "*")))
    }, k, m;
    d && (l = d.content,
    g = new g(p),
    g = g.observe(d, {
        attributes: !0,
        childList: !1,
        characterData: !0
    }),
    !1 === g && (k = 0,
    m = function(a) {
        b.setTimeout(function() {
            var b;
            d.content !== l && p.call(this, [{
                attributeName: "content"
            }]);
            k += a;
            b = 500;
            5E3 <= k && (b = 2E3);
            6E4 > k && m.call(this, b)
        }, a)
    }
    ,
    m(500)),
    b.parent.postMessage({
        mssg: "updateViewport",
        content: d.content,
        initial: !0
    }, "*"),
    f.addEventListener("message", function(a) {
        if (a && a.data.mssg && "orientationchange" === a.data.mssg) {
            var c = h.createEvent("Event");
            c.initEvent("orientationchange", !0, !0);
            c.orientation = a.data.orientation;
            b.dispatchEvent(c);
            b.scrollTo(0, 0)
        }
    }, b))
}
)(window, window.document, window.parent);
