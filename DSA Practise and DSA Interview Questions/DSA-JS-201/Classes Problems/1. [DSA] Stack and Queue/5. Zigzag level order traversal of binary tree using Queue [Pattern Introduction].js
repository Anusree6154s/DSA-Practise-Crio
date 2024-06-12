// Problem Description
// Given a binary tree, return the zigzag level order traversal of its nodes' values.

// (i.e. from left to right, then right to left for the next level and alternate for every level).


// For the tree given, zigzag traversal will be:

// 1
//2   3
//4 5  null null

// 1

// 3 2

// 4 5

// Input format
// Line 1 has the number of test cases (T)

// Line 2 to X: First Test Case details with the binary tree structure (refer section below for the format)

// Line X+1 to Y: Second Test case details and so on.

// Output format
// For each test case, print K lines, where K is the height of the tree. In each line print the values of the zigzag traversed node values.

// Constraints
// 1 <= T <= 1000

// 1 <= Number of nodes in a Tree <= 10000

// 0 <= Value of each node <= 10^9

// It's guaranteed that the sum of the number of tree nodes across all test cases will be less than 500000.

// Sample Input 1
// 1

// 5

// 5 1 4 3 6

// 1 2 3

// 2 -1 -1

// 3 4 5

// 4 -1 -1

// 5 -1 -1

// Sample Output 1
// 5

// 4 1

// 3 6

// Explanation 1
// Treeview

// image


function zigzagLevelOrder(root) {}