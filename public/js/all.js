"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*! Sortable 1.4.2 - MIT | git://github.com/rubaxa/Sortable.git */
!function (a) {
    "use strict";
    "function" == typeof define && define.amd ? define(a) : "undefined" != typeof module && "undefined" != typeof module.exports ? module.exports = a() : "undefined" != typeof Package ? Sortable = a() : window.Sortable = a();
}(function () {
    "use strict";
    function a(a, b) {
        if (!a || !a.nodeType || 1 !== a.nodeType) throw "Sortable: `el` must be HTMLElement, and not " + {}.toString.call(a);this.el = a, this.options = b = r({}, b), a[L] = this;var c = { group: Math.random(), sort: !0, disabled: !1, store: null, handle: null, scroll: !0, scrollSensitivity: 30, scrollSpeed: 10, draggable: /[uo]l/i.test(a.nodeName) ? "li" : ">*", ghostClass: "sortable-ghost", chosenClass: "sortable-chosen", ignore: "a, img", filter: null, animation: 0, setData: function setData(a, b) {
                a.setData("Text", b.textContent);
            }, dropBubble: !1, dragoverBubble: !1, dataIdAttr: "data-id", delay: 0, forceFallback: !1, fallbackClass: "sortable-fallback", fallbackOnBody: !1 };for (var d in c) {
            !(d in b) && (b[d] = c[d]);
        }V(b);for (var f in this) {
            "_" === f.charAt(0) && (this[f] = this[f].bind(this));
        }this.nativeDraggable = b.forceFallback ? !1 : P, e(a, "mousedown", this._onTapStart), e(a, "touchstart", this._onTapStart), this.nativeDraggable && (e(a, "dragover", this), e(a, "dragenter", this)), T.push(this._onDragOver), b.store && this.sort(b.store.get(this));
    }function b(a) {
        v && v.state !== a && (h(v, "display", a ? "none" : ""), !a && v.state && w.insertBefore(v, s), v.state = a);
    }function c(a, b, c) {
        if (a) {
            c = c || N, b = b.split(".");var d = b.shift().toUpperCase(),
                e = new RegExp("\\s(" + b.join("|") + ")(?=\\s)", "g");do {
                if (">*" === d && a.parentNode === c || ("" === d || a.nodeName.toUpperCase() == d) && (!b.length || ((" " + a.className + " ").match(e) || []).length == b.length)) return a;
            } while (a !== c && (a = a.parentNode));
        }return null;
    }function d(a) {
        a.dataTransfer && (a.dataTransfer.dropEffect = "move"), a.preventDefault();
    }function e(a, b, c) {
        a.addEventListener(b, c, !1);
    }function f(a, b, c) {
        a.removeEventListener(b, c, !1);
    }function g(a, b, c) {
        if (a) if (a.classList) a.classList[c ? "add" : "remove"](b);else {
            var d = (" " + a.className + " ").replace(K, " ").replace(" " + b + " ", " ");a.className = (d + (c ? " " + b : "")).replace(K, " ");
        }
    }function h(a, b, c) {
        var d = a && a.style;if (d) {
            if (void 0 === c) return N.defaultView && N.defaultView.getComputedStyle ? c = N.defaultView.getComputedStyle(a, "") : a.currentStyle && (c = a.currentStyle), void 0 === b ? c : c[b];b in d || (b = "-webkit-" + b), d[b] = c + ("string" == typeof c ? "" : "px");
        }
    }function i(a, b, c) {
        if (a) {
            var d = a.getElementsByTagName(b),
                e = 0,
                f = d.length;if (c) for (; f > e; e++) {
                c(d[e], e);
            }return d;
        }return [];
    }function j(a, b, c, d, e, f, g) {
        var h = N.createEvent("Event"),
            i = (a || b[L]).options,
            j = "on" + c.charAt(0).toUpperCase() + c.substr(1);h.initEvent(c, !0, !0), h.to = b, h.from = e || b, h.item = d || b, h.clone = v, h.oldIndex = f, h.newIndex = g, b.dispatchEvent(h), i[j] && i[j].call(a, h);
    }function k(a, b, c, d, e, f) {
        var g,
            h,
            i = a[L],
            j = i.options.onMove;return g = N.createEvent("Event"), g.initEvent("move", !0, !0), g.to = b, g.from = a, g.dragged = c, g.draggedRect = d, g.related = e || b, g.relatedRect = f || b.getBoundingClientRect(), a.dispatchEvent(g), j && (h = j.call(i, g)), h;
    }function l(a) {
        a.draggable = !1;
    }function m() {
        R = !1;
    }function n(a, b) {
        var c = a.lastElementChild,
            d = c.getBoundingClientRect();return (b.clientY - (d.top + d.height) > 5 || b.clientX - (d.right + d.width) > 5) && c;
    }function o(a) {
        for (var b = a.tagName + a.className + a.src + a.href + a.textContent, c = b.length, d = 0; c--;) {
            d += b.charCodeAt(c);
        }return d.toString(36);
    }function p(a) {
        var b = 0;if (!a || !a.parentNode) return -1;for (; a && (a = a.previousElementSibling);) {
            "TEMPLATE" !== a.nodeName.toUpperCase() && b++;
        }return b;
    }function q(a, b) {
        var c, d;return function () {
            void 0 === c && (c = arguments, d = this, setTimeout(function () {
                1 === c.length ? a.call(d, c[0]) : a.apply(d, c), c = void 0;
            }, b));
        };
    }function r(a, b) {
        if (a && b) for (var c in b) {
            b.hasOwnProperty(c) && (a[c] = b[c]);
        }return a;
    }var s,
        t,
        u,
        v,
        w,
        x,
        y,
        z,
        A,
        B,
        C,
        D,
        E,
        F,
        G,
        H,
        I,
        J = {},
        K = /\s+/g,
        L = "Sortable" + new Date().getTime(),
        M = window,
        N = M.document,
        O = M.parseInt,
        P = !!("draggable" in N.createElement("div")),
        Q = function (a) {
        return a = N.createElement("x"), a.style.cssText = "pointer-events:auto", "auto" === a.style.pointerEvents;
    }(),
        R = !1,
        S = Math.abs,
        T = ([].slice, []),
        U = q(function (a, b, c) {
        if (c && b.scroll) {
            var d,
                e,
                f,
                g,
                h = b.scrollSensitivity,
                i = b.scrollSpeed,
                j = a.clientX,
                k = a.clientY,
                l = window.innerWidth,
                m = window.innerHeight;if (z !== c && (y = b.scroll, z = c, y === !0)) {
                y = c;do {
                    if (y.offsetWidth < y.scrollWidth || y.offsetHeight < y.scrollHeight) break;
                } while (y = y.parentNode);
            }y && (d = y, e = y.getBoundingClientRect(), f = (S(e.right - j) <= h) - (S(e.left - j) <= h), g = (S(e.bottom - k) <= h) - (S(e.top - k) <= h)), f || g || (f = (h >= l - j) - (h >= j), g = (h >= m - k) - (h >= k), (f || g) && (d = M)), (J.vx !== f || J.vy !== g || J.el !== d) && (J.el = d, J.vx = f, J.vy = g, clearInterval(J.pid), d && (J.pid = setInterval(function () {
                d === M ? M.scrollTo(M.pageXOffset + f * i, M.pageYOffset + g * i) : (g && (d.scrollTop += g * i), f && (d.scrollLeft += f * i));
            }, 24)));
        }
    }, 30),
        V = function V(a) {
        var b = a.group;b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) || (b = a.group = { name: b }), ["pull", "put"].forEach(function (a) {
            a in b || (b[a] = !0);
        }), a.groups = " " + b.name + (b.put.join ? " " + b.put.join(" ") : "") + " ";
    };return a.prototype = { constructor: a, _onTapStart: function _onTapStart(a) {
            var b = this,
                d = this.el,
                e = this.options,
                f = a.type,
                g = a.touches && a.touches[0],
                h = (g || a).target,
                i = h,
                k = e.filter;if (!("mousedown" === f && 0 !== a.button || e.disabled) && (h = c(h, e.draggable, d))) {
                if (D = p(h), "function" == typeof k) {
                    if (k.call(this, a, h, this)) return j(b, i, "filter", h, d, D), void a.preventDefault();
                } else if (k && (k = k.split(",").some(function (a) {
                    return a = c(i, a.trim(), d), a ? (j(b, a, "filter", h, d, D), !0) : void 0;
                }))) return void a.preventDefault();(!e.handle || c(i, e.handle, d)) && this._prepareDragStart(a, g, h);
            }
        }, _prepareDragStart: function _prepareDragStart(a, b, c) {
            var d,
                f = this,
                h = f.el,
                j = f.options,
                k = h.ownerDocument;c && !s && c.parentNode === h && (G = a, w = h, s = c, t = s.parentNode, x = s.nextSibling, F = j.group, d = function d() {
                f._disableDelayedDrag(), s.draggable = !0, g(s, f.options.chosenClass, !0), f._triggerDragStart(b);
            }, j.ignore.split(",").forEach(function (a) {
                i(s, a.trim(), l);
            }), e(k, "mouseup", f._onDrop), e(k, "touchend", f._onDrop), e(k, "touchcancel", f._onDrop), j.delay ? (e(k, "mouseup", f._disableDelayedDrag), e(k, "touchend", f._disableDelayedDrag), e(k, "touchcancel", f._disableDelayedDrag), e(k, "mousemove", f._disableDelayedDrag), e(k, "touchmove", f._disableDelayedDrag), f._dragStartTimer = setTimeout(d, j.delay)) : d());
        }, _disableDelayedDrag: function _disableDelayedDrag() {
            var a = this.el.ownerDocument;clearTimeout(this._dragStartTimer), f(a, "mouseup", this._disableDelayedDrag), f(a, "touchend", this._disableDelayedDrag), f(a, "touchcancel", this._disableDelayedDrag), f(a, "mousemove", this._disableDelayedDrag), f(a, "touchmove", this._disableDelayedDrag);
        }, _triggerDragStart: function _triggerDragStart(a) {
            a ? (G = { target: s, clientX: a.clientX, clientY: a.clientY }, this._onDragStart(G, "touch")) : this.nativeDraggable ? (e(s, "dragend", this), e(w, "dragstart", this._onDragStart)) : this._onDragStart(G, !0);try {
                N.selection ? N.selection.empty() : window.getSelection().removeAllRanges();
            } catch (b) {}
        }, _dragStarted: function _dragStarted() {
            w && s && (g(s, this.options.ghostClass, !0), a.active = this, j(this, w, "start", s, w, D));
        }, _emulateDragOver: function _emulateDragOver() {
            if (H) {
                if (this._lastX === H.clientX && this._lastY === H.clientY) return;this._lastX = H.clientX, this._lastY = H.clientY, Q || h(u, "display", "none");var a = N.elementFromPoint(H.clientX, H.clientY),
                    b = a,
                    c = " " + this.options.group.name,
                    d = T.length;if (b) do {
                    if (b[L] && b[L].options.groups.indexOf(c) > -1) {
                        for (; d--;) {
                            T[d]({ clientX: H.clientX, clientY: H.clientY, target: a, rootEl: b });
                        }break;
                    }a = b;
                } while (b = b.parentNode);Q || h(u, "display", "");
            }
        }, _onTouchMove: function _onTouchMove(b) {
            if (G) {
                a.active || this._dragStarted(), this._appendGhost();var c = b.touches ? b.touches[0] : b,
                    d = c.clientX - G.clientX,
                    e = c.clientY - G.clientY,
                    f = b.touches ? "translate3d(" + d + "px," + e + "px,0)" : "translate(" + d + "px," + e + "px)";I = !0, H = c, h(u, "webkitTransform", f), h(u, "mozTransform", f), h(u, "msTransform", f), h(u, "transform", f), b.preventDefault();
            }
        }, _appendGhost: function _appendGhost() {
            if (!u) {
                var a,
                    b = s.getBoundingClientRect(),
                    c = h(s),
                    d = this.options;u = s.cloneNode(!0), g(u, d.ghostClass, !1), g(u, d.fallbackClass, !0), h(u, "top", b.top - O(c.marginTop, 10)), h(u, "left", b.left - O(c.marginLeft, 10)), h(u, "width", b.width), h(u, "height", b.height), h(u, "opacity", "0.8"), h(u, "position", "fixed"), h(u, "zIndex", "100000"), h(u, "pointerEvents", "none"), d.fallbackOnBody && N.body.appendChild(u) || w.appendChild(u), a = u.getBoundingClientRect(), h(u, "width", 2 * b.width - a.width), h(u, "height", 2 * b.height - a.height);
            }
        }, _onDragStart: function _onDragStart(a, b) {
            var c = a.dataTransfer,
                d = this.options;this._offUpEvents(), "clone" == F.pull && (v = s.cloneNode(!0), h(v, "display", "none"), w.insertBefore(v, s)), b ? ("touch" === b ? (e(N, "touchmove", this._onTouchMove), e(N, "touchend", this._onDrop), e(N, "touchcancel", this._onDrop)) : (e(N, "mousemove", this._onTouchMove), e(N, "mouseup", this._onDrop)), this._loopId = setInterval(this._emulateDragOver, 50)) : (c && (c.effectAllowed = "move", d.setData && d.setData.call(this, c, s)), e(N, "drop", this), setTimeout(this._dragStarted, 0));
        }, _onDragOver: function _onDragOver(a) {
            var d,
                e,
                f,
                g = this.el,
                i = this.options,
                j = i.group,
                l = j.put,
                o = F === j,
                p = i.sort;if (void 0 !== a.preventDefault && (a.preventDefault(), !i.dragoverBubble && a.stopPropagation()), I = !0, F && !i.disabled && (o ? p || (f = !w.contains(s)) : F.pull && l && (F.name === j.name || l.indexOf && ~l.indexOf(F.name))) && (void 0 === a.rootEl || a.rootEl === this.el)) {
                if (U(a, i, this.el), R) return;if (d = c(a.target, i.draggable, g), e = s.getBoundingClientRect(), f) return b(!0), void (v || x ? w.insertBefore(s, v || x) : p || w.appendChild(s));if (0 === g.children.length || g.children[0] === u || g === a.target && (d = n(g, a))) {
                    if (d) {
                        if (d.animated) return;r = d.getBoundingClientRect();
                    }b(o), k(w, g, s, e, d, r) !== !1 && (s.contains(g) || (g.appendChild(s), t = g), this._animate(e, s), d && this._animate(r, d));
                } else if (d && !d.animated && d !== s && void 0 !== d.parentNode[L]) {
                    A !== d && (A = d, B = h(d), C = h(d.parentNode));var q,
                        r = d.getBoundingClientRect(),
                        y = r.right - r.left,
                        z = r.bottom - r.top,
                        D = /left|right|inline/.test(B.cssFloat + B.display) || "flex" == C.display && 0 === C["flex-direction"].indexOf("row"),
                        E = d.offsetWidth > s.offsetWidth,
                        G = d.offsetHeight > s.offsetHeight,
                        H = (D ? (a.clientX - r.left) / y : (a.clientY - r.top) / z) > .5,
                        J = d.nextElementSibling,
                        K = k(w, g, s, e, d, r);if (K !== !1) {
                        if (R = !0, setTimeout(m, 30), b(o), 1 === K || -1 === K) q = 1 === K;else if (D) {
                            var M = s.offsetTop,
                                N = d.offsetTop;q = M === N ? d.previousElementSibling === s && !E || H && E : N > M;
                        } else q = J !== s && !G || H && G;s.contains(g) || (q && !J ? g.appendChild(s) : d.parentNode.insertBefore(s, q ? J : d)), t = s.parentNode, this._animate(e, s), this._animate(r, d);
                    }
                }
            }
        }, _animate: function _animate(a, b) {
            var c = this.options.animation;if (c) {
                var d = b.getBoundingClientRect();h(b, "transition", "none"), h(b, "transform", "translate3d(" + (a.left - d.left) + "px," + (a.top - d.top) + "px,0)"), b.offsetWidth, h(b, "transition", "all " + c + "ms"), h(b, "transform", "translate3d(0,0,0)"), clearTimeout(b.animated), b.animated = setTimeout(function () {
                    h(b, "transition", ""), h(b, "transform", ""), b.animated = !1;
                }, c);
            }
        }, _offUpEvents: function _offUpEvents() {
            var a = this.el.ownerDocument;f(N, "touchmove", this._onTouchMove), f(a, "mouseup", this._onDrop), f(a, "touchend", this._onDrop), f(a, "touchcancel", this._onDrop);
        }, _onDrop: function _onDrop(b) {
            var c = this.el,
                d = this.options;clearInterval(this._loopId), clearInterval(J.pid), clearTimeout(this._dragStartTimer), f(N, "mousemove", this._onTouchMove), this.nativeDraggable && (f(N, "drop", this), f(c, "dragstart", this._onDragStart)), this._offUpEvents(), b && (I && (b.preventDefault(), !d.dropBubble && b.stopPropagation()), u && u.parentNode.removeChild(u), s && (this.nativeDraggable && f(s, "dragend", this), l(s), g(s, this.options.ghostClass, !1), g(s, this.options.chosenClass, !1), w !== t ? (E = p(s), E >= 0 && (j(null, t, "sort", s, w, D, E), j(this, w, "sort", s, w, D, E), j(null, t, "add", s, w, D, E), j(this, w, "remove", s, w, D, E))) : (v && v.parentNode.removeChild(v), s.nextSibling !== x && (E = p(s), E >= 0 && (j(this, w, "update", s, w, D, E), j(this, w, "sort", s, w, D, E)))), a.active && ((null === E || -1 === E) && (E = D), j(this, w, "end", s, w, D, E), this.save())), w = s = t = u = x = v = y = z = G = H = I = E = A = B = F = a.active = null);
        }, handleEvent: function handleEvent(a) {
            var b = a.type;"dragover" === b || "dragenter" === b ? s && (this._onDragOver(a), d(a)) : ("drop" === b || "dragend" === b) && this._onDrop(a);
        }, toArray: function toArray() {
            for (var a, b = [], d = this.el.children, e = 0, f = d.length, g = this.options; f > e; e++) {
                a = d[e], c(a, g.draggable, this.el) && b.push(a.getAttribute(g.dataIdAttr) || o(a));
            }return b;
        }, sort: function sort(a) {
            var b = {},
                d = this.el;this.toArray().forEach(function (a, e) {
                var f = d.children[e];c(f, this.options.draggable, d) && (b[a] = f);
            }, this), a.forEach(function (a) {
                b[a] && (d.removeChild(b[a]), d.appendChild(b[a]));
            });
        }, save: function save() {
            var a = this.options.store;a && a.set(this);
        }, closest: function closest(a, b) {
            return c(a, b || this.options.draggable, this.el);
        }, option: function option(a, b) {
            var c = this.options;return void 0 === b ? c[a] : (c[a] = b, void ("group" === a && V(c)));
        }, destroy: function destroy() {
            var a = this.el;a[L] = null, f(a, "mousedown", this._onTapStart), f(a, "touchstart", this._onTapStart), this.nativeDraggable && (f(a, "dragover", this), f(a, "dragenter", this)), Array.prototype.forEach.call(a.querySelectorAll("[draggable]"), function (a) {
                a.removeAttribute("draggable");
            }), T.splice(T.indexOf(this._onDragOver), 1), this._onDrop(), this.el = a = null;
        } }, a.utils = { on: e, off: f, css: h, find: i, is: function is(a, b) {
            return !!c(a, b, a);
        }, extend: r, throttle: q, closest: c, toggleClass: g, index: p }, a.create = function (b, c) {
        return new a(b, c);
    }, a.version = "1.4.2", a;
});
/**
 * jQuery plugin for Sortable
 * @author	RubaXa   <trash@rubaxa.org>
 * @license MIT
 */
