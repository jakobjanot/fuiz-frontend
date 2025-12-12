import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ params, platform }) => {
	void params;
	void platform;
	error(404, 'disabled');
}) satisfies PageServerLoad;
