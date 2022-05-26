import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
  test('renders posts if request succeeds', async () => {
    // Arrange
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'First post' }],
    });
    render(<Async />);

    // Act
    // not needed

    //Assert
    const listItemElements = await screen.findAllByRole(
      'listitem',
      { exact: false },
      { timeout: 5000 }
    );
    expect(listItemElements).not.toHaveLength(0);
  });
});
