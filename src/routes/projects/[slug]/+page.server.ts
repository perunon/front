import { cmsService } from '$lib/services/cms.service.js';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const project = await cmsService.getCaseStudyBySlug(params.slug);

	if (!project) {
		return error(404, 'Project not found');
	}

	return {
		project
	};
};
