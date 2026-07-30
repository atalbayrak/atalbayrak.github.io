const personData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ahmet Taha Albayrak",
  url: "https://atalbayrak.github.io/",
  email: "mailto:ahmetahalbayrak@gmail.com",
  jobTitle: "AI Engineer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ankara",
    addressCountry: "TR",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Bilkent University",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Middle East Technical University",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/in/atalbayrak",
    "https://github.com/atalbayrak",
  ],
  knowsAbout: [
    "Computer Vision",
    "Multimodal Generative AI",
    "Agentic AI",
    "Machine Learning Operations",
    "Edge AI",
    "Semantic Search",
  ],
};

export function PersonStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(personData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