(function (factory) {
    "use strict";

    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else {
        /* jshint sub:true */
        factory(jQuery);
    }
})(function ($) {
    "use strict";

    /* CODE */

    /**
     * jQuery plugin for Sortable
     * @param   {Object|String} options
     * @param   {..*}           [args]
     * @returns {jQuery|*}
     */

    $.fn.sortable = function (options) {
        var retVal,
            args = arguments;

        this.each(function () {
            var $el = $(this),
                sortable = $el.data('sortable');

            if (!sortable && (options instanceof Object || !options)) {
                sortable = new Sortable(this, options);
                $el.data('sortable', sortable);
            }

            if (sortable) {
                if (options === 'widget') {
                    return sortable;
                } else if (options === 'destroy') {
                    sortable.destroy();
                    $el.removeData('sortable');
                } else if (typeof sortable[options] === 'function') {
                    retVal = sortable[options].apply(sortable, [].slice.call(args, 1));
                } else if (options in sortable.options) {
                    retVal = sortable.option.apply(sortable, args);
                }
            }
        });

        return retVal === void 0 ? this : retVal;
    };
});
/*!
 * tablesort v4.0.0 (2015-12-17)
 * http://tristen.ca/tablesort/demo/
 * Copyright (c) 2015 ; Licensed MIT
*/!function () {
    function a(b, c) {
        if (!(this instanceof a)) return new a(b, c);if (!b || "TABLE" !== b.tagName) throw new Error("Element must be a table");this.init(b, c || {});
    }var b = [],
        c = function c(a) {
        var b;return window.CustomEvent && "function" == typeof window.CustomEvent ? b = new CustomEvent(a) : (b = document.createEvent("CustomEvent"), b.initCustomEvent(a, !1, !1, void 0)), b;
    },
        d = function d(a) {
        return a.getAttribute("data-sort") || a.textContent || a.innerText || "";
    },
        e = function e(a, b) {
        return a = a.toLowerCase(), b = b.toLowerCase(), a === b ? 0 : b > a ? 1 : -1;
    },
        f = function f(a, b) {
        return function (c, d) {
            var e = a(c.td, d.td);return 0 === e ? b ? d.index - c.index : c.index - d.index : e;
        };
    };a.extend = function (a, c, d) {
        if ("function" != typeof c || "function" != typeof d) throw new Error("Pattern and sort must be a function");b.push({ name: a, pattern: c, sort: d });
    }, a.prototype = { init: function init(a, b) {
            var c,
                d,
                e,
                f,
                g = this;if (g.table = a, g.thead = !1, g.options = b, a.rows && a.rows.length > 0 && (a.tHead && a.tHead.rows.length > 0 ? (c = a.tHead.rows[a.tHead.rows.length - 1], g.thead = !0) : c = a.rows[0]), c) {
                var h = function h() {
                    g.current && g.current !== this && (g.current.classList.remove("sort-up"), g.current.classList.remove("sort-down")), g.current = this, g.sortTable(this);
                };for (e = 0; e < c.cells.length; e++) {
                    f = c.cells[e], f.classList.contains("no-sort") || (f.classList.add("sort-header"), f.tabindex = 0, f.addEventListener("click", h, !1), f.classList.contains("sort-default") && (d = f));
                }d && (g.current = d, g.sortTable(d));
            }
        }, sortTable: function sortTable(a, g) {
            var h,
                i = this,
                j = a.cellIndex,
                k = e,
                l = "",
                m = [],
                n = i.thead ? 0 : 1,
                o = a.getAttribute("data-sort-method"),
                p = a.getAttribute("data-sort-order");if (i.table.dispatchEvent(c("beforeSort")), g ? h = a.classList.contains("sort-up") ? "sort-up" : "sort-down" : (h = a.classList.contains("sort-up") ? "sort-down" : a.classList.contains("sort-down") ? "sort-up" : "asc" === p ? "sort-down" : "desc" === p ? "sort-up" : i.options.descending ? "sort-up" : "sort-down", a.classList.remove("sort-down" === h ? "sort-up" : "sort-down"), a.classList.add(h)), !(i.table.rows.length < 2)) {
                if (!o) {
                    for (; m.length < 3 && n < i.table.tBodies[0].rows.length;) {
                        l = d(i.table.tBodies[0].rows[n].cells[j]), l = l.trim(), l.length > 0 && m.push(l), n++;
                    }if (!m) return;
                }for (n = 0; n < b.length; n++) {
                    if (l = b[n], o) {
                        if (l.name === o) {
                            k = l.sort;break;
                        }
                    } else if (m.every(l.pattern)) {
                        k = l.sort;break;
                    }
                }i.col = j;var q,
                    r = [],
                    s = {},
                    t = 0,
                    u = 0;for (n = 0; n < i.table.tBodies.length; n++) {
                    for (q = 0; q < i.table.tBodies[n].rows.length; q++) {
                        l = i.table.tBodies[n].rows[q], l.classList.contains("no-sort") ? s[t] = l : r.push({ tr: l, td: d(l.cells[i.col]), index: t }), t++;
                    }
                }for ("sort-down" === h ? (r.sort(f(k, !0)), r.reverse()) : r.sort(f(k, !1)), n = 0; t > n; n++) {
                    s[n] ? (l = s[n], u++) : l = r[n - u].tr, i.table.tBodies[0].appendChild(l);
                }i.table.dispatchEvent(c("afterSort"));
            }
        }, refresh: function refresh() {
            void 0 !== this.current && this.sortTable(this.current, !0);
        } }, "undefined" != typeof module && module.exports ? module.exports = a : window.Tablesort = a;
}();
(function () {
    var cleanNumber = function cleanNumber(i) {
        return i.replace(/[^\-?0-9.]/g, '');
    },
        compareNumber = function compareNumber(a, b) {
        a = parseFloat(a);
        b = parseFloat(b);

        a = isNaN(a) ? 0 : a;
        b = isNaN(b) ? 0 : b;

        return a - b;
    };

    Tablesort.extend('number', function (item) {
        return item.match(/^-?[£\x24Û¢´€]?\d+\s*([,\.]\d{0,2})/) || // Prefixed currency
        item.match(/^-?\d+\s*([,\.]\d{0,2})?[£\x24Û¢´€]/) || // Suffixed currency
        item.match(/^-?(\d)*-?([,\.]){0,1}-?(\d)+([E,e][\-+][\d]+)?%?$/); // Number
    }, function (a, b) {
        a = cleanNumber(a);
        b = cleanNumber(b);

        return compareNumber(b, a);
    });
})();

