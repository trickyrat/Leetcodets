import { Solution } from "../src/Solution";
import { Node } from "../src/Node";
import { createTreeNodeByDFS, createTreeNodeByBFS, createListNode, convertListNodeToArray } from "../src/Util";

let solution = new Solution();

test("TwoSumTest", () => {
  expect(solution.twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  expect(solution.twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  expect(solution.twoSum([3, 3], 6)).toEqual([0, 1]);
  expect(solution.twoSum([1, 3], 6)).toEqual([]);
});


test("AddTwoNumbersTest", () => {
  expect(convertListNodeToArray(solution.addTwoNumbers(createListNode([2, 4, 3]), createListNode([5, 6, 4])))).toEqual([7, 0, 8]);
  expect(convertListNodeToArray(solution.addTwoNumbers(createListNode([0]), createListNode([0])))).toEqual([0]);
  expect(convertListNodeToArray(solution.addTwoNumbers(createListNode([9, 9, 9, 9, 9, 9, 9]), createListNode([9, 9, 9, 9])))).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
});

test("LengthOfLongestSubstringTest", () => {
  expect(solution.longestSubstringWithoutRepeating("abcabcbb")).toEqual(3);
  expect(solution.longestSubstringWithoutRepeating("bbbbb")).toEqual(1);
  expect(solution.longestSubstringWithoutRepeating("pwwkew")).toEqual(3);
});

test("ZConvertTest", () => {
  expect(solution.zconvert("PAYPALISHIRING", 3)).toEqual("PAHNAPLSIIGYIR");
  expect(solution.zconvert("PAYPALISHIRING", 4)).toEqual("PINALSIGYAHRPI");
  expect(solution.zconvert("A", 1)).toEqual("A");
});

test("ReverseIntNumberTest", () => {
  expect(solution.reverseIntNumber(123)).toEqual(321);
  expect(solution.reverseIntNumber(-123)).toEqual(-321);
  expect(solution.reverseIntNumber(120)).toEqual(21);
  expect(solution.reverseIntNumber(100)).toEqual(1);
  expect(solution.reverseIntNumber(0)).toEqual(0);
  expect(solution.reverseIntNumber(-2147483649)).toEqual(0);
  expect(solution.reverseIntNumber(-2147483648)).toEqual(0);
});

test("RemoveElementTest", () => {
  expect(solution.removeElement([3, 2, 2, 3], 3)).toEqual(2);
  expect(solution.removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toEqual(5);
})

test("SetZeroesTest", () => {
  let input1 = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
  solution.setZeroes(input1)
  expect(input1).toEqual([[1, 0, 1], [0, 0, 0], [1, 0, 1]]);
  let input2 = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
  solution.setZeroes(input2)
  expect(input2).toEqual([[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]);
});


test("PathSumTest", () => {
  let root = createTreeNodeByBFS("1,2,3");
  let root1 = createTreeNodeByBFS("5,4,8,11,null,13,4,7,2,null,null,5,1");
  expect(solution.pathSum(root, 2)).toEqual([]);
  expect(solution.pathSum(root1, 22)).toEqual([[5, 4, 11, 2], [5, 8, 4, 5]]);
});

test("TrailingZeroesTest", () => {
  expect(solution.trailingZeroes(3)).toEqual(0);
  expect(solution.trailingZeroes(5)).toEqual(1);
  expect(solution.trailingZeroes(0)).toEqual(0);
});

test("AddDigitTest", () => {
  expect(solution.addDigits(38)).toEqual(2);
  expect(solution.addDigits(0)).toEqual(0);
});

test("CountNumbersWithUniqueDigitsTest", () => {
  expect(solution.countNumbersWithUniqueDigits(2)).toEqual(91);
  expect(solution.countNumbersWithUniqueDigits(0)).toEqual(1);
  expect(solution.countNumbersWithUniqueDigits(1)).toEqual(10);
});

test("LexicalTest", () => {
  expect(solution.lexicalOrder(13)).toEqual([1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(solution.lexicalOrder(2)).toEqual([1, 2]);
})

test("FindDiagonalOrder", () => {
  expect(solution.findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([1, 2, 4, 7, 5, 3, 6, 8, 9]);
  expect(solution.findDiagonalOrder([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4]);
  expect(solution.findDiagonalOrder([])).toEqual([]);
});

test("ConvertToBase7", () => {
  expect(solution.convertToBase7(100)).toEqual("202");
  expect(solution.convertToBase7(-7)).toEqual("-10");
  expect(solution.convertToBase7(0)).toEqual("0");
});

test("FindLUSLength", () => {
  expect(solution.findLUSLength("aba", "cdc")).toEqual(3);
  expect(solution.findLUSLength("aaa", "bbb")).toEqual(3);
  expect(solution.findLUSLength("aaa", "aaa")).toEqual(-1);
});

test("OptimalDivisionTest", () => {
  expect(solution.optimalDivision([1000, 100, 10, 2])).toEqual("1000/(100/10/2)");
  expect(solution.optimalDivision([1000])).toEqual("1000");
  expect(solution.optimalDivision([1000, 100])).toEqual("1000/100");
});

test("PreorderTest", () => {
  let root = new Node(1);
  let first_child = new Node(3);
  first_child.children.push(new Node(5));
  first_child.children.push(new Node(6));
  root.children.push(first_child);
  root.children.push(new Node(2));
  root.children.push(new Node(4));
  expect(solution.preorder(root)).toEqual([1, 3, 5, 6, 2, 4]);
  let root2 = null;
  expect(solution.preorder(root2)).toEqual([]);
})

test("PostorderTest", () => {
  let root = new Node(1);
  let first_child = new Node(3);
  first_child.children.push(new Node(5));
  first_child.children.push(new Node(6));
  root.children.push(first_child);
  root.children.push(new Node(2));
  root.children.push(new Node(4));
  expect(solution.postorder(root)).toEqual([5, 6, 3, 2, 4, 1]);
  let root2 = null;
  expect(solution.postorder(root2)).toEqual([]);
})

test("CalPointsTest", () => {
  expect(solution.calPoints(["5", "2", "C", "D", "+"])).toEqual(30);
  expect(solution.calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"])).toEqual(27);
  expect(solution.calPoints(["1"])).toEqual(1);
});

test("LongestWord", () => {
  expect(solution.longestWord(["w", "wo", "wor", "worl", "world"])).toEqual("world");
  expect(solution.longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"])).toEqual("apple");
})

test("NextGreatestLetterTest", () => {
  expect(solution.nextGreatestLetter(["c", "f", "j"], "a")).toEqual("c");
  expect(solution.nextGreatestLetter(["c", "f", "j"], "c")).toEqual("f");
  expect(solution.nextGreatestLetter(["c", "f", "j"], "d")).toEqual("f");
  expect(solution.nextGreatestLetter(["d"], "z")).toEqual("d");
})

test("SelfDividingNumbersTest", () => {
  expect(solution.selfDividingNumbers(1, 22)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]);
  expect(solution.selfDividingNumbers(47, 85)).toEqual([48, 55, 66, 77]);
})

test("CountPrimeSetBitsTest", () => {
  expect(solution.countPrimeSetBits(6, 10)).toEqual(4);
  expect(solution.countPrimeSetBits(10, 15)).toEqual(5);
})

test("UniqueMorseRepresentationsTest", () => {
  expect(solution.uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])).toEqual(2);
  expect(solution.uniqueMorseRepresentations(["a"])).toEqual(1);
})

test("NumberOfLinesTest", () => {
  expect(solution.numberOfLines([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], "abcdefghijklmnopqrstuvwxyz")).toEqual([3, 60]);
  expect(solution.numberOfLines([4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], "bbbcccdddaaa")).toEqual([2, 4]);
})

test("MostCommonWord", () => {
  expect(solution.mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"])).toEqual("ball");
})

test("MaximumWealthTest", () => {
  expect(solution.maximumWealth([[1, 2, 3], [3, 2, 1]])).toEqual(6);
  expect(solution.maximumWealth([[1, 5], [7, 3], [3, 5]])).toEqual(10);
  expect(solution.maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]])).toEqual(17);
})

test("PivotIndexTest", () => {
  expect(solution.pivotIndex([2, 3, -1, 8, 4])).toEqual(3);
  expect(solution.pivotIndex([1, -1, 4])).toEqual(2);
  expect(solution.pivotIndex([2, 5])).toEqual(-1);
})

test("CountKDifferenceTest", () => {
  expect(solution.countKDifference([1, 2, 2, 1], 1)).toEqual(4);
  expect(solution.countKDifference([1, 3], 3)).toEqual(0);
  expect(solution.countKDifference([3, 2, 1, 5, 4], 2)).toEqual(3);
})

test("MaximumDifferenceTest", () => {
  expect(solution.maximumDifference([7, 1, 5, 4])).toEqual(4);
  expect(solution.maximumDifference([9, 4, 3, 2])).toEqual(-1);
  expect(solution.maximumDifference([1, 5, 2, 10])).toEqual(9);
})

test("CountMaxOrSubsetsTest", () => {
  expect(solution.countMaxOrSubsets([3, 1])).toEqual(2);
  expect(solution.countMaxOrSubsets([2, 2, 2])).toEqual(7);
  expect(solution.countMaxOrSubsets([3, 2, 1, 5])).toEqual(6);
})

test("PlatesBetweenCandlesTest", () => {
  expect(solution.platesBetweenCandles("**|**|***|", [[2, 5], [5, 9]])).toEqual([2, 3]);
  expect(solution.platesBetweenCandles("***|**|*****|**||**|*", [[1, 17], [4, 5], [14, 17], [5, 11], [15, 16]])).toEqual([9, 0, 0, 0, 0]);
})