$(document).ready(function () {
  /**
   * Toggles "done" class on <li> element
   */
  $(".today-list").on("click", "li", function () {
    $(this).toggleClass("done");
  });
  /**
   * Delete element when delete link clicked
   */
  $(".today-list").on("click", "a.delete", function (event) {
    event.stopPropagation(); // Prevents the li click event from firing
    $(this).parent().remove();
  });
  /**
   * Adds new list item to <ul>
   */
  const addListItem = function (e) {
    e.preventDefault();
    const text = $("#new-todo").val();
    if (text) {
      const newItem = $("<li>").append(
        $("<span>").text(text),
        $("<a>").addClass("delete").text("Delete")
      );
      $(".today-list").append(newItem);
      $("#new-todo").val("");
    }
  };

  // add listener for add
  $(".add-item").click(addListItem);
});
