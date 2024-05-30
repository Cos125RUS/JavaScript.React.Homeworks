import { render, screen } from '@testing-library/react';
import Messages from "./Messages";

const messages = ['Привет', 'Чё, как?', 'Всё норм!'];

test('renders messages', () => {
    render(<Messages messages={messages}/>);
    const linkElements = [];
    linkElements.push(screen.getByText(/Привет/i));
    linkElements.push(screen.getByText(/Чё, как?/i));
    linkElements.push(screen.getByText(/Всё норм!/i));
    linkElements.forEach(linkElement => expect(linkElement).toBeInTheDocument());
  });