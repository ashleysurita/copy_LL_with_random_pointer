function(head) {
   let map = new Map();
    let curr = head;

    // deep copy to map
    while(curr) {
        map.set(curr, new Node(curr.val, null, null));
        curr = curr.next;
    }
    
  // start from the beginning
    curr = head;
    while(curr) {
      // from original list, get next key to set new node
        map.get(curr).next = curr.next !== null ? map.get(curr.next) : null;
      // if original had a random, find and set mapped random
        map.get(curr).random = curr.random !== null ? map.get(curr.random) : null;
        curr = curr.next;
    }
    return map.get(head);
};
