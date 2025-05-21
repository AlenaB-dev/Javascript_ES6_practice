/**
 * EXAMPLE 1
 */

const sum = (a, b) => a + b;
console.log(sum(1, 2));

/**
 * EXAMPLE 2
 */

const post = {
  title: "Sample letter",
  comments: 10,
  shared: true,
  published: true,
  postId: 5124,
};

// // explicit return of the object
// const processedPost = (post) => {
//   return {
//     title: post.title,
//     comments: post.comments,
//     popular: post.comments > 5 ? true : false,
//   };
// };

// implicit return of the object. Preferable way.
const processedPost = (post) => ({
  title: post.title,
  comments: post.comments,
  popular: post.comments > 5 ? true : false,
});

console.log(processedPost(post)); // {title: "Sample letter", comments: 10, popular: true}

/**
 * EXAMPLE 3
 *
 * Immediately invoked anonymous function expression
 */

(() => {
  function greet() {
    return "Hey, what's up?";
  }
  this.greet = greet;
  return this;
})(); //> window.greet()  < "Hey, what's up?"

(() => {
  this.sayBye = () => "Bye, bye"; // > window.sayBye() < "Bye, bye"
  return this;
})();
