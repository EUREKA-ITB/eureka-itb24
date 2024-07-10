import getCompetitions from "@/app/(default)/_repositories/getCompetitions";

export default function generateEventSlugs() {
  const events = getCompetitions();

  return events.map((event) => ({
    eventSlug: event.slug,
  }));
}
