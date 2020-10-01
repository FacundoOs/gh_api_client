## Written Exam

How and when to use `.forEach`, `.map`, `.filter`, and `.find` in JavaScript?

Please give an as extensive explanation as possible with code examples and potential use cases. Write your answer below and use markdown to format your text.

.forEach:
is a control flow statement for traversing items in a collection. Foreach is usually used in place of a standard for loop statement
# array1.forEach(element => console.log(element));

.map:
takes each element form an original array, trnasforms it with a function that you specify, and adds the result to a new array in the same order
# const map1 = array1.map(x => x * 2);

.filter
The filter() method creates a new array with all elements that pass the test implemented by the provided function.
# const result = words.filter(word => word.length > 6);

.find:
returns the value of the first element in the provided array that satisfies the provided testing function.
# const found = array1.find(element => element > 10);
