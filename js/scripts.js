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
    $("ul#List").children("li").first().click(function() {
  $(this).remove();});
    //$(".listItem").last().click(function() {
      //$("#show-task h2").text(newTask.taskName);
      //$(".taskLabel").text(newTask.taskName);

    //});

    $("input#new-task").val("");
  });
});
