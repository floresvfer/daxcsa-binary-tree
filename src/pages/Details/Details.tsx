import React from 'react';

interface Props {

}
const Details: React.FC<Props> = () => {
    return (
        <div style={{
            backgroundColor: 'blue',
            width: '100vw',
            height: '100vh',
        }}>
            <a href={'./'}>inicio</a>
        </div>
    );
};

export default Details;
