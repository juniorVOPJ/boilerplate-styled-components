import { Meta, StoryObj } from '@storybook/react'

import Main from '.'

export default {
    title: 'Main',
    component: Main,
    parameters: {
        layout: 'fullscreen',
        controls: {
            expanded: true
        }
    }
} as Meta

export const Default: StoryObj = {
    argTypes: {
        title: {
            control: 'text'
        },
        description: {
            control: 'text'
        }
    }
}

export const Basic: StoryObj = {
    args: {
        title: 'Título Básico',
        description: 'Descrição Básica'
    }
}
