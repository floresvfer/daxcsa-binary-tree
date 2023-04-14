import React from 'react';
import {Box, Button, Text, Card, CardBody, CardFooter, CardHeader} from "grommet";
import {Favorite, ShareOption} from "grommet-icons";
import {FamilyBinaryTreeNodeT} from "../../types/BinaryTree";
import Colors from "../../constants/Colors";

const FamilyBinaryTreeNodeDetailCardRow: React.FC<{
    content: {
        title: string,
        value: string
    }
}> = ({
          content
      }) => {
    const {title, value} = content;
    return (
        <Box style={{
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '2%',
        }} direction={'row'} justify={'between'} align={'stretch'}>
            <Text size={'small'} weight={'bold'}>{title}</Text>
            <Text size={'small'} weight={'lighter'}>{value}</Text>
        </Box>
    )
}

export type PropertyToDisplayT = {
    title?: string,
    value: keyof FamilyBinaryTreeNodeT
}

interface Props {
    node: FamilyBinaryTreeNodeT,
    propertiesToDisplay?: Array<PropertyToDisplayT>
}

const FamilyBinaryTreeNodeDetailCard: React.FC<Props> = ({
                                                             node,
    propertiesToDisplay
                                                         }) => {
    return (
        <>
            {node && node.username !== "Null" ?
                <Card focusIndicator={false} background={Colors.secondaryLight}>
                    <CardHeader pad="medium">
                        <Text>
                            {
                                node.full_name ? node.full_name : node.username
                            }
                        </Text>
                    </CardHeader>
                    { propertiesToDisplay &&
                    <CardBody>
                        <Box align={'start'}>
                            {
                                propertiesToDisplay.map((property, index) =>
                                    <FamilyBinaryTreeNodeDetailCardRow content={{
                                        value: node[property.value] + '',
                                        title: property.title ? property.title : property.value
                                    }} />
                                )
                            }
                        </Box>
                    </CardBody>
                    }
                    <CardFooter pad={{horizontal: "small"}} background="#C8C8C8">
                        <Button
                            icon={<Favorite color="red"/>}
                            hoverIndicator
                        />
                        <Button icon={<ShareOption color="plain"/>} hoverIndicator/>
                    </CardFooter>
                </Card> :
                <></>
            }
        </>
    );
};

export default FamilyBinaryTreeNodeDetailCard;
