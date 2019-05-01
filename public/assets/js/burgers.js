// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

  $(".submit-burger-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/newBurger", {
      type: "POST",
      data: newBurger
    }).then(
      function (pumpkin) {
        console.log("created new burger", pumpkin);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".eatButton").on("click", function (event) {

    
    var eaten = {
      id: $(this).parent().children(".burgerId").text(),
      devoured: true
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: eaten
    }).then(
      function (pumpkin) {
        console.log("You ate a burger", pumpkin);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });






});
