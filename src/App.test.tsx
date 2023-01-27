import { render, screen } from '@testing-library/react';
import App from './App';

it('renders the page title', () => {
	render(<App />);
	const pageTitle = screen.getByText(/Appointment Manager/i);
	expect(pageTitle).toBeInTheDocument();
});
