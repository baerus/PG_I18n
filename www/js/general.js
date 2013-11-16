var i18n = {
    updateTexts: function(lang) {
        if(lang == null) {
            lang = jQuery.i18n.browserLang();
        }
        jQuery.i18n.properties({
            name:'Messages',
            path:'bundle/',
            mode:'both',
            language: lang,
            callback: function() {
                document.getElementById('hello').innerHTML = jQuery.i18n.prop('msg_hello');
                document.getElementById('world').innerHTML = jQuery.i18n.prop('msg_world');
            }
        });
    },

    changeLang: function() {
        var selectionLang = jQuery('#lang option:selected').val();
        if(selectionLang == 'browser') {
            selectionLang = jQuery.i18n.browserLang();
        }
        this.updateTexts(selectionLang);
    }
};