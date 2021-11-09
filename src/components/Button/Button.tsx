import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  surfaceDirection: 'convex' | 'concave';
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}


const ButtonContainer = styled.div`
  /* background-color: ${({theme}) => theme.bg}; */
  display: inline-block;
  border-radius: ${({theme}) => theme.border.radius};
  box-shadow: 6px 6px 20px 0 rgba(0, 0, 0, 0.25),
   -6px -6px 20px 0 rgba(255, 255, 255, 0.25);
  overflow: hidden;
  :hover {
    button {
      transform: scale(1.01);
      transition: .1s all ease-in-out;
    }
  }
`

const StyledButton = styled.button`
  background: ${({surfaceDirection, theme}) => surfaceDirection && theme.neumorphism[surfaceDirection].background};
  border: none;
  padding: 15px;
`

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <ButtonContainer>
    <StyledButton
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </StyledButton>
    </ButtonContainer>
  );
};
