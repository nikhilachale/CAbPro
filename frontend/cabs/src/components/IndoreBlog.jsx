import { useMemo, useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { indorePlaces, indorePlaceTags } from "../data/indorePlaces";

const tagColorClassMap = {
  Heritage: "bg-amber-50 text-amber-700 ring-amber-200",
  "Food & Culture": "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Architecture: "bg-violet-50 text-violet-700 ring-violet-200",
  Nature: "bg-teal-50 text-teal-700 ring-teal-200",
  Spiritual: "bg-rose-50 text-rose-700 ring-rose-200",
  "Food Street": "bg-yellow-50 text-yellow-700 ring-yellow-200",
  Unique: "bg-sky-50 text-sky-700 ring-sky-200",
};

export default function IndoreBlog() {
  const [activeTag, setActiveTag] = useState("All");

  const filteredPlaces = useMemo(() => {
    if (activeTag === "All") {
      return indorePlaces;
    }
    return indorePlaces.filter((place) => place.tag === activeTag);
  }, [activeTag]);

  return (
    <section className="page-section pt-28">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-kicker">Travel guide</span>
          <h1 className="section-title">Discover Indore, one place at a time</h1>
          <p className="section-subtitle mx-auto">
            Explore heritage landmarks, food streets, nature spots, and spiritual places. Open any place for a full
            route-ready view.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {indorePlaceTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`min-h-11 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                activeTag === tag
                  ? "border-orange-300 bg-orange-100 text-orange-700"
                  : "border-slate-200 bg-white text-slate-700 hover:border-orange-200 hover:text-orange-700"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <p className="mt-5 text-center text-sm font-medium uppercase tracking-[0.12em] text-slate-500">
          {filteredPlaces.length} place{filteredPlaces.length > 1 ? "s" : ""} found
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredPlaces.map((place) => (
            <article
              key={place.slug}
              className="card-surface flex h-full flex-col overflow-hidden border-slate-200 bg-white/95 backdrop-blur"
            >
              <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 px-5 py-6">
                <span className="absolute right-4 top-2 text-5xl opacity-30">{place.emoji}</span>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-200">{place.id.toString().padStart(2, "0")}</p>
                <h2 className="mt-2 max-w-[80%] text-2xl font-extrabold text-white">{place.name}</h2>
              </div>

              <div className="flex grow flex-col p-5">
                <span
                  className={`w-fit rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${
                    tagColorClassMap[place.tag] ?? "bg-orange-50 text-orange-700 ring-orange-200"
                  }`}
                >
                  {place.tag}
                </span>

                <p className="mt-4 text-sm leading-6 text-slate-600">{place.description}</p>

                <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
                  <MapPin className="h-3.5 w-3.5 text-orange-500" />
                  {place.location}
                </div>

                <Link
                  to={`/indore/${place.slug}`}
                  className="btn-secondary mt-6 justify-between gap-2 self-start !rounded-lg !px-4 !py-2.5 !text-sm"
                >
                  Read full place guide
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
