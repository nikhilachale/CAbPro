import { ArrowLeft, ArrowRight, Clock3, Compass, MapPin, Ticket } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { indorePlaces } from "../data/indorePlaces";

const getTagClass = (tag) => {
  if (tag === "Nature") return "bg-teal-50 text-teal-700 ring-teal-200";
  if (tag === "Food & Culture" || tag === "Food Street") return "bg-emerald-50 text-emerald-700 ring-emerald-200";
  if (tag === "Heritage" || tag === "Architecture") return "bg-amber-50 text-amber-700 ring-amber-200";
  if (tag === "Spiritual") return "bg-rose-50 text-rose-700 ring-rose-200";
  if (tag === "Unique") return "bg-sky-50 text-sky-700 ring-sky-200";
  return "bg-orange-50 text-orange-700 ring-orange-200";
};

export default function IndorePlaceDetails() {
  const { slug } = useParams();
  const currentIndex = indorePlaces.findIndex((place) => place.slug === slug);

  if (currentIndex === -1) {
    return <Navigate to="/indore" replace />;
  }

  const place = indorePlaces[currentIndex];
  const previousPlace = indorePlaces[currentIndex - 1] ?? null;
  const nextPlace = indorePlaces[currentIndex + 1] ?? null;

  return (
    <section className="page-section pt-28">
      <div className="section-shell">
        <div className="mx-auto max-w-5xl">
          <Link
            to="/indore"
            className="mb-4 inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-orange-300 hover:text-orange-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Indore guide
          </Link>

          <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_50px_-32px_rgba(15,23,42,0.5)]">
            <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 p-7 sm:p-10">
              <div className="absolute -right-4 -top-6 text-[7rem] opacity-20 sm:text-[9rem]">{place.emoji}</div>
              <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 ${getTagClass(place.tag)}`}>
                {place.tag}
              </span>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{place.name}</h1>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-200 sm:text-base">{place.description}</p>
            </div>

            <div className="grid gap-4 border-b border-slate-200 bg-slate-50/70 p-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-slate-500">
                  <MapPin className="h-3.5 w-3.5 text-orange-500" />
                  Location
                </p>
                <p className="text-sm font-medium text-slate-700">{place.location}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-slate-500">
                  <Clock3 className="h-3.5 w-3.5 text-orange-500" />
                  Best Time
                </p>
                <p className="text-sm font-medium text-slate-700">{place.bestTime}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-slate-500">
                  <Compass className="h-3.5 w-3.5 text-orange-500" />
                  Timings
                </p>
                <p className="text-sm font-medium text-slate-700">{place.timings}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-slate-500">
                  <Ticket className="h-3.5 w-3.5 text-orange-500" />
                  Entry
                </p>
                <p className="text-sm font-medium text-slate-700">{place.entryFee}</p>
              </div>
            </div>

            <div className="space-y-8 p-6 sm:p-8">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">About this place</h2>
                <div className="mt-4 space-y-4">
                  {place.longDescription.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-relaxed text-slate-700">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">Highlights</h2>
                <ul className="mt-4 space-y-3">
                  {place.highlights.map((item) => (
                    <li key={item} className="rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-orange-700">Insider Tip</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{place.tip}</p>
              </div>
            </div>
          </article>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            {previousPlace ? (
              <Link to={`/indore/${previousPlace.slug}`} className="btn-secondary gap-2">
                <ArrowLeft className="h-4 w-4" />
                {previousPlace.name}
              </Link>
            ) : (
              <span />
            )}

            {nextPlace ? (
              <Link to={`/indore/${nextPlace.slug}`} className="btn-primary gap-2">
                {nextPlace.name}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <Link to="/indore" className="btn-primary gap-2">
                Back to all places
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
