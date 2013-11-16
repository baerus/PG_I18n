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
                document.getElementById('label_lang').innerHTML = $.i18n.prop('m_label_lang');
                document.getElementById('lang_browser').innerHTML = $.i18n.prop('m_lang_browser');
                document.getElementById('lang_en').innerHTML = $.i18n.prop('m_lang_en');
                document.getElementById('lang_de').innerHTML = $.i18n.prop('m_lang_de');
                document.getElementById('lang_es').innerHTML = $.i18n.prop('m_lang_es');
                document.getElementById('button').innerHTML = $.i18n.prop('m_button');
            }
        });
    },

    changeLang: function() {
        var selectionLang = jQuery('#lang option:selected').val();
        if(selectionLang == 'browser') {
            selectionLang = jQuery.i18n.browserLang();
        }
        this.updateTexts(selectionLang);
    },

    createText: function() {
        var nodes = document.getElementById('createdTextDiv').childNodes;
        var count;
        if(nodes == undefined) {
            count = 1;
        } else {
            count = nodes.length + 1;
        }
        var text = document.createElement('span');
        text.innerHTML = $.i18n.prop('m_automatic_text') + ' ' + count + '<br>';
        document.getElementById('createdTextDiv').appendChild(text);
    }
};