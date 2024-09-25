import { it, expect, describe } from 'vitest';
import { page, userEvent } from '@vitest/browser/context'
import { render } from '@testing-library/react';

import Form from './Form';

describe('Form Component', async () => {
	it.only('renders the form correctly', async () => {
		render(<Form />);

		// https://vitest.dev/guide/browser/locators.html
		// https://vitest.dev/guide/browser/assertion-api.html
		// https://vitest.dev/guide/browser/interactivity-api.html

		const email = page.getByLabelText(/email address/i);
		await userEvent.fill(email, 'wrong-email');

		await page.getByRole('button', { name: 'Submit' }).click();

		const err = page.getByText(/Please type a valid email/i);
		
		await expect.element(err).toBeInTheDocument();
	});
});
