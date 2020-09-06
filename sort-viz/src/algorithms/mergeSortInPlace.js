let sorted = [];

function recurse(str) {
  if (!str.length) {
    return;
  }
  sorted.push(str.slice(0, 2));
  console.log(sorted);
  recurse(str.slice(2));
}

recurse("teststring");
