function findCategory(categories, dewey, title) {
  if (dewey < 0 || dewey > 999) {
    return "Invalid Dewey Number";
  }
  if (typeof title !== "string") {
    return "Title must be a string";
  }

  const middle = Math.floor(categories / 2);

  if (middle === dewey) {
    return findTitle(categories[middle], title);
  } else if (middle < dewey) {
    return findCategory(categories.slice(middle), dewey, title);
  } else if (middle > dewey) {
    return findCategory(categories.slice(0, middle), dewey, title);
  }
}

function findTitle(category, title) {
  let result;

  category.forEach((book) => {
    if (book === title) {
      result = book;
    }
  });

  return result ? result : "The book was not found";
}
