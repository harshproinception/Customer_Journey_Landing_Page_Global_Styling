(function () {
    "use strict";

    function addClass(element, className) {
        if (element && !element.classList.contains(className)) {
            element.classList.add(className);
        }
    }

    function find(text) {
        var elements = document.querySelectorAll(
            "a, button, label, span, div"
        );

        var results = [];

        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];

            var value = (element.innerText || element.textContent || "")
                .replace(/\s+/g, " ")
                .trim();

            if (value === text) {
                results.push(element);
            }
        }

        return results;
    }

    function prepare() {

        var question = find(
            "Does the customer have a Saudi National ID or Iqama?"
        );

        var yesOption = find(
            "Yes (You can sell to them directly — choose a unit, send an offer, complete the contract.)"
        );

        var noOption = find(
            "No — they are from outside Saudi Arabia"
        );

        var continueButton = find("Continue");

        var cancelButton = find("Cancel");

        var steps = [
            ["Who is the customer?", 1],
            ["Their details", 0],
            ["Check and finish", 0]
        ];

        for (var i = 0; i < question.length; i++) {
            addClass(
                question[i],
                "k2-question-title"
            );
        }

        for (var i = 0; i < yesOption.length; i++) {
            addClass(
                yesOption[i],
                "k2-choice"
            );
        }

        for (var i = 0; i < noOption.length; i++) {
            addClass(
                noOption[i],
                "k2-choice"
            );
        }

        for (var i = 0; i < continueButton.length; i++) {
            addClass(
                continueButton[i],
                "continue"
            );
        }

        for (var i = 0; i < cancelButton.length; i++) {
            addClass(
                cancelButton[i],
                "cancel"
            );
        }

        for (var i = 0; i < steps.length; i++) {

            var stepElements = find(
                steps[i][0]
            );

            for (var j = 0; j < stepElements.length; j++) {

                addClass(
                    stepElements[j],
                    "k2-step-label"
                );

                if (steps[i][1]) {
                    addClass(
                        stepElements[j],
                        "active"
                    );
                }
            }
        }

        if (question.length) {
            addClass(
                document.body,
                "customer-add-page"
            );
        }

        buildStepper(question);
    }

    function buildStepper(question) {

        if (
            document.querySelector(".k2-stepper") ||
            !question.length
        ) {
            return;
        }

        var view = question[0].closest(".view");

        var body =
            view &&
            (
                view.querySelector(".panel-body-wrapper") ||
                view.querySelector(".panel-body")
            );

        if (!body) {
            return;
        }

        var shell = document.createElement("div");

        var stepper = document.createElement("div");

        shell.className = "k2-add-customer-shell";

        stepper.className = "k2-stepper";

        [
            ["Who is the customer?", 1],
            ["Their details", 0],
            ["Check and finish", 0]
        ].forEach(function (step) {

            var stepContainer =
                document.createElement("div");

            var circle =
                document.createElement("div");

            var label =
                document.createElement("div");

            stepContainer.className =
                "k2-step" +
                (step[1] ? " active" : "");

            circle.className =
                "k2-step-circle";

            circle.textContent =
                step[1] ? "▶" : "";

            label.textContent =
                step[0];

            stepContainer.appendChild(
                circle
            );

            stepContainer.appendChild(
                label
            );

            stepper.appendChild(
                stepContainer
            );
        });

        shell.appendChild(
            stepper
        );

        body.insertBefore(
            shell,
            body.firstChild
        );
    }

    function run() {

        prepare();

        new MutationObserver(function () {

            prepare();

        }).observe(
            document.body,
            {
                childList: true,
                subtree: true
            }
        );
    }

    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            run
        );

    } else {

        run();

    }

})();