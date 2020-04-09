class Trie {
  constructor() {
    this.root = [];
    this.isWord = false;
  }

  //insert a word into the trie
  insert(word) {
    let node = this.root;
    let char = word.slice(0,1);
    word = word.slice(1);

    let child;

    while(char.length > 0) {
        if(node.children[char] === undefined) {
            child = new Trie(char);
            node.children[node] = child;
        } else {
            child = node.children[char];
        }
        node = child;
        char = word.slice(0,1);
        word = word.slice(1);
    }
    child.isWord = true;
  }

  //returns the word if its in the trie
  search(word) {
      let root = this.root 
        while (word.length > 0) {
            let char = ward[0]
            if (root[char]) {
                word = word.substr(1)
                root = root[char]
        } else {
            return false;
        }
  }

  // Returns if there is any word in the trie that starts with the given prefix
  //startsWith(prefix) {}
}

obj = new Trie();
obj.insert('cat');
cosnole.log(obj.search('cat'));


