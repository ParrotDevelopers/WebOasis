
(function ($) {
    "use strict";

    function isInt(value) {
        return !isNaN(value) &&
                parseInt(Number(value)) == value &&
                !isNaN(parseInt(value, 10));
    }
    
    var loading = {start: function () {
            $('.exchange-btn').html('<i class="fa fa-refresh fa-spin"></i>')
        }, done: function () {
            $('.exchange-btn').html('<i class="fa fa-exchange"></i>');
        }};

    function currencyConverter() {
        loading.start();
        var fromCurr = $('select[name=fromCurr]').val();
        var toCurr = $('select[name=toCurr]').val();
        var finpt = $('input[name=finpt]').val();
        var tinpt = $('input[name=tinpt]').val();
        if (isInt(finpt)) {

            finpt = parseInt(finpt);
            if (fromCurr === toCurr) {
                $('#tinpt').val(finpt);
            } else {
                var dataString = 'val=' + fromCurr + '|' + toCurr + '|' + finpt;
                $.ajax({
                    type: "POST",
                    url: "process.php",
                    data: dataString,
                    cache: false,
                    success: function (result) {
                        if (result.success) {
                            loading.done();
                            $('#tinpt').val(result.data);
                        } else {
                            loading.done();
                            alert(result.message);
                        }
                    }
                });
            }

        } else {
            alert('Please input an integer value!');
        }
    }

    $(document).ready(function () {
        $('.exchange-btn,select[name=fromCurr],select[name=toCurr],input[name=finpt],input[name=tinpt]').on('change', function (event) {
            currencyConverter(event.currentTarget.id);
        });
        $('input[name=finpt],input[name=tinpt]').selectpicker();
        $(".exchange-btn").click(function (event) {
            var from = $('select[name=fromCurr]').val();
            var to = $('select[name=toCurr]').val();
            $('select[name=toCurr]').val(from);
            $('select[name=fromCurr]').val(to);
            $('.selectpicker').selectpicker('refresh');
            setTimeout(function () {
                currencyConverter(event.currentTarget.id);
            }, 100);
        });
        currencyConverter();
    });
})(jQuery);