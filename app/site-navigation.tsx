"use client";

import { useEffect, useState, type MouseEvent } from "react";

const navigationItems = [
	{ id: "home", label: "Home" },
	{ id: "about", label: "About" },
	{ id: "expertise", label: "Skills" },
	{ id: "experience", label: "Experience" },
	{ id: "projects", label: "Projects" },
	{ id: "learning", label: "Certifications" },
	{ id: "ai-engineering", label: "AI" },
	{ id: "career-roadmap", label: "Roadmap" },
	{ id: "contact", label: "Contact" },
];

export default function SiteNavigation() {
	const [activeSection, setActiveSection] = useState("home");
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const sections = navigationItems
			.map(({ id }) => document.getElementById(id))
			.filter((section): section is HTMLElement => section instanceof HTMLElement);

		const observer = new IntersectionObserver(
			(entries) => {
				const visibleSections = entries
					.filter((entry) => entry.isIntersecting)
					.sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top);

				if (visibleSections[0]) {
					setActiveSection(visibleSections[0].target.id);
				}
			},
			{ rootMargin: "-22% 0px -68% 0px", threshold: 0 },
		);

		sections.forEach((section) => observer.observe(section));
		return () => observer.disconnect();
	}, []);

	function navigateToSection(event: MouseEvent<HTMLAnchorElement>, sectionId: string) {
		event.preventDefault();
		document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
		window.history.pushState(null, "", `#${sectionId}`);
		setActiveSection(sectionId);
		setMenuOpen(false);
	}

	function renderLinks(mobile = false) {
		return navigationItems.map((item) => {
			const isActive = activeSection === item.id;

			return (
				<a
					key={item.id}
					href={`#${item.id}`}
					aria-current={isActive ? "location" : undefined}
					onClick={(event) => navigateToSection(event, item.id)}
					className={`rounded-lg px-2.5 py-2 text-xs font-medium transition-colors duration-200 ${
						isActive
							? "bg-orange-300/[0.09] text-orange-200"
							: "text-slate-400 hover:bg-white/[0.04] hover:text-orange-200"
					} ${mobile ? "block" : "whitespace-nowrap"}`}
				>
					{item.label}
				</a>
			);
		});
	}

	return (
		<header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#080b10]/85 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-xl">
			<nav aria-label="Main navigation" className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
				<div className="flex h-[72px] items-center justify-between gap-5">
					<a
						href="#home"
						onClick={(event) => navigateToSection(event, "home")}
						aria-label="Suman Kemmannakeri home"
						className="group flex shrink-0 items-center gap-3"
					>
						<span className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.05] font-mono text-sm font-bold tracking-wide text-orange-300 transition duration-300 group-hover:border-orange-300/40 group-hover:bg-orange-300/10">
							SK
						</span>
						<span className="hidden text-[10px] font-semibold tracking-[0.16em] text-slate-300 sm:block">
							SUMAN KEMMANNAKERI
						</span>
					</a>

					<div className="hidden items-center gap-0.5 lg:flex">{renderLinks()}</div>

					<button
						type="button"
						aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
						aria-expanded={menuOpen}
						aria-controls="mobile-navigation"
						onClick={() => setMenuOpen(!menuOpen)}
						className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-200 transition hover:border-orange-300/35 hover:text-orange-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300 lg:hidden"
					>
						<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
							{menuOpen ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
						</svg>
					</button>
				</div>

				<div id="mobile-navigation" className={`${menuOpen ? "block" : "hidden"} border-t border-white/[0.08] py-3 lg:hidden`}>
					<div className="grid grid-cols-2 gap-1">{renderLinks(true)}</div>
				</div>
			</nav>
		</header>
	);
}