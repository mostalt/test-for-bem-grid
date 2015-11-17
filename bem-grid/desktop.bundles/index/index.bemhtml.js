(function(g) {
  var __bem_xjst = function(exports) {
     var $$mode = "", $$block = "", $$elem = "", $$elemMods = null, $$mods = null;

var __$ref = {};

function apply(ctx) {
    ctx = ctx || this;
    $$mods = ctx["mods"];
    $$elemMods = ctx["elemMods"];
    $$elem = ctx["elem"];
    $$block = ctx["block"];
    $$mode = ctx["_mode"];
    try {
        return applyc(ctx, __$ref);
    } catch (e) {
        e.xjstContext = ctx;
        throw e;
    }
}

exports.apply = apply;

function applyc(__$ctx, __$ref) {
    var __$t = $$mode;
    if (__$t === "tag") {
        var __$t = $$block;
        if (__$t === "section") {
            if (!$$elem) {
                return "section";
            }
        } else if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "js") {
                return "script";
            } else if (__$t === "css") {
                if (__$ctx.ctx.url) {
                    return "link";
                }
                return "style";
            } else if (__$t === "favicon") {
                return "link";
            } else if (__$t === "link") {
                return "link";
            } else if (__$t === "meta") {
                return "meta";
            } else if (__$t === "head") {
                return "head";
            }
            if (!$$elem) {
                return "body";
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return "script";
            }
        }
        return undefined;
    } else if (__$t === "js") {
        return undefined;
    } else if (__$t === "attrs") {
        var __$t = $$block;
        if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "js") {
                var __$r = __$b13(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            } else if (__$t === "css") {
                if (__$ctx.ctx.url) {
                    return {
                        rel: "stylesheet",
                        href: __$ctx.ctx.url
                    };
                }
            } else if (__$t === "favicon") {
                return {
                    rel: "shortcut icon",
                    href: __$ctx.ctx.url
                };
            }
        }
        return undefined;
    } else if (__$t === "bem") {
        var __$t = $$block;
        if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "js") {
                return false;
            } else if (__$t === "css") {
                return false;
            } else if (__$t === "favicon") {
                return false;
            } else if (__$t === "link") {
                return false;
            } else if (__$t === "meta") {
                return false;
            } else if (__$t === "head") {
                return false;
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return false;
            }
        }
        return undefined;
    } else if (__$t === "content") {
        var __$t = $$block;
        if (__$t === "page") {
            if (!$$elem && (__$ctx.__$a0 & 1) === 0) {
                return [ function __$lb__$1() {
                    var __$r__$2;
                    var __$l0__$3 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 1;
                    __$r__$2 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$3;
                    return __$r__$2;
                }(), __$ctx.ctx.scripts ];
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        }
        return __$ctx.ctx.content;
    } else if (__$t === "default") {
        if ($$block === "page" && !$$elem && (__$ctx.__$a0 & 2) === 0) {
            var __$r = __$b28(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b29(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "mix") {
        return undefined;
    } else if (__$t === "cls") {
        return undefined;
    } else if (__$t === "") {
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 4) === 0) {
            var __$r = __$b32(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b33(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b34(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b35(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b36(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    }
    throw new Error("Match failed, no templates found");
}

[ function(exports, context) {
    var undef, BEM_ = {}, toString = Object.prototype.toString, slice = Array.prototype.slice, isArray = Array.isArray || function(obj) {
        return toString.call(obj) === "[object Array]";
    }, SHORT_TAGS = {
        area: 1,
        base: 1,
        br: 1,
        col: 1,
        command: 1,
        embed: 1,
        hr: 1,
        img: 1,
        input: 1,
        keygen: 1,
        link: 1,
        meta: 1,
        param: 1,
        source: 1,
        wbr: 1
    };
    (function(BEM, undefined) {
        var MOD_DELIM = "_", ELEM_DELIM = "__", NAME_PATTERN = "[a-zA-Z0-9-]+";
        function buildModPostfix(modName, modVal) {
            var res = MOD_DELIM + modName;
            if (modVal !== true) res += MOD_DELIM + modVal;
            return res;
        }
        function buildBlockClass(name, modName, modVal) {
            var res = name;
            if (modVal) res += buildModPostfix(modName, modVal);
            return res;
        }
        function buildElemClass(block, name, modName, modVal) {
            var res = buildBlockClass(block) + ELEM_DELIM + name;
            if (modVal) res += buildModPostfix(modName, modVal);
            return res;
        }
        BEM.INTERNAL = {
            NAME_PATTERN: NAME_PATTERN,
            MOD_DELIM: MOD_DELIM,
            ELEM_DELIM: ELEM_DELIM,
            buildModPostfix: buildModPostfix,
            buildClass: function(block, elem, modName, modVal) {
                var typeOfModName = typeof modName;
                if (typeOfModName === "string" || typeOfModName === "boolean") {
                    var typeOfModVal = typeof modVal;
                    if (typeOfModVal !== "string" && typeOfModVal !== "boolean") {
                        modVal = modName;
                        modName = elem;
                        elem = undef;
                    }
                } else if (typeOfModName !== "undefined") {
                    modName = undef;
                } else if (elem && typeof elem !== "string") {
                    elem = undef;
                }
                if (!(elem || modName)) {
                    return block;
                }
                return elem ? buildElemClass(block, elem, modName, modVal) : buildBlockClass(block, modName, modVal);
            },
            buildModsClasses: function(block, elem, mods) {
                var res = "";
                if (mods) {
                    var modName;
                    for (modName in mods) {
                        if (!mods.hasOwnProperty(modName)) continue;
                        var modVal = mods[modName];
                        if (!modVal && modVal !== 0) continue;
                        typeof modVal !== "boolean" && (modVal += "");
                        res += " " + (elem ? buildElemClass(block, elem, modName, modVal) : buildBlockClass(block, modName, modVal));
                    }
                }
                return res;
            },
            buildClasses: function(block, elem, mods) {
                var res = "";
                res += elem ? buildElemClass(block, elem) : buildBlockClass(block);
                res += this.buildModsClasses(block, elem, mods);
                return res;
            }
        };
    })(BEM_);
    var ts = {
        '"': "&quot;",
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;"
    }, f = function(t) {
        return ts[t] || t;
    };
    var buildEscape = function(r) {
        r = new RegExp(r, "g");
        return function(s) {
            return ("" + s).replace(r, f);
        };
    };
    context.BEMContext = BEMContext;
    function BEMContext(context, apply_) {
        this.ctx = typeof context === "undefined" ? "" : context;
        this.apply = apply_;
        this._str = "";
        var _this = this;
        this._buf = {
            push: function() {
                var chunks = slice.call(arguments).join("");
                _this._str += chunks;
            },
            join: function() {
                return this._str;
            }
        };
        this._ = this;
        this._start = true;
        this._mode = "";
        this._listLength = 0;
        this._notNewList = false;
        this.position = 0;
        this.block = undef;
        this.elem = undef;
        this.mods = undef;
        this.elemMods = undef;
    }
    BEMContext.prototype.isArray = isArray;
    BEMContext.prototype.isSimple = function isSimple(obj) {
        if (!obj || obj === true) return true;
        var t = typeof obj;
        return t === "string" || t === "number";
    };
    BEMContext.prototype.isShortTag = function isShortTag(t) {
        return SHORT_TAGS.hasOwnProperty(t);
    };
    BEMContext.prototype.extend = function extend(o1, o2) {
        if (!o1 || !o2) return o1 || o2;
        var res = {}, n;
        for (n in o1) o1.hasOwnProperty(n) && (res[n] = o1[n]);
        for (n in o2) o2.hasOwnProperty(n) && (res[n] = o2[n]);
        return res;
    };
    var cnt = 0, id = +new Date(), expando = "__" + id, get = function() {
        return "uniq" + id + ++cnt;
    };
    BEMContext.prototype.identify = function(obj, onlyGet) {
        if (!obj) return get();
        if (onlyGet || obj[expando]) {
            return obj[expando];
        } else {
            return obj[expando] = get();
        }
    };
    BEMContext.prototype.xmlEscape = buildEscape("[&<>]");
    BEMContext.prototype.attrEscape = buildEscape('["&<>]');
    BEMContext.prototype.BEM = BEM_;
    BEMContext.prototype.isFirst = function isFirst() {
        return this.position === 1;
    };
    BEMContext.prototype.isLast = function isLast() {
        return this.position === this._listLength;
    };
    BEMContext.prototype.generateId = function generateId() {
        return this.identify(this.ctx);
    };
    var oldApply = exports.apply;
    exports.apply = BEMContext.apply = function BEMContext_apply(context) {
        var ctx = new BEMContext(context || this, oldApply);
        ctx.apply();
        return ctx._str;
    };
    BEMContext.prototype.reapply = BEMContext.apply;
} ].forEach(function(fn) {
    fn(exports, this);
}, {
    recordExtensions: function(ctx) {
        ctx["__$a0"] = 0;
        ctx["_mode"] = undefined;
        ctx["ctx"] = undefined;
        ctx["_str"] = undefined;
        ctx["block"] = undefined;
        ctx["elem"] = undefined;
        ctx["_notNewList"] = undefined;
        ctx["position"] = undefined;
        ctx["_listLength"] = undefined;
        ctx["_currBlock"] = undefined;
        ctx["mods"] = undefined;
        ctx["elemMods"] = undefined;
    },
    resetApplyNext: function(ctx) {
        ctx["__$a0"] = 0;
    }
});

function __$b13(__$ctx, __$ref) {
    var attrs__$0 = {};
    if (__$ctx.ctx.url) {
        attrs__$0.src = __$ctx.ctx.url;
    } else if (__$ctx._nonceCsp) {
        attrs__$0.nonce = __$ctx._nonceCsp;
    }
    return attrs__$0;
}

function __$b28(__$ctx, __$ref) {
    var ctx__$4 = __$ctx.ctx;
    __$ctx._nonceCsp = ctx__$4.nonce;
    var __$r__$6;
    var __$l0__$7 = $$mode;
    $$mode = "";
    var __$l1__$8 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$4.doctype || "<!DOCTYPE html>", {
        tag: "html",
        cls: "ua_js_no",
        content: [ {
            elem: "head",
            content: [ {
                tag: "meta",
                attrs: {
                    charset: "utf-8"
                }
            }, ctx__$4.uaCompatible === false ? "" : {
                tag: "meta",
                attrs: {
                    "http-equiv": "X-UA-Compatible",
                    content: ctx__$4.uaCompatible || "IE=edge"
                }
            }, {
                tag: "title",
                content: ctx__$4.title
            }, {
                block: "ua",
                attrs: {
                    nonce: ctx__$4.nonce
                }
            }, ctx__$4.head, ctx__$4.styles, ctx__$4.favicon ? {
                elem: "favicon",
                url: ctx__$4.favicon
            } : "" ]
        }, ctx__$4 ]
    } ];
    var __$r__$10;
    var __$l2__$11 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 2;
    __$r__$10 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$11;
    __$r__$6 = __$r__$10;
    $$mode = __$l0__$7;
    __$ctx.ctx = __$l1__$8;
    return;
}

function __$b29(__$ctx, __$ref) {
    var BEM_INTERNAL__$12 = __$ctx.BEM.INTERNAL, ctx__$13 = __$ctx.ctx, isBEM__$14, tag__$15, res__$16;
    var __$r__$18;
    var __$l0__$19 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$20 = $$block;
    var __$r__$22;
    var __$l1__$23 = $$mode;
    $$mode = "tag";
    __$r__$22 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$23;
    tag__$15 = __$r__$22;
    typeof tag__$15 !== "undefined" || (tag__$15 = ctx__$13.tag);
    typeof tag__$15 !== "undefined" || (tag__$15 = "div");
    if (tag__$15) {
        var jsParams__$24, js__$25;
        if (vBlock__$20 && ctx__$13.js !== false) {
            var __$r__$26;
            var __$l2__$27 = $$mode;
            $$mode = "js";
            __$r__$26 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$27;
            js__$25 = __$r__$26;
            js__$25 = js__$25 ? __$ctx.extend(ctx__$13.js, js__$25 === true ? {} : js__$25) : ctx__$13.js === true ? {} : ctx__$13.js;
            js__$25 && ((jsParams__$24 = {})[BEM_INTERNAL__$12.buildClass(vBlock__$20, ctx__$13.elem)] = js__$25);
        }
        __$ctx._str += "<" + tag__$15;
        var __$r__$28;
        var __$l3__$29 = $$mode;
        $$mode = "bem";
        __$r__$28 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$29;
        isBEM__$14 = __$r__$28;
        typeof isBEM__$14 !== "undefined" || (isBEM__$14 = typeof ctx__$13.bem !== "undefined" ? ctx__$13.bem : ctx__$13.block || ctx__$13.elem);
        var __$r__$31;
        var __$l4__$32 = $$mode;
        $$mode = "cls";
        __$r__$31 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$32;
        var cls__$30 = __$r__$31;
        cls__$30 || (cls__$30 = ctx__$13.cls);
        var addJSInitClass__$33 = ctx__$13.block && jsParams__$24 && !ctx__$13.elem;
        if (isBEM__$14 || cls__$30) {
            __$ctx._str += ' class="';
            if (isBEM__$14) {
                __$ctx._str += BEM_INTERNAL__$12.buildClasses(vBlock__$20, ctx__$13.elem, ctx__$13.elemMods || ctx__$13.mods);
                var __$r__$35;
                var __$l5__$36 = $$mode;
                $$mode = "mix";
                __$r__$35 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$36;
                var mix__$34 = __$r__$35;
                ctx__$13.mix && (mix__$34 = mix__$34 ? [].concat(mix__$34, ctx__$13.mix) : ctx__$13.mix);
                if (mix__$34) {
                    var visited__$37 = {}, visitedKey__$38 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$37[visitedKey__$38(vBlock__$20, $$elem)] = true;
                    __$ctx.isArray(mix__$34) || (mix__$34 = [ mix__$34 ]);
                    for (var i__$39 = 0; i__$39 < mix__$34.length; i__$39++) {
                        var mixItem__$40 = mix__$34[i__$39], hasItem__$41 = mixItem__$40.block && (vBlock__$20 !== ctx__$13.block || mixItem__$40.block !== vBlock__$20) || mixItem__$40.elem, mixBlock__$42 = mixItem__$40.block || mixItem__$40._block || $$block, mixElem__$43 = mixItem__$40.elem || mixItem__$40._elem || $$elem;
                        hasItem__$41 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$12[hasItem__$41 ? "buildClasses" : "buildModsClasses"](mixBlock__$42, mixItem__$40.elem || mixItem__$40._elem || (mixItem__$40.block ? undefined : $$elem), mixItem__$40.elemMods || mixItem__$40.mods);
                        if (mixItem__$40.js) {
                            (jsParams__$24 || (jsParams__$24 = {}))[BEM_INTERNAL__$12.buildClass(mixBlock__$42, mixItem__$40.elem)] = mixItem__$40.js === true ? {} : mixItem__$40.js;
                            addJSInitClass__$33 || (addJSInitClass__$33 = mixBlock__$42 && !mixItem__$40.elem);
                        }
                        if (hasItem__$41 && !visited__$37[visitedKey__$38(mixBlock__$42, mixElem__$43)]) {
                            visited__$37[visitedKey__$38(mixBlock__$42, mixElem__$43)] = true;
                            var __$r__$45;
                            var __$l6__$46 = $$mode;
                            $$mode = "mix";
                            var __$l7__$47 = $$block;
                            $$block = mixBlock__$42;
                            var __$l8__$48 = $$elem;
                            $$elem = mixElem__$43;
                            __$r__$45 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$46;
                            $$block = __$l7__$47;
                            $$elem = __$l8__$48;
                            var nestedMix__$44 = __$r__$45;
                            if (nestedMix__$44) {
                                for (var j__$49 = 0; j__$49 < nestedMix__$44.length; j__$49++) {
                                    var nestedItem__$50 = nestedMix__$44[j__$49];
                                    if (!nestedItem__$50.block && !nestedItem__$50.elem || !visited__$37[visitedKey__$38(nestedItem__$50.block, nestedItem__$50.elem)]) {
                                        nestedItem__$50._block = mixBlock__$42;
                                        nestedItem__$50._elem = mixElem__$43;
                                        mix__$34.splice(i__$39 + 1, 0, nestedItem__$50);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$30 && (__$ctx._str += isBEM__$14 ? " " + cls__$30 : cls__$30);
            __$ctx._str += addJSInitClass__$33 ? ' i-bem"' : '"';
        }
        if (isBEM__$14 && jsParams__$24) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$24)) + '"';
        }
        var __$r__$52;
        var __$l9__$53 = $$mode;
        $$mode = "attrs";
        __$r__$52 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$53;
        var attrs__$51 = __$r__$52;
        attrs__$51 = __$ctx.extend(attrs__$51, ctx__$13.attrs);
        if (attrs__$51) {
            var name__$54, attr__$55;
            for (name__$54 in attrs__$51) {
                attr__$55 = attrs__$51[name__$54];
                if (typeof attr__$55 === "undefined") continue;
                __$ctx._str += " " + name__$54 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$55) ? attr__$55 : __$ctx.reapply(attr__$55)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$15)) {
        __$ctx._str += "/>";
    } else {
        tag__$15 && (__$ctx._str += ">");
        var __$r__$57;
        var __$l10__$58 = $$mode;
        $$mode = "content";
        __$r__$57 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$58;
        var content__$56 = __$r__$57;
        if (content__$56 || content__$56 === 0) {
            isBEM__$14 = vBlock__$20 || $$elem;
            var __$r__$59;
            var __$l11__$60 = $$mode;
            $$mode = "";
            var __$l12__$61 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$62 = __$ctx.position;
            __$ctx.position = isBEM__$14 ? 1 : __$ctx.position;
            var __$l14__$63 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$14 ? 1 : __$ctx._listLength;
            var __$l15__$64 = __$ctx.ctx;
            __$ctx.ctx = content__$56;
            __$r__$59 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$60;
            __$ctx._notNewList = __$l12__$61;
            __$ctx.position = __$l13__$62;
            __$ctx._listLength = __$l14__$63;
            __$ctx.ctx = __$l15__$64;
        }
        tag__$15 && (__$ctx._str += "</" + tag__$15 + ">");
    }
    res__$16 = __$ctx._str;
    __$r__$18 = undefined;
    __$ctx._str = __$l0__$19;
    __$ctx._buf.push(res__$16);
    return;
}

function __$b32(__$ctx, __$ref) {
    var __$r__$66;
    var __$l0__$67 = $$mode;
    $$mode = "";
    var __$l1__$68 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$70;
    var __$l2__$71 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 4;
    __$r__$70 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$71;
    __$r__$66 = __$r__$70;
    $$mode = __$l0__$67;
    __$ctx.ctx = __$l1__$68;
    return;
}

function __$b33(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$72 = __$ctx.ctx;
    if (ctx__$72 && ctx__$72 !== true || ctx__$72 === 0) {
        __$ctx._str += ctx__$72 + "";
    }
    return;
}

function __$b34(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b35(__$ctx, __$ref) {
    var ctx__$73 = __$ctx.ctx, len__$74 = ctx__$73.length, i__$75 = 0, prevPos__$76 = __$ctx.position, prevNotNewList__$77 = __$ctx._notNewList;
    if (prevNotNewList__$77) {
        __$ctx._listLength += len__$74 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$74;
    }
    __$ctx._notNewList = true;
    while (i__$75 < len__$74) (function __$lb__$78() {
        var __$r__$79;
        var __$l0__$80 = __$ctx.ctx;
        __$ctx.ctx = ctx__$73[i__$75++];
        __$r__$79 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$80;
        return __$r__$79;
    })();
    prevNotNewList__$77 || (__$ctx.position = prevPos__$76);
    return;
}

function __$b36(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$81 = __$ctx.ctx.block, vElem__$82 = __$ctx.ctx.elem, block__$83 = __$ctx._currBlock || $$block;
    var __$r__$85;
    var __$l0__$86 = $$mode;
    $$mode = "default";
    var __$l1__$87 = $$block;
    $$block = vBlock__$81 || (vElem__$82 ? block__$83 : undefined);
    var __$l2__$88 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$81 || vElem__$82 ? undefined : block__$83;
    var __$l3__$89 = $$elem;
    $$elem = vElem__$82;
    var __$l4__$90 = $$mods;
    $$mods = vBlock__$81 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$91 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$85 = undefined;
    $$mode = __$l0__$86;
    $$block = __$l1__$87;
    __$ctx._currBlock = __$l2__$88;
    $$elem = __$l3__$89;
    $$mods = __$l4__$90;
    $$elemMods = __$l5__$91;
    return;
};
     return exports;
  }
  var defineAsGlobal = true;
  if(typeof exports === "object") {
    exports["BEMHTML"] = __bem_xjst({});
    defineAsGlobal = false;
  }
  if(typeof modules === "object") {
    modules.define("BEMHTML",
      function(provide) {
        provide(__bem_xjst({})) });
    defineAsGlobal = false;
  }
  defineAsGlobal && (g["BEMHTML"] = __bem_xjst({}));
})(this);