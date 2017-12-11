//business logic
function task(name) {
  this.taskName = name;
}

// user interface logic
$(document).ready(function() {
  $("form#toDoList").submit(function(event) {
    event.preventDefault();

    var inputTask = $("input#new-task").val();

    var newTask = new task(inputTask);

    $("ul#List").append("<li><span class='listItem'>" + newTask.taskName + "</span></li>");

    $(".taskLabel").last().click(function() {
      $("#show-task").toggle();
      $("#show-task h2").text(newTask.taskName);
      //$(".taskLabel").text(newTask.taskName);

    });

    $("input#new-task").val("");
  });
});
