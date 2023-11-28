import { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@alvaroorlando-ignite-ui/react'

export default {
  title: 'Others/Toast',
  tags: ['autodocs'],
  component: Toast,
  args: {
    heading: 'Agendamento realizado',
    text: 'Quarta-feira, 23 de Outubro às 16h',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
