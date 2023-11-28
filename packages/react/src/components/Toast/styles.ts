import { styled } from '../../styles'
import { Box } from '../Box'
import { Heading } from '../Heading'
import { Text } from '../Text'

export const ToastContainer = styled(Box, {
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  borderRadius: '$sm',
  padding: '$3 $5 $3 $5',
  position: 'relative',
  width: '22.5rem',
})

export const ToastHeadingContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const ToastHeading = styled(Heading, {
  fontFamily: '$default',
  fontWeight: '$bold',
  fontSize: 'xl',
  color: '$white',
  lineHeight: '$base',
})

export const ToastText = styled(Text, {
  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: 'sm',
  color: '$gray200',
  lineHeight: '$base',
})

export const CloseIconButton = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  position: 'absolute',
  right: '$5',
  top: '$5',
  color: '$gray200',
})