var Global = function () {
    function Global() {
        _classCallCheck(this, Global);

        this.bindEvents();
    }

    _createClass(Global, [{
        key: "bindEvents",
        value: function bindEvents() {

            this.initLoading();
        }

        //  The Loading Screen will listen to a global event on the document

    }, {
        key: "initLoading",
        value: function initLoading() {

            if ($('#loading-overlay').length <= 0) {
                return;
            }

            $(document).on('start_loading', function () {
                $('#loading-overlay').removeClass('hidden');
            });
            $(document).on('stop_loading', function () {
                $('#loading-overlay').addClass('hidden');
            });
        }
    }]);

    return Global;
}();

var ProposalAll = function () {
    function ProposalAll() {
        _classCallCheck(this, ProposalAll);

        if ($('#proposals-list').length < 0) return;

        this.bindEvents();
    }

    _createClass(ProposalAll, [{
        key: "bindEvents",
        value: function bindEvents() {

            var _this = this;
            $('[data-toggle="tooltip"]').tooltip();

            $('[data-action="download-proposal"]').click(function (e) {
                e.preventDefault();
                _this.downloadProposal(this);
            });
            $('[data-action="delete-proposal"]').click(function (e) {
                e.preventDefault();
                _this.deleteProposal(this);
            });
        }
    }, {
        key: "downloadProposal",
        value: function downloadProposal(_this) {

            var proposal_id = $(_this).parents('tr').attr('id');
            var data = {
                "_token": $(_this).data('csrf')
            };

            // Starts the loading screen
            $(document).trigger('start_loading');

            $.post('/proposal/download/' + proposal_id, data).done(function (response) {

                window.open(response.url);
            }).fail(function (response) {
                console.log(response);
            }).always(function (response) {

                $(document).trigger('stop_loading');
            });
        }
    }, {
        key: "deleteProposal",
        value: function deleteProposal(_this) {

            var result = confirm('Are you sure you want to delete this proposal? You cannot recover this.');
            if (!result) {
                return;
            }

            var proposal_id = $(_this).parents('tr').attr('id');
            var data = {
                "_token": $(_this).data('csrf')
            };

            $.post('/proposal/delete/' + proposal_id, data).done(function (response) {
                $('#' + response.uid).remove();
                if ($('#proposals-list tbody tr').length <= 0) {
                    window.location = window.location.href;
                }
            }).fail(function (response) {
                console.log(response);
            });
        }
    }]);

    return ProposalAll;
}();

