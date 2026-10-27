
"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Building2,
  ArrowRight,
  Briefcase,
  Search,
  X,
  RotateCcw,
  Layers,
  Calendar,
  CheckCircle2,
} from "lucide-react";

export interface ProjectItem {
  id: number;
  title: string;
  category: "Civil Engineering" | "Construction" | "Procurement" | "Real Estate" | "IT & Telecommunications";
  image: string;
  client: string;
  location: string;
  year: string;
  scope: string;
  highlights: string[];
}

export type CategoryType =
  | "All"
  | "Civil Engineering"
  | "Construction"
  | "Procurement"
  | "Real Estate"
  | "IT & Telecommunications";

export const categories: CategoryType[] = [
  "All",
  "Civil Engineering",
  "Construction",
  "Procurement",
  "Real Estate",
  "IT & Telecommunications",
];

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "Dual-Carriage Interstate Highway Corridor",
    category: "Civil Engineering",
    image: "/images/portfolio/road-contruction.jpg",
    client: "Federal Ministry of Works & Housing",
    location: "Abuja - Kaduna Corridor",
    year: "2024",
    scope: "Turnkey design and reconstruction of a 45km critical transport corridor. Included full-depth asphalt paving, reinforced box culvert stormwater drainage, bridge deck resurfacing, and high-intensity solar roadway illumination.",
    highlights: [
      "45km dual-carriage asphalt wearing course",
      "Reinforced hydraulic stormwater culverts",
      "Solar-powered smart corridor lighting",
      "ISO 9001 quality compliance testing",
    ],
  },
  {
    id: 2,
    title: "The Crest Luxury Waterfront Residences",
    category: "Real Estate",
    image: "/images/portfolio/real-estate.jpg",
    client: "Prime Crest Property Holdings",
    location: "Ikoyi, Lagos",
    year: "2024",
    scope: "Architectural and structural engineering execution for an ultra-luxury 12-storey waterfront residential tower. Features private yacht dock access, subterranean parking, rooftop infinity pool, and integrated building automation systems (BMS).",
    highlights: [
      "12-storey reinforced post-tensioned structure",
      "Integrated Smart Home BMS automation",
      "Sub-grade 2-level basement parking",
      "Private water treatment & purification plant",
    ],
  },
  {
    id: 3,
    title: "Tier III Enterprise Hyperscale Data Center",
    category: "Procurement",
    image: "/images/portfolio/server-1.jpg",
    client: "Apex Financial Group",
    location: "Victoria Island, Lagos",
    year: "2023",
    scope: "End-to-end procurement, supply chain logistics, and installation of critical Tier III data center infrastructure. Supplied 2N redundant modular UPS systems, precision in-row chillers, hot/cold aisle containment, and automated clean-agent fire suppression.",
    highlights: [
      "Modular 2N redundant power distribution",
      "High-efficiency precision in-row cooling",
      "Biometric security access & CCTV cage locks",
      "FM-200 clean agent gas fire suppression",
    ],
  },
  {
    id: 4,
    title: "Offshore Gas Processing & Compression Facility",
    category: "Civil Engineering",
    image: "/images/portfolio/oil-gas.jpg",
    client: "Niger Delta Energy Consortium",
    location: "Bonny Island, Rivers State",
    year: "2024",
    scope: "Comprehensive structural rehabilitation and process piping upgrade for an offshore gas production platform. Executed heavy pipe-rack fabrication, anti-corrosion marine blast-coating, and high-pressure gas manifold tie-ins with zero LTI safety record.",
    highlights: [
      "Heavy structural steel pipe-rack fabrication",
      "High-pressure ASME-compliant manifold tie-in",
      "Specialized C5M marine anti-corrosion coating",
      "Over 250,000 man-hours without Lost Time Injury (LTI)",
    ],
  },
  {
    id: 5,
    title: "Horizon Commercial Tower & Business Hub",
    category: "Construction",
    image: "/images/portfolio/construction-1.jpg",
    client: "Horizon Capital Real Estate",
    location: "Central Business District, Abuja",
    year: "2023",
    scope: "Full turnkey construction of a modern 10-storey commercial office complex. The scope encompassed geotechnical pile foundation works, reinforced concrete superstructure, double-glazed curtain wall facade, and high-efficiency central VRF HVAC systems.",
    highlights: [
      "10-floor Grade-A commercial superstructure",
      "Energy-efficient double-glazed curtain facade",
      "High-capacity VRF HVAC climate control",
      "Integrated fire detection & sprinkler system",
    ],
  },
  {
    id: 6,
    title: "5G Macro Cell Tower & Backhaul Deployment",
    category: "IT & Telecommunications",
    image: "/images/portfolio/telecomtower.jpg",
    client: "National Telecom Infrastructure Operator",
    location: "Kano & Kaduna Metros",
    year: "2024",
    scope: "Turnkey rollout of 35 heavy-duty 45-meter telecommunication guyed mast towers across northern urban corridors. Delivered site acquisition, civil foundation construction, RF transceiver rigging, optical fiber tail termination, and 48V hybrid solar backup.",
    highlights: [
      "35 high-capacity 45m telecom towers erected",
      "High-throughput RF microwave backhaul links",
      "48V hybrid solar-lithium battery power systems",
      "Seamless optical fiber tail integration",
    ],
  },
  {
    id: 7,
    title: "Heavy Industrial Logistics & Warehousing Center",
    category: "Construction",
    image: "/images/portfolio/construction-2.jpg",
    client: "Global Cargo Logistics Limited",
    location: "Sagamu Interchange, Ogun State",
    year: "2023",
    scope: "Design-build execution of a 15,000 m² multi-bay logistics warehouse and distribution center. Constructed heavy-duty structural steel portal frames, FM2 tolerance superflat laser-screed concrete flooring, and 12 automated hydraulic loading bays.",
    highlights: [
      "15,000 m² clear-span steel portal frame structure",
      "FM2 tolerance laser-screed concrete floor slab",
      "12 automated hydraulic loading dock levelers",
      "Continuous perimeter security and weighbridge setup",
    ],
  },
  {
    id: 8,
    title: "Metropolitan Core Fiber Optical Routing Backbone",
    category: "IT & Telecommunications",
    image: "/images/portfolio/server-2.jpg",
    client: "State Broadband Infrastructure Initiative",
    location: "Ikeja, Lagos",
    year: "2023",
    scope: "Deployment of a regional optical transport switching center connecting over 120km of metro fiber backhaul. Provided core 100G routing switchboards, high-density fiber patch panels, environmental monitoring sensors, and 24/7 Network Operations Center (NOC) fit-out.",
    highlights: [
      "100G high-capacity optical core routing switches",
      "High-density optical distribution frames (ODF)",
      "Turnkey 24/7 Network Operations Center (NOC)",
      "Comprehensive 99.99% uptime carrier SLA compliance",
    ],
  },
  {
    id: 9,
    title: "Petrochemical Bulk Liquid Terminal & Storage",
    category: "Procurement",
    image: "/images/portfolio/oil-gas2.jpg",
    client: "Atlantic Hydrocarbons Limited",
    location: "Calabar Free Trade Zone, Cross River",
    year: "2024",
    scope: "Specialized procurement and turnkey delivery of API-650 compliant bulk fuel storage tanks, high-capacity centrifugal transfer skids, radar level monitoring instrumentation, and integrated sub-surface fire suppression foam systems.",
    highlights: [
      "Procurement of 4x API-650 certified storage tanks",
      "High-rate explosion-proof fuel loading pumps",
      "Radar tank gauging & SCADA telemetry integration",
      "Automated NFPA-compliant foam deluge system",
    ],
  },
];

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalProject(null);
      }
    };

    if (activeModalProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModalProject]);

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query) ||
        project.client.toLowerCase().includes(query) ||
        project.location.toLowerCase().includes(query) ||
        project.scope.toLowerCase().includes(query) ||
        project.highlights.some((h) => h.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: projectsData.length };
    categories.forEach((cat) => {
      if (cat !== "All") {
        counts[cat] = projectsData.filter((p) => p.category === cat).length;
      }
    });
    return counts;
  }, []);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  return (
    <section id="portfolio" className="py-24 bg-brand-gray/30 border-t border-gray-200 relative">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase size={14} />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-primary tracking-tight mb-4">
            Case Studies & Portfolio
          </h2>
          <div className="w-16 h-1 bg-brand-accent rounded-full mx-auto mb-4"></div>
          <p className="text-brand-dark/75 text-base md:text-lg">
            Explore our multidisciplinary infrastructure, engineering, real estate, and procurement projects delivered across Nigeria.
          </p>
        </div>

        {/* Live Search Bar & Sector Filter Pills */}
        <div className="max-w-4xl mx-auto mb-10 space-y-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-brand-dark/40">
              <Search size={18} />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects by title, sector, client, location, or keyword..."
              className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-white border border-gray-200 text-brand-dark placeholder-brand-dark/45 text-sm md:text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition-all duration-200"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search query"
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-brand-dark transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              const count = categoryCounts[category] || 0;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-brand-primary text-brand-accent shadow-md scale-105"
                      : "bg-white text-brand-dark/70 hover:bg-gray-100 hover:text-brand-primary border border-gray-200 shadow-sm"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                      isActive
                        ? "bg-brand-secondary text-brand-accent"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              role="button"
              tabIndex={0}
              onClick={() => setActiveModalProject(project)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveModalProject(project);
                }
              }}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-brand-primary"
            >
              {/* Image Container */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-70 group-hover:opacity-60 transition-opacity"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-primary/90 text-brand-accent backdrop-blur-md shadow-sm border border-brand-accent/20">
                    {project.category}
                  </span>
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-black/60 text-white backdrop-blur-md">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-primary transition-colors line-clamp-1 mb-3">
                    {project.title}
                  </h3>

                  <div className="space-y-1.5 mb-4 text-xs text-brand-dark/70">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-brand-primary shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 size={14} className="text-brand-primary shrink-0" />
                      <span className="truncate">{project.client}</span>
                    </div>
                  </div>

                  <p className="text-sm text-brand-dark/75 line-clamp-2 leading-relaxed mb-4">
                    {project.scope}
                  </p>
                </div>

                {/* Card Bottom CTA */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-brand-primary group-hover:text-brand-secondary flex items-center gap-1.5">
                    View Case Study
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-brand-gray text-brand-dark/70 font-medium">
                    Specs & Details
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State Screen */}
        {filteredProjects.length === 0 && (
          <div className="bg-white rounded-3xl border border-gray-200 p-12 text-center max-w-lg mx-auto shadow-sm mt-8">
            <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mx-auto mb-4">
              <Layers size={32} />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">No Matching Projects Found</h3>
            <p className="text-brand-dark/70 text-sm mb-6 leading-relaxed">
              We couldn&apos;t find any project matching &ldquo;{searchQuery}&rdquo; in the selected sector. Try clearing your search query or switching categories.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-primary text-brand-accent text-sm font-semibold hover:bg-brand-secondary transition-colors cursor-pointer shadow-sm"
            >
              <RotateCcw size={16} />
              <span>Reset Filters</span>
            </button>
          </div>
        )}
      </div>

      {/* Interactive Project Detail Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-dark/70 backdrop-blur-md overflow-y-auto"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setActiveModalProject(null);
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-project-title"
              className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full overflow-hidden border border-gray-100 relative my-8 max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Banner Image */}
              <div className="relative w-full h-64 sm:h-80 shrink-0 bg-gray-900">
                <Image
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  aria-label="Close project modal"
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-all duration-200 cursor-pointer shadow-lg hover:scale-105"
                >
                  <X size={20} />
                </button>

                <div className="absolute bottom-4 left-6">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-brand-accent text-brand-primary shadow-md">
                    {activeModalProject.category}
                  </span>
                </div>
              </div>

              {/* Modal Scrollable Content */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div>
                  <h3
                    id="modal-project-title"
                    className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight mb-4"
                  >
                    {activeModalProject.title}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-brand-gray/60 border border-gray-200/90 shadow-2xs min-w-0">
                      <div className="p-2.5 rounded-xl bg-white text-brand-primary shadow-xs shrink-0">
                        <Building2 size={18} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] text-brand-dark/60 uppercase font-bold tracking-wider">Client</p>
                        <p className="text-xs sm:text-sm font-bold text-brand-dark truncate" title={activeModalProject.client}>
                          {activeModalProject.client}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-brand-gray/60 border border-gray-200/90 shadow-2xs min-w-0">
                      <div className="p-2.5 rounded-xl bg-white text-brand-primary shadow-xs shrink-0">
                        <MapPin size={18} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] text-brand-dark/60 uppercase font-bold tracking-wider">Location</p>
                        <p className="text-xs sm:text-sm font-bold text-brand-dark truncate" title={activeModalProject.location}>
                          {activeModalProject.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-brand-gray/60 border border-gray-200/90 shadow-2xs min-w-0">
                      <div className="p-2.5 rounded-xl bg-white text-brand-primary shadow-xs shrink-0">
                        <Calendar size={18} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] text-brand-dark/60 uppercase font-bold tracking-wider">Completion</p>
                        <p className="text-xs sm:text-sm font-bold text-brand-dark truncate">
                          {activeModalProject.year}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-brand-primary uppercase tracking-wider mb-2">
                    Project Overview & Scope
                  </h4>
                  <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed">
                    {activeModalProject.scope}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-brand-primary uppercase tracking-wider mb-3">
                    Key Deliverables & Specifications
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeModalProject.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs sm:text-sm text-brand-dark/85"
                      >
                        <CheckCircle2 size={16} className="text-brand-primary shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <a
                    href="#contact"
                    onClick={() => setActiveModalProject(null)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-primary text-brand-accent text-sm font-bold hover:bg-brand-secondary transition-all shadow-md cursor-pointer"
                  >
                    <span>Inquire About Similar Project</span>
                    <ArrowRight size={16} />
                  </a>

                  <button
                    type="button"
                    onClick={() => setActiveModalProject(null)}
                    className="w-full sm:w-auto px-5 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-brand-dark text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}