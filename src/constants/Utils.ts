import {DaxcsaBinaryTreeChildNodeT, DaxcsaBinaryTreeNodeT, FamilyBinaryTreeNodeT} from "../types/BinaryTree";
/**
 *
 * @param data
 * @constructor
 */
const ParseDataToFamilyBinaryTreeType = (data: Array<DaxcsaBinaryTreeNodeT>): Array<FamilyBinaryTreeNodeT> => {
    const familyBinaryTreeNodes = Array<FamilyBinaryTreeNodeT>();

    const getChildsOrder = (nodes: [DaxcsaBinaryTreeChildNodeT, DaxcsaBinaryTreeChildNodeT] | null | undefined): {
        left_child_id: number | null,
        right_child_id: number | null,
    } => {
        if(!nodes) return {
            left_child_id: null,
            right_child_id: null
        }
        const leftNode = nodes?.find(node => node?.binary_placement === 'Left');
        const rightNode = nodes?.find(node => node?.binary_placement === 'Right');
        return {
            left_child_id: leftNode ? leftNode.distributor_id : null,
            right_child_id: rightNode ? rightNode.distributor_id : null
        }
    }

    const traverse = (node: DaxcsaBinaryTreeChildNodeT) =>{
        if(!node) return;

        familyBinaryTreeNodes.push({
            ...node,
            id: node.distributor_id,
            ...getChildsOrder(node.children),
            image: 'https://i.imgur.com/yzUDPMJ.png'
        });
        if(!node.children) return;
        traverse(node.children[0]);
        traverse(node.children[1]);
    }

    traverse(data[0]);

    return familyBinaryTreeNodes;
}

export {
    ParseDataToFamilyBinaryTreeType
}
