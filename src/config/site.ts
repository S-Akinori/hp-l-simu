export const siteConfig = {
  siteUrl: import.meta.env.PUBLIC_SITE_URL ?? "http://localhost:4321",
  formletEndpoint:
    import.meta.env.PUBLIC_FORMLET_ENDPOINT ??
    "https://formlet.a-key33.com/api/f/77bc4a72-ce39-4de0-89b2-cbc23de87951",
  materialsPath: import.meta.env.PUBLIC_MATERIALS_PATH ?? "/materials.pdf",
  companySiteUrl: import.meta.env.PUBLIC_COMPANY_SITE_URL ?? "https://a-key33.com/",
  companyEmail: import.meta.env.PUBLIC_COMPANY_EMAIL ?? "info@a-key33.com",
  companyTel: import.meta.env.PUBLIC_COMPANY_TEL ?? "080-8473-0282",
};

export const companyTelHref = `tel:${siteConfig.companyTel.replace(/[^\d+]/g, "")}`;
