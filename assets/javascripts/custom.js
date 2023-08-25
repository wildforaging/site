"use strict";
(()=>{
    var Wn = Object.create;
    var Jt = Object.defineProperty;
    var Un = Object.getOwnPropertyDescriptor;
    var jn = Object.getOwnPropertyNames
      , Or = Object.getOwnPropertySymbols
      , zn = Object.getPrototypeOf
      , _r = Object.prototype.hasOwnProperty
      , Vn = Object.prototype.propertyIsEnumerable;
    var Mr = (e,t,r)=>t in e ? Jt(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r
      , K = (e,t)=>{
        for (var r in t || (t = {}))
            _r.call(t, r) && Mr(e, r, t[r]);
        if (Or)
            for (var r of Or(t))
                Vn.call(t, r) && Mr(e, r, t[r]);
        return e
    }
    ;
    var ke = (e,t)=>()=>(t || e((t = {
        exports: {}
    }).exports, t),
    t.exports);
    var Dn = (e,t,r,n)=>{
        if (t && typeof t == "object" || typeof t == "function")
            for (let o of jn(t))
                !_r.call(e, o) && o !== r && Jt(e, o, {
                    get: ()=>t[o],
                    enumerable: !(n = Un(t, o)) || n.enumerable
                });
        return e
    }
    ;
    var nt = (e,t,r)=>(r = e != null ? Wn(zn(e)) : {},
    Dn(t || !e || !e.__esModule ? Jt(r, "default", {
        value: e,
        enumerable: !0
    }) : r, e));
    var ht = ke(he=>{
        (function() {
            var e, t, r, n, o, i, a, l, c, s, p, f, u, d, m, h, v, S, O, F;
            F = 150,
            s = 20,
            O = 150,
            c = .75,
            he.score = function(b, x, T) {
                var A, g, y, $;
                return g = T.preparedQuery,
                A = T.allowErrors,
                A || o(b, g.core_lw, g.core_up) ? ($ = b.toLowerCase(),
                y = t(b, $, g),
                Math.ceil(y)) : 0
            }
            ,
            he.isMatch = o = function(b, x, T) {
                var A, g, y, $, j, q, W;
                if (y = b.length,
                $ = x.length,
                !y || $ > y)
                    return !1;
                for (A = -1,
                g = -1; ++g < $; ) {
                    for (j = x.charCodeAt(g),
                    q = T.charCodeAt(g); ++A < y && (W = b.charCodeAt(A),
                    !(W === j || W === q)); )
                        ;
                    if (A === y)
                        return !1
                }
                return !0
            }
            ,
            he.computeScore = t = function(b, x, T) {
                var A, g, y, $, j, q, W, Q, P, X, G, be, Z, C, w, E, M, _, R, re, Me, yt, Bt, Gt;
                if (w = T.query,
                E = T.query_lw,
                X = b.length,
                Z = w.length,
                A = p(b, x, w, E),
                g = A.score,
                A.count === Z)
                    return d(Z, X, g, A.pos);
                if (C = x.indexOf(E),
                C > -1)
                    return m(b, x, w, E, C, Z, X);
                for (re = new Array(Z),
                j = new Array(Z),
                Gt = S(Z, X),
                G = Math.ceil(c * Z) + 5,
                be = G,
                W = !0,
                P = -1; ++P < Z; )
                    re[P] = 0,
                    j[P] = 0;
                for (Q = -1; ++Q < X; ) {
                    if (yt = x[Q],
                    !yt.charCodeAt(0)in T.charCodes) {
                        if (W) {
                            for (P = -1; ++P < Z; )
                                j[P] = 0;
                            W = !1
                        }
                        continue
                    }
                    for (_ = 0,
                    R = 0,
                    $ = 0,
                    M = !0,
                    W = !0,
                    P = -1; ++P < Z; ) {
                        if (Me = re[P],
                        Me > _ && (_ = Me),
                        q = 0,
                        E[P] === yt)
                            if (Bt = l(Q, b, x),
                            q = $ > 0 ? $ : u(b, x, w, E, Q, P, Bt),
                            y = R + f(Q, P, Bt, g, q),
                            y > _)
                                _ = y,
                                be = G;
                            else {
                                if (M && --be <= 0)
                                    return Math.max(_, re[Z - 1]) * Gt;
                                M = !1
                            }
                        R = Me,
                        $ = j[P],
                        j[P] = q,
                        re[P] = _
                    }
                }
                return _ = re[Z - 1],
                _ * Gt
            }
            ,
            he.isWordStart = l = function(b, x, T) {
                var A, g;
                return b === 0 ? !0 : (A = x[b],
                g = x[b - 1],
                i(g) || A !== T[b] && g === T[b - 1])
            }
            ,
            he.isWordEnd = a = function(b, x, T, A) {
                var g, y;
                return b === A - 1 ? !0 : (g = x[b],
                y = x[b + 1],
                i(y) || g === T[b] && y !== T[b + 1])
            }
            ,
            i = function(b) {
                return b === " " || b === "." || b === "-" || b === "_" || b === "/" || b === "\\"
            }
            ,
            v = function(b) {
                var x;
                return b < s ? (x = s - b,
                100 + x * x) : Math.max(100 + s - b, 0)
            }
            ,
            he.scoreSize = S = function(b, x) {
                return O / (O + Math.abs(x - b))
            }
            ,
            d = function(b, x, T, A) {
                return 2 * b * (F * T + v(A)) * S(b, x)
            }
            ,
            he.scorePattern = h = function(b, x, T, A, g) {
                var y, $;
                return $ = b,
                y = 6,
                T === b && (y += 2),
                A && (y += 3),
                g && (y += 1),
                b === x && (A && (T === x ? $ += 2 : $ += 1),
                g && (y += 1)),
                T + $ * ($ + y)
            }
            ,
            he.scoreCharacter = f = function(b, x, T, A, g) {
                var y;
                return y = v(b),
                T ? y + F * ((A > g ? A : g) + 10) : y + F * g
            }
            ,
            he.scoreConsecutives = u = function(b, x, T, A, g, y, $) {
                var j, q, W, Q, P, X, G;
                for (q = b.length,
                Q = T.length,
                W = q - g,
                P = Q - y,
                j = W < P ? W : P,
                X = 0,
                G = 0,
                T[y] === b[g] && X++; ++G < j && A[++y] === x[++g]; )
                    T[y] === b[g] && X++;
                return G < j && g--,
                G === 1 ? 1 + 2 * X : h(G, Q, X, $, a(g, b, x, q))
            }
            ,
            he.scoreExactMatch = m = function(b, x, T, A, g, y, $) {
                var j, q, W, Q, P;
                for (P = l(g, b, x),
                P || (W = x.indexOf(A, g + 1),
                W > -1 && (P = l(W, b, x),
                P && (g = W))),
                q = -1,
                Q = 0; ++q < y; )
                    T[g + q] === b[q] && Q++;
                return j = a(g + y - 1, b, x, $),
                d(y, $, h(y, y, Q, P, j), g)
            }
            ,
            e = function() {
                function b(x, T, A) {
                    this.score = x,
                    this.pos = T,
                    this.count = A
                }
                return b
            }(),
            r = new e(0,.1,0),
            he.scoreAcronyms = p = function(b, x, T, A) {
                var g, y, $, j, q, W, Q, P, X, G, be;
                if (q = b.length,
                W = T.length,
                !(q > 1 && W > 1))
                    return r;
                for (g = 0,
                G = 0,
                be = 0,
                P = 0,
                $ = -1,
                j = -1; ++j < W; ) {
                    if (Q = A[j],
                    i(Q))
                        if ($ = x.indexOf(Q, $ + 1),
                        $ > -1) {
                            G++;
                            continue
                        } else
                            break;
                    for (; ++$ < q; )
                        if (Q === x[$] && l($, b, x)) {
                            T[j] === b[$] && P++,
                            be += $,
                            g++;
                            break
                        }
                    if ($ === q)
                        break
                }
                return g < 2 ? r : (y = g === W ? n(b, x, T, g) : !1,
                X = h(g, W, P, !0, y),
                new e(X,be / g,g + G))
            }
            ,
            n = function(b, x, T, A) {
                var g, y, $, j;
                if ($ = b.length,
                j = T.length,
                g = 0,
                $ > 12 * j)
                    return !1;
                for (y = -1; ++y < $; )
                    if (l(y, b, x) && ++g > A)
                        return !1;
                return !0
            }
        }
        ).call(he)
    }
    );
    var qt = ke(bt=>{
        (function() {
            var e, t, r, n, o, i, a, l, c, s;
            s = ht(),
            i = s.isMatch,
            e = s.computeScore,
            l = s.scoreSize,
            c = 20,
            r = 2.5,
            bt.score = function(p, f, u) {
                var d, m, h, v;
                return m = u.preparedQuery,
                d = u.allowErrors,
                d || i(p, m.core_lw, m.core_up) ? (v = p.toLowerCase(),
                h = e(p, v, m),
                h = a(p, v, h, u),
                Math.ceil(h)) : 0
            }
            ,
            a = function(p, f, u, d) {
                var m, h, v, S, O, F, b, x, T, A;
                if (u === 0)
                    return 0;
                for (T = d.preparedQuery,
                A = d.useExtensionBonus,
                x = d.pathSeparator,
                O = p.length - 1; p[O] === x; )
                    O--;
                if (v = p.lastIndexOf(x, O),
                b = O - v,
                F = 1,
                A && (F += o(f, T.ext, v, O, 2),
                u *= F),
                v === -1)
                    return u;
                for (S = T.depth; v > -1 && S-- > 0; )
                    v = p.lastIndexOf(x, v - 1);
                return h = v === -1 ? u : F * e(p.slice(v + 1, O + 1), f.slice(v + 1, O + 1), T),
                m = .5 * c / (c + t(p, O + 1, x)),
                m * h + (1 - m) * u * l(0, r * b)
            }
            ,
            bt.countDir = t = function(p, f, u) {
                var d, m;
                if (f < 1)
                    return 0;
                for (d = 0,
                m = -1; ++m < f && p[m] === u; )
                    ;
                for (; ++m < f; )
                    if (p[m] === u)
                        for (d++; ++m < f && p[m] === u; )
                            ;
                return d
            }
            ,
            bt.getExtension = n = function(p) {
                var f;
                return f = p.lastIndexOf("."),
                f < 0 ? "" : p.substr(f + 1)
            }
            ,
            o = function(p, f, u, d, m) {
                var h, v, S, O;
                if (!f.length || (O = p.lastIndexOf(".", d),
                !(O > u)))
                    return 0;
                for (S = f.length,
                h = d - O,
                h < S && (S = h,
                h = f.length),
                O++,
                v = -1; ++v < S && p[O + v] === f[v]; )
                    ;
                return v === 0 && m > 0 ? .9 * o(p, f, u, O - 2, m - 1) : v / h
            }
        }
        ).call(bt)
    }
    );
    var gr = ke((vn,gn)=>{
        (function() {
            var e, t, r, n, o, i, a, l;
            l = qt(),
            r = l.countDir,
            o = l.getExtension,
            gn.exports = e = function() {
                function c(s, p) {
                    var f, u, d;
                    if (d = p != null ? p : {},
                    f = d.optCharRegEx,
                    u = d.pathSeparator,
                    !(s && s.length))
                        return null;
                    this.query = s,
                    this.query_lw = s.toLowerCase(),
                    this.core = t(s, f),
                    this.core_lw = this.core.toLowerCase(),
                    this.core_up = a(this.core),
                    this.depth = r(s, s.length, u),
                    this.ext = o(this.query_lw),
                    this.charCodes = n(this.query_lw)
                }
                return c
            }(),
            i = /[ _\-:\/\\]/g,
            t = function(c, s) {
                return s == null && (s = i),
                c.replace(s, "")
            }
            ,
            a = function(c) {
                var s, p, f, u;
                for (p = "",
                f = 0,
                u = c.length; f < u; f++)
                    s = c[f],
                    p += s.toUpperCase()[0];
                return p
            }
            ,
            n = function(c) {
                var s, p, f;
                for (f = c.length,
                p = -1,
                s = []; ++p < f; )
                    s[c.charCodeAt(p)] = !0;
                return s
            }
        }
        ).call(vn)
    }
    );
    var En = ke((xn,yn)=>{
        (function() {
            var e, t, r, n, o;
            n = ht(),
            t = qt(),
            e = gr(),
            r = function(i) {
                return i.candidate
            }
            ,
            o = function(i, a) {
                return a.score - i.score
            }
            ,
            yn.exports = function(i, a, l) {
                var c, s, p, f, u, d, m, h, v, S, O, F, b;
                for (h = [],
                p = l.key,
                u = l.maxResults,
                f = l.maxInners,
                O = l.usePathScoring,
                v = f != null && f > 0 ? f : i.length + 1,
                c = p != null,
                m = O ? t : n,
                F = 0,
                b = i.length; F < b && (s = i[F],
                S = c ? s[p] : s,
                !(!!S && (d = m.score(S, a, l),
                d > 0 && (h.push({
                    candidate: s,
                    score: d
                }),
                !--v)))); F++)
                    ;
                return h.sort(o),
                i = h.map(r),
                u != null && (i = i.slice(0, u)),
                i
            }
        }
        ).call(xn)
    }
    );
    var Sn = ke(Kt=>{
        (function() {
            var e, t, r, n, o, i, a, l, c, s;
            s = ht(),
            r = s.isMatch,
            n = s.isWordStart,
            c = s.scoreConsecutives,
            l = s.scoreCharacter,
            a = s.scoreAcronyms,
            Kt.match = o = function(p, f, u) {
                var d, m, h, v, S, O;
                return d = u.allowErrors,
                S = u.preparedQuery,
                v = u.pathSeparator,
                d || r(p, S.core_lw, S.core_up) ? (O = p.toLowerCase(),
                h = t(p, O, S),
                h.length === 0 || p.indexOf(v) > -1 && (m = e(p, O, S, v),
                h = i(h, m)),
                h) : []
            }
            ,
            Kt.wrap = function(p, f, u) {
                var d, m, h, v, S, O, F, b, x;
                if (u.wrap != null && (x = u.wrap,
                O = x.tagClass,
                b = x.tagOpen,
                F = x.tagClose),
                O == null && (O = "highlight"),
                b == null && (b = '<strong class="' + O + '">'),
                F == null && (F = "</strong>"),
                p === f)
                    return b + p + F;
                if (h = o(p, f, u),
                h.length === 0)
                    return p;
                for (v = "",
                d = -1,
                S = 0; ++d < h.length; ) {
                    for (m = h[d],
                    m > S && (v += p.substring(S, m),
                    S = m); ++d < h.length; )
                        if (h[d] === m + 1)
                            m++;
                        else {
                            d--;
                            break
                        }
                    m++,
                    m > S && (v += b,
                    v += p.substring(S, m),
                    v += F,
                    S = m)
                }
                return S <= p.length - 1 && (v += p.substring(S)),
                v
            }
            ,
            e = function(p, f, u, d) {
                var m, h, v;
                for (v = p.length - 1; p[v] === d; )
                    v--;
                if (m = p.lastIndexOf(d, v),
                m === -1)
                    return [];
                for (h = u.depth; h-- > 0; )
                    if (m = p.lastIndexOf(d, m - 1),
                    m === -1)
                        return [];
                return m++,
                v++,
                t(p.slice(m, v), f.slice(m, v), u, m)
            }
            ,
            i = function(p, f) {
                var u, d, m, h, v, S, O;
                if (v = p.length,
                S = f.length,
                S === 0)
                    return p.slice();
                if (v === 0)
                    return f.slice();
                for (m = -1,
                h = 0,
                d = f[h],
                O = []; ++m < v; ) {
                    for (u = p[m]; d <= u && ++h < S; )
                        d < u && O.push(d),
                        d = f[h];
                    O.push(u)
                }
                for (; h < S; )
                    O.push(f[h++]);
                return O
            }
            ,
            t = function(p, f, u, d) {
                var m, h, v, S, O, F, b, x, T, A, g, y, $, j, q, W, Q, P, X, G, be, Z, C, w, E, M;
                for (d == null && (d = 0),
                P = u.query,
                X = u.query_lw,
                $ = p.length,
                W = P.length,
                O = a(p, f, P, X).score,
                Z = new Array(W),
                T = new Array(W),
                v = 0,
                S = 1,
                h = 2,
                m = 3,
                M = new Array($ * W),
                Q = -1,
                y = -1; ++y < W; )
                    Z[y] = 0,
                    T[y] = 0;
                for (g = -1; ++g < $; )
                    for (G = 0,
                    C = 0,
                    x = 0,
                    w = f[g],
                    y = -1; ++y < W; )
                        A = 0,
                        F = 0,
                        be = C,
                        X[y] === w && (E = n(g, p, f),
                        A = x > 0 ? x : c(p, f, P, X, g, y, E),
                        F = be + l(g, y, E, O, A)),
                        C = Z[y],
                        x = T[y],
                        G > C ? q = h : (G = C,
                        q = S),
                        F > G ? (G = F,
                        q = m) : A = 0,
                        Z[y] = G,
                        T[y] = A,
                        M[++Q] = G > 0 ? q : v;
                for (g = $ - 1,
                y = W - 1,
                Q = g * W + y,
                b = !0,
                j = []; b && g >= 0 && y >= 0; )
                    switch (M[Q]) {
                    case S:
                        g--,
                        Q -= W;
                        break;
                    case h:
                        y--,
                        Q--;
                        break;
                    case m:
                        j.push(g + d),
                        y--,
                        g--,
                        Q -= W + 1;
                        break;
                    default:
                        b = !1
                    }
                return j.reverse(),
                j
            }
        }
        ).call(Kt)
    }
    );
    var xr = ke((wn,Tn)=>{
        (function() {
            var e, t, r, n, o, i, a, l;
            r = En(),
            n = Sn(),
            l = ht(),
            i = qt(),
            e = gr(),
            a = null,
            t = (typeof process != "undefined" && process !== null ? process.platform : void 0) === "win32" ? "\\" : "/",
            Tn.exports = {
                filter: function(c, s, p) {
                    return p == null && (p = {}),
                    s != null && s.length && (c != null && c.length) ? (p = o(p, s),
                    r(c, s, p)) : []
                },
                score: function(c, s, p) {
                    return p == null && (p = {}),
                    c != null && c.length && (s != null && s.length) ? (p = o(p, s),
                    p.usePathScoring ? i.score(c, s, p) : l.score(c, s, p)) : 0
                },
                match: function(c, s, p) {
                    var f, u, d;
                    return p == null && (p = {}),
                    c ? s ? c === s ? function() {
                        d = [];
                        for (var m = 0, h = c.length; 0 <= h ? m < h : m > h; 0 <= h ? m++ : m--)
                            d.push(m);
                        return d
                    }
                    .apply(this) : (p = o(p, s),
                    n.match(c, s, p)) : [] : []
                },
                wrap: function(c, s, p) {
                    return p == null && (p = {}),
                    c ? s ? (p = o(p, s),
                    n.wrap(c, s, p)) : [] : []
                },
                prepareQuery: function(c, s) {
                    return s == null && (s = {}),
                    s = o(s, c),
                    s.preparedQuery
                }
            },
            o = function(c, s) {
                return c.allowErrors == null && (c.allowErrors = !1),
                c.usePathScoring == null && (c.usePathScoring = !0),
                c.useExtensionBonus == null && (c.useExtensionBonus = !1),
                c.pathSeparator == null && (c.pathSeparator = t),
                c.optCharRegEx == null && (c.optCharRegEx = null),
                c.wrap == null && (c.wrap = null),
                c.preparedQuery == null && (c.preparedQuery = a && a.query === s ? a : a = new e(s,c)),
                c
            }
        }
        ).call(wn)
    }
    );
    var wr = ke((gt,Sr)=>{
        (function(t, r) {
            typeof gt == "object" && typeof Sr == "object" ? Sr.exports = r() : typeof define == "function" && define.amd ? define([], r) : typeof gt == "object" ? gt.ClipboardJS = r() : t.ClipboardJS = r()
        }
        )(gt, function() {
            return function() {
                var e = {
                    686: function(n, o, i) {
                        "use strict";
                        i.d(o, {
                            default: function() {
                                return Z
                            }
                        });
                        var a = i(279)
                          , l = i.n(a)
                          , c = i(370)
                          , s = i.n(c)
                          , p = i(817)
                          , f = i.n(p);
                        function u(C) {
                            try {
                                return document.execCommand(C)
                            } catch (w) {
                                return !1
                            }
                        }
                        var d = function(w) {
                            var E = f()(w);
                            return u("cut"),
                            E
                        }
                          , m = d;
                        function h(C) {
                            var w = document.documentElement.getAttribute("dir") === "rtl"
                              , E = document.createElement("textarea");
                            E.style.fontSize = "12pt",
                            E.style.border = "0",
                            E.style.padding = "0",
                            E.style.margin = "0",
                            E.style.position = "absolute",
                            E.style[w ? "right" : "left"] = "-9999px";
                            var M = window.pageYOffset || document.documentElement.scrollTop;
                            return E.style.top = "".concat(M, "px"),
                            E.setAttribute("readonly", ""),
                            E.value = C,
                            E
                        }
                        var v = function(w, E) {
                            var M = h(w);
                            E.container.appendChild(M);
                            var _ = f()(M);
                            return u("copy"),
                            M.remove(),
                            _
                        }
                          , S = function(w) {
                            var E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                                container: document.body
                            }
                              , M = "";
                            return typeof w == "string" ? M = v(w, E) : w instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(w == null ? void 0 : w.type) ? M = v(w.value, E) : (M = f()(w),
                            u("copy")),
                            M
                        }
                          , O = S;
                        function F(C) {
                            "@babel/helpers - typeof";
                            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? F = function(E) {
                                return typeof E
                            }
                            : F = function(E) {
                                return E && typeof Symbol == "function" && E.constructor === Symbol && E !== Symbol.prototype ? "symbol" : typeof E
                            }
                            ,
                            F(C)
                        }
                        var b = function() {
                            var w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
                              , E = w.action
                              , M = E === void 0 ? "copy" : E
                              , _ = w.container
                              , R = w.target
                              , re = w.text;
                            if (M !== "copy" && M !== "cut")
                                throw new Error('Invalid "action" value, use either "copy" or "cut"');
                            if (R !== void 0)
                                if (R && F(R) === "object" && R.nodeType === 1) {
                                    if (M === "copy" && R.hasAttribute("disabled"))
                                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                    if (M === "cut" && (R.hasAttribute("readonly") || R.hasAttribute("disabled")))
                                        throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)
                                } else
                                    throw new Error('Invalid "target" value, use a valid Element');
                            if (re)
                                return O(re, {
                                    container: _
                                });
                            if (R)
                                return M === "cut" ? m(R) : O(R, {
                                    container: _
                                })
                        }
                          , x = b;
                        function T(C) {
                            "@babel/helpers - typeof";
                            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? T = function(E) {
                                return typeof E
                            }
                            : T = function(E) {
                                return E && typeof Symbol == "function" && E.constructor === Symbol && E !== Symbol.prototype ? "symbol" : typeof E
                            }
                            ,
                            T(C)
                        }
                        function A(C, w) {
                            if (!(C instanceof w))
                                throw new TypeError("Cannot call a class as a function")
                        }
                        function g(C, w) {
                            for (var E = 0; E < w.length; E++) {
                                var M = w[E];
                                M.enumerable = M.enumerable || !1,
                                M.configurable = !0,
                                "value"in M && (M.writable = !0),
                                Object.defineProperty(C, M.key, M)
                            }
                        }
                        function y(C, w, E) {
                            return w && g(C.prototype, w),
                            E && g(C, E),
                            C
                        }
                        function $(C, w) {
                            if (typeof w != "function" && w !== null)
                                throw new TypeError("Super expression must either be null or a function");
                            C.prototype = Object.create(w && w.prototype, {
                                constructor: {
                                    value: C,
                                    writable: !0,
                                    configurable: !0
                                }
                            }),
                            w && j(C, w)
                        }
                        function j(C, w) {
                            return j = Object.setPrototypeOf || function(M, _) {
                                return M.__proto__ = _,
                                M
                            }
                            ,
                            j(C, w)
                        }
                        function q(C) {
                            var w = P();
                            return function() {
                                var M = X(C), _;
                                if (w) {
                                    var R = X(this).constructor;
                                    _ = Reflect.construct(M, arguments, R)
                                } else
                                    _ = M.apply(this, arguments);
                                return W(this, _)
                            }
                        }
                        function W(C, w) {
                            return w && (T(w) === "object" || typeof w == "function") ? w : Q(C)
                        }
                        function Q(C) {
                            if (C === void 0)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return C
                        }
                        function P() {
                            if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
                                return !1;
                            if (typeof Proxy == "function")
                                return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                                !0
                            } catch (C) {
                                return !1
                            }
                        }
                        function X(C) {
                            return X = Object.setPrototypeOf ? Object.getPrototypeOf : function(E) {
                                return E.__proto__ || Object.getPrototypeOf(E)
                            }
                            ,
                            X(C)
                        }
                        function G(C, w) {
                            var E = "data-clipboard-".concat(C);
                            if (w.hasAttribute(E))
                                return w.getAttribute(E)
                        }
                        var be = function(C) {
                            $(E, C);
                            var w = q(E);
                            function E(M, _) {
                                var R;
                                return A(this, E),
                                R = w.call(this),
                                R.resolveOptions(_),
                                R.listenClick(M),
                                R
                            }
                            return y(E, [{
                                key: "resolveOptions",
                                value: function() {
                                    var _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                                    this.action = typeof _.action == "function" ? _.action : this.defaultAction,
                                    this.target = typeof _.target == "function" ? _.target : this.defaultTarget,
                                    this.text = typeof _.text == "function" ? _.text : this.defaultText,
                                    this.container = T(_.container) === "object" ? _.container : document.body
                                }
                            }, {
                                key: "listenClick",
                                value: function(_) {
                                    var R = this;
                                    this.listener = s()(_, "click", function(re) {
                                        return R.onClick(re)
                                    })
                                }
                            }, {
                                key: "onClick",
                                value: function(_) {
                                    var R = _.delegateTarget || _.currentTarget
                                      , re = this.action(R) || "copy"
                                      , Me = x({
                                        action: re,
                                        container: this.container,
                                        target: this.target(R),
                                        text: this.text(R)
                                    });
                                    this.emit(Me ? "success" : "error", {
                                        action: re,
                                        text: Me,
                                        trigger: R,
                                        clearSelection: function() {
                                            R && R.focus(),
                                            window.getSelection().removeAllRanges()
                                        }
                                    })
                                }
                            }, {
                                key: "defaultAction",
                                value: function(_) {
                                    return G("action", _)
                                }
                            }, {
                                key: "defaultTarget",
                                value: function(_) {
                                    var R = G("target", _);
                                    if (R)
                                        return document.querySelector(R)
                                }
                            }, {
                                key: "defaultText",
                                value: function(_) {
                                    return G("text", _)
                                }
                            }, {
                                key: "destroy",
                                value: function() {
                                    this.listener.destroy()
                                }
                            }], [{
                                key: "copy",
                                value: function(_) {
                                    var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                                        container: document.body
                                    };
                                    return O(_, R)
                                }
                            }, {
                                key: "cut",
                                value: function(_) {
                                    return m(_)
                                }
                            }, {
                                key: "isSupported",
                                value: function() {
                                    var _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"]
                                      , R = typeof _ == "string" ? [_] : _
                                      , re = !!document.queryCommandSupported;
                                    return R.forEach(function(Me) {
                                        re = re && !!document.queryCommandSupported(Me)
                                    }),
                                    re
                                }
                            }]),
                            E
                        }(l())
                          , Z = be
                    },
                    828: function(n) {
                        var o = 9;
                        if (typeof Element != "undefined" && !Element.prototype.matches) {
                            var i = Element.prototype;
                            i.matches = i.matchesSelector || i.mozMatchesSelector || i.msMatchesSelector || i.oMatchesSelector || i.webkitMatchesSelector
                        }
                        function a(l, c) {
                            for (; l && l.nodeType !== o; ) {
                                if (typeof l.matches == "function" && l.matches(c))
                                    return l;
                                l = l.parentNode
                            }
                        }
                        n.exports = a
                    },
                    438: function(n, o, i) {
                        var a = i(828);
                        function l(p, f, u, d, m) {
                            var h = s.apply(this, arguments);
                            return p.addEventListener(u, h, m),
                            {
                                destroy: function() {
                                    p.removeEventListener(u, h, m)
                                }
                            }
                        }
                        function c(p, f, u, d, m) {
                            return typeof p.addEventListener == "function" ? l.apply(null, arguments) : typeof u == "function" ? l.bind(null, document).apply(null, arguments) : (typeof p == "string" && (p = document.querySelectorAll(p)),
                            Array.prototype.map.call(p, function(h) {
                                return l(h, f, u, d, m)
                            }))
                        }
                        function s(p, f, u, d) {
                            return function(m) {
                                m.delegateTarget = a(m.target, f),
                                m.delegateTarget && d.call(p, m)
                            }
                        }
                        n.exports = c
                    },
                    879: function(n, o) {
                        o.node = function(i) {
                            return i !== void 0 && i instanceof HTMLElement && i.nodeType === 1
                        }
                        ,
                        o.nodeList = function(i) {
                            var a = Object.prototype.toString.call(i);
                            return i !== void 0 && (a === "[object NodeList]" || a === "[object HTMLCollection]") && "length"in i && (i.length === 0 || o.node(i[0]))
                        }
                        ,
                        o.string = function(i) {
                            return typeof i == "string" || i instanceof String
                        }
                        ,
                        o.fn = function(i) {
                            var a = Object.prototype.toString.call(i);
                            return a === "[object Function]"
                        }
                    },
                    370: function(n, o, i) {
                        var a = i(879)
                          , l = i(438);
                        function c(u, d, m) {
                            if (!u && !d && !m)
                                throw new Error("Missing required arguments");
                            if (!a.string(d))
                                throw new TypeError("Second argument must be a String");
                            if (!a.fn(m))
                                throw new TypeError("Third argument must be a Function");
                            if (a.node(u))
                                return s(u, d, m);
                            if (a.nodeList(u))
                                return p(u, d, m);
                            if (a.string(u))
                                return f(u, d, m);
                            throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
                        }
                        function s(u, d, m) {
                            return u.addEventListener(d, m),
                            {
                                destroy: function() {
                                    u.removeEventListener(d, m)
                                }
                            }
                        }
                        function p(u, d, m) {
                            return Array.prototype.forEach.call(u, function(h) {
                                h.addEventListener(d, m)
                            }),
                            {
                                destroy: function() {
                                    Array.prototype.forEach.call(u, function(h) {
                                        h.removeEventListener(d, m)
                                    })
                                }
                            }
                        }
                        function f(u, d, m) {
                            return l(document.body, u, d, m)
                        }
                        n.exports = c
                    },
                    817: function(n) {
                        function o(i) {
                            var a;
                            if (i.nodeName === "SELECT")
                                i.focus(),
                                a = i.value;
                            else if (i.nodeName === "INPUT" || i.nodeName === "TEXTAREA") {
                                var l = i.hasAttribute("readonly");
                                l || i.setAttribute("readonly", ""),
                                i.select(),
                                i.setSelectionRange(0, i.value.length),
                                l || i.removeAttribute("readonly"),
                                a = i.value
                            } else {
                                i.hasAttribute("contenteditable") && i.focus();
                                var c = window.getSelection()
                                  , s = document.createRange();
                                s.selectNodeContents(i),
                                c.removeAllRanges(),
                                c.addRange(s),
                                a = c.toString()
                            }
                            return a
                        }
                        n.exports = o
                    },
                    279: function(n) {
                        function o() {}
                        o.prototype = {
                            on: function(i, a, l) {
                                var c = this.e || (this.e = {});
                                return (c[i] || (c[i] = [])).push({
                                    fn: a,
                                    ctx: l
                                }),
                                this
                            },
                            once: function(i, a, l) {
                                var c = this;
                                function s() {
                                    c.off(i, s),
                                    a.apply(l, arguments)
                                }
                                return s._ = a,
                                this.on(i, s, l)
                            },
                            emit: function(i) {
                                var a = [].slice.call(arguments, 1)
                                  , l = ((this.e || (this.e = {}))[i] || []).slice()
                                  , c = 0
                                  , s = l.length;
                                for (c; c < s; c++)
                                    l[c].fn.apply(l[c].ctx, a);
                                return this
                            },
                            off: function(i, a) {
                                var l = this.e || (this.e = {})
                                  , c = l[i]
                                  , s = [];
                                if (c && a)
                                    for (var p = 0, f = c.length; p < f; p++)
                                        c[p].fn !== a && c[p].fn._ !== a && s.push(c[p]);
                                return s.length ? l[i] = s : delete l[i],
                                this
                            }
                        },
                        n.exports = o,
                        n.exports.TinyEmitter = o
                    }
                }
                  , t = {};
                function r(n) {
                    if (t[n])
                        return t[n].exports;
                    var o = t[n] = {
                        exports: {}
                    };
                    return e[n](o, o.exports, r),
                    o.exports
                }
                return function() {
                    r.n = function(n) {
                        var o = n && n.__esModule ? function() {
                            return n.default
                        }
                        : function() {
                            return n
                        }
                        ;
                        return r.d(o, {
                            a: o
                        }),
                        o
                    }
                }(),
                function() {
                    r.d = function(n, o) {
                        for (var i in o)
                            r.o(o, i) && !r.o(n, i) && Object.defineProperty(n, i, {
                                enumerable: !0,
                                get: o[i]
                            })
                    }
                }(),
                function() {
                    r.o = function(n, o) {
                        return Object.prototype.hasOwnProperty.call(n, o)
                    }
                }(),
                r(686)
            }().default
        })
    }
    );
    var In = ke((jg,kn)=>{
        "use strict";
        var Fo = /["'&<>]/;
        kn.exports = Wo;
        function Wo(e) {
            var t = "" + e
              , r = Fo.exec(t);
            if (!r)
                return t;
            var n, o = "", i = 0, a = 0;
            for (i = r.index; i < t.length; i++) {
                switch (t.charCodeAt(i)) {
                case 34:
                    n = "&quot;";
                    break;
                case 38:
                    n = "&amp;";
                    break;
                case 39:
                    n = "&#39;";
                    break;
                case 60:
                    n = "&lt;";
                    break;
                case 62:
                    n = "&gt;";
                    break;
                default:
                    continue
                }
                a !== i && (o += t.substring(a, i)),
                a = i + 1,
                o += n
            }
            return a !== i ? o + t.substring(a, i) : o
        }
    }
    );
    var Xt = function(e, t) {
        return Xt = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(r, n) {
            r.__proto__ = n
        }
        || function(r, n) {
            for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o])
        }
        ,
        Xt(e, t)
    };
    function ee(e, t) {
        if (typeof t != "function" && t !== null)
            throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        Xt(e, t);
        function r() {
            this.constructor = e
        }
        e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype,
        new r)
    }
    function Lr(e, t, r, n) {
        function o(i) {
            return i instanceof r ? i : new r(function(a) {
                a(i)
            }
            )
        }
        return new (r || (r = Promise))(function(i, a) {
            function l(p) {
                try {
                    s(n.next(p))
                } catch (f) {
                    a(f)
                }
            }
            function c(p) {
                try {
                    s(n.throw(p))
                } catch (f) {
                    a(f)
                }
            }
            function s(p) {
                p.done ? i(p.value) : o(p.value).then(l, c)
            }
            s((n = n.apply(e, t || [])).next())
        }
        )
    }
    function Et(e, t) {
        var r = {
            label: 0,
            sent: function() {
                if (i[0] & 1)
                    throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        }, n, o, i, a;
        return a = {
            next: l(0),
            throw: l(1),
            return: l(2)
        },
        typeof Symbol == "function" && (a[Symbol.iterator] = function() {
            return this
        }
        ),
        a;
        function l(s) {
            return function(p) {
                return c([s, p])
            }
        }
        function c(s) {
            if (n)
                throw new TypeError("Generator is already executing.");
            for (; r; )
                try {
                    if (n = 1,
                    o && (i = s[0] & 2 ? o.return : s[0] ? o.throw || ((i = o.return) && i.call(o),
                    0) : o.next) && !(i = i.call(o, s[1])).done)
                        return i;
                    switch (o = 0,
                    i && (s = [s[0] & 2, i.value]),
                    s[0]) {
                    case 0:
                    case 1:
                        i = s;
                        break;
                    case 4:
                        return r.label++,
                        {
                            value: s[1],
                            done: !1
                        };
                    case 5:
                        r.label++,
                        o = s[1],
                        s = [0];
                        continue;
                    case 7:
                        s = r.ops.pop(),
                        r.trys.pop();
                        continue;
                    default:
                        if (i = r.trys,
                        !(i = i.length > 0 && i[i.length - 1]) && (s[0] === 6 || s[0] === 2)) {
                            r = 0;
                            continue
                        }
                        if (s[0] === 3 && (!i || s[1] > i[0] && s[1] < i[3])) {
                            r.label = s[1];
                            break
                        }
                        if (s[0] === 6 && r.label < i[1]) {
                            r.label = i[1],
                            i = s;
                            break
                        }
                        if (i && r.label < i[2]) {
                            r.label = i[2],
                            r.ops.push(s);
                            break
                        }
                        i[2] && r.ops.pop(),
                        r.trys.pop();
                        continue
                    }
                    s = t.call(e, r)
                } catch (p) {
                    s = [6, p],
                    o = 0
                } finally {
                    n = i = 0
                }
            if (s[0] & 5)
                throw s[1];
            return {
                value: s[0] ? s[1] : void 0,
                done: !0
            }
        }
    }
    function fe(e) {
        var t = typeof Symbol == "function" && Symbol.iterator
          , r = t && e[t]
          , n = 0;
        if (r)
            return r.call(e);
        if (e && typeof e.length == "number")
            return {
                next: function() {
                    return e && n >= e.length && (e = void 0),
                    {
                        value: e && e[n++],
                        done: !e
                    }
                }
            };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }
    function Y(e, t) {
        var r = typeof Symbol == "function" && e[Symbol.iterator];
        if (!r)
            return e;
        var n = r.call(e), o, i = [], a;
        try {
            for (; (t === void 0 || t-- > 0) && !(o = n.next()).done; )
                i.push(o.value)
        } catch (l) {
            a = {
                error: l
            }
        } finally {
            try {
                o && !o.done && (r = n.return) && r.call(n)
            } finally {
                if (a)
                    throw a.error
            }
        }
        return i
    }
    function J(e, t, r) {
        if (r || arguments.length === 2)
            for (var n = 0, o = t.length, i; n < o; n++)
                (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)),
                i[n] = t[n]);
        return e.concat(i || Array.prototype.slice.call(t))
    }
    function We(e) {
        return this instanceof We ? (this.v = e,
        this) : new We(e)
    }
    function Cr(e, t, r) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var n = r.apply(e, t || []), o, i = [];
        return o = {},
        a("next"),
        a("throw"),
        a("return"),
        o[Symbol.asyncIterator] = function() {
            return this
        }
        ,
        o;
        function a(u) {
            n[u] && (o[u] = function(d) {
                return new Promise(function(m, h) {
                    i.push([u, d, m, h]) > 1 || l(u, d)
                }
                )
            }
            )
        }
        function l(u, d) {
            try {
                c(n[u](d))
            } catch (m) {
                f(i[0][3], m)
            }
        }
        function c(u) {
            u.value instanceof We ? Promise.resolve(u.value.v).then(s, p) : f(i[0][2], u)
        }
        function s(u) {
            l("next", u)
        }
        function p(u) {
            l("throw", u)
        }
        function f(u, d) {
            u(d),
            i.shift(),
            i.length && l(i[0][0], i[0][1])
        }
    }
    function Ar(e) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var t = e[Symbol.asyncIterator], r;
        return t ? t.call(e) : (e = typeof fe == "function" ? fe(e) : e[Symbol.iterator](),
        r = {},
        n("next"),
        n("throw"),
        n("return"),
        r[Symbol.asyncIterator] = function() {
            return this
        }
        ,
        r);
        function n(i) {
            r[i] = e[i] && function(a) {
                return new Promise(function(l, c) {
                    a = e[i](a),
                    o(l, c, a.done, a.value)
                }
                )
            }
        }
        function o(i, a, l, c) {
            Promise.resolve(c).then(function(s) {
                i({
                    value: s,
                    done: l
                })
            }, a)
        }
    }
    function H(e) {
        return typeof e == "function"
    }
    function St(e) {
        var t = function(n) {
            Error.call(n),
            n.stack = new Error().stack
        }
          , r = e(t);
        return r.prototype = Object.create(Error.prototype),
        r.prototype.constructor = r,
        r
    }
    var wt = St(function(e) {
        return function(r) {
            e(this),
            this.message = r ? r.length + ` errors occurred during unsubscription:
` + r.map(function(n, o) {
                return o + 1 + ") " + n.toString()
            }).join(`
  `) : "",
            this.name = "UnsubscriptionError",
            this.errors = r
        }
    });
    function _e(e, t) {
        if (e) {
            var r = e.indexOf(t);
            0 <= r && e.splice(r, 1)
        }
    }
    var Se = function() {
        function e(t) {
            this.initialTeardown = t,
            this.closed = !1,
            this._parentage = null,
            this._finalizers = null
        }
        return e.prototype.unsubscribe = function() {
            var t, r, n, o, i;
            if (!this.closed) {
                this.closed = !0;
                var a = this._parentage;
                if (a)
                    if (this._parentage = null,
                    Array.isArray(a))
                        try {
                            for (var l = fe(a), c = l.next(); !c.done; c = l.next()) {
                                var s = c.value;
                                s.remove(this)
                            }
                        } catch (h) {
                            t = {
                                error: h
                            }
                        } finally {
                            try {
                                c && !c.done && (r = l.return) && r.call(l)
                            } finally {
                                if (t)
                                    throw t.error
                            }
                        }
                    else
                        a.remove(this);
                var p = this.initialTeardown;
                if (H(p))
                    try {
                        p()
                    } catch (h) {
                        i = h instanceof wt ? h.errors : [h]
                    }
                var f = this._finalizers;
                if (f) {
                    this._finalizers = null;
                    try {
                        for (var u = fe(f), d = u.next(); !d.done; d = u.next()) {
                            var m = d.value;
                            try {
                                Hr(m)
                            } catch (h) {
                                i = i != null ? i : [],
                                h instanceof wt ? i = J(J([], Y(i)), Y(h.errors)) : i.push(h)
                            }
                        }
                    } catch (h) {
                        n = {
                            error: h
                        }
                    } finally {
                        try {
                            d && !d.done && (o = u.return) && o.call(u)
                        } finally {
                            if (n)
                                throw n.error
                        }
                    }
                }
                if (i)
                    throw new wt(i)
            }
        }
        ,
        e.prototype.add = function(t) {
            var r;
            if (t && t !== this)
                if (this.closed)
                    Hr(t);
                else {
                    if (t instanceof e) {
                        if (t.closed || t._hasParent(this))
                            return;
                        t._addParent(this)
                    }
                    (this._finalizers = (r = this._finalizers) !== null && r !== void 0 ? r : []).push(t)
                }
        }
        ,
        e.prototype._hasParent = function(t) {
            var r = this._parentage;
            return r === t || Array.isArray(r) && r.includes(t)
        }
        ,
        e.prototype._addParent = function(t) {
            var r = this._parentage;
            this._parentage = Array.isArray(r) ? (r.push(t),
            r) : r ? [r, t] : t
        }
        ,
        e.prototype._removeParent = function(t) {
            var r = this._parentage;
            r === t ? this._parentage = null : Array.isArray(r) && _e(r, t)
        }
        ,
        e.prototype.remove = function(t) {
            var r = this._finalizers;
            r && _e(r, t),
            t instanceof e && t._removeParent(this)
        }
        ,
        e.EMPTY = function() {
            var t = new e;
            return t.closed = !0,
            t
        }(),
        e
    }();
    var Zt = Se.EMPTY;
    function Tt(e) {
        return e instanceof Se || e && "closed"in e && H(e.remove) && H(e.add) && H(e.unsubscribe)
    }
    function Hr(e) {
        H(e) ? e() : e.unsubscribe()
    }
    var ye = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1
    };
    var Be = {
        setTimeout: function(e, t) {
            for (var r = [], n = 2; n < arguments.length; n++)
                r[n - 2] = arguments[n];
            var o = Be.delegate;
            return o != null && o.setTimeout ? o.setTimeout.apply(o, J([e, t], Y(r))) : setTimeout.apply(void 0, J([e, t], Y(r)))
        },
        clearTimeout: function(e) {
            var t = Be.delegate;
            return ((t == null ? void 0 : t.clearTimeout) || clearTimeout)(e)
        },
        delegate: void 0
    };
    function Ot(e) {
        Be.setTimeout(function() {
            var t = ye.onUnhandledError;
            if (t)
                t(e);
            else
                throw e
        })
    }
    function Le() {}
    var $r = function() {
        return er("C", void 0, void 0)
    }();
    function kr(e) {
        return er("E", void 0, e)
    }
    function Ir(e) {
        return er("N", e, void 0)
    }
    function er(e, t, r) {
        return {
            kind: e,
            value: t,
            error: r
        }
    }
    var Ue = null;
    function Ge(e) {
        if (ye.useDeprecatedSynchronousErrorHandling) {
            var t = !Ue;
            if (t && (Ue = {
                errorThrown: !1,
                error: null
            }),
            e(),
            t) {
                var r = Ue
                  , n = r.errorThrown
                  , o = r.error;
                if (Ue = null,
                n)
                    throw o
            }
        } else
            e()
    }
    function Pr(e) {
        ye.useDeprecatedSynchronousErrorHandling && Ue && (Ue.errorThrown = !0,
        Ue.error = e)
    }
    var ot = function(e) {
        ee(t, e);
        function t(r) {
            var n = e.call(this) || this;
            return n.isStopped = !1,
            r ? (n.destination = r,
            Tt(r) && r.add(n)) : n.destination = Kn,
            n
        }
        return t.create = function(r, n, o) {
            return new je(r,n,o)
        }
        ,
        t.prototype.next = function(r) {
            this.isStopped ? rr(Ir(r), this) : this._next(r)
        }
        ,
        t.prototype.error = function(r) {
            this.isStopped ? rr(kr(r), this) : (this.isStopped = !0,
            this._error(r))
        }
        ,
        t.prototype.complete = function() {
            this.isStopped ? rr($r, this) : (this.isStopped = !0,
            this._complete())
        }
        ,
        t.prototype.unsubscribe = function() {
            this.closed || (this.isStopped = !0,
            e.prototype.unsubscribe.call(this),
            this.destination = null)
        }
        ,
        t.prototype._next = function(r) {
            this.destination.next(r)
        }
        ,
        t.prototype._error = function(r) {
            try {
                this.destination.error(r)
            } finally {
                this.unsubscribe()
            }
        }
        ,
        t.prototype._complete = function() {
            try {
                this.destination.complete()
            } finally {
                this.unsubscribe()
            }
        }
        ,
        t
    }(Se);
    var Nn = Function.prototype.bind;
    function tr(e, t) {
        return Nn.call(e, t)
    }
    var Qn = function() {
        function e(t) {
            this.partialObserver = t
        }
        return e.prototype.next = function(t) {
            var r = this.partialObserver;
            if (r.next)
                try {
                    r.next(t)
                } catch (n) {
                    Mt(n)
                }
        }
        ,
        e.prototype.error = function(t) {
            var r = this.partialObserver;
            if (r.error)
                try {
                    r.error(t)
                } catch (n) {
                    Mt(n)
                }
            else
                Mt(t)
        }
        ,
        e.prototype.complete = function() {
            var t = this.partialObserver;
            if (t.complete)
                try {
                    t.complete()
                } catch (r) {
                    Mt(r)
                }
        }
        ,
        e
    }()
      , je = function(e) {
        ee(t, e);
        function t(r, n, o) {
            var i = e.call(this) || this, a;
            if (H(r) || !r)
                a = {
                    next: r != null ? r : void 0,
                    error: n != null ? n : void 0,
                    complete: o != null ? o : void 0
                };
            else {
                var l;
                i && ye.useDeprecatedNextContext ? (l = Object.create(r),
                l.unsubscribe = function() {
                    return i.unsubscribe()
                }
                ,
                a = {
                    next: r.next && tr(r.next, l),
                    error: r.error && tr(r.error, l),
                    complete: r.complete && tr(r.complete, l)
                }) : a = r
            }
            return i.destination = new Qn(a),
            i
        }
        return t
    }(ot);
    function Mt(e) {
        ye.useDeprecatedSynchronousErrorHandling ? Pr(e) : Ot(e)
    }
    function qn(e) {
        throw e
    }
    function rr(e, t) {
        var r = ye.onStoppedNotification;
        r && Be.setTimeout(function() {
            return r(e, t)
        })
    }
    var Kn = {
        closed: !0,
        next: Le,
        error: qn,
        complete: Le
    };
    var Je = function() {
        return typeof Symbol == "function" && Symbol.observable || "@@observable"
    }();
    function oe(e) {
        return e
    }
    function Rr(e) {
        return e.length === 0 ? oe : e.length === 1 ? e[0] : function(r) {
            return e.reduce(function(n, o) {
                return o(n)
            }, r)
        }
    }
    var z = function() {
        function e(t) {
            t && (this._subscribe = t)
        }
        return e.prototype.lift = function(t) {
            var r = new e;
            return r.source = this,
            r.operator = t,
            r
        }
        ,
        e.prototype.subscribe = function(t, r, n) {
            var o = this
              , i = Bn(t) ? t : new je(t,r,n);
            return Ge(function() {
                var a = o
                  , l = a.operator
                  , c = a.source;
                i.add(l ? l.call(i, c) : c ? o._subscribe(i) : o._trySubscribe(i))
            }),
            i
        }
        ,
        e.prototype._trySubscribe = function(t) {
            try {
                return this._subscribe(t)
            } catch (r) {
                t.error(r)
            }
        }
        ,
        e.prototype.forEach = function(t, r) {
            var n = this;
            return r = Fr(r),
            new r(function(o, i) {
                var a = new je({
                    next: function(l) {
                        try {
                            t(l)
                        } catch (c) {
                            i(c),
                            a.unsubscribe()
                        }
                    },
                    error: i,
                    complete: o
                });
                n.subscribe(a)
            }
            )
        }
        ,
        e.prototype._subscribe = function(t) {
            var r;
            return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(t)
        }
        ,
        e.prototype[Je] = function() {
            return this
        }
        ,
        e.prototype.pipe = function() {
            for (var t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
            return Rr(t)(this)
        }
        ,
        e.prototype.toPromise = function(t) {
            var r = this;
            return t = Fr(t),
            new t(function(n, o) {
                var i;
                r.subscribe(function(a) {
                    return i = a
                }, function(a) {
                    return o(a)
                }, function() {
                    return n(i)
                })
            }
            )
        }
        ,
        e.create = function(t) {
            return new e(t)
        }
        ,
        e
    }();
    function Fr(e) {
        var t;
        return (t = e != null ? e : ye.Promise) !== null && t !== void 0 ? t : Promise
    }
    function Yn(e) {
        return e && H(e.next) && H(e.error) && H(e.complete)
    }
    function Bn(e) {
        return e && e instanceof ot || Yn(e) && Tt(e)
    }
    function Gn(e) {
        return H(e == null ? void 0 : e.lift)
    }
    function k(e) {
        return function(t) {
            if (Gn(t))
                return t.lift(function(r) {
                    try {
                        return e(r, this)
                    } catch (n) {
                        this.error(n)
                    }
                });
            throw new TypeError("Unable to lift unknown Observable type")
        }
    }
    function I(e, t, r, n, o) {
        return new Jn(e,t,r,n,o)
    }
    var Jn = function(e) {
        ee(t, e);
        function t(r, n, o, i, a, l) {
            var c = e.call(this, r) || this;
            return c.onFinalize = a,
            c.shouldUnsubscribe = l,
            c._next = n ? function(s) {
                try {
                    n(s)
                } catch (p) {
                    r.error(p)
                }
            }
            : e.prototype._next,
            c._error = i ? function(s) {
                try {
                    i(s)
                } catch (p) {
                    r.error(p)
                } finally {
                    this.unsubscribe()
                }
            }
            : e.prototype._error,
            c._complete = o ? function() {
                try {
                    o()
                } catch (s) {
                    r.error(s)
                } finally {
                    this.unsubscribe()
                }
            }
            : e.prototype._complete,
            c
        }
        return t.prototype.unsubscribe = function() {
            var r;
            if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
                var n = this.closed;
                e.prototype.unsubscribe.call(this),
                !n && ((r = this.onFinalize) === null || r === void 0 || r.call(this))
            }
        }
        ,
        t
    }(ot);
    var Xe = {
        schedule: function(e) {
            var t = requestAnimationFrame
              , r = cancelAnimationFrame
              , n = Xe.delegate;
            n && (t = n.requestAnimationFrame,
            r = n.cancelAnimationFrame);
            var o = t(function(i) {
                r = void 0,
                e(i)
            });
            return new Se(function() {
                return r == null ? void 0 : r(o)
            }
            )
        },
        requestAnimationFrame: function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            var r = Xe.delegate;
            return ((r == null ? void 0 : r.requestAnimationFrame) || requestAnimationFrame).apply(void 0, J([], Y(e)))
        },
        cancelAnimationFrame: function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            var r = Xe.delegate;
            return ((r == null ? void 0 : r.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, J([], Y(e)))
        },
        delegate: void 0
    };
    var Wr = St(function(e) {
        return function() {
            e(this),
            this.name = "ObjectUnsubscribedError",
            this.message = "object unsubscribed"
        }
    });
    var ne = function(e) {
        ee(t, e);
        function t() {
            var r = e.call(this) || this;
            return r.closed = !1,
            r.currentObservers = null,
            r.observers = [],
            r.isStopped = !1,
            r.hasError = !1,
            r.thrownError = null,
            r
        }
        return t.prototype.lift = function(r) {
            var n = new Ur(this,this);
            return n.operator = r,
            n
        }
        ,
        t.prototype._throwIfClosed = function() {
            if (this.closed)
                throw new Wr
        }
        ,
        t.prototype.next = function(r) {
            var n = this;
            Ge(function() {
                var o, i;
                if (n._throwIfClosed(),
                !n.isStopped) {
                    n.currentObservers || (n.currentObservers = Array.from(n.observers));
                    try {
                        for (var a = fe(n.currentObservers), l = a.next(); !l.done; l = a.next()) {
                            var c = l.value;
                            c.next(r)
                        }
                    } catch (s) {
                        o = {
                            error: s
                        }
                    } finally {
                        try {
                            l && !l.done && (i = a.return) && i.call(a)
                        } finally {
                            if (o)
                                throw o.error
                        }
                    }
                }
            })
        }
        ,
        t.prototype.error = function(r) {
            var n = this;
            Ge(function() {
                if (n._throwIfClosed(),
                !n.isStopped) {
                    n.hasError = n.isStopped = !0,
                    n.thrownError = r;
                    for (var o = n.observers; o.length; )
                        o.shift().error(r)
                }
            })
        }
        ,
        t.prototype.complete = function() {
            var r = this;
            Ge(function() {
                if (r._throwIfClosed(),
                !r.isStopped) {
                    r.isStopped = !0;
                    for (var n = r.observers; n.length; )
                        n.shift().complete()
                }
            })
        }
        ,
        t.prototype.unsubscribe = function() {
            this.isStopped = this.closed = !0,
            this.observers = this.currentObservers = null
        }
        ,
        Object.defineProperty(t.prototype, "observed", {
            get: function() {
                var r;
                return ((r = this.observers) === null || r === void 0 ? void 0 : r.length) > 0
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype._trySubscribe = function(r) {
            return this._throwIfClosed(),
            e.prototype._trySubscribe.call(this, r)
        }
        ,
        t.prototype._subscribe = function(r) {
            return this._throwIfClosed(),
            this._checkFinalizedStatuses(r),
            this._innerSubscribe(r)
        }
        ,
        t.prototype._innerSubscribe = function(r) {
            var n = this
              , o = this
              , i = o.hasError
              , a = o.isStopped
              , l = o.observers;
            return i || a ? Zt : (this.currentObservers = null,
            l.push(r),
            new Se(function() {
                n.currentObservers = null,
                _e(l, r)
            }
            ))
        }
        ,
        t.prototype._checkFinalizedStatuses = function(r) {
            var n = this
              , o = n.hasError
              , i = n.thrownError
              , a = n.isStopped;
            o ? r.error(i) : a && r.complete()
        }
        ,
        t.prototype.asObservable = function() {
            var r = new z;
            return r.source = this,
            r
        }
        ,
        t.create = function(r, n) {
            return new Ur(r,n)
        }
        ,
        t
    }(z);
    var Ur = function(e) {
        ee(t, e);
        function t(r, n) {
            var o = e.call(this) || this;
            return o.destination = r,
            o.source = n,
            o
        }
        return t.prototype.next = function(r) {
            var n, o;
            (o = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || o === void 0 || o.call(n, r)
        }
        ,
        t.prototype.error = function(r) {
            var n, o;
            (o = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || o === void 0 || o.call(n, r)
        }
        ,
        t.prototype.complete = function() {
            var r, n;
            (n = (r = this.destination) === null || r === void 0 ? void 0 : r.complete) === null || n === void 0 || n.call(r)
        }
        ,
        t.prototype._subscribe = function(r) {
            var n, o;
            return (o = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(r)) !== null && o !== void 0 ? o : Zt
        }
        ,
        t
    }(ne);
    var it = {
        now: function() {
            return (it.delegate || Date).now()
        },
        delegate: void 0
    };
    var jr = function(e) {
        ee(t, e);
        function t(r, n, o) {
            r === void 0 && (r = 1 / 0),
            n === void 0 && (n = 1 / 0),
            o === void 0 && (o = it);
            var i = e.call(this) || this;
            return i._bufferSize = r,
            i._windowTime = n,
            i._timestampProvider = o,
            i._buffer = [],
            i._infiniteTimeWindow = !0,
            i._infiniteTimeWindow = n === 1 / 0,
            i._bufferSize = Math.max(1, r),
            i._windowTime = Math.max(1, n),
            i
        }
        return t.prototype.next = function(r) {
            var n = this
              , o = n.isStopped
              , i = n._buffer
              , a = n._infiniteTimeWindow
              , l = n._timestampProvider
              , c = n._windowTime;
            o || (i.push(r),
            !a && i.push(l.now() + c)),
            this._trimBuffer(),
            e.prototype.next.call(this, r)
        }
        ,
        t.prototype._subscribe = function(r) {
            this._throwIfClosed(),
            this._trimBuffer();
            for (var n = this._innerSubscribe(r), o = this, i = o._infiniteTimeWindow, a = o._buffer, l = a.slice(), c = 0; c < l.length && !r.closed; c += i ? 1 : 2)
                r.next(l[c]);
            return this._checkFinalizedStatuses(r),
            n
        }
        ,
        t.prototype._trimBuffer = function() {
            var r = this
              , n = r._bufferSize
              , o = r._timestampProvider
              , i = r._buffer
              , a = r._infiniteTimeWindow
              , l = (a ? 1 : 2) * n;
            if (n < 1 / 0 && l < i.length && i.splice(0, i.length - l),
            !a) {
                for (var c = o.now(), s = 0, p = 1; p < i.length && i[p] <= c; p += 2)
                    s = p;
                s && i.splice(0, s + 1)
            }
        }
        ,
        t
    }(ne);
    var zr = function(e) {
        ee(t, e);
        function t(r, n) {
            return e.call(this) || this
        }
        return t.prototype.schedule = function(r, n) {
            return n === void 0 && (n = 0),
            this
        }
        ,
        t
    }(Se);
    var at = {
        setInterval: function(e, t) {
            for (var r = [], n = 2; n < arguments.length; n++)
                r[n - 2] = arguments[n];
            var o = at.delegate;
            return o != null && o.setInterval ? o.setInterval.apply(o, J([e, t], Y(r))) : setInterval.apply(void 0, J([e, t], Y(r)))
        },
        clearInterval: function(e) {
            var t = at.delegate;
            return ((t == null ? void 0 : t.clearInterval) || clearInterval)(e)
        },
        delegate: void 0
    };
    var _t = function(e) {
        ee(t, e);
        function t(r, n) {
            var o = e.call(this, r, n) || this;
            return o.scheduler = r,
            o.work = n,
            o.pending = !1,
            o
        }
        return t.prototype.schedule = function(r, n) {
            var o;
            if (n === void 0 && (n = 0),
            this.closed)
                return this;
            this.state = r;
            var i = this.id
              , a = this.scheduler;
            return i != null && (this.id = this.recycleAsyncId(a, i, n)),
            this.pending = !0,
            this.delay = n,
            this.id = (o = this.id) !== null && o !== void 0 ? o : this.requestAsyncId(a, this.id, n),
            this
        }
        ,
        t.prototype.requestAsyncId = function(r, n, o) {
            return o === void 0 && (o = 0),
            at.setInterval(r.flush.bind(r, this), o)
        }
        ,
        t.prototype.recycleAsyncId = function(r, n, o) {
            if (o === void 0 && (o = 0),
            o != null && this.delay === o && this.pending === !1)
                return n;
            n != null && at.clearInterval(n)
        }
        ,
        t.prototype.execute = function(r, n) {
            if (this.closed)
                return new Error("executing a cancelled action");
            this.pending = !1;
            var o = this._execute(r, n);
            if (o)
                return o;
            this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
        }
        ,
        t.prototype._execute = function(r, n) {
            var o = !1, i;
            try {
                this.work(r)
            } catch (a) {
                o = !0,
                i = a || new Error("Scheduled action threw falsy error")
            }
            if (o)
                return this.unsubscribe(),
                i
        }
        ,
        t.prototype.unsubscribe = function() {
            if (!this.closed) {
                var r = this
                  , n = r.id
                  , o = r.scheduler
                  , i = o.actions;
                this.work = this.state = this.scheduler = null,
                this.pending = !1,
                _e(i, this),
                n != null && (this.id = this.recycleAsyncId(o, n, null)),
                this.delay = null,
                e.prototype.unsubscribe.call(this)
            }
        }
        ,
        t
    }(zr);
    var nr = function() {
        function e(t, r) {
            r === void 0 && (r = e.now),
            this.schedulerActionCtor = t,
            this.now = r
        }
        return e.prototype.schedule = function(t, r, n) {
            return r === void 0 && (r = 0),
            new this.schedulerActionCtor(this,t).schedule(n, r)
        }
        ,
        e.now = it.now,
        e
    }();
    var Lt = function(e) {
        ee(t, e);
        function t(r, n) {
            n === void 0 && (n = nr.now);
            var o = e.call(this, r, n) || this;
            return o.actions = [],
            o._active = !1,
            o
        }
        return t.prototype.flush = function(r) {
            var n = this.actions;
            if (this._active) {
                n.push(r);
                return
            }
            var o;
            this._active = !0;
            do
                if (o = r.execute(r.state, r.delay))
                    break;
            while (r = n.shift());
            if (this._active = !1,
            o) {
                for (; r = n.shift(); )
                    r.unsubscribe();
                throw o
            }
        }
        ,
        t
    }(nr);
    var me = new Lt(_t)
      , or = me;
    var Vr = function(e) {
        ee(t, e);
        function t(r, n) {
            var o = e.call(this, r, n) || this;
            return o.scheduler = r,
            o.work = n,
            o
        }
        return t.prototype.requestAsyncId = function(r, n, o) {
            return o === void 0 && (o = 0),
            o !== null && o > 0 ? e.prototype.requestAsyncId.call(this, r, n, o) : (r.actions.push(this),
            r._scheduled || (r._scheduled = Xe.requestAnimationFrame(function() {
                return r.flush(void 0)
            })))
        }
        ,
        t.prototype.recycleAsyncId = function(r, n, o) {
            var i;
            if (o === void 0 && (o = 0),
            o != null ? o > 0 : this.delay > 0)
                return e.prototype.recycleAsyncId.call(this, r, n, o);
            var a = r.actions;
            n != null && ((i = a[a.length - 1]) === null || i === void 0 ? void 0 : i.id) !== n && (Xe.cancelAnimationFrame(n),
            r._scheduled = void 0)
        }
        ,
        t
    }(_t);
    var Dr = function(e) {
        ee(t, e);
        function t() {
            return e !== null && e.apply(this, arguments) || this
        }
        return t.prototype.flush = function(r) {
            this._active = !0;
            var n = this._scheduled;
            this._scheduled = void 0;
            var o = this.actions, i;
            r = r || o.shift();
            do
                if (i = r.execute(r.state, r.delay))
                    break;
            while ((r = o[0]) && r.id === n && o.shift());
            if (this._active = !1,
            i) {
                for (; (r = o[0]) && r.id === n && o.shift(); )
                    r.unsubscribe();
                throw i
            }
        }
        ,
        t
    }(Lt);
    var Ie = new Dr(Vr);
    var ve = new z(function(e) {
        return e.complete()
    }
    );
    function Ct(e) {
        return e && H(e.schedule)
    }
    function ir(e) {
        return e[e.length - 1]
    }
    function Ze(e) {
        return H(ir(e)) ? e.pop() : void 0
    }
    function we(e) {
        return Ct(ir(e)) ? e.pop() : void 0
    }
    function Nr(e, t) {
        return typeof ir(e) == "number" ? e.pop() : t
    }
    var et = function(e) {
        return e && typeof e.length == "number" && typeof e != "function"
    };
    function At(e) {
        return H(e == null ? void 0 : e.then)
    }
    function Ht(e) {
        return H(e[Je])
    }
    function $t(e) {
        return Symbol.asyncIterator && H(e == null ? void 0 : e[Symbol.asyncIterator])
    }
    function kt(e) {
        return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")
    }
    function Xn() {
        return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator
    }
    var It = Xn();
    function Pt(e) {
        return H(e == null ? void 0 : e[It])
    }
    function Rt(e) {
        return Cr(this, arguments, function() {
            var r, n, o, i;
            return Et(this, function(a) {
                switch (a.label) {
                case 0:
                    r = e.getReader(),
                    a.label = 1;
                case 1:
                    a.trys.push([1, , 9, 10]),
                    a.label = 2;
                case 2:
                    return [4, We(r.read())];
                case 3:
                    return n = a.sent(),
                    o = n.value,
                    i = n.done,
                    i ? [4, We(void 0)] : [3, 5];
                case 4:
                    return [2, a.sent()];
                case 5:
                    return [4, We(o)];
                case 6:
                    return [4, a.sent()];
                case 7:
                    return a.sent(),
                    [3, 2];
                case 8:
                    return [3, 10];
                case 9:
                    return r.releaseLock(),
                    [7];
                case 10:
                    return [2]
                }
            })
        })
    }
    function Ft(e) {
        return H(e == null ? void 0 : e.getReader)
    }
    function U(e) {
        if (e instanceof z)
            return e;
        if (e != null) {
            if (Ht(e))
                return Zn(e);
            if (et(e))
                return eo(e);
            if (At(e))
                return to(e);
            if ($t(e))
                return Qr(e);
            if (Pt(e))
                return ro(e);
            if (Ft(e))
                return no(e)
        }
        throw kt(e)
    }
    function Zn(e) {
        return new z(function(t) {
            var r = e[Je]();
            if (H(r.subscribe))
                return r.subscribe(t);
            throw new TypeError("Provided object does not correctly implement Symbol.observable")
        }
        )
    }
    function eo(e) {
        return new z(function(t) {
            for (var r = 0; r < e.length && !t.closed; r++)
                t.next(e[r]);
            t.complete()
        }
        )
    }
    function to(e) {
        return new z(function(t) {
            e.then(function(r) {
                t.closed || (t.next(r),
                t.complete())
            }, function(r) {
                return t.error(r)
            }).then(null, Ot)
        }
        )
    }
    function ro(e) {
        return new z(function(t) {
            var r, n;
            try {
                for (var o = fe(e), i = o.next(); !i.done; i = o.next()) {
                    var a = i.value;
                    if (t.next(a),
                    t.closed)
                        return
                }
            } catch (l) {
                r = {
                    error: l
                }
            } finally {
                try {
                    i && !i.done && (n = o.return) && n.call(o)
                } finally {
                    if (r)
                        throw r.error
                }
            }
            t.complete()
        }
        )
    }
    function Qr(e) {
        return new z(function(t) {
            oo(e, t).catch(function(r) {
                return t.error(r)
            })
        }
        )
    }
    function no(e) {
        return Qr(Rt(e))
    }
    function oo(e, t) {
        var r, n, o, i;
        return Lr(this, void 0, void 0, function() {
            var a, l;
            return Et(this, function(c) {
                switch (c.label) {
                case 0:
                    c.trys.push([0, 5, 6, 11]),
                    r = Ar(e),
                    c.label = 1;
                case 1:
                    return [4, r.next()];
                case 2:
                    if (n = c.sent(),
                    !!n.done)
                        return [3, 4];
                    if (a = n.value,
                    t.next(a),
                    t.closed)
                        return [2];
                    c.label = 3;
                case 3:
                    return [3, 1];
                case 4:
                    return [3, 11];
                case 5:
                    return l = c.sent(),
                    o = {
                        error: l
                    },
                    [3, 11];
                case 6:
                    return c.trys.push([6, , 9, 10]),
                    n && !n.done && (i = r.return) ? [4, i.call(r)] : [3, 8];
                case 7:
                    c.sent(),
                    c.label = 8;
                case 8:
                    return [3, 10];
                case 9:
                    if (o)
                        throw o.error;
                    return [7];
                case 10:
                    return [7];
                case 11:
                    return t.complete(),
                    [2]
                }
            })
        })
    }
    function ce(e, t, r, n, o) {
        n === void 0 && (n = 0),
        o === void 0 && (o = !1);
        var i = t.schedule(function() {
            r(),
            o ? e.add(this.schedule(null, n)) : this.unsubscribe()
        }, n);
        if (e.add(i),
        !o)
            return i
    }
    function st(e, t) {
        return t === void 0 && (t = 0),
        k(function(r, n) {
            r.subscribe(I(n, function(o) {
                return ce(n, e, function() {
                    return n.next(o)
                }, t)
            }, function() {
                return ce(n, e, function() {
                    return n.complete()
                }, t)
            }, function(o) {
                return ce(n, e, function() {
                    return n.error(o)
                }, t)
            }))
        })
    }
    function ze(e, t) {
        return t === void 0 && (t = 0),
        k(function(r, n) {
            n.add(e.schedule(function() {
                return r.subscribe(n)
            }, t))
        })
    }
    function qr(e, t) {
        return U(e).pipe(ze(t), st(t))
    }
    function Kr(e, t) {
        return U(e).pipe(ze(t), st(t))
    }
    function Yr(e, t) {
        return new z(function(r) {
            var n = 0;
            return t.schedule(function() {
                n === e.length ? r.complete() : (r.next(e[n++]),
                r.closed || this.schedule())
            })
        }
        )
    }
    function Br(e, t) {
        return new z(function(r) {
            var n;
            return ce(r, t, function() {
                n = e[It](),
                ce(r, t, function() {
                    var o, i, a;
                    try {
                        o = n.next(),
                        i = o.value,
                        a = o.done
                    } catch (l) {
                        r.error(l);
                        return
                    }
                    a ? r.complete() : r.next(i)
                }, 0, !0)
            }),
            function() {
                return H(n == null ? void 0 : n.return) && n.return()
            }
        }
        )
    }
    function Wt(e, t) {
        if (!e)
            throw new Error("Iterable cannot be null");
        return new z(function(r) {
            ce(r, t, function() {
                var n = e[Symbol.asyncIterator]();
                ce(r, t, function() {
                    n.next().then(function(o) {
                        o.done ? r.complete() : r.next(o.value)
                    })
                }, 0, !0)
            })
        }
        )
    }
    function Gr(e, t) {
        return Wt(Rt(e), t)
    }
    function Jr(e, t) {
        if (e != null) {
            if (Ht(e))
                return qr(e, t);
            if (et(e))
                return Yr(e, t);
            if (At(e))
                return Kr(e, t);
            if ($t(e))
                return Wt(e, t);
            if (Pt(e))
                return Br(e, t);
            if (Ft(e))
                return Gr(e, t)
        }
        throw kt(e)
    }
    function de(e, t) {
        return t ? Jr(e, t) : U(e)
    }
    function pe() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var r = we(e);
        return de(e, r)
    }
    function ct(e, t) {
        var r = H(e) ? e : function() {
            return e
        }
          , n = function(o) {
            return o.error(r())
        };
        return new z(t ? function(o) {
            return t.schedule(n, 0, o)
        }
        : n)
    }
    function Xr(e) {
        return e instanceof Date && !isNaN(e)
    }
    function L(e, t) {
        return k(function(r, n) {
            var o = 0;
            r.subscribe(I(n, function(i) {
                n.next(e.call(t, i, o++))
            }))
        })
    }
    var io = Array.isArray;
    function ao(e, t) {
        return io(t) ? e.apply(void 0, J([], Y(t))) : e(t)
    }
    function Ut(e) {
        return L(function(t) {
            return ao(e, t)
        })
    }
    var so = Array.isArray
      , co = Object.getPrototypeOf
      , po = Object.prototype
      , lo = Object.keys;
    function Zr(e) {
        if (e.length === 1) {
            var t = e[0];
            if (so(t))
                return {
                    args: t,
                    keys: null
                };
            if (uo(t)) {
                var r = lo(t);
                return {
                    args: r.map(function(n) {
                        return t[n]
                    }),
                    keys: r
                }
            }
        }
        return {
            args: e,
            keys: null
        }
    }
    function uo(e) {
        return e && typeof e == "object" && co(e) === po
    }
    function en(e, t) {
        return e.reduce(function(r, n, o) {
            return r[n] = t[o],
            r
        }, {})
    }
    function Te() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var r = we(e)
          , n = Ze(e)
          , o = Zr(e)
          , i = o.args
          , a = o.keys;
        if (i.length === 0)
            return de([], r);
        var l = new z(fo(i, r, a ? function(c) {
            return en(a, c)
        }
        : oe));
        return n ? l.pipe(Ut(n)) : l
    }
    function fo(e, t, r) {
        return r === void 0 && (r = oe),
        function(n) {
            tn(t, function() {
                for (var o = e.length, i = new Array(o), a = o, l = o, c = function(p) {
                    tn(t, function() {
                        var f = de(e[p], t)
                          , u = !1;
                        f.subscribe(I(n, function(d) {
                            i[p] = d,
                            u || (u = !0,
                            l--),
                            l || n.next(r(i.slice()))
                        }, function() {
                            --a || n.complete()
                        }))
                    }, n)
                }, s = 0; s < o; s++)
                    c(s)
            }, n)
        }
    }
    function tn(e, t, r) {
        e ? ce(r, e, t) : t()
    }
    function rn(e, t, r, n, o, i, a, l) {
        var c = []
          , s = 0
          , p = 0
          , f = !1
          , u = function() {
            f && !c.length && !s && t.complete()
        }
          , d = function(h) {
            return s < n ? m(h) : c.push(h)
        }
          , m = function(h) {
            i && t.next(h),
            s++;
            var v = !1;
            U(r(h, p++)).subscribe(I(t, function(S) {
                o == null || o(S),
                i ? d(S) : t.next(S)
            }, function() {
                v = !0
            }, void 0, function() {
                if (v)
                    try {
                        s--;
                        for (var S = function() {
                            var O = c.shift();
                            a ? ce(t, a, function() {
                                return m(O)
                            }) : m(O)
                        }; c.length && s < n; )
                            S();
                        u()
                    } catch (O) {
                        t.error(O)
                    }
            }))
        };
        return e.subscribe(I(t, d, function() {
            f = !0,
            u()
        })),
        function() {
            l == null || l()
        }
    }
    function Pe(e, t, r) {
        return r === void 0 && (r = 1 / 0),
        H(t) ? Pe(function(n, o) {
            return L(function(i, a) {
                return t(n, i, o, a)
            })(U(e(n, o)))
        }, r) : (typeof t == "number" && (r = t),
        k(function(n, o) {
            return rn(n, o, e, r)
        }))
    }
    function jt(e) {
        return e === void 0 && (e = 1 / 0),
        Pe(oe, e)
    }
    function nn() {
        return jt(1)
    }
    function pt() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return nn()(de(e, we(e)))
    }
    function ge(e) {
        return new z(function(t) {
            U(e()).subscribe(t)
        }
        )
    }
    var mo = ["addListener", "removeListener"]
      , ho = ["addEventListener", "removeEventListener"]
      , bo = ["on", "off"];
    function B(e, t, r, n) {
        if (H(r) && (n = r,
        r = void 0),
        n)
            return B(e, t, r).pipe(Ut(n));
        var o = Y(xo(e) ? ho.map(function(l) {
            return function(c) {
                return e[l](t, c, r)
            }
        }) : vo(e) ? mo.map(on(e, t)) : go(e) ? bo.map(on(e, t)) : [], 2)
          , i = o[0]
          , a = o[1];
        if (!i && et(e))
            return Pe(function(l) {
                return B(l, t, r)
            })(U(e));
        if (!i)
            throw new TypeError("Invalid event target");
        return new z(function(l) {
            var c = function() {
                for (var s = [], p = 0; p < arguments.length; p++)
                    s[p] = arguments[p];
                return l.next(1 < s.length ? s : s[0])
            };
            return i(c),
            function() {
                return a(c)
            }
        }
        )
    }
    function on(e, t) {
        return function(r) {
            return function(n) {
                return e[r](t, n)
            }
        }
    }
    function vo(e) {
        return H(e.addListener) && H(e.removeListener)
    }
    function go(e) {
        return H(e.on) && H(e.off)
    }
    function xo(e) {
        return H(e.addEventListener) && H(e.removeEventListener)
    }
    function tt(e, t, r) {
        e === void 0 && (e = 0),
        r === void 0 && (r = or);
        var n = -1;
        return t != null && (Ct(t) ? r = t : n = t),
        new z(function(o) {
            var i = Xr(e) ? +e - r.now() : e;
            i < 0 && (i = 0);
            var a = 0;
            return r.schedule(function() {
                o.closed || (o.next(a++),
                0 <= n ? this.schedule(void 0, n) : o.complete())
            }, i)
        }
        )
    }
    function V() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var r = we(e)
          , n = Nr(e, 1 / 0)
          , o = e;
        return o.length ? o.length === 1 ? U(o[0]) : jt(n)(de(o, r)) : ve
    }
    var lt = new z(Le);
    var yo = Array.isArray;
    function an(e) {
        return e.length === 1 && yo(e[0]) ? e[0] : e
    }
    function ae(e, t) {
        return k(function(r, n) {
            var o = 0;
            r.subscribe(I(n, function(i) {
                return e.call(t, i, o++) && n.next(i)
            }))
        })
    }
    function sn() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var r = Ze(e)
          , n = an(e);
        return n.length ? new z(function(o) {
            var i = n.map(function() {
                return []
            })
              , a = n.map(function() {
                return !1
            });
            o.add(function() {
                i = a = null
            });
            for (var l = function(s) {
                U(n[s]).subscribe(I(o, function(p) {
                    if (i[s].push(p),
                    i.every(function(u) {
                        return u.length
                    })) {
                        var f = i.map(function(u) {
                            return u.shift()
                        });
                        o.next(r ? r.apply(void 0, J([], Y(f))) : f),
                        i.some(function(u, d) {
                            return !u.length && a[d]
                        }) && o.complete()
                    }
                }, function() {
                    a[s] = !0,
                    !i[s].length && o.complete()
                }))
            }, c = 0; !o.closed && c < n.length; c++)
                l(c);
            return function() {
                i = a = null
            }
        }
        ) : ve
    }
    function cn(e) {
        return k(function(t, r) {
            var n = !1
              , o = null
              , i = null
              , a = !1
              , l = function() {
                if (i == null || i.unsubscribe(),
                i = null,
                n) {
                    n = !1;
                    var s = o;
                    o = null,
                    r.next(s)
                }
                a && r.complete()
            }
              , c = function() {
                i = null,
                a && r.complete()
            };
            t.subscribe(I(r, function(s) {
                n = !0,
                o = s,
                i || U(e(s)).subscribe(i = I(r, l, c))
            }, function() {
                a = !0,
                (!n || !i || i.closed) && r.complete()
            }))
        })
    }
    function Ve(e, t) {
        return t === void 0 && (t = me),
        cn(function() {
            return tt(e, t)
        })
    }
    function ar(e, t) {
        return t === void 0 && (t = null),
        t = t != null ? t : e,
        k(function(r, n) {
            var o = []
              , i = 0;
            r.subscribe(I(n, function(a) {
                var l, c, s, p, f = null;
                i++ % t === 0 && o.push([]);
                try {
                    for (var u = fe(o), d = u.next(); !d.done; d = u.next()) {
                        var m = d.value;
                        m.push(a),
                        e <= m.length && (f = f != null ? f : [],
                        f.push(m))
                    }
                } catch (S) {
                    l = {
                        error: S
                    }
                } finally {
                    try {
                        d && !d.done && (c = u.return) && c.call(u)
                    } finally {
                        if (l)
                            throw l.error
                    }
                }
                if (f)
                    try {
                        for (var h = fe(f), v = h.next(); !v.done; v = h.next()) {
                            var m = v.value;
                            _e(o, m),
                            n.next(m)
                        }
                    } catch (S) {
                        s = {
                            error: S
                        }
                    } finally {
                        try {
                            v && !v.done && (p = h.return) && p.call(h)
                        } finally {
                            if (s)
                                throw s.error
                        }
                    }
            }, function() {
                var a, l;
                try {
                    for (var c = fe(o), s = c.next(); !s.done; s = c.next()) {
                        var p = s.value;
                        n.next(p)
                    }
                } catch (f) {
                    a = {
                        error: f
                    }
                } finally {
                    try {
                        s && !s.done && (l = c.return) && l.call(c)
                    } finally {
                        if (a)
                            throw a.error
                    }
                }
                n.complete()
            }, void 0, function() {
                o = null
            }))
        })
    }
    function zt(e) {
        return k(function(t, r) {
            var n = null, o = !1, i;
            n = t.subscribe(I(r, void 0, void 0, function(a) {
                i = U(e(a, zt(e)(t))),
                n ? (n.unsubscribe(),
                n = null,
                i.subscribe(r)) : o = !0
            })),
            o && (n.unsubscribe(),
            n = null,
            i.subscribe(r))
        })
    }
    function De(e, t) {
        return t === void 0 && (t = me),
        k(function(r, n) {
            var o = null
              , i = null
              , a = null
              , l = function() {
                if (o) {
                    o.unsubscribe(),
                    o = null;
                    var s = i;
                    i = null,
                    n.next(s)
                }
            };
            function c() {
                var s = a + e
                  , p = t.now();
                if (p < s) {
                    o = this.schedule(void 0, s - p),
                    n.add(o);
                    return
                }
                l()
            }
            r.subscribe(I(n, function(s) {
                i = s,
                a = t.now(),
                o || (o = t.schedule(c, e),
                n.add(o))
            }, function() {
                l(),
                n.complete()
            }, void 0, function() {
                i = o = null
            }))
        })
    }
    function Ce(e) {
        return e <= 0 ? function() {
            return ve
        }
        : k(function(t, r) {
            var n = 0;
            t.subscribe(I(r, function(o) {
                ++n <= e && (r.next(o),
                e <= n && r.complete())
            }))
        })
    }
    function pn() {
        return k(function(e, t) {
            e.subscribe(I(t, Le))
        })
    }
    function ln(e) {
        return L(function() {
            return e
        })
    }
    function sr(e, t) {
        return t ? function(r) {
            return pt(t.pipe(Ce(1), pn()), r.pipe(sr(e)))
        }
        : Pe(function(r, n) {
            return U(e(r, n)).pipe(Ce(1), ln(r))
        })
    }
    function cr(e, t) {
        t === void 0 && (t = me);
        var r = tt(e, t);
        return sr(function() {
            return r
        })
    }
    function le(e, t) {
        return t === void 0 && (t = oe),
        e = e != null ? e : Eo,
        k(function(r, n) {
            var o, i = !0;
            r.subscribe(I(n, function(a) {
                var l = t(a);
                (i || !e(o, l)) && (i = !1,
                o = l,
                n.next(a))
            }))
        })
    }
    function Eo(e, t) {
        return e === t
    }
    function ut(e, t) {
        return le(function(r, n) {
            return t ? t(r[e], n[e]) : r[e] === n[e]
        })
    }
    function se(e) {
        return k(function(t, r) {
            try {
                t.subscribe(r)
            } finally {
                r.add(e)
            }
        })
    }
    function lr(e) {
        e === void 0 && (e = {});
        var t = e.connector
          , r = t === void 0 ? function() {
            return new ne
        }
        : t
          , n = e.resetOnError
          , o = n === void 0 ? !0 : n
          , i = e.resetOnComplete
          , a = i === void 0 ? !0 : i
          , l = e.resetOnRefCountZero
          , c = l === void 0 ? !0 : l;
        return function(s) {
            var p, f, u, d = 0, m = !1, h = !1, v = function() {
                f == null || f.unsubscribe(),
                f = void 0
            }, S = function() {
                v(),
                p = u = void 0,
                m = h = !1
            }, O = function() {
                var F = p;
                S(),
                F == null || F.unsubscribe()
            };
            return k(function(F, b) {
                d++,
                !h && !m && v();
                var x = u = u != null ? u : r();
                b.add(function() {
                    d--,
                    d === 0 && !h && !m && (f = pr(O, c))
                }),
                x.subscribe(b),
                !p && d > 0 && (p = new je({
                    next: function(T) {
                        return x.next(T)
                    },
                    error: function(T) {
                        h = !0,
                        v(),
                        f = pr(S, o, T),
                        x.error(T)
                    },
                    complete: function() {
                        m = !0,
                        v(),
                        f = pr(S, a),
                        x.complete()
                    }
                }),
                U(F).subscribe(p))
            })(s)
        }
    }
    function pr(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++)
            r[n - 2] = arguments[n];
        if (t === !0) {
            e();
            return
        }
        if (t !== !1) {
            var o = new je({
                next: function() {
                    o.unsubscribe(),
                    e()
                }
            });
            return U(t.apply(void 0, J([], Y(r)))).subscribe(o)
        }
    }
    function Ee(e, t, r) {
        var n, o, i, a, l = !1;
        return e && typeof e == "object" ? (n = e.bufferSize,
        a = n === void 0 ? 1 / 0 : n,
        o = e.windowTime,
        t = o === void 0 ? 1 / 0 : o,
        i = e.refCount,
        l = i === void 0 ? !1 : i,
        r = e.scheduler) : a = e != null ? e : 1 / 0,
        lr({
            connector: function() {
                return new jr(a,t,r)
            },
            resetOnError: !0,
            resetOnComplete: !1,
            resetOnRefCountZero: l
        })
    }
    function ue() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var r = we(e);
        return k(function(n, o) {
            (r ? pt(e, n, r) : pt(e, n)).subscribe(o)
        })
    }
    function te(e, t) {
        return k(function(r, n) {
            var o = null
              , i = 0
              , a = !1
              , l = function() {
                return a && !o && n.complete()
            };
            r.subscribe(I(n, function(c) {
                o == null || o.unsubscribe();
                var s = 0
                  , p = i++;
                U(e(c, p)).subscribe(o = I(n, function(f) {
                    return n.next(t ? t(c, f, p, s++) : f)
                }, function() {
                    o = null,
                    l()
                }))
            }, function() {
                a = !0,
                l()
            }))
        })
    }
    function xe(e, t, r) {
        var n = H(e) || t || r ? {
            next: e,
            error: t,
            complete: r
        } : e;
        return n ? k(function(o, i) {
            var a;
            (a = n.subscribe) === null || a === void 0 || a.call(n);
            var l = !0;
            o.subscribe(I(i, function(c) {
                var s;
                (s = n.next) === null || s === void 0 || s.call(n, c),
                i.next(c)
            }, function() {
                var c;
                l = !1,
                (c = n.complete) === null || c === void 0 || c.call(n),
                i.complete()
            }, function(c) {
                var s;
                l = !1,
                (s = n.error) === null || s === void 0 || s.call(n, c),
                i.error(c)
            }, function() {
                var c, s;
                l && ((c = n.unsubscribe) === null || c === void 0 || c.call(n)),
                (s = n.finalize) === null || s === void 0 || s.call(n)
            }))
        }) : oe
    }
    function un(e, t) {
        return k(function(r, n) {
            var o = t != null ? t : {}
              , i = o.leading
              , a = i === void 0 ? !0 : i
              , l = o.trailing
              , c = l === void 0 ? !1 : l
              , s = !1
              , p = null
              , f = null
              , u = !1
              , d = function() {
                f == null || f.unsubscribe(),
                f = null,
                c && (v(),
                u && n.complete())
            }
              , m = function() {
                f = null,
                u && n.complete()
            }
              , h = function(S) {
                return f = U(e(S)).subscribe(I(n, d, m))
            }
              , v = function() {
                if (s) {
                    s = !1;
                    var S = p;
                    p = null,
                    n.next(S),
                    !u && h(S)
                }
            };
            r.subscribe(I(n, function(S) {
                s = !0,
                p = S,
                !(f && !f.closed) && (a ? v() : h(S))
            }, function() {
                u = !0,
                !(c && s && f && !f.closed) && n.complete()
            }))
        })
    }
    function ur(e, t, r) {
        t === void 0 && (t = me);
        var n = tt(e, t);
        return un(function() {
            return n
        }, r)
    }
    function Ne() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var r = Ze(e);
        return k(function(n, o) {
            for (var i = e.length, a = new Array(i), l = e.map(function() {
                return !1
            }), c = !1, s = function(f) {
                U(e[f]).subscribe(I(o, function(u) {
                    a[f] = u,
                    !c && !l[f] && (l[f] = !0,
                    (c = l.every(oe)) && (l = null))
                }, Le))
            }, p = 0; p < i; p++)
                s(p);
            n.subscribe(I(o, function(f) {
                if (c) {
                    var u = J([f], Y(a));
                    o.next(r ? r.apply(void 0, J([], Y(u))) : u)
                }
            }))
        })
    }
    function fn() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return k(function(r, n) {
            sn.apply(void 0, J([r], Y(e))).subscribe(n)
        })
    }
    function fr() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return fn.apply(void 0, J([], Y(e)))
    }
    function ie(e, t=document) {
        return Array.from(t.querySelectorAll(e))
    }
    function N(e, t=document) {
        let r = Re(e, t);
        if (typeof r == "undefined")
            throw new ReferenceError(`Missing element: expected "${e}" to be present`);
        return r
    }
    function Re(e, t=document) {
        return t.querySelector(e) || void 0
    }
    function ft() {
        return document.activeElement instanceof HTMLElement && document.activeElement || void 0
    }
    var So = V(B(document.body, "focusin"), B(document.body, "focusout")).pipe(De(1), ue(void 0), L(()=>ft() || document.body), Ee(1));
    function rt(e) {
        return So.pipe(L(t=>e.contains(t)), le())
    }
    function mr(e, t) {
        return V(B(e, "mouseenter").pipe(L(()=>!0)), B(e, "mouseleave").pipe(L(()=>!1))).pipe(t ? De(t) : oe, ue(!1))
    }
    function Qe(e) {
        return {
            x: e.offsetLeft,
            y: e.offsetTop
        }
    }
    function dr(e) {
        return V(B(window, "load"), B(window, "resize")).pipe(Ve(0, Ie), L(()=>Qe(e)), ue(Qe(e)))
    }
    function hr(e) {
        return {
            x: e.scrollLeft,
            y: e.scrollTop
        }
    }
    function Ae(e) {
        return V(B(e, "scroll"), B(window, "resize")).pipe(Ve(0, Ie), L(()=>hr(e)), ue(hr(e)))
    }
    function mn(e, t) {
        if (typeof t == "string" || typeof t == "number")
            e.innerHTML += t.toString();
        else if (t instanceof Node)
            e.appendChild(t);
        else if (Array.isArray(t))
            for (let r of t)
                mn(e, r)
    }
    function D(e, t, ...r) {
        let n = document.createElement(e);
        if (t)
            for (let o of Object.keys(t))
                typeof t[o] != "undefined" && (typeof t[o] != "boolean" ? n.setAttribute(o, t[o]) : n.setAttribute(o, ""));
        for (let o of r)
            mn(n, o);
        return n
    }
    function Vt(e) {
        if (e > 999) {
            let t = +((e - 950) % 1e3 > 99);
            return `${((e + 1e-6) / 1e3).toFixed(t)}k`
        } else
            return e.toString()
    }
    function br(e) {
        let t = D("script", {
            src: e
        });
        return ge(()=>(document.head.appendChild(t),
        V(B(t, "load"), B(t, "error").pipe(te(()=>ct(()=>new ReferenceError(`Invalid script: ${e}`))))).pipe(L(()=>{}
        ), se(()=>document.head.removeChild(t)), Ce(1))))
    }
    var wo = new ne
      , Hf = ge(()=>typeof ResizeObserver == "undefined" ? br("https://unpkg.com/resize-observer-polyfill") : pe(void 0)).pipe(L(()=>new ResizeObserver(e=>{
        for (let t of e)
            wo.next(t)
    }
    )), te(e=>V(lt, pe(e)).pipe(se(()=>e.disconnect()))), Ee(1));
    function Oe(e) {
        return {
            width: e.offsetWidth,
            height: e.offsetHeight
        }
    }
    function Dt(e) {
        return {
            width: e.scrollWidth,
            height: e.scrollHeight
        }
    }
    function Nt(e) {
        let t = e.parentElement;
        for (; t && (e.scrollWidth <= t.scrollWidth && e.scrollHeight <= t.scrollHeight); )
            t = (e = t).parentElement;
        return t ? e : void 0
    }
    var dn = new ne
      , To = ge(()=>pe(new IntersectionObserver(e=>{
        for (let t of e)
            dn.next(t)
    }
    ,{
        threshold: 0
    }))).pipe(te(e=>V(lt, pe(e)).pipe(se(()=>e.disconnect()))), Ee(1));
    function Qt(e) {
        return To.pipe(xe(t=>t.observe(e)), te(t=>dn.pipe(ae(({target: r})=>r === e), se(()=>t.unobserve(e)), L(({isIntersecting: r})=>r))))
    }
    function vr(e, t=16) {
        return Ae(e).pipe(L(({y: r})=>{
            let n = Oe(e)
              , o = Dt(e);
            return r >= o.height - n.height - t
        }
        ), le())
    }
    var Bf = {
        drawer: N("[data-md-toggle=drawer]"),
        search: N("[data-md-toggle=search]")
    };
    function Fe() {
        return new URL(location.href)
    }
    function hn(e, t={
        credentials: "same-origin"
    }) {
        return de(fetch(`${e}`, t)).pipe(zt(()=>ve), te(r=>r.status !== 200 ? ct(()=>new Error(r.statusText)) : pe(r)))
    }
    function qe(e, t) {
        return hn(e, t).pipe(te(r=>r.json()), Ee(1))
    }
    function mt(e, t=document) {
        return N(`[data-mdx-component=${e}]`, t)
    }
    function Ke(e, t=document) {
        return ie(`[data-mdx-component=${e}]`, t)
    }
    var Oo = N("#__config")
      , dt = JSON.parse(Oo.textContent);
    dt.base = `${new URL(dt.base,Fe())}`;
    function He() {
        return dt
    }
    function Ye(e, t) {
        return typeof t != "undefined" ? dt.translations[e].replace("#", t.toString()) : dt.translations[e]
    }
    function bn(e) {
        let t = rt(e)
          , r = V(B(e, "keyup"), B(e, "focus").pipe(cr(1))).pipe(L(()=>e.value), ue(e.value), le());
        return t.pipe(ae(n=>!n), Ne(r)).subscribe(([,n])=>{
            let o = document.location.pathname;
            typeof ga == "function" && n.length && ga("send", "pageview", `${o}?q=[icon]+${n}`)
        }
        ),
        Te([r, t]).pipe(L(([n,o])=>({
            ref: e,
            value: n,
            focus: o
        })))
    }
    var yr = nt(xr());
    var Mn = nt(xr());
    function On(e, t) {
        return (0,
        Mn.wrap)(e.shortcode, t, {
            wrap: {
                tagOpen: "<b>",
                tagClose: "</b>"
            }
        })
    }
    function _n(e, t, r) {
        return D("li", {
            class: "mdx-iconsearch-result__item"
        }, D("span", {
            class: "twemoji"
        }, D("img", {
            src: e.url
        })), D("button", {
            class: "md-clipboard--inline",
            title: Ye("clipboard.copy"),
            "data-clipboard-text": r ? e.shortcode : `:${e.shortcode}:`
        }, D("code", null, r ? On(e, t) : `:${On(e, t)}:`)))
    }
    function Ln(e) {
        let t = `@${e.name}`;
        return D("a", {
            href: e.url,
            title: t,
            class: "mdx-sponsorship__item"
        }, D("img", {
            src: e.image
        }))
    }
    function Cn(e) {
        return D("a", {
            href: "https://github.com/sponsors/squidfunk?metadata_origin=docs",
            class: "mdx-sponsorship__item mdx-sponsorship__item--private"
        }, "+", e)
    }
    function Mo(e, {index$: t, query$: r}) {
        switch (e.getAttribute("data-mdx-mode")) {
        case "file":
            return Te([r.pipe(ut("value")), t.pipe(L(({icons: n})=>Object.values(n.data).map(o=>o.replace(/\.svg$/, ""))))]).pipe(L(([{value: n},o])=>(0,
            yr.filter)(o, n)), te(n=>t.pipe(L(({icons: o})=>({
                data: n.map(i=>({
                    shortcode: i,
                    url: [o.base, i, ".svg"].join("")
                }))
            })))));
        default:
            return Te([r.pipe(ut("value")), t.pipe(L(({icons: n, emojis: o})=>[...Object.keys(n.data), ...Object.keys(o.data)]))]).pipe(L(([{value: n},o])=>(0,
            yr.filter)(o, n)), te(n=>t.pipe(L(({icons: o, emojis: i})=>({
                data: n.map(a=>{
                    let l = a in o.data ? o : i;
                    return {
                        shortcode: a,
                        url: [l.base, l.data[a]].join("")
                    }
                }
                )
            })))))
        }
    }
    function An(e, {index$: t, query$: r}) {
        let n = new ne
          , o = vr(e).pipe(ae(Boolean))
          , i = N(":scope > :first-child", e);
        n.pipe(Ne(r)).subscribe(([{data: c},{value: s}])=>{
            if (s)
                switch (c.length) {
                case 0:
                    i.textContent = "No matches";
                    break;
                case 1:
                    i.textContent = "1 match";
                    break;
                default:
                    i.textContent = `${Vt(c.length)} matches`
                }
            else
                i.textContent = "Type to start searching"
        }
        );
        let a = e.getAttribute("data-mdx-mode") === "file"
          , l = N(":scope > :last-child", e);
        return n.pipe(xe(()=>l.innerHTML = ""), te(({data: c})=>V(pe(...c.slice(0, 10)), pe(...c.slice(10)).pipe(ar(10), fr(o), te(([s])=>s)))), Ne(r)).subscribe(([c,{value: s}])=>l.appendChild(_n(c, s, a))),
        Mo(e, {
            query$: r,
            index$: t
        }).pipe(xe(c=>n.next(c)), se(()=>n.complete()), L(c=>K({
            ref: e
        }, c)))
    }
    function Hn(e) {
        let t = He()
          , r = qe(new URL("assets/javascripts/iconsearch_index.json",t.base))
          , n = mt("iconsearch-query", e)
          , o = mt("iconsearch-result", e)
          , i = bn(n)
          , a = An(o, {
            index$: r,
            query$: i
        });
        return V(i, a)
    }
    function _o(e) {
        return V(...ie(":scope [hidden]", e).map(t=>Qt(t).pipe(ae(r=>r), Ce(1), L(()=>({
            active: t
        })))))
    }
    function $n(e) {
        return ge(()=>{
            let t = new ne;
            t.subscribe(({active: n})=>{
                n.hidden = !1
            }
            ),
            navigator.userAgent.includes("Gecko/") && Ae(e).pipe(L(({y: n})=>n > 1), le()).subscribe(n=>{
                let o = mt("hero");
                o.hidden = n
            }
            );
            let r = N(":scope > :nth-child(2)", e);
            return Te([Ae(e), dr(r)]).subscribe(([{y: n},o])=>{
                N("header").classList.toggle("md-header--shadow", n > o.y)
            }
            ),
            _o(e).pipe(xe(n=>t.next(n)), se(()=>t.complete()), L(n=>K({
                ref: e
            }, n)))
        }
        )
    }
    function Er(e, t) {
        return t === "inline" ? D("div", {
            class: "md-tooltip md-tooltip--inline",
            id: e,
            role: "tooltip"
        }, D("div", {
            class: "md-tooltip__inner md-typeset"
        })) : D("div", {
            class: "md-tooltip",
            id: e,
            role: "tooltip"
        }, D("div", {
            class: "md-tooltip__inner md-typeset"
        }))
    }
    var Lo = 0;
    function Co(e, t) {
        document.body.append(e);
        let {width: r} = Oe(e);
        e.style.setProperty("--md-tooltip-width", `${r}px`),
        e.remove();
        let n = Nt(t)
          , o = typeof n != "undefined" ? Ae(n) : pe({
            x: 0,
            y: 0
        })
          , i = V(rt(t), mr(t)).pipe(le());
        return Te([i, o]).pipe(L(([a,l])=>{
            let {x: c, y: s} = Qe(t)
              , p = Oe(t)
              , f = t.closest("table");
            return f && t.parentElement && (c += f.offsetLeft + t.parentElement.offsetLeft,
            s += f.offsetTop + t.parentElement.offsetTop),
            {
                active: a,
                offset: {
                    x: c - l.x + p.width / 2 - r / 2,
                    y: s - l.y + p.height + 8
                }
            }
        }
        ))
    }
    function vt(e) {
        let t = e.title;
        if (!t.length)
            return ve;
        let r = `__tooltip_ ${Lo++}`
          , n = Er(r, "inline")
          , o = N(".md-typeset", n);
        return o.innerHTML = t,
        ge(()=>{
            let i = new ne;
            return i.subscribe({
                next({offset: a}) {
                    n.style.setProperty("--md-tooltip-x", `${a.x}px`),
                    n.style.setProperty("--md-tooltip-y", `${a.y}px`)
                },
                complete() {
                    n.style.removeProperty("--md-tooltip-x"),
                    n.style.removeProperty("--md-tooltip-y")
                }
            }),
            V(i.pipe(ae(({active: a})=>a)), i.pipe(De(250), ae(({active: a})=>!a))).subscribe({
                next({active: a}) {
                    a ? (e.insertAdjacentElement("afterend", n),
                    e.setAttribute("aria-describedby", r),
                    e.removeAttribute("title")) : (n.remove(),
                    e.removeAttribute("aria-describedby"),
                    e.setAttribute("title", t))
                },
                complete() {
                    n.remove(),
                    e.removeAttribute("aria-describedby"),
                    e.setAttribute("title", t)
                }
            }),
            i.pipe(Ve(16, Ie)).subscribe(({active: a})=>{
                n.classList.toggle("md-tooltip--active", a)
            }
            ),
            i.pipe(ur(125, Ie), ae(()=>!!e.offsetParent), L(()=>e.offsetParent.getBoundingClientRect()), L(({x: a})=>a)).subscribe({
                next(a) {
                    a ? n.style.setProperty("--md-tooltip-0", `${-a}px`) : n.style.removeProperty("--md-tooltip-0")
                },
                complete() {
                    n.style.removeProperty("--md-tooltip-0")
                }
            }),
            Co(n, e).pipe(xe(a=>i.next(a)), se(()=>i.complete()), L(a=>K({
                ref: e
            }, a)))
        }
        ).pipe(ze(me))
    }
    var Ho = nt(wr());
    var ab = V(B(window, "keydown").pipe(L(()=>!0)), V(B(window, "keyup"), B(window, "contextmenu")).pipe(L(()=>!1))).pipe(ue(!1), Ee(1));
    var xb = D("table");
    var ko = nt(wr());
    var Uo = nt(In());

    function Fn() {
        let {origin: e} = new URL(location.href);
        typeof ga != "undefined" && B(document.body, "click").subscribe(t=>{
            if (t.target instanceof HTMLElement) {
                let r = t.target.closest("a");
                r && r.origin !== e && ga("send", "event", "outbound", "click", r.href)
            }
        }
        )
    }
    Fn();
    var No = document$.pipe(te(()=>V(...Ke("iconsearch").map(e=>Hn(e)), ...Ke("parallax").map(e=>$n(e)))));
    No.subscribe();
}
)();
