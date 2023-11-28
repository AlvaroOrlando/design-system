import { ComponentProps } from 'react'

import { TooltipContainer, TooltipText } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  text: string
}

export function Tooltip({ text, ...props }: TooltipProps) {
  return (
    <TooltipContainer {...props}>
      <TooltipText>{text}</TooltipText>
    </TooltipContainer>
  )
}

Tooltip.displayName = 'Tooltip'
