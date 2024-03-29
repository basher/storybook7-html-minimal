import './button.css';
import { ButtonHtml } from './Button';

export default {
    title: 'Components/Button',
    argTypes: {
        label: { control: 'text' },
        buttonType: {
            control: 'select',
            options: ['primary', 'secondary'],
        },
    },
};

export const TextButton = {
    args: {
        label: 'Button',
    },
    render: (args) => ButtonHtml(args),
};
