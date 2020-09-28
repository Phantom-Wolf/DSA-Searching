#### 1) How Many Searches?

Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm,
identify the sequence of numbers that each recursive call will search to try and find 8.

[3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
[3, 5, 6, 8, 11]
[6, 8, 11]
[8]

Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 16.

[3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
[12, 14, 15, 17, 18]
[15, 17, 18]
[15]

#### 2) Adding a React UI

For exercises 1 and 2, you will be using a search algorithm to search for an item in a dataset. You will be testing the efficiency of 2 search algorithms, linear search and binary search. You will also have a UI (a simple textbox will do) through which you will be sending your input that you want to search. There is no server-side to this program. All of this should be done using React.

Linear search

Given the following dataset, find out how many tries it took to search for a particular item in the dataset. If the item is not in the dataset, provide a message and indicate how many searches it took to find that out.

89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5

Binary search

Use the same front end and the dataset from the previous exercise for this exercise. Use array.sort to sort the dataset. Then implement a binary search to find a particular value in the dataset. Display how many tries it took to search for a particular item in the dataset using binary search. If the item is not in the dataset, provide a message and indicate how many searches it took to find that out.

- refer to BinaryLinearSearch.js

#### 3) Find a Book

Imagine you are looking for a book in a library with a Dewey Decimal index. How would you go about it? Can you express this process as a search algorithm? Implement your algorithm to find a book whose Dewey and book title is provided.

- refer to DeweyIndex.js

#### 4) Searching a BST

No coding needed for these drills. Once you have answered it, you can then code the tree and implement the traversal to see if your answer is correct.

Given a binary search tree whose in-order and pre-order traversals are respectively 14 15 19 25 27 35 79 89 90 91 and 35 25 15 14 19 27 89 79 91 90. What would be its postorder traversal?

14 15 19 25 27 79 89 90 91 35

The post order traversal of a binary search tree is 5 7 6 9 11 10 8. What is its pre-order traversal?

8 6 5 7 10 9 11

#### 6) Find the next commanding officer

whosInChargeNext() {
let currentNode = this.root;
let list = [];
let queue = [];
queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }
    return list;

}

#### 7) max profit

The share price for a company over a week's trading is as follows: [128, 97, 121, 123, 98, 97, 105]. If you had to buy shares in the company on a particular day, and sell the shares on a subsequent day, write an algorithm to work out what the maximum profit you could make would be.

    function maxProfit(arr) {
        let currentMax = 0
        let totalMax = 0
        let maxIndex = 0

        for (let i=1;i< arr.length;i++) {
            if (currentMax + arr[i] > 0) {
                currentMax = currentMax + arr[i]
            } else {
                currentMax = 0
            }

            if (currentMax > totalMax) {
                totalMax = currentMax
                maxIndex = i
            }
        }


        return `Buy on day ${index} and sell on day ${index + 1} to earn ${totalMax} profit`

    }
