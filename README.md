# WorkDayScheduler

This application allows a user to add and save tasks to a planner for his or her workday. 
The background color of the task description will change depending on the current hour:
grey background color for past hours, red background color for current hour, and green background color for future hours. 

When the planner application is opened, 
the current date is displayed with a format of (day of week, month date).

Beneath the date,
users will find time blocks for the current day.

When viewing the time blocks,
users will find that each of the time blocks are color-coded to indicate whether it is past, current, or future.

When users click into a time block, 
then an event can be entered.

When users click the save button for its respective time block,
then the text for that event is saved in local storage.

When the page is refreshed,
then the saved events persist.
