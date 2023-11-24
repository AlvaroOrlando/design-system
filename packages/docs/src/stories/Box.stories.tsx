import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@alvaroorlando-ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  tags: ['autodocs'],
  component: Box,
  args: {
    children: (
      <>
        <Text>Hello Box Element</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
