(function(jQuery) {
    function buttonHtml(element) {
        var button = element.attr('data-button');
        if (button) {
            return '<input type="button" value="' + button + '">';
        }
        var link = element.attr('data-link');
        if (link) {
            return '<a href="javascript:void(0)">' + link + '</a>';
        }
        var image = element.attr('data-image');
        if (image) {
            return '<img src="' + image + '" style="cursor:pointer;">';
        }
        return '';
    };

    jQuery.fn.MakeShopBasket = function(options) {
        var options = jQuery.extend({}, jQuery.fn.MakeShopBasket.defaults, options);
        var formId = 'MakeShopBasket-' + Math.random().toString(36).slice(-8);

        return this.each(function(){
            if ($('#' + formId).size() == 0) {
                var form = '<form id="' + formId + '" method="POST"><input type="hidden" name="brand_info"></form>';
                jQuery('body').append(form);
            }

            if (options.target != '') {
                $('#' + formId).attr('target', options.target);
            }

            var button = buttonHtml(jQuery(this));
            if (button == '') {
                return;
            }

            var url = jQuery(this).attr('data-url');
            var param = jQuery(this).attr('data-param');

            jQuery(this)
                .after(button)
                .next()
                .bind('click', function(){
                    $('#' + formId + ' input[name=brand_info]').val(param);
                    $('#' + formId).attr('action', url).submit();
                })
            jQuery(this).remove();
        });
    };

    jQuery.fn.MakeShopBasket.defaults = {
        target: ''
    };
})(jQuery);
