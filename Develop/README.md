## Assignment 5: Daily Task Calendar
---

### Functionality
This is a simple event tracker. It stores notes on a specific hour and saves them, and updates dynamically to show what events are past, present, or future.

Submitted text is stored locally and will persist and repopulate between sessions.

### Under the Hood
I figured that the easiest way to validate past/present/future would be to store a data tag corresponding to the hour and then compare that to the present time using moment(). Unfortunately I couldn't figure out a way of having those report as numbers instead of strings, so I still had to conver them, but it works.

The script contains intervals to update the clock and the classes, so they'll both update dynamically.

I considered populating the entire list using a loop, which wouldn't have been too hard. However, that could end up introducing a lot of bugs and complications in the way the script stores, parses, and populates from local storage. So I left that feature out since it was outside the scope of the project, and the elements aren't hard to add manually if you want to have more of them.

I noticed a bug with my applyClass interval late on Thursday evening, which I think I fixed. But it's hard to tell with only being able to check that once per hour.
