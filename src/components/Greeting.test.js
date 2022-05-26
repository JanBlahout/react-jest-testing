import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('checks if Hello World as a text', () => {
    // Arrange -> render greeting component
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert - check if Hello World is rendered
    const helloWorldElement = screen.getByText('Hello World', { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('checks if Its good to see you is on the screen if button was NOT clicked', () => {
    render(<Greeting />);

    const goodToSeeYou = screen.getByText('good to see you!', { exact: false });
    expect(goodToSeeYou).toBeInTheDocument();
  });

  test('renders Changed if button WAS clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    const changed = screen.getByText('Change', { exact: false });
    expect(changed).toBeInTheDocument();
  });

  test('checks if good to see you is not rendered when button clicked', () => {
    // Assert
    render(<Greeting></Greeting>);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    const goodToSeeYou = screen.queryByText('good to see you', {
      exact: false,
    });
    const changed = screen.getByText('Changed!');
    expect(changed).toBeInTheDocument();
    expect(goodToSeeYou).toBeNull();
  });
});
