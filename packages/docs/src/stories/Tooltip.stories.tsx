import { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps } from '@alvaroorlando-ignite-ui/react'

export default {
  title: 'Others/Tooltip',
  tags: ['autodocs'],
  component: Tooltip,
  args: {
    text: '21 de outubro - indisponível',
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
