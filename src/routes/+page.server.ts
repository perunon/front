import { cmsService } from '$lib/services/cms.service.js';

export const load = async () => {
	const [hero, about, experiences, educations, softwares, logos, caseStudies] = await Promise.all([
		cmsService.getHero(),

		cmsService.getAbout(),

		cmsService.getExperiences(),

		cmsService.getEducations(),

		cmsService.getSoftwares(),

		cmsService.getLogos(),

		cmsService.getCaseStudies()
	]);
	return {
		hero,
		about,
		experiences,
		educations,
		softwares,
		logos,
		caseStudies
	};
};
