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
  $(".today-list").on("click", "a.delete", function (e) {
    e.stopPropagation();
    $(this)
      .parent()
      .fadeOut(1700, function () {
        // For extra credit : When you click delete on an item, make it fade out.
        $(this).remove();
      });
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
