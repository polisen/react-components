import React, {useRef, useMemo, useEffect} from 'react';
import styled from 'styled-components';
import {Gradient} from '../../GradientAnimation/Gradient.js';

export interface CreditCardProps {

  primary?: boolean;
  backgroundColor?: string;
  surfaceDirection: 'convex' | 'concave';
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}


const CreditCardContainer = styled.div`
  display: inline-block;
  border-radius: ${({theme}) => theme.border.radius};
  box-shadow: 6px 6px 20px 0 rgba(0, 0, 0, 0.25),
   -6px -6px 20px 0 rgba(255, 255, 255, 0.25);
  overflow: hidden;
  background: ${({surfaceDirection, theme}) => surfaceDirection && theme.neumorphism[surfaceDirection].background};
  :hover {
    button {
      transform: scale(1.01);
      transition: .1s all ease-in-out;
    }
  }
  width: 16em;
  height: 10em;
`


const StyledCanvas = styled.canvas`
  width: 100%;
  height: 100%;



`



export const CreditCard = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: CreditCardProps) => {
  const canvas = useRef(null)

  const gradient = useMemo(() => new Gradient(), []);

  useEffect(() => {
    if (canvas.current !== null) {
      gradient.initGradient(canvas.current)
    }
  }, [canvas.current]);

  useEffect(() => {
    console.debug(gradient);
  }, [gradient]);

  return (
    <CreditCardContainer {...props}>
        <StyledCanvas ref={canvas} id="gradient-canvas"></StyledCanvas>
    </CreditCardContainer>
  );
};
