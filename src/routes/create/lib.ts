import { PUBLIC_PLAY_URL } from '$env/static/public';
import { removeIds } from '$lib';
import { localizeHref } from '$lib/paraglide/runtime';
import type { IdlessFuizConfig } from '$lib/types';

export const share = async (config: IdlessFuizConfig, id?: string) => {
	id ??= await (
		await fetch('/share', {
			method: 'PUT',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(removeIds(config))
		})
	).json();
	navigator.clipboard.writeText(PUBLIC_PLAY_URL + localizeHref('/share') + '/' + id);
};
