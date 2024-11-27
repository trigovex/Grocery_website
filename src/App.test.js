import { render, screen } from '@testing-library/react';
import App from './App';

// Mock the routes since we're testing App in isolation
jest.mock('./routes/routes', () => ({
  routes: [{
    path: '/',
    element: <div>Mock Layout</div>,
    children: [
      {
        index: true,
        element: <div>Mock Home</div>,
      }
    ]
  }]
}));

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('Mock Layout')).toBeInTheDocument();
  });
});
