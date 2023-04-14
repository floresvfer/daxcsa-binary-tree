import React from 'react';
import {FamilyBinaryTreeNodeT} from "../../../types/BinaryTree";
import {Box, Button} from "grommet";
import FamilyBinaryTreeNodeDetailCard, {
    PropertyToDisplayT
} from "../../../components/FamilyBinaryTree/FamilyBinaryTreeNodeDetailCard";
import Colors from "../../../constants/Colors";
// @ts-ignore
import Modal from 'react-modal';

interface Props {
    node: FamilyBinaryTreeNodeT | undefined,
    propertiesToDisplay?: Array<PropertyToDisplayT>,
    onClose?: () => void
}

const ModalNodeDetailsMobile: React.FC<Props> = ({
    node,
    propertiesToDisplay,
    onClose
                                                 }) => {
    return (
        <Modal
            shouldCloseOnOverlayClick={true}
            isOpen={node}
            onAfterOpen={() => {
            }}
            onRequestClose={onClose}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    zIndex: 10000
                },
                content: {
                    backgroundColor: 'transparent',
                    borderColor: 'transparent',
                    zIndex: 10000,
                    padding: 0,
                }
            }}
        >
            <Box>
                {node &&
                    <FamilyBinaryTreeNodeDetailCard propertiesToDisplay={propertiesToDisplay} node={node}></FamilyBinaryTreeNodeDetailCard>
                }
                <Box style={{
                    width: '90%',
                    alignSelf: 'center',
                    marginTop: '5%'
                }}>
                    <Button  onClick={onClose} style={{
                        backgroundColor: Colors.tertiary,
                        borderColor: 'transparent',
                    }} label="Close" />
                </Box>
            </Box>
        </Modal>
    );
};

export default ModalNodeDetailsMobile;
