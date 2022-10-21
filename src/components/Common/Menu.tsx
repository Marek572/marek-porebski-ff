import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import styled, {css} from 'styled-components';

import { SomeSpan } from './Components'
import {stackColor} from '../../styleHelpers/colors'

const Wrapper = styled.div`
    border: 10px solid ${stackColor.black};
`;

const SecondSpan = styled(SomeSpan)`
    border: 3px solid yellow;
`;

const ExampleDiv = styled.div<{isActive: boolean}>`
    background: yellow;
    ${props => props.isActive && css`
        background: blue;
    `}
`;

export const Menu: FC = () => {
    return (
        <Wrapper>
            <SecondSpan>some txt</SecondSpan>
            <ExampleDiv isActive>some div</ExampleDiv>
            <ExampleDiv isActive={false}>some div</ExampleDiv>
            <Link to="/">Home</Link>
            <Link to="posts">Posts</Link>
        </Wrapper>
    )
}