import { ComponentProps, useState } from 'react'
import { X } from 'phosphor-react'

import {
  CloseIconButton,
  ToastContainer,
  ToastHeading,
  ToastHeadingContainer,
  ToastText,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  heading: string
  text: string
  isOpen: boolean
}

export function Toast({ text, heading, ...props }: ToastProps) {
  const [isClosed, setIsClosed] = useState(false)

  const handleClose = () => {
    setIsClosed(true)
  }

  return (
    <ToastContainer {...props} style={{ display: isClosed ? 'none' : 'block' }}>
      <ToastHeadingContainer>
        <ToastHeading>{heading}</ToastHeading>
        <CloseIconButton aria-label="Fechar" onClick={handleClose}>
          <X size={20} />
        </CloseIconButton>
      </ToastHeadingContainer>
      <ToastText>{text}</ToastText>
    </ToastContainer>
  )
}

Toast.displayName = 'Toast'