var ProposalEngine = function () {
    function ProposalEngine() {
        _classCallCheck(this, ProposalEngine);

        if (typeof jQuery == 'undefined') {
            return;
        }
        this.init();
    }

    _createClass(ProposalEngine, [{
        key: "init",
        value: function init() {

            this.initSummernote();
            this.initGenerateProposal();
            this.initScopeOfWork();
            this.initInvestment();
        }
    }, {
        key: "initSummernote",
        value: function initSummernote() {

            if ($('.summernote').length > 0) {
                $('.summernote').summernote({
                    height: 300
                });
            }
        }

        //  =========================================================
        //  Scope of Work
        //  =========================================================

    }, {
        key: "initScopeOfWork",
        value: function initScopeOfWork() {
            // Initializes the scope of work
            if ($('#scope-of-work').length > 0) {
                this.scopeOfWorkBindEvents();

                // Populates the scope of work table
                if (typeof proposal_data == 'undefined' || proposal_data.scope_of_work == {}) {
                    // Creates a new blank scope of work
                    this.scopeOfWorkAddTable();
                } else {
                    // Populates the scope of work table with the necessary sections and items
                    this.scopeOfWorkPopulate();
                }
            }
        }
    }, {
        key: "scopeOfWorkBindEvents",
        value: function scopeOfWorkBindEvents() {

            if ($('[data-action=add-scope-of-work-section]').length > 0) {
                var _this = this;
                this.scopeOfWorkSortTables();
                $('[data-action=add-scope-of-work-section]').click(function () {
                    _this.scopeOfWorkAddTable();
                });
                $('#scope-of-work').on('click', '[data-action=delete-scope-of-work-section]', function () {
                    _this.scopeOfWorkDeleteTable($(this).parents('.scope-of-work-section'));
                });
                $('#scope-of-work').on('click', '[data-action=add-scope-of-work-row]', function () {
                    _this.scopeOfWorkAddRow($(this).parents('table'));
                });
                $('#scope-of-work').on('click', '[data-action="delete-scope-of-work-row"]', function () {
                    _this.scopeOfWorkDeleteRow($(this).parents('tr'));
                });
            }
        }
    }, {
        key: "scopeOfWorkAddRow",
        value: function scopeOfWorkAddRow(table) {
            table.find('tbody').append($('#scope-of-work-template tbody tr').clone());
        }
    }, {
        key: "scopeOfWorkDeleteRow",
        value: function scopeOfWorkDeleteRow(row) {
            row.remove();
        }
    }, {
        key: "scopeOfWorkAddTable",
        value: function scopeOfWorkAddTable() {
            $('#scope-of-work').append(this.scopeOfWorkCloneTable());
        }
    }, {
        key: "scopeOfWorkDeleteTable",
        value: function scopeOfWorkDeleteTable(section) {
            var confirmation = confirm("Are you sure you want to delete this section permanently?");
            if (confirmation) {
                section.remove();
            }
        }
    }, {
        key: "scopeOfWorkCloneTable",
        value: function scopeOfWorkCloneTable() {
            var table = $('#scope-of-work-template .scope-of-work-section').clone();
            this.scopeOfWorkSortRows(table);
            return table;
        }
    }, {
        key: "scopeOfWorkSortRows",
        value: function scopeOfWorkSortRows(table) {
            table.find('tbody').sortable({
                animation: 100,
                handle: '.sort-handler'
            });
        }
    }, {
        key: "scopeOfWorkSortTables",
        value: function scopeOfWorkSortTables() {
            $('#scope-of-work').sortable({
                animation: 100
            });
        }

        // Populates the scope of work tables with the necessary sections and items

    }, {
        key: "scopeOfWorkPopulate",
        value: function scopeOfWorkPopulate() {

            $.each(proposal_data.scope_of_work, function (section_index, section) {

                // Create the section from the template
                var new_section = $('#scope-of-work-template .scope-of-work-section').clone();
                var new_section_tbody = new_section.find('tbody');
                var new_section_tr_template = new_section_tbody.find('tr');

                // Sets the section title
                new_section.find('.scope-of-work-section-title').html($(section['section-title']).removeAttr('style').html());

                $.each(section['section-items'], function (index, item) {
                    var new_section_tr = new_section_tr_template.clone();
                    // Sets the section items
                    new_section_tr.find('.scope-of-work-item').html($(item).removeAttr('style').html());
                    // Adds to the tbody
                    new_section_tbody.append(new_section_tr);
                });
                // Prepends the scope of work to the table
                $('#scope-of-work').append(new_section);

                // Remove the template
                new_section_tr_template.remove();
            });
        }

        //  =========================================================
        //  Investment
        //  =========================================================

    }, {
        key: "initInvestment",
        value: function initInvestment() {
            // Initializes the investment
            if ($('#investment').length > 0) {
                this.investmentBindEvents();
                // Populates the investment table
                if (typeof proposal_data == 'undefined' || proposal_data.investment == {}) {
                    // Creates a new blank investment
                    this.investmentAddTable();
                } else {
                    // Populates the investment table with the necessary sections and items
                    this.investmentPopulate();
                }
            }
        }
    }, {
        key: "investmentBindEvents",
        value: function investmentBindEvents() {

            if ($('[data-action=add-investment-section]').length > 0) {
                var _this = this;
                this.investmentSortTables();
                $('[data-action=add-investment-section]').click(function () {
                    _this.investmentAddTable();
                });
                $('#investment').on('click', '[data-action=delete-investment-section]', function () {
                    _this.investmentDeleteTable($(this).parents('.investment-section'));
                });
                $('#investment').on('click', '[data-action=add-investment-row]', function () {
                    _this.investmentAddRow($(this).parents('table'));
                });
                $('#investment').on('click', '[data-action="delete-investment-row"]', function () {
                    _this.investmentDeleteRow($(this).parents('tr'));
                });
            }
        }
    }, {
        key: "investmentAddRow",
        value: function investmentAddRow(table) {
            table.find('tbody').append($('#investment-template tbody tr').clone());
        }
    }, {
        key: "investmentDeleteRow",
        value: function investmentDeleteRow(row) {
            row.remove();
        }
    }, {
        key: "investmentAddTable",
        value: function investmentAddTable() {
            $('#investment').append(this.investmentCloneTable());
        }
    }, {
        key: "investmentDeleteTable",
        value: function investmentDeleteTable(section) {
            var confirmation = confirm("Are you sure you want to delete this section permanently?");
            if (confirmation) {
                section.remove();
            }
        }
    }, {
        key: "investmentCloneTable",
        value: function investmentCloneTable() {
            var table = $('#investment-template .investment-section').clone();
            this.investmentSortRows(table);
            return table;
        }
    }, {
        key: "investmentSortRows",
        value: function investmentSortRows(table) {
            table.find('tbody').sortable({
                animation: 100,
                handle: '.sort-handler'
            });
        }
    }, {
        key: "investmentSortTables",
        value: function investmentSortTables() {
            $('#investment').sortable({
                animation: 100
            });
        }
        // Populates the scope of work tables with the necessary sections and items

    }, {
        key: "investmentPopulate",
        value: function investmentPopulate() {

            // Populates each section of the investment
            $.each(proposal_data.investment['investment-sections'], function (section_index, section) {
                // Create the section from the template
                var new_section = $('#investment-template .investment-section').clone();
                var new_section_tbody = new_section.find('tbody');
                var new_section_tr_template = new_section_tbody.find('tr');

                // Sets the section title
                new_section.find('.investment-section-title').html(section['section-title']);
                new_section.find('.investment-section-subtotal').html(section['section-subtotal']);
                $.each(section['section-items'], function (index, item) {
                    var new_section_tr = new_section_tr_template.clone();
                    // Sets the section items
                    new_section_tr.find('.investment-name').html(item['name']);
                    new_section_tr.find('.investment-cost').html(item['cost']);
                    // Adds to the tbody
                    new_section_tbody.append(new_section_tr);
                });
                // Prepends the scope of work to the table
                $('#investment').append(new_section);

                // Remove the template
                new_section_tr_template.remove();
            });

            // Populates the investment total and notes
            $('#investment-total-name').html(proposal_data.investment['investment-total-name']);
            $('#investment-total-cost').html(proposal_data.investment['investment-total-cost']);
            $('#investment-additional-notes').html(proposal_data.investment['investment-additional-notes']);
        }

        //  =========================================================
        //  Generate the proposal
        //  =========================================================

    }, {
        key: "initGenerateProposal",
        value: function initGenerateProposal() {
            var _this = this;
            $('[data-action="generate-proposal"]').click(function () {
                _this.generateProposal();
            });
            $('[data-action="update-proposal"]').click(function () {
                _this.updateProposal();
            });
        }
    }, {
        key: "generateProposal",
        value: function generateProposal() {

            var data = this.getData();

            $.post('/proposal/new', data).done(function (response) {

                if (response.success) {
                    window.location = '/proposals';
                }
            }).fail(function (response) {

                // Unprocessable Entity - Validation failed
                if (response.status == 422) {

                    //var response_text = $.parseJSON(response.responseJSON);
                    var error_msg = $('<div class="alert alert-warning text-center" role="alert"></div>');
                    error_msg.append('<h3>Your Proposal Was Not Saved.</h3>');

                    _.each(response.responseJSON, function (msgs, key) {
                        error_msg.append('<p><strong>' + key + '</strong></p>');
                        $(msgs).each(function (index, msg) {
                            error_msg.append('<p>' + msg + '</p>');
                        });
                        error_msg.append('<hr>');
                    });

                    $('#messages').html(error_msg);
                }
            }).always(function (response) {
                console.log(response);
                if (response.success) {
                    //window.location = '/proposals';
                }
            });
        }
    }, {
        key: "updateProposal",
        value: function updateProposal() {

            var data = this.getData();

            $.post(window.location, data).done(function (response) {
                if (response.success) {
                    window.location = '/proposals';
                }
            }).fail(function (response) {

                // Unprocessable Entity - Validation failed
                if (response.status == 422) {

                    //var response_text = $.parseJSON(response.responseJSON);
                    var error_msg = $('<div class="alert alert-warning text-center" role="alert"></div>');
                    error_msg.append('<h3>Your Proposal Was Not Saved.</h3>');

                    _.each(response.responseJSON, function (msgs, key) {
                        error_msg.append('<p><strong>' + key + '</strong></p>');
                        $(msgs).each(function (index, msg) {
                            error_msg.append('<p>' + msg + '</p>');
                        });
                        error_msg.append('<hr>');
                    });

                    $('#messages').html(error_msg);
                }
            }).always(function (response) {

                console.log(response);
            });
        }
    }, {
        key: "getData",
        value: function getData() {

            // Form input fields
            var input_fields = new Array('project-details-title', 'project-details-type', 'project-details-client-company-name', 'project-details-client-company-website', 'project-details-client-company-address', 'project-details-client-contact-name', 'project-details-client-contact-email', 'project-overview', 'project-timeline-main');

            var data = {

                '_token': $('[name=_token]').val()

            };

            // Get the form data that are in input/textarea
            $.each(input_fields, function (index, field_name) {
                data[field_name] = $('#' + field_name).val();
            });

            // Get the form data for scope_of_work
            var scope_of_work = {};
            $('#scope-of-work .scope-of-work-section').each(function (section_index, section) {
                var scope_of_work_items = {};
                $(section).find('.scope-of-work-item').each(function (item_index, item) {
                    scope_of_work_items[item_index] = $(item).html();
                });
                scope_of_work[section_index] = {
                    'section-title': $(section).find('.scope-of-work-section-title').html(),
                    'section-items': scope_of_work_items
                };
            });
            data['project-scope-of-work'] = JSON.stringify(scope_of_work);

            // Get the form data for investment
            var investment_sections = {};
            $('#investment .investment-section').each(function (section_index, section) {
                var investment_items = {};
                $(section).find('.investment-item').each(function (item_index, item) {
                    investment_items[item_index] = {
                        'name': $(item).find('.investment-name').html(),
                        'cost': $(item).find('.investment-cost').html()
                    };
                });
                investment_sections[section_index] = {
                    'section-title': $(section).find('.investment-section-title').html(),
                    'section-items': investment_items,
                    'section-subtotal': $(section).find('.investment-section-subtotal').html()
                };
            });

            // Package the data
            var investment = {
                'investment-total-name': $('#investment-total #investment-total-name').removeAttr('style').html(),
                'investment-total-cost': $('#investment-total #investment-total-cost').removeAttr('style').html(),
                'investment-additional-notes': $('#investment-total #investment-additional-notes').removeAttr('style').html(),
                'investment-sections': investment_sections
            };
            data['project-investment'] = JSON.stringify(investment);

            return data;
        }
    }]);

    return ProposalEngine;
}();

