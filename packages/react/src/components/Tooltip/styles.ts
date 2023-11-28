import { styled } from '../../styles'
import { Box } from '../Box'
import { Text } from '../Text'

export const TooltipContainer = styled(Box, {
  backgroundColor: '$gray900',
  border: 'none',
  padding: '$3 $4 $3 $4',
  width: 'fit-content',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',

  '&::after': {
    content: '',
    position: 'absolute',
    top: '100%',
    left: 'calc(50% - $4)',
    borderWidth: '10px',
    borderStyle: 'solid',
    borderColor: '$gray900 transparent transparent transparent',
  },
})

export const TooltipText = styled(Text, {
  fontFamily: '$Inter',
  fontWeight: '$medium',
  fontSize: 'sm',
  color: '$gray100',
})
