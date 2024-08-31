/**
 * Word Ladder
  - Problem: Given two words (beginWord and endWord), and a dictionary's word list, find the length of the shortest transformation sequence from beginWord to endWord, such that:
  Only one letter can be changed at a time.
  Each transformed word must exist in the word list.
  Example:
  Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
  Output: 5
  - Concepts: BFS, Graph Traversal.
 */

function ladderLength(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList);

    if(!wordSet.has(endWord)) return 0;

    let queue = [[beginWord, 1]];

    while(queue.length > 0) {
        let [word, length] = queue.shift();

        if(word === endWord) return length;

        for(let i = 0; i< word.length; i++){
            for(let j = 97; j <= 122; j++){
                let newWord = word.slice(0, i) + String.fromCharCode(j) + word.slice(i+1);

                if(wordSet.has(newWord)){
                    queue.push([newWord, length+1]);
                    wordSet.delete(newWord); // Avoid visiting the same word again in the future
                }
            }
        }
    }
    return 0;
}

const list = ["hot", "dog", "lot", "log", "cog", "cow"];

console.log(ladderLength("hit", "cog", list)); // Output: 5

// Explanation: BFS is used to explore all possible word transformations level by level. The first time we reach endWord, we return the number of transformations.