var TimeTrackingEntry = Backbone.Model.extend({});
var TimeTrackingEntries = Backbone.Collection.extend({
    model: TimeTrackingEntry,
    initialize: function initialize() {

        // Create current date
        var curr_date = moment().date(20).format('YYYY-MM-DD');
        var prev_date = moment().date(21).subtract(1, 'months').format('YYYY-MM-DD');

        // Basic GET from server
        this.fetchReport({
            'since': prev_date,
            'until': curr_date
        });
    },

    fetchReport: function fetchReport(parameters) {
        this.fetchFromSrc('/time-tracking/report?', {
            'since': parameters.since,
            'until': parameters.until
        });
    },

    fetchFromSrc: function fetchFromSrc(url, parameters) {

        var _this = this;

        if (!_.isEmpty(parameters)) {
            _.each(parameters, function (parameter, key) {
                url += key + '=' + parameter + '&';
            });
        }
        //console.log(url);
        jQuery.get(url, function (response) {

            var report_items = jQuery.parseJSON(response.report);

            // Reset the list
            _this.reset(null);

            // Adds to the list
            _.each(report_items.data, function (item) {
                item.formatted_time = _this.formatTime(item.time);
                _this.add(item);
            });

            _this.trigger('ready');
        }).always(function (response) {
            $(document).trigger('stop_loading');
        });
    },

    // Misc Functions
    formatTime: function formatTime(ms) {
        var d, h, m, s;
        s = Math.floor(ms / 1000);
        m = Math.floor(s / 60);
        s = s % 60;
        h = Math.floor(m / 60);
        m = m % 60;
        //d = Math.floor(h / 24);
        //h = h % 24;

        // Leading Zeros
        if (s < 10) {
            s = '0' + s;
        }
        if (m < 10) {
            m = '0' + m;
        }
        if (h < 10) {
            h = '0' + h;
        }
        //if( d < 10 ){ d = '0'+d; }

        return h + ":" + m + ":" + s;
        //return { d: d, h: h, m: m, s: s };
    }
});
var timeTrackingEntries = new TimeTrackingEntries();

