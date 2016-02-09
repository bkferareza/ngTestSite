var app = angular.module('MyApp', ['ngRoute',
    'ngResource', 'homeModule'])
    .value('toastr', toastr);
toastr.options = {
    "closeButton": true,
    "positionClass": "toast-bottom-right",
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "preventDuplicates": true,
    "hideMethod": "fadeOut"
};

$('#loginModal').modal({
    backdrop: 'static',
    keyboard: false
})

