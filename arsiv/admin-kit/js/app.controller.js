var app = angular.module('myApp', []);


app.controller('AdvancedInputs', function ($scope) {

    document.addEventListener("DOMContentLoaded", function () {
        // Choices.js
        new Choices(document.querySelector(".choices-single"));
        new Choices(document.querySelector(".choices-multiple"));
        // Flatpickr
        flatpickr(".flatpickr-minimum");
        flatpickr(".flatpickr-datetime", {
            enableTime: true,
            dateFormat: "Y-m-d H:i",
        });
        flatpickr(".flatpickr-human", {
            altInput: true,
            altFormat: "F j, Y",
            dateFormat: "Y-m-d",
        });
        flatpickr(".flatpickr-multiple", {
            mode: "multiple",
            dateFormat: "Y-m-d"
        });
        flatpickr(".flatpickr-range", {
            mode: "range",
            dateFormat: "Y-m-d"
        });
        flatpickr(".flatpickr-time", {
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",
        });
    });
});
app.controller('Notifications', function ($scope) {

    console.log("ee")
    var currentMessageIndex = -1;

    function getMessage() {
        var messages = [
            "My name is Inigo Montoya. You killed my father. Prepare to die!",
            "Are you the six fingered man?",
            "Inconceivable!",
            "I do not think that means what you think it means.",
            "Have fun storming the castle!",
        ];
        currentMessageIndex++;
        if (currentMessageIndex === messages.length) {
            currentMessageIndex = 0;
        }
        return messages[currentMessageIndex];
    };
    document.querySelector("#notyf-show").addEventListener("click", function () {
        var message = document.querySelector("#notyf-message").value || getMessage();
        var type = document.querySelector("#notyf-type").value;
        var duration = document.querySelector("#notyf-duration").value;
        var ripple = document.querySelector("#notyf-ripple").checked;
        var dismissible = document.querySelector("#notyf-dismissible").checked;
        var positionX = document.querySelector("input[name=\"notyf-position-x\"]:checked").value;
        var positionY = document.querySelector("input[name=\"notyf-position-y\"]:checked").value;
        window.notyf.open({
            type,
            message,
            duration,
            ripple,
            dismissible,
            position: {
                x: positionX,
                y: positionY
            }
        });
    });
});
app.controller('OffcanvasPro', function ($scope) {

    console.log("ee")
    var currentMessageIndex = -1;

    function getMessage() {
        var messages = [
            "My name is Inigo Montoya. You killed my father. Prepare to die!",
            "Are you the six fingered man?",
            "Inconceivable!",
            "I do not think that means what you think it means.",
            "Have fun storming the castle!",
        ];
        currentMessageIndex++;
        if (currentMessageIndex === messages.length) {
            currentMessageIndex = 0;
        }
        return messages[currentMessageIndex];
    };
    document.querySelector("#notyf-show").addEventListener("click", function () {
        var message = document.querySelector("#notyf-message").value || getMessage();
        var type = document.querySelector("#notyf-type").value;
        var duration = document.querySelector("#notyf-duration").value;
        var ripple = document.querySelector("#notyf-ripple").checked;
        var dismissible = document.querySelector("#notyf-dismissible").checked;
        var positionX = document.querySelector("input[name=\"notyf-position-x\"]:checked").value;
        var positionY = document.querySelector("input[name=\"notyf-position-y\"]:checked").value;
        window.notyf.open({
            type,
            message,
            duration,
            ripple,
            dismissible,
            position: {
                x: positionX,
                y: positionY
            }
        });
    });
});
app.controller('Modals', function ($scope) {
});
app.controller('DragDrop', function ($scope) {

    document.addEventListener("DOMContentLoaded", function () {
        dragula([
            document.querySelector("#tasks-backlog"),
            document.querySelector("#tasks-progress"),
            document.querySelector("#tasks-completed")
        ]);
    });
    document.addEventListener("DOMContentLoaded", function (event) {
        setTimeout(function () {
            if (localStorage.getItem('popState') !== 'shown') {
                window.notyf.open({
                    type: "success",
                    message: "Get access to all 500+ components and 45+ pages with AdminKit PRO. <u><a class=\"text-white\" href=\"https://adminkit.io/pricing\" target=\"_blank\">More info</a></u> 🚀",
                    duration: 10000,
                    ripple: true,
                    dismissible: false,
                    position: {
                        x: "left",
                        y: "bottom"
                    }
                });

                localStorage.setItem('popState', 'shown');
            }
        }, 15000);
    });
});




app.controller('Modals', function ($scope) {


});
app.controller('Modals', function ($scope) {


});
app.controller('Modals', function ($scope) {


});
app.controller('Modals', function ($scope) {


});