var TimeTrackingAll = function () {
    function TimeTrackingAll() {
        _classCallCheck(this, TimeTrackingAll);

        if ($('#time-tracking').length == 0) return;

        this.init();
        this.bindEvents();
        this.startLoading();
    }

    _createClass(TimeTrackingAll, [{
        key: "init",
        value: function init() {

            var start_date_picker = document.getElementById('time-tracking-datepicker-startdate');
            var end_date_picker = document.getElementById('time-tracking-datepicker-enddate');
            start_date_picker.value = moment().date(21).subtract(1, 'month').format('YYYY-MM-DD');
            end_date_picker.value = moment().date(20).format('YYYY-MM-DD');

            new Pikaday({
                field: start_date_picker,
                maxDate: new Date()
            });
            new Pikaday({
                field: document.getElementById('time-tracking-datepicker-enddate'),
                maxDate: new Date()
            });

            // Updates the Text
            this.updateDateText();
        }
    }, {
        key: "bindEvents",
        value: function bindEvents() {

            var _this = this;

            timeTrackingEntries.on('ready', this.createView, this);

            $('#time-tracking-datepicker-apply').click(function () {

                // Updates the text
                _this.updateDateText();
                // Fetches the data
                _this.fetchData();
            });

            $(document).on('click', '#time-tracking-pdf', function () {

                _this.getPDF({
                    project_ids: $(this).data('project-ids')
                });
            });
        }
    }, {
        key: "startLoading",
        value: function startLoading() {

            $(document).trigger('start_loading');
        }
    }, {
        key: "showError",
        value: function showError() {
            $('#time-tracking-list-loading').addClass('hidden');
            $('#time-tracking-list-error').removeClass('hidden');
        }

        //  ==========================================================
        //  Fetches the Data
        //  ==========================================================

    }, {
        key: "updateDateText",
        value: function updateDateText() {

            // Updates the text
            $('#time-tracking-dates-start').html(moment(document.getElementById('time-tracking-datepicker-startdate').value, 'YYYY-MM-DD').format('Do MMM'));
            $('#time-tracking-dates-end').html(moment(document.getElementById('time-tracking-datepicker-enddate').value, 'YYYY-MM-DD').format('Do MMM'));
        }
        //  ==========================================================
        //  Fetches the Data
        //  ==========================================================

    }, {
        key: "fetchData",
        value: function fetchData() {

            $(document).trigger('start_loading');

            timeTrackingEntries.fetchReport({
                'since': document.getElementById('time-tracking-datepicker-startdate').value,
                'until': document.getElementById('time-tracking-datepicker-enddate').value
            });
        }
        //  ==========================================================
        //  Creates the View
        //  ==========================================================

    }, {
        key: "createView",
        value: function createView() {
            var template = _.template($("script.time-tracking-list-template").html());
            $("#time-tracking-list").html(template({ items: timeTrackingEntries.toJSON() }));

            $('#time-tracking-list .menu .item').tab();

            var width = 0;
            $('.nav.nav-tabs li').each(function (index, el) {
                width += $(el).width();
            });
            $('.nav.nav-tabs').width(width);
        }

        //  ==========================================================
        //  Get PDF
        //  ==========================================================

    }, {
        key: "getPDF",
        value: function getPDF(parameters) {

            $(document).trigger('start_loading');

            var parameters = {
                'until': document.getElementById('time-tracking-datepicker-enddate').value,
                'since': document.getElementById('time-tracking-datepicker-startdate').value,
                'project_ids': parameters.project_ids
            };
            var url = '/time-tracking/report/pdf?';

            if (!_.isEmpty(parameters)) {
                _.each(parameters, function (parameter, key) {
                    url += key + '=' + parameter + '&';
                });
            }
            jQuery.get(url).done(function (response) {
                window.open(response.url, '_blank');
            }).always(function (response) {
                $(document).trigger('stop_loading');
            });
        }
    }]);

    return TimeTrackingAll;
}();

