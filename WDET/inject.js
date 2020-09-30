if (typeof (window.WDET) == "undefined") {
    window.jq = jQuery;
    window.WDET = {
        ROOT: "http://localhost/public/WDET/",
        inject: function (url) {
            let script = jq("<script>", {
                type: "text/javascript",
                src: url,
            });
            script.appendTo("head");
        },
        init: function () {
            for (let script in this.scripts) {
                this.inject(this.ROOT + WDET.scripts[script].url);
            }
        },
        scripts: {
            WSTP: {
                name: "Wikidot Sandbox Tools Manager",
                short: "WSTP",
                auther: "ZeeXoc",
                homepage: "http://github.com/ZeeXoc",
                version: "1.0.1",

                url: "scripts/WSTP.js"
            }
        }
    }
    ;WDET.init();
}