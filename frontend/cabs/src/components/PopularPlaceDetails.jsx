import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CarFront,
  Clock3,
  Compass,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { popularPlaces } from "../data/popularPlaces";

const getDescriptionParagraphs = (description) =>
  description
    .split(/\n\s*\n/g)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

export default function PopularPlaceDetails() {
  const { slug } = useParams();
  const currentIndex = popularPlaces.findIndex((place) => place.slug === slug);

  if (currentIndex === -1) {
    return <Navigate to="/" replace />;
  }

  const place = popularPlaces[currentIndex];
  const previousPlace = popularPlaces[currentIndex - 1] ?? null;
  const nextPlace = popularPlaces[currentIndex + 1] ?? null;
  const descriptionParagraphs = getDescriptionParagraphs(place.description);
  const [leadParagraph, ...restParagraphs] = descriptionParagraphs;
  const travelCards = [
    { label: "Distance", value: place.travel.distance, icon: MapPin },
    { label: "Trip Duration", value: place.travel.duration, icon: Clock3 },
    { label: "Travel Time", value: place.travel.travelTime, icon: Compass },
    { label: "Best Season", value: place.travel.bestSeason, icon: CalendarDays },
  ];

  return (
    <section className="page-section pt-28">
      <div className="section-shell">
        <div className="mx-auto max-w-6xl">
          <div className="animate-fade-up mb-5 flex flex-wrap items-center justify-between gap-3">
            <Link
              to="/#places"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-orange-300 hover:text-orange-700"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to destinations
            </Link>
            <span className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-orange-700">
              {place.category}
            </span>
          </div>

          <article
            className="animate-fade-up overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_50px_-32px_rgba(15,23,42,0.5)]"
            style={{ animationDelay: "90ms" }}
          >
            <header className="relative">
              <img
                src={place.image}
                alt={place.name}
                width="1600"
                height="900"
                loading="eager"
                decoding="async"
                className="animate-soft-zoom h-72 w-full object-cover sm:h-80 lg:h-[26rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/45 to-slate-900/10" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-orange-200">Destination Guide</p>
                <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">{place.name}</h1>
                <p className="mt-4 max-w-4xl text-sm leading-6 text-slate-200 sm:text-base">{leadParagraph || ""}</p>
              </div>
            </header>

            <div className="grid gap-4 border-b border-slate-200 bg-slate-50/80 p-5 sm:grid-cols-2 sm:p-6 lg:grid-cols-4">
              {travelCards.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="animate-fade-up rounded-2xl border border-slate-200 bg-white p-4"
                    style={{ animationDelay: `${190 + index * 70}ms` }}
                  >
                    <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-slate-500">
                      <Icon className="h-3.5 w-3.5 text-orange-500" />
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-slate-700">{item.value}</p>
                  </div>
                );
              })}
            </div>

            <div className="grid gap-8 p-5 sm:p-7 lg:grid-cols-[1.3fr_0.7fr] lg:p-8">
              <section>
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">About this destination</h2>
                <div className="mt-5 space-y-4">
                  {(restParagraphs.length ? restParagraphs : [leadParagraph]).map((paragraph, index) => (
                    <p
                      key={`${paragraph.slice(0, 48)}-${index}`}
                      className="animate-fade-up text-base leading-relaxed text-slate-700"
                      style={{ animationDelay: `${260 + index * 60}ms` }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>

              <aside className="space-y-6">
                <div className="animate-fade-up rounded-2xl border border-slate-200 bg-white p-5" style={{ animationDelay: "320ms" }}>
                  <h3 className="flex items-center gap-2 text-lg font-extrabold text-slate-900">
                    <Sparkles className="h-4 w-4 text-orange-500" />
                    Key Highlights
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {place.highlights.map((item, index) => (
                      <li
                        key={item}
                        className="animate-fade-up rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700"
                        style={{ animationDelay: `${360 + index * 45}ms` }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="animate-fade-up rounded-2xl border border-orange-200 bg-orange-50 p-5" style={{ animationDelay: "420ms" }}>
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-orange-700">Driver Tip</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{place.tip}</p>
                </div>

                <div className="animate-fade-up space-y-3 rounded-2xl border border-slate-200 bg-white p-5" style={{ animationDelay: "480ms" }}>
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-slate-500">
                    <CarFront className="h-3.5 w-3.5 text-orange-500" />
                    Ready To Book
                  </p>
                  <Link to="/contact" className="btn-primary w-full">
                    Book this route
                  </Link>
                  <Link to="/indore" className="btn-secondary w-full">
                    Explore Indore guide
                  </Link>
                </div>
              </aside>
            </div>
          </article>

          <div className="animate-fade-up mt-6 flex flex-wrap items-center justify-between gap-3" style={{ animationDelay: "520ms" }}>
            {previousPlace ? (
              <Link to={`/places/${previousPlace.slug}`} className="btn-secondary gap-2">
                <ArrowLeft className="h-4 w-4" />
                {previousPlace.name}
              </Link>
            ) : (
              <span />
            )}

            {nextPlace ? (
              <Link to={`/places/${nextPlace.slug}`} className="btn-primary gap-2">
                {nextPlace.name}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <Link to="/#places" className="btn-primary gap-2">
                Back to all destinations
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