var InvoicesAll = function () {
    function InvoicesAll() {
        _classCallCheck(this, InvoicesAll);

        if ($('#invoices').length == 0) return;

        this.bindEvents();
        this.getUnpaidInvoices();
        this.startLoading();
    }

    _createClass(InvoicesAll, [{
        key: "bindEvents",
        value: function bindEvents() {

            var _this = this;

            $('[data-action="get-all-invoices"]').click(function () {
                _this.startLoading();
                _this.getAllInvoices();
            });
            $('[data-action="get-unpaid-invoices"]').click(function () {
                _this.startLoading();
                _this.getUnpaidInvoices();
            });
        }
    }, {
        key: "startLoading",
        value: function startLoading() {

            if ($('#invoices-list').length > 0) {
                $('#invoices-list').addClass('hidden');
            }
            $('#invoices-list-loading').removeClass('hidden');
        }
    }, {
        key: "showError",
        value: function showError() {
            $('#invoices-list-loading').addClass('hidden');
            $('#invoices-list-error').removeClass('hidden');
        }
    }, {
        key: "cloneEmptyList",
        value: function cloneEmptyList() {
            if ($('#invoices-list').length > 0) {
                $('#invoices-list').remove();
            }
            $('#invoices').prepend($('#invoices-list-template').clone().attr('id', 'invoices-list'));
        }
    }, {
        key: "getAllInvoices",
        value: function getAllInvoices() {

            var _this = this;

            $.post('/invoices', { '_token': $('#invoices [name=_token]').val() }).done(function (response) {

                if (response.invoices.length == 0) {
                    _this.showError();
                } else {
                    _this.cloneEmptyList();
                    _this.populateList(response);
                }
            });
        }
    }, {
        key: "getUnpaidInvoices",
        value: function getUnpaidInvoices() {

            var _this = this;

            $.post('/invoices/unpaid', { '_token': $('#invoices [name=_token]').val() }).done(function (response) {

                if (response.invoices.length == 0) {
                    _this.showError();
                } else {
                    _this.cloneEmptyList();
                    _this.populateList(response);
                }
            });
        }
    }, {
        key: "populateList",
        value: function populateList(response) {

            var invoices = response.invoices;
            var invoice_list_body = $('#invoices-list tbody');

            $.each(invoices, function (index, invoice) {

                var invoice_line = invoice_list_body.find('tr.template').clone();

                // Populate the data
                invoice_line.find('.invoice-number').html(invoice.number);
                invoice_line.find('.invoice-status .label-status').html(invoice.status).addClass(response.status_classes[invoice.status]);
                invoice_line.find('.invoice-organization').html(invoice.organization);
                invoice_line.find('.invoice-client-name').html(invoice.first_name + ' ' + invoice.last_name);
                invoice_line.find('.invoice-amount-outstanding').html(invoice.currency_code + ' ' + invoice.amount_outstanding).attr('data-sort', invoice.amount_outstanding * 100);
                invoice_line.find('.invoice-paid').html(invoice.currency_code + ' ' + invoice.paid).attr('data-sort', invoice.paid * 100);
                invoice_line.find('.invoice-amount').html(invoice.currency_code + ' ' + invoice.amount).attr('data-sort', invoice.amount * 100);
                invoice_line.find('.view-invoice').attr('href', invoice.links.view);
                invoice_line.find('.edit-invoice').attr('href', invoice.links.edit);

                // Show the lines
                invoice_line.removeClass('template').removeClass('hidden');

                // Adds to the body
                invoice_list_body.append(invoice_line);
            });

            $('#invoices-list-loading').addClass('hidden');
            $('#invoices-list').removeClass('hidden');
            $('#invoices-list tr.template').remove();

            // Sort table
            new Tablesort(document.getElementById('invoices-list'));
        }
    }]);

    return InvoicesAll;
}();
/*
https://github.com/mindmup/editable-table
*/


