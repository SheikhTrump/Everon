import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, projectExtras } from "@/lib/data";
import ProjectDetailView from "@/components/ProjectDetailView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | EVERON",
    };
  }

  return {
    title: `${project.name} — Luxury ${project.type} in ${project.location}`,
    description: project.description,
    openGraph: {
      title: `${project.name} | EVERON Real Estate`,
      description: project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 675,
          alt: project.name,
        },
      ],
      type: "website",
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const extras = projectExtras[slug];
  const relatedProjects = projects
    .filter((p) => p.id !== project.id && p.type === project.type)
    .slice(0, 3);

  // Structured Data Schema for Real Estate Property
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": project.type === "Commercial" ? "CommercialBuilding" : "ApartmentComplex",
    name: project.name,
    description: project.description,
    image: `https://everon.com.bd${project.image}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: project.location,
      addressCountry: "BD",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: project.coordinates.lat,
      longitude: project.coordinates.lng,
    },
    amenityFeature: project.amenities.map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      name: amenity,
      value: "true",
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectDetailView
        project={project}
        extras={extras}
        relatedProjects={relatedProjects}
      />
    </>
  );
}
