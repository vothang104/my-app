import React from 'react';
import styled from 'styled-components';

const StyledCardList = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export default function CardList({ children }) {
    return (
        <StyledCardList>
            {children}
        </StyledCardList>
    )
}
