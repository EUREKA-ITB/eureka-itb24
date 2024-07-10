import DotPattern from "@/components/magicui/dot-pattern";
import RadialGradient from "@/components/magicui/radial-gradient";

import generateEventSlugs from "./_repositories/generateEventSlugs";

export const generateStaticParams = () => generateEventSlugs();

export default function EventDetailPage({
  params,
}: {
  params: { eventSlug: string };
}) {
  return;
  <div>{params.eventSlug}</div>;
}
