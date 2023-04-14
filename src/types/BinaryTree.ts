export interface DaxcsaBinaryTreeNodeT {
    binary_placement: 'Left' | 'Right';
    category_name: string;
    children: [DaxcsaBinaryTreeChildNodeT, DaxcsaBinaryTreeChildNodeT];
    distributor_id: number;
    full_name: string;
    num_children: number;
    parent_id: number;
    parent_username: string;
    product_name: string;
    status: string;
    username: string;
}

export type DaxcsaBinaryTreeChildNodeT = DaxcsaBinaryTreeNodeT | null | undefined;

export interface FamilyBinaryTreeNodeT extends DaxcsaBinaryTreeNodeT {
    id: number;
    left_child_id: number | null,
    right_child_id: number | null,
    image: string
}
