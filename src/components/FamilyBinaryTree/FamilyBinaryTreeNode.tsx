import React, {useEffect, useState} from 'react';
import {FamilyBinaryTreeNodeT} from "../../types/BinaryTree";
import {Box, Text} from "grommet";
import Avatar from "react-avatar";
import Colors from "../../constants/Colors";

interface Props {
    node: FamilyBinaryTreeNodeT,
    onClick?: (node: FamilyBinaryTreeNodeT) => void
}

const FamilyBinaryTreeNode: React.FC<Props> = ({
                                                   node,
    onClick
                                               }) => {
    const [initials, setInitials] = useState<string | undefined>(undefined);

    useEffect(() => {
        setInitials(node.full_name ? undefined : '-');
    }, [node]);

    return (
        <Box focusIndicator={false} onClick={() => {
            onClick && onClick(node);
        }} align={'center'} direction={'column'} alignContent="center" justify={'center'}>
            <Avatar
                round
                size={'75px'}
                fgColor={Colors.secondaryLight}
                color={node.full_name ? Colors.primary : Colors.secondaryLight}
                maxInitials={2}
                name={initials || node.full_name}
            />
                <Text>{node.username !== 'Null' ? node.username : '-'}</Text>
        </Box>
    );
};

export default FamilyBinaryTreeNode;
