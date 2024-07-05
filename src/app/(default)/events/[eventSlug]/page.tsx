import generateEventSlugs from "./_repositories/generateEventSlugs";

export const generateStaticParams = () => generateEventSlugs();

export default function EventDetailPage({
  params,
}: {
  params: { eventSlug: string };
}) {
  return <div>{params.eventSlug}</div>;
}
