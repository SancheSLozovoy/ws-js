// Напишите функцию для поиска значения в n-арном дереве. 
// Если искомое значение отсутствует, необходимо вернуть значение -1. Найдите 11, 1 и 25 узел из дерева.

function* treeFunc(node) {
    yield node.node;
  
    for (let child of node.children) {
      yield* treeFunc(child);
    }
}
  
  function find(tree, target) {
    for (let nodeValue of treeFunc(tree)) {
      if (nodeValue === target) {
        return nodeValue;
      }
    }
    return -1;
}

const tree = {
  node: 1,
  children: [
    {
      node: 2,
      children: [
        {
          node: 3,
          children: [
            {
              node: 4,
              children: [
                {
                  node: 5,
                  children: [],
                },
                {
                  node: 6,
                  children: [],
                },
                {
                  node: 7,
                  children: [],
                },
                {
                  node: 8,
                  children: [],
                },
              ],
            },
            {
              node: 9,
              children: [],
            },
          ],
        },
      ],
    },
    {
      node: 10,
      children: [
        {
          node: 11,
          children: [
            {
              node: 12,
              children: [],
            },
          ],
        },
        {
          node: 13,
          children: [],
        },
        {
          node: 14,
          children: [],
        },
      ],
    },
  ],
};

console.log(find(tree, 2))
console.log(find(tree, 11))
console.log(find(tree, 25))