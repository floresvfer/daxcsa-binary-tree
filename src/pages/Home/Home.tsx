import React, {useEffect, useState} from 'react';
import {
    Box, Button,
    Page,
    PageContent,
    PageHeader,
    Paragraph,
} from "grommet";

// @ts-ignore
import BinaryTree from "family-binary-tree";

import daxcsaData from "../../data/daxcsa.json";
import {ParseDataToFamilyBinaryTreeType} from "../../constants/Utils";
import {DaxcsaBinaryTreeNodeT, FamilyBinaryTreeNodeT} from "../../types/BinaryTree";
import FamilyBinaryTreeNode from "../../components/FamilyBinaryTree/FamilyBinaryTreeNode";
import FamilyBinaryTreeNodeDetailCard, {
    PropertyToDisplayT
} from "../../components/FamilyBinaryTree/FamilyBinaryTreeNodeDetailCard";
import {isMobile} from 'react-device-detect';
import './Home.css';
// @ts-ignore
import Modal from 'react-modal';
import Colors from "../../constants/Colors";
import ModalNodeDetailsMobile from "./components/ModalNodeDetailsMobile";

interface Props {

}

const Home: React.FC<Props> = () => {

    const [data, setData] = useState<Array<FamilyBinaryTreeNodeT>>([]);
    const [selectedNode, setSelectedNode] = useState<FamilyBinaryTreeNodeT | undefined>(undefined);

    const propertiesToDisplay: Array<PropertyToDisplayT> = [
        {
            value: 'username',
            title: 'Username'
        },
        {
            value: 'product_name',
            title: 'Product Name'
        },
        {
            value: 'category_name',
            title: 'Category Name'
        },
        {
            value: 'status',
            title: 'Status'
        },
        {
            value: 'num_children',
            title: 'Chlild Number'
        },
    ];

    useEffect(() => {
        const _data: Array<DaxcsaBinaryTreeNodeT> = daxcsaData.data.attributes as Array<DaxcsaBinaryTreeNodeT>;
        setData(ParseDataToFamilyBinaryTreeType(_data));
    }, [])

    return (
        <Page
            width={'100vw'}
            height={'100vh'}
            background={Colors.secondary}
            flex="grow"
            pad={{vertical: 'large', horizontal: 'small'}}
        >
            <ModalNodeDetailsMobile node={selectedNode} propertiesToDisplay={propertiesToDisplay} onClose={() => setSelectedNode(undefined)} />
            <PageContent>
                <PageHeader
                    title="Daxcsa"
                    subtitle="Genealogy tree"
                />
                <div style={{
                    maxWidth: '100vw'
                }}>
                    {
                        data &&
                        data.length > 0 &&
                        <BinaryTree
                            allUsers={data}
                            rootUser={data[0]}
                            bgSideBar={Colors.tertiary}
                            colorText={'#333'}
                            colorSideBar={'white'}
                            renderDetail={
                                (node: any) =>
                                    !isMobile ?
                                    <FamilyBinaryTreeNodeDetailCard propertiesToDisplay={propertiesToDisplay}
                                                                    node={node}/> : <></>
                            }
                            renderNode={
                                (node: any) =>
                                    <FamilyBinaryTreeNode
                                        onClick={isMobile ? setSelectedNode : undefined}
                                        node={node}/>
                            }
                            maxDeep={isMobile ? 2 : 4}
                        />
                    }
                </div>
            </PageContent>
        </Page>
    );
};

export default Home;
