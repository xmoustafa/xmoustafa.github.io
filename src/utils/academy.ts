export function getAcademyLabSlug(title: string): string {
	return title
		.normalize("NFKD")
		.toLowerCase()
		.replace(/&/g, " and ")
		.replace(/[’']/g, "")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-|-$/g, "") || "lab";
}
