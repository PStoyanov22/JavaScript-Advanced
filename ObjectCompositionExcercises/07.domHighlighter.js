function solution(selector) {
    let target = $(selector);
    let maxDepth = 0;
    let deepestElement = target;
    depthFirstSearch(0, target);
    highlight(maxDepth, deepestElement);

    function depthFirstSearch(depth, currentNode) {
        if (depth > maxDepth) {
            maxDepth = depth;
            deepestElement = currentNode;
        }

        let children = currentNode.children();
        for (let child of children) {
            depthFirstSearch(depth + 1, $(child));
        }
    }

    function highlight(remainingNodes, currentNode) {
       if(remainingNodes === -1){
           return

       }
       currentNode.addClass('highlight');
        let parent = currentNode.parent();
        highlight(remainingNodes - 1, $(parent));
    }
}
solution('.article');