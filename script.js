$(window).on("load", function () {
  //sets current day format to day of week, month(name) date
  $("#currentDay").text(moment().format("dddd, MMMM Do"));

  //hour variable for currentID comparisons
  var hour = moment().hour();

  //saves task text and hour of time block to local storage
  $(".saveBtn").click(function () {
    var taskText = $(this).siblings(".description").val();

    var blockHour = parseInt($(this).siblings(".hour").text().substring());

    localStorage.setItem(blockHour, taskText);
  });

  //fills text area elements with values saved to local storage
  //assigns classes to time blocks that change their colors depending on current hour

  $(document)
    .find(".time-block")
    .each(function () {
      //id variable for finding the current time block
      var currentID = parseInt($(this).find(".hour").text().substring());

      $(this).find(".description").val(localStorage.getItem(currentID));
      //compares PM hours (every block past 12 PM) to moment().hour()
      if (
        currentID === 1 ||
        currentID === 2 ||
        currentID === 3 ||
        currentID === 4 ||
        currentID === 5
      ) {
        //adds past, present, or future class to text area depending on current hour for PM past 12 time blocks
        currentID += 12;
        if (currentID < hour) {
          $(this).find(".description").addClass("past");
        } else if (currentID === hour) {
          $(this).find(".description").addClass("present");
        } else if (currentID > hour) {
          $(this).find(".description").addClass("future");
        }
      } 
        //adds past, present, or future class to text area depending on current hour for 12 PM and earlier time blocks
        else if (currentID < hour) {
        $(this).find(".description").addClass("past");
      } else if (currentID === hour) {
        $(this).find(".description").addClass("present");
      } else if (currentID > hour) {
        $(this).find(".description").addClass("future");
      }
    });
});
