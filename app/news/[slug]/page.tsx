import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { newsArticles } from "@/lib/data";
import NewsArticleView from "@/components/NewsArticleView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const articleContent: Record<string, { body: string[]; author: string; readingTime: string }> = {
  "everon-chittagong-launch": {
    author: "Everon Communications",
    readingTime: "4 min read",
    body: [
      "Everon, Bangladesh's award-winning real estate developer, has officially unveiled the Everon Chittagong Residences — a landmark residential project that marks the company's first expansion beyond Dhaka into the nation's bustling port city.",
      "Situated in the prestigious Agrabad district, the twin-tower development will offer 64 luxury residences across 20 floors, each designed to capture the unique hillside-meets-ocean character of Chittagong. The project brings Everon's signature commitment to architectural excellence and premium materials to a market that has long awaited a developer of this caliber.",
      "\"Chittagong deserves a residential experience that matches its ambition as a global commercial hub,\" said Mohammad Ashraf, Chairman and Founder of Everon. \"We've spent two years studying the landscape, the lifestyle, and the aspirations of Chittagong's most discerning families. The result is a residence that feels both rooted in this city and unlike anything it has seen before.\"",
      "The development will feature an infinity pool with panoramic hill views, a full-service spa and sauna, landscaped terraces, a dedicated children's zone, and a private library lounge. Every unit will be delivered with premium European finishes, floor-to-ceiling acoustic glass, and smart home integration as standard.",
      "Construction is set to begin in Q1 2027, with projected handover in December 2028. Early interest from investors and end-users has been exceptionally strong, with over 40% of units receiving expressions of interest during the private pre-launch event held at the Chittagong Radisson Blu.",
    ],
  },
  "bd-property-awards-2026": {
    author: "Everon Communications",
    readingTime: "3 min read",
    body: [
      "Everon has been named 'Best Residential Developer' at the prestigious BD Property Awards 2026, the nation's most recognized real estate industry accolade. The award was presented at a gala ceremony held at the InterContinental Dhaka on July 28, 2026.",
      "The BD Property Awards jury cited Everon's \"unwavering commitment to design innovation, construction quality, and post-handover service excellence\" as the key factors behind the recognition. The award evaluates developers across multiple criteria including architectural merit, build quality, sustainability practices, customer satisfaction, and on-time delivery track record.",
      "\"This award belongs to every engineer, architect, craftsman, and team member who pours their expertise into making Everon homes extraordinary,\" said Sarah Ashraf, Managing Director. \"It validates nineteen years of choosing quality over shortcuts, every single time.\"",
      "Everon was shortlisted alongside five other leading Bangladeshi developers. The evaluation panel included independent architects, structural engineers, and real estate analysts who conducted site inspections of completed and ongoing projects across each developer's portfolio.",
      "This recognition follows Everon's Green Building Certification achievement earlier in 2026, underscoring the company's dual commitment to luxury living and environmental responsibility. The company has pledged that all new projects launched from 2026 onward will incorporate solar power, rainwater harvesting, and EV-ready infrastructure as standard features.",
    ],
  },
  "green-building-initiative": {
    author: "Everon Sustainability Team",
    readingTime: "5 min read",
    body: [
      "In a landmark commitment to sustainable development, Everon has announced that every new project in its pipeline will incorporate comprehensive green building features as standard — not as optional upgrades. This initiative positions Everon as the first major Bangladeshi residential developer to make sustainability a non-negotiable element of its construction philosophy.",
      "The Green Building Initiative encompasses three core pillars: energy independence through rooftop solar panel arrays capable of powering common areas and shared facilities; water conservation through advanced rainwater harvesting systems integrated into building infrastructure; and future-ready mobility through dedicated EV charging stations in every parking level.",
      "\"Bangladesh's real estate industry has a responsibility to build for the next fifty years, not just the next five,\" said Eng. Rashid Khan, Everon's Chief Technical Officer. \"The technology exists today to dramatically reduce a building's environmental footprint without compromising on luxury or livability. We owe it to the families who trust us with their homes to deploy that technology.\"",
      "The initiative was developed over eighteen months in consultation with international sustainability consultants and green building certification bodies. Everon's engineering team conducted extensive feasibility studies across its project sites to ensure each green feature delivers measurable impact rather than serving as a marketing checkbox.",
      "The first project to fully embody the Green Building Initiative will be Everon Gardens in Banani, which dedicates 60% of its site area to open green spaces — including cascading terraced gardens, a rooftop urban farm, and a ground-level biodiversity corridor. The project's energy modeling predicts a 35% reduction in common-area electricity costs compared to conventional developments of similar scale.",
      "Everon has also committed to transparent reporting on the environmental performance of its buildings post-handover, publishing annual sustainability scorecards for each completed project. This level of accountability is unprecedented in the Bangladeshi real estate market and reflects the company's belief that green claims must be backed by verifiable data.",
    ],
  },
};

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found | EVERON",
    };
  }

  return {
    title: `${article.title} | EVERON Press`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const content = articleContent[slug];
  const relatedArticles = newsArticles.filter((a) => a.slug !== slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: content?.author || "EVERON Communications",
    },
    publisher: {
      "@type": "Organization",
      name: "EVERON Real Estate",
      logo: {
        "@type": "ImageObject",
        url: "https://everon.com.bd/favicon.ico",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NewsArticleView
        article={article}
        content={content}
        relatedArticles={relatedArticles}
      />
    </>
  );
}
