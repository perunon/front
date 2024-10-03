import { STRAPI_TOKEN, STRAPI_URL } from '$env/static/private';
import type {
	About,
	CaseStudy,
	Education,
	Experience,
	Hero,
	Logo,
	Software,
	StrapiImage,
	StrapiResponseObject
} from '$lib/types';

class CMSService {
	private baseUrl: string;
	private token: string;

	constructor() {
		this.baseUrl = STRAPI_URL;
		this.token = STRAPI_TOKEN;
	}

	async getHero() {
		const { data } = await this.get('hero');

		return data as Hero;
	}

	async getAbout() {
		const { data } = await this.get('about?populate=blocks.image');

		const aboutData = data as About;

		aboutData.blocks = aboutData.blocks.map((block) => {
			if (block.image) {
				this.prepareImageUrls(block.image);
			}

			return block;
		});

		return data as About;
	}

	async getExperiences() {
		const { data } = await this.get('experiences?populate=*');

		return data as Experience[];
	}

	async getEducations() {
		const { data } = await this.get('educations?populate=*');

		return data as Education[];
	}

	async getSoftwares() {
		const { data } = await this.get('softwares?populate=*');

		return data as Software[];
	}

	async getLogos() {
		const { data } = await this.get('logos?populate=*');

		const logosData = data as Logo[];
		return logosData.map((logo) => {
			this.prepareImageUrls(logo.image);

			return logo;
		}) as Logo[];
	}

	async getCaseStudies() {
		const { data } = await this.get(`case-studies?populate=mainImage`);

		const caseStudiesData = data as CaseStudy[];

		return caseStudiesData.map((caseStudy) => {
			this.prepareImageUrls(caseStudy.mainImage);
			return caseStudy;
		}) as CaseStudy[];
	}

	async getCaseStudyBySlug(slug: string) {
		const { data } = await this.get(
			`case-studies?filters[slug][$eq]=${slug}&populate[0]=mainImage&populate[1]=images&populate[2]=textImageContent.image&populate[3]=technologies&populate[4]=processContent&populate[5]=bottomImage`
		);

		const caseStudyData = data as CaseStudy[];

		if (caseStudyData.length === 0) {
			return null;
		}

		const caseStudy = caseStudyData[0];

		this.prepareImageUrls(caseStudy.mainImage);
		caseStudy.images = caseStudy.images.map((image) => {
			this.prepareImageUrls(image);
			return image;
		});
		caseStudy.textImageContent = caseStudy.textImageContent.map((content) => {
			if (content.image) {
				this.prepareImageUrls(content.image);
			}
			return content;
		});
		this.prepareImageUrls(caseStudy.bottomImage);

		return caseStudy;
	}

	private async get(path: string) {
		const response = await fetch(`${this.baseUrl}/api/${path}`);

		if (response.ok) {
			return (await response.json()) as StrapiResponseObject;
		} else {
			throw new Error('Failed to fetch');
		}
	}

	private prepareImageUrls(data: StrapiImage) {
		data.url = `${this.baseUrl}${data.url}`;
		if (!data.formats) {
			return;
		}

		Object.keys(data.formats).forEach((key) => {
			const format = data.formats[key];
			format.url = `${this.baseUrl}${format.url}`;
		});
	}

	private prepareUrl(path: string) {
		return `${this.baseUrl}${path}`;
	}
}

export const cmsService = new CMSService();
