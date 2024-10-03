export type Hero = {
	title: string;
	subtitle: string;
	content: string;
};

export type About = { blocks: TextImageComponent[] };

export type StrapiResponseObject = {
	data: object;
	meta: object;
};

export type StrapiComponent = {
	__component: string;
};

export type TextImageComponent = {
	__component: 'shared.text-with-image';
	title: string | null;
	content: string | null;
	image: StrapiImage;
};

export type Experience = {
	title: string;
	subtitle: string;
	content: string;
	badges: { name: string }[];
};

export type Education = {
	title: string;
	content: string;
	badges: { name: string }[];
};

export type Software = {
	title: string;
};

export type Logo = {
	image: StrapiImage;
};

export type StrapiImage = {
	url: string;
	formats: {
		large: {
			url: string;
		};
		medium: {
			url: string;
		};
		small: {
			url: string;
		};
		thumbnail: {
			url: string;
		};
	};
};

export type CaseStudy = {
	title: string;
	slug: string;
	subtitle: string;

	mainImage: StrapiImage;
	images: StrapiImage[];

	technologies: { name: string }[];

	textImageContent: TextImageComponent[];
	processContent: { title: string; subtitle: string; content: string }[];

	bottomImage: StrapiImage;

	outcome: string;
};

export type CaseStudyTeaser = {
	title: string;
	slug: string;
	subtitle: string;

	mainImage: StrapiImage;
};
