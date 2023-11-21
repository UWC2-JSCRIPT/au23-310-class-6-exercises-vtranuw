$(document).ready(function () {
  // All of your code in here
  // This uses jQuery, but there is a plain
  // JavaScript way to do this as well
  // Create a new <a> element containing the text "Buy Now!"
  // with an id of "cta" after the last <p>
  $('<a id="cta">Buy Now!</a>').insertAfter("main p:last");
  // Access (read) the data-color attribute of the <img>,
  // log to the console
  let imgColor = $("img").data("color");
  console.log(imgColor);
  // Update the third <li> item ("Turbocharged"),
  // set the class name to "highlight"
  $("ul li").eq(2).addClass("highlight");
  // Remove (delete) the last paragraph
  // (starts with "Available for purchase now…")
  $("main p:last").remove();
  // Create a listener on the "Buy Now!" link that responds to a click event.
  // When clicked, the the "Buy Now!" link should be removed
  // and replaced with text that says "Added to cart"
  $("#cta").on("click", function () {
    $(this).replaceWith("<p>Added to cart</p>");
  });
});
