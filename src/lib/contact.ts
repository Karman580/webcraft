/* Contact details — single source for the quote form and the footer. */

export const CONTACT = {
  name: "AutoMesh Works",
  founder: "Karman Singh Talwar",
  tagline: "Software · AI · Systems",
  email: "karmantalwar@gmail.com",
  phone: "+1 (647) 762-8148",
  phoneE164: "16477628148",
  altPhone: "8264386780",
  location: "154 Sunforest Drive",
  // TODO: replace with real profile URLs before launch.
  linkedin: "#",
  github: "#",
} as const;

export const WHATSAPP_URL = `https://wa.me/${CONTACT.phoneE164}?text=${encodeURIComponent(
  "Hi AutoMesh Works — I'd like a quote for a project."
)}`;

export const MAILTO_URL = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Project enquiry")}`;
