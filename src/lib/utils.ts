import { STRAPI_URL } from '$env/static/private';

export function strapiImage(path: string) {
	return `${STRAPI_URL}${path}`;
}
