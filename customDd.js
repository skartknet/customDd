(function ($) {
    $.fn.customDd = function (options) {

        //INITIALIZATION
        var $input = $(this);

        var $ddContainer = $("<div>", {
            class: "ddContainer"
        });
        
        var $itemsContainer = $("<ul>", {
            class: 'itemsContainer'
        });

        var $arrow = $("<span>", {
            class: "arrow"
        });

        $input.wrap($ddContainer);
        $arrow.insertAfter($input);

        options.forEach(function (element, index) {
            var value = element.value;
            var content = element.content;

            var $li = $("<li>", {
                class: "item"
            });
            $li.data("value", value);

            var $item = $("<item>");
            $item.html(content);

            $item.appendTo($li);
            $li.appendTo($itemsContainer);

        });

        // Once we have append all the items to the ul container we append this to the main container
        $itemsContainer.insertAfter($arrow);


        //EVENTS
        $("li.item", $itemsContainer).click(function () {
            var value = $(this).data("value");
            $input.val(value);
        });

        $(document).click(function (e) {
            if ($itemsContainer.is(":visible") && !$itemsContainer.is(e.target)) {
                $itemsContainer.hide();
            } else if ($arrow.is(e.target)) {
                $itemsContainer.show();
            }
        });

        function showItems() {
            $itemsContainer.show();
        }

        return this;
    };
}(jQuery));