$.fn.editableTableWidget = function (options) {
    'use strict';

    return $(this).each(function () {
        var buildDefaultOptions = function buildDefaultOptions() {
            var opts = $.extend({}, $.fn.editableTableWidget.defaultOptions);
            opts.editor = opts.editor.clone();
            return opts;
        },
            activeOptions = $.extend(buildDefaultOptions(), options),
            ARROW_LEFT = 37,
            ARROW_UP = 38,
            ARROW_RIGHT = 39,
            ARROW_DOWN = 40,
            ENTER = 13,
            ESC = 27,
            TAB = 9,
            element = $(this),
            editor = activeOptions.editor.css('position', 'absolute').hide().appendTo(element.parent()),
            active,
            showEditor = function showEditor(select) {
            active = element.find('td:focus');
            if (active.length) {
                editor.val(active.text()).removeClass('error').show().offset(active.offset()).css(active.css(activeOptions.cloneProperties)).width(active.width()).height(active.height()).focus();
                if (select) {
                    editor.select();
                }
            }
        },
            setActiveText = function setActiveText() {
            var text = editor.val(),
                evt = $.Event('change'),
                originalContent;
            if (active.text() === text || editor.hasClass('error')) {
                return true;
            }
            originalContent = active.html();
            active.text(text).trigger(evt, text);
            if (evt.result === false) {
                active.html(originalContent);
            }
        },
            movement = function movement(element, keycode) {
            if (keycode === ARROW_RIGHT) {
                return element.next('td');
            } else if (keycode === ARROW_LEFT) {
                return element.prev('td');
            } else if (keycode === ARROW_UP) {
                return element.parent().prev().children().eq(element.index());
            } else if (keycode === ARROW_DOWN) {
                return element.parent().next().children().eq(element.index());
            }
            return [];
        };
        editor.blur(function () {
            setActiveText();
            editor.hide();
        }).keydown(function (e) {
            if (e.which === ENTER) {
                setActiveText();
                editor.hide();
                active.focus();
                e.preventDefault();
                e.stopPropagation();
            } else if (e.which === ESC) {
                editor.val(active.text());
                e.preventDefault();
                e.stopPropagation();
                editor.hide();
                active.focus();
            } else if (e.which === TAB) {
                active.focus();
            } else if (this.selectionEnd - this.selectionStart === this.value.length) {
                var possibleMove = movement(active, e.which);
                if (possibleMove.length > 0) {
                    possibleMove.focus();
                    e.preventDefault();
                    e.stopPropagation();
                }
            }
        }).on('input paste', function () {
            var evt = $.Event('validate');
            active.trigger(evt, editor.val());
            if (evt.result === false) {
                editor.addClass('error');
            } else {
                editor.removeClass('error');
            }
        });
        element.on('click keypress dblclick', showEditor).css('cursor', 'pointer').keydown(function (e) {
            var prevent = true,
                possibleMove = movement($(e.target), e.which);
            if (possibleMove.length > 0) {
                possibleMove.focus();
            } else if (e.which === ENTER) {
                showEditor(false);
            } else if (e.which === 17 || e.which === 91 || e.which === 93) {
                showEditor(true);
                prevent = false;
            } else {
                prevent = false;
            }
            if (prevent) {
                e.stopPropagation();
                e.preventDefault();
            }
        });

        element.find('td').prop('tabindex', 1);

        $(window).on('resize', function () {
            if (editor.is(':visible')) {
                editor.offset(active.offset()).width(active.width()).height(active.height());
            }
        });
    });
};
$.fn.editableTableWidget.defaultOptions = {
    cloneProperties: ['padding', 'padding-top', 'padding-bottom', 'padding-left', 'padding-right', 'text-align', 'font', 'font-size', 'font-family', 'font-weight', 'border', 'border-top', 'border-bottom', 'border-left', 'border-right'],
    editor: $('<input>')
};

jQuery(document).ready(function ($) {

    new Global();

    new ProposalEngine();
    new ProposalAll();

    new TimeTrackingAll();

    new InvoicesAll();
});
//# sourceMappingURL=all.js.map
