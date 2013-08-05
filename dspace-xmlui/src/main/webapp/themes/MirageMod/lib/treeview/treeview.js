// as suggested by Mr. Elvi Nemiz; function for expand/collapse menu; modified by brian aljer 2013-8-1
(function ($) {
    $("#tree").treeview({
        collapsed:true,
        animated:"medium",
        control:"#sidetreecontrol",
        persist:"cookie"
    });
})(jQuery);
