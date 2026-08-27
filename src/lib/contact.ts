/* Contact details — single source for the quote form and the footer. */

export const CONTACT = {
  name: "Karman Singh Talwar",
  tagline: "Software · AI · Systems",
  email: "karmantalwar@gmail.com",
  phone: "+91 8264386780",
  phoneE164: "918264386780",
  location: "Mumbai, India",
  // TODO: replace with real profile URLs before launch.
  linkedin: "#",
  github: "#",
} as const;

export const WHATSAPP_URL = `https://wa.me/${CONTACT.phoneE164}?text=${encodeURIComponent(
  "Hi Karman — I'd like a quote for a project."
)}`;

export const MAILTO_URL = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Project enquiry")}`;
