tinymce.create("tinymce.plugins.EquationEditorPlugin", {
    init: function(t, e) {
        var n;
        return n = null, t.addCommand("mceMathquill", function(i) {
            var r;
            return i || (i = ""), r = t.windowManager.open({
                url: e + "/equation_editor.html",
                width: 800,
                height: 400,
                inline: 1,
                popup_css: !1,
                title: "Equation Editor",
                buttons: [{//cl
                    text: "Insert Latex (Display)",
                    onclick: function() {
                        var e, n;
                        return n = t.windowManager.getWindows()[0], e = t.windowManager.getParams().latexInput.mathquill("latex"), t.execCommand("insertHTML", false, "$$" + e + "$$"), n.close()
                    }
                }, {//cl
                    text: "Insert Latex (Inline)",
                    onclick: function() {
                        var e, n;
                        return n = t.windowManager.getWindows()[0], e = t.windowManager.getParams().latexInput.mathquill("latex"), t.execCommand("insertHTML", false, "$" + e + "$"), n.close()
                    }
                }, {
                    text: "Insert",
                    subtype: "primary",
                    onclick: function() {
                        var e, n;
                        return n = t.windowManager.getWindows()[0], e = t.windowManager.getParams().latexInput.mathquill("latex"), t.execCommand("mceMathquillInsert", e), n.close()
                    }
                }, {
                    text: "Cancel",
                    onclick: function() {
                        return n = null, t.windowManager.getWindows()[0].close()
                    }
                }]
            }, {
                plugin_url: e,
                existing_latex: i
            })
        }), t.addCommand("mceMathquillLatex", function(e) {//cl
            var i;
            if (e) return i = e
        }), t.addCommand("mceMathquillInsert", function(e) {
            var i;
            if (e) return i = '&nbsp;<span class="rendered-latex" contenteditable="false">\n  ' + e + "\n</span>&nbsp;", n && t.selection.select(n), n = null, t.selection.setContent(i)
        }), t.on("init", function() {
            return $(t.getDoc()).on("click", ".rendered-latex", function(e) {
                var i;
                return e.stopPropagation(), n = this, i = $(this).find(".selectable").text().replace(/^\$/, "").replace(/\$$/, ""), t.execCommand("mceMathquill", i)
            })
        }), t.addButton("equationeditor", {
            title: "Equation editor",
            cmd: "mceMathquill",
            text: "f(x)"
        }), t.on("preProcess", function(t) {
            var e;
            return e = t.target.dom.select(".rendered-latex:not(.mathquill-rendered-math)"), $(e).mathquill()
        }), t.on("loadContent", function(t) {
            var e;
            return e = t.target.dom.select("span.rendered-latex:not(.mathquill-rendered-math)"), $(e).mathquill()
        }), t.on("setContent", function(t) {
            var e;
            return e = t.target.dom.select("span.rendered-latex:not(.mathquill-rendered-math)"), $(e).mathquill()
        })
    },
    getInfo: function() {
        return {
            longname: "Equation Editor",
            author: "Foraker, derived from https://github.com/laughinghan/tinymce_mathquill_plugin",
            authorurl: "http://www.foraker.com",
            infourl: "https://github.com/foraker/tinymce_equation_editor",
            version: "1.0"
        }
    }
}), tinymce.PluginManager.add("equationeditor", tinymce.plugins.EquationEditorPlugin);
