$(function () {
    $(".eat-burger").on("click", function (event) {
        const id = $(this).data("id");

        const newDevouredState = {
            devoured: true
        };

        $.ajax("api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("Changed devoured to", true);

                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        const newBurger = {
            name: $("#ca").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Created new burger");

                location.reload();
            }
        );
    });
});