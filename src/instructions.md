# Instructions

Create an app that keeps track of a total count.

See the final result [here](https://mjn50xwm6x.codesandbox.io/).

## Requirements

The counter should:

- display the count
- display a + button
- display a - button
- display a reset button
- increase the count when + is clicked
- decrease the count when - is clicked
- ensure the count never goes below 0 (no negative numbers)
- reset the count when reset is clicked

## Approach

- use local state to keep track of the count, starting at 0
- add a function to increment the state
- add a function to decrement the state (make sure to keep it from going below 0)
- add a function to reset the state to 0
- all 3 buttons should be made from a single reusable component
