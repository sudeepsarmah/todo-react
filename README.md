# FIXED ISSUES:
1. 'index' was undefined in handleRemoveTask
   - Trying to use 'index' in handleRemoveTask, but it’s not passed as a parameter
   - Added 'index' as a parameter
2. Arrow function body in .map() does not return JSX
   - Was writing like this '{tasks.map((task, index) => {}'
   - corrected by removing the curly brackets
3. handleTaskDown can access an out-of-bounds index
   - if (index < tasks.length) should be if (index < tasks.length - 1) to avoid trying to swap an item with an undefined element.
4. Incorrectly referencing task in .map()
   - Was trying to directly reference {task} but it's an object so can't directly reference it like that
   - Changed to {task.title} {task.detail} {task.date}
5. HandleTaskUp & HandleTaskDown issues
   - Instead of directly trying to destruct the array, used a temporary variable 'temp'
   - Ensures React properly detects changes, and better state handling

