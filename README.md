## challenge: 

---------------------------------------------------
## challenge: compare_calenders
my attempt at a google coding interview given by Clément Mihailescu - https://www.youtube.com/watch?v=3Q_oYDQ2whs

my first attempt:
  passing each calender array to availableDays() function ruturns a new array of possible times within the calender boundary.  
  You then simply filter both returned possible times for the free slots available for a meeting. 
 
 ```javascript
 The availableDays() has a time complexity of O(n). 
 The getFreeSlots() has a time complexity of o(n^2)
      since with each iteration n of array a, we're comparing against all n of array b.
       return aPossible.filter( each => bPossible.includes( each ));
              // filter - O(n)
                 // includes - O(n)
              = O( n * n ) || O(n^2).
```
### to do:
 - apply a divide & conquer algorithm to reduce the complexity of getFreeSlots().
 
          - array b is sorted so maybe a binary search?
          - or, just remove items found from n of iterated a. so , with each pass of a, b gets smaller.
              
 - test against meetings that start at odd times. not just 00 or 30.


...
