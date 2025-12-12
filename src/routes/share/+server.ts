import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const PUT: RequestHandler = async ({ request, platform }) => {
	void request;
	void platform;
	return json({ error: 'disabled' }, { status: 404 });
};
