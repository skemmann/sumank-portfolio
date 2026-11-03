import type { Metadata } from "next";
import Image from "next/image";
import SiteNavigation from "./site-navigation";

export const metadata: Metadata = {
	title: "Suman Kemmannakeri | AWS DevOps Engineer",
	description: "AWS DevOps Engineer with 5+ years of experience in cloud infrastructure, CI/CD automation, Kubernetes administration, infrastructure as code, and production support.",
};

const skillGroups = [
	{
		category: "Cloud",
		skills: ["AWS", "EKS", "EC2", "IAM", "S3", "Route53", "ACM", "CloudWatch", "Secrets Manager", "RDS"],
	},
	{
		category: "Containers & Web Servers",
		skills: ["Docker", "Kubernetes", "Amazon EKS", "Helm", "Apache Tomcat", "Apache HTTP Server"],
	},
	{
		category: "Infrastructure as Code",
		skills: ["Terraform", "Ansible"],
	},
	{
		category: "CI/CD",
		skills: ["Azure DevOps", "Azure Repos", "Azure Pipelines", "Jenkins", "Git"],
	},
	{
		category: "Observability",
		skills: ["Prometheus", "Grafana"],
	},
	{
		category: "Operating Systems",
		skills: ["Linux (RHEL)", "Windows"],
	},
];

const experiences = [
	{
		company: "Capgemini Technology Services India Ltd, Bangalore",
		role: "DevOps Consultant",
		period: "Feb 2025 - Present",
		highlights: [
			"Administer AWS EKS clusters and Kubernetes workloads across development, stage, and production environments.",
			"Implement CI/CD pipelines using Azure DevOps, Jenkins, Git, and automated deployment workflows.",
			"Manage Kubernetes Deployments, Services, Ingress Controllers, ConfigMaps, Secrets, Namespaces, and Helm releases.",
			"Configure and support AWS services including EKS, EC2, IAM, ACM, Route53, CloudWatch, S3, and Secrets Manager.",
			"Led HTTPS remediation initiatives involving SSL/TLS certificate onboarding, ACM integration, trust chain validation, and secure ingress configurations.",
			"Managed Application Load Balancer (ALB) ingress routing and Kubernetes networking components.",
			"Executed production deployments, release validations, rollback planning, and post-deployment verification.",
			"Implemented monitoring and observability using Grafana and CloudWatch.",
			"Conducted root cause analysis and resolved infrastructure, deployment, authentication, and platform-related issues.",
		],
	},
	{
		company: "Computacenter India Pvt Ltd, Bangalore",
		role: "AWS Cloud Engineer",
		period: "Mar 2021 - Jan 2024",
		highlights: [
			"Designed and managed AWS infrastructure including EC2, S3, RDS, IAM, VPC, ELB, and Route53.",
			"Provisioned cloud resources using Terraform and Infrastructure as Code practices.",
			"Built and maintained Jenkins CI/CD pipelines integrated with Git and Maven.",
			"Managed Docker containers and Kubernetes deployments for cloud-native applications.",
			"Created CloudWatch dashboards, monitoring alerts, and operational reporting solutions.",
			"Automated infrastructure provisioning and deployment activities using Ansible.",
			"Supported migration of workloads from on-premises environments to AWS cloud platforms.",
			"Collaborated with development teams on build, release, deployment, and infrastructure activities.",
		],
	},
	{
		company: "Concentrix, Bangalore",
		role: "Technical Support Associate",
		period: "Dec 2018 - Jan 2020",
		highlights: [
			"Resolved 85% of trouble tickets on the first call without escalations.",
			"Achieved a customer satisfaction score of 4.3/5 and improved customer satisfaction by 25%.",
			"Planned, supervised, and coordinated daily activities of junior associates.",
			"Received the Customer Appreciation Award three times.",
			"Supported Microsoft operating systems, installation, activation, printer, internet connectivity, and update issues.",
		],
	},
];

type ProjectIconName = "platform" | "assessment" | "infrastructure" | "delivery" | "observability";

const projects = [
	{
		title: "Enterprise EKS Platform Operations",
		description: "Supported enterprise Kubernetes workloads running on Amazon EKS, including deployments, troubleshooting, ingress validation, platform support, and operational reliability improvements.",
		technologies: ["AWS", "EKS", "Kubernetes", "NGINX", "IAM"],
		icon: "platform",
	},
	{
		title: "HTTPS Remediation Program",
		description: "Implemented HTTPS onboarding, SSL certificate integration, ACM migration, trust chain validation and secure ingress configuration.",
		technologies: ["AWS ACM","ALB","Kubernetes","SSL/TLS"],
		icon: "platform",
	},
	{
		title: "AWS EKS Platform Operations",
		description: "Managed production Kubernetes workloads running on Amazon EKS including deployments, ingress, secrets and troubleshooting.",
		technologies: ["AWS","EKS","Helm","Kubernetes"],
		icon: "assessment"
	},
	{
		title: "CI/CD Platform Automation",
		description: "Built and supported automated deployment pipelines using Azure DevOps, Jenkins, and GitHub Actions to streamline software delivery.",
		technologies: ["Azure DevOps", "Jenkins", "GitHub Actions", "Git"],
		icon: "delivery",
	},
	{
		title: "Observability & Monitoring Platform",
		description: "Implemented monitoring, dashboarding, and alerting solutions using Prometheus and Grafana to improve visibility and operational support.",
		technologies: ["Prometheus", "Grafana", "Monitoring"],
		icon: "observability",
	},
	{
		title: "Infrastructure Automation",
		description: "Provisioned AWS infrastructure using Terraform and Ansible following Infrastructure as Code practices.",
		technologies: ["Terraform","Ansible","AWS"],
		icon: "infrastructure"
	},
] as const;

const learningStages = [
	{
		status: "Completed",
		statusText: "text-emerald-200",
		statusDot: "bg-emerald-300",
		statusBorder: "border-emerald-300/25",
		iconSurface: "border-emerald-300/15 bg-emerald-300/[0.06] text-emerald-200",
		certifications: ["AWS Certified Developer Associate"],
	},
] as const;

type AiTopicIconName = "code" | "agents" | "prompt" | "development";

const aiTopics = [
	{
		title: "Claude Code",
		description: "AI-assisted software engineering and automation.",
		icon: "code",
		iconSurface: "border-blue-300/15 bg-blue-300/[0.06] text-blue-200",
		hoverBorder: "hover:border-blue-300/30",
	},
	{
		title: "Agentic AI DevOps",
		description: "Applying AI agents for DevOps workflows, troubleshooting, and operational productivity.",
		icon: "agents",
		iconSurface: "border-violet-300/15 bg-violet-300/[0.06] text-violet-200",
		hoverBorder: "hover:border-violet-300/30",
	},
	{
		title: "Prompt Engineering",
		description: "Building effective prompts and workflows for engineering and cloud operations.",
		icon: "prompt",
		iconSurface: "border-blue-300/15 bg-blue-300/[0.06] text-blue-200",
		hoverBorder: "hover:border-blue-300/30",
	},
	{
		title: "AI-Powered Development",
		description: "Using GitHub Copilot, Claude Code, and AI tools to accelerate development and infrastructure automation.",
		icon: "development",
		iconSurface: "border-violet-300/15 bg-violet-300/[0.06] text-violet-200",
		hoverBorder: "hover:border-violet-300/30",
	},
] as const;

const careerStages = [
	{
		role: "Technical Support Associate",
		phase: "FOUNDATION",
		marker: "border-slate-500 bg-[#111720]",
		card: "border-white/10 hover:border-white/20",
		roleColor: "text-slate-200",
		phaseColor: "text-slate-500",
	},
	{
		role: "AWS Cloud Engineer",
		phase: "OPERATIONS",
		marker: "border-slate-500 bg-[#111720]",
		card: "border-white/10 hover:border-white/20",
		roleColor: "text-slate-200",
		phaseColor: "text-slate-500",
	},
	{
		role: "DevOps Consultant",
		phase: "CURRENT",
		marker: "border-orange-100 bg-orange-400 shadow-[0_0_16px_rgba(251,146,60,0.65)]",
		card: "border-orange-300/30 bg-orange-300/[0.07] hover:border-orange-200/50",
		roleColor: "text-orange-100",
		phaseColor: "text-orange-200",
	},
	{
		role: "Senior DevOps Engineer",
		phase: "FUTURE",
		marker: "border-blue-200 bg-blue-400",
		card: "border-blue-300/15 hover:border-blue-300/35",
		roleColor: "text-blue-100",
		phaseColor: "text-blue-200",
	},
	{
		role: "Platform Engineer",
		phase: "FUTURE",
		marker: "border-blue-200 bg-blue-400",
		card: "border-blue-300/15 hover:border-blue-300/35",
		roleColor: "text-blue-100",
		phaseColor: "text-blue-200",
	},
	{
		role: "Cloud Architect",
		phase: "FUTURE",
		marker: "border-blue-200 bg-blue-400",
		card: "border-blue-300/15 hover:border-blue-300/35",
		roleColor: "text-blue-100",
		phaseColor: "text-blue-200",
	},
] as const;

function ProjectIcon({ name }: { name: ProjectIconName }) {
	return (
		<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
			{name === "platform" && <path d="M20 16.2A4.5 4.5 0 0 0 18.5 7.5a6.5 6.5 0 0 0-12.4 2A4.2 4.2 0 0 0 6.5 18h11a4.4 4.4 0 0 0 2.5-1.8Z" />}
			{name === "assessment" && <path d="M20 7v5h-5M4 17v-5h5m-4.1-3a7.5 7.5 0 0 1 12.4-2L20 12M4 12l2.7 5.1A7.5 7.5 0 0 0 19 15" />}
			{name === "infrastructure" && <path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5m-18 4 9 5 9-5" />}
			{name === "delivery" && <><circle cx="6" cy="6" r="2" /><circle cx="18" cy="18" r="2" /><circle cx="18" cy="6" r="2" /><path d="M8 6h4a4 4 0 0 1 4 4v6M8 6v12a4 4 0 0 0 4 4h4" /></>}
			{name === "observability" && <path d="M3 12h4l3-9 4 18 3-9h4" />}
		</svg>
	);
}

function AiTopicIcon({ name }: { name: AiTopicIconName }) {
	return (
		<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
			{name === "code" && <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="m8 10-2 2 2 2m4 2h4" /></>}
			{name === "agents" && <><circle cx="12" cy="5" r="2" /><circle cx="6" cy="18" r="2" /><circle cx="18" cy="18" r="2" /><path d="M12 7v4m-4 3 3-3m5 3-3-3" /></>}
			{name === "prompt" && <><path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H6l-3 2v-6a7.5 7.5 0 1 1 17-3.5Z" /><path d="M12 8v5m-2.5-2.5h5" /></>}
			{name === "development" && <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Zm7 12 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />}
		</svg>
	);
}

function CertificationIcon() {
	return (
		<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-[18px]" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
			<circle cx="12" cy="8" r="6" />
			<path d="m15.477 12.89 1.523 9.11-5-3-5 3 1.523-9.11" />
		</svg>
	);
}

function MailIcon() {
	return (
		<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-[18px]" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
			<rect x="3" y="5" width="18" height="14" rx="2" />
			<path d="m3 7 9 6 9-6" />
		</svg>
	);
}

function DownloadIcon() {
	return (
		<svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-4">
			<path d="M10 2.75v9.5m0 0 3.5-3.5M10 12.25l-3.5-3.5M3.5 13.75v2.5h13v-2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}

function GithubIcon() {
	return (
		<svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="size-[18px]">
			<path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.75-1.32-3.75-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.47-.28-5.06-1.24-5.06-5.51 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.62 10.62 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.28-2.6 5.22-5.08 5.5.4.35.75 1.03.75 2.08v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
		</svg>
	);
}

function LinkedinIcon() {
	return (
		<svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="size-[18px]">
			<path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18V9.7H5.57V18h2.77Zm-1.38-9.43a1.61 1.61 0 1 0-.02-3.22 1.61 1.61 0 0 0 .02 3.22ZM18.43 18v-4.55c0-2.44-1.3-3.58-3.03-3.58a2.61 2.61 0 0 0-2.36 1.3V9.7h-2.77c.04.9 0 8.3 0 8.3h2.77v-4.64c0-.25.02-.5.09-.68.2-.5.66-1.01 1.43-1.01 1.01 0 1.42.77 1.42 1.9V18h2.45Z" />
		</svg>
	);
}

export default function Home() {
	return (
		<>
			<SiteNavigation />
		<main className="relative isolate min-h-screen overflow-hidden bg-[#080b10] text-white">
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 -z-10"
				style={{
					backgroundImage:
						"radial-gradient(ellipse at 12% 18%, rgba(249,115,22,0.13), transparent 34%), radial-gradient(ellipse at 83% 38%, rgba(59,130,246,0.14), transparent 32%), radial-gradient(ellipse at 75% 88%, rgba(139,92,246,0.12), transparent 34%), linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
					backgroundSize: "auto, auto, auto, 64px 64px, 64px 64px",
					maskImage: "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
				}}
			/>

			<div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-6 sm:px-10 lg:px-16">
				<section id="home" className="grid flex-1 items-center gap-16 py-16 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-12">
					<div className="relative z-10 max-w-2xl animate-[fade-in-up_700ms_ease-out_both]">
						<div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-orange-300/20 bg-orange-300/[0.06] px-3.5 py-2 text-[11px] font-semibold tracking-[0.16em] text-orange-200 sm:text-xs">
							<span className="size-1.5 rounded-full bg-orange-300" />
							AWS CLOUD / DEVOPS
						</div>

						<h1 className="text-[clamp(3rem,5.8vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:whitespace-nowrap">
							Suman <span className="bg-gradient-to-r from-orange-300 via-orange-200 to-amber-100 bg-clip-text text-transparent">Kemmannakeri</span>
						</h1>
						<h2 className="mt-5 text-xl font-semibold leading-snug text-orange-200 sm:text-2xl">
							AWS DevOps Engineer
						</h2>
						<p className="mt-2 max-w-xl text-base font-medium leading-snug text-slate-200 sm:text-lg">
							Building Scalable Cloud Platforms on AWS
						</p>

						<dl className="mt-6 grid max-w-xl grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
							<div className="rounded-xl border border-white/10 bg-white/[0.045] p-3 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-orange-300/25 sm:p-4">
									<dt className="text-lg font-semibold leading-none text-orange-300 sm:text-xl">5+</dt>
								<dd className="mt-2 text-[10px] leading-4 text-slate-400 sm:text-xs">Years Experience</dd>
							</div>
							<div className="rounded-xl border border-white/10 bg-white/[0.045] p-3 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-blue-300/25 sm:p-4">
								<dt className="text-lg font-semibold leading-none text-blue-300 sm:text-xl">5+</dt>
								<dd className="mt-2 text-[10px] leading-4 text-slate-400 sm:text-xs">Years DevOps</dd>
							</div>
							<div className="rounded-xl border border-white/10 bg-white/[0.045] p-3 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-violet-300/25 sm:p-4">
								<dt className="text-lg font-semibold leading-none text-violet-300 sm:text-xl">EKS</dt>
								<dd className="mt-2 text-[10px] leading-4 text-slate-400 sm:text-xs">Platform Engineering</dd>
							</div>
							<div className="rounded-xl border border-white/10 bg-white/[0.045] p-3 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-orange-300/25 sm:p-4">
								<dt className="text-lg font-semibold leading-none text-orange-300 sm:text-xl">Future</dt>
								<dd className="mt-2 text-[10px] leading-4 text-slate-400 sm:text-xs">Cloud Architect</dd>
							</div>
						</dl>

						<p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
							I build dependable cloud foundations that help teams ship with confidence, scale smoothly, and spend less time managing infrastructure.
						</p>

						<p className="mt-7 max-w-xl text-xs font-medium leading-6 text-slate-500 sm:text-sm">
							Kubernetes <span className="px-1.5 text-orange-300">|</span> EKS <span className="px-1.5 text-blue-300">|</span> Terraform <span className="px-1.5 text-violet-300">|</span> CI/CD <span className="px-1.5 text-orange-300">|</span> Platform Engineering
						</p>

						<div className="mt-9 flex flex-wrap items-center gap-3">
							<a
								href="/resume/Suman_DevOps_5years.pdf"
								target="_blank"
								rel="noreferrer"
								className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-orange-400 px-5 text-sm font-semibold text-[#17100a] shadow-[0_8px_30px_rgba(249,115,22,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-orange-300 hover:shadow-[0_12px_34px_rgba(249,115,22,0.28)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-300"
							>
								<DownloadIcon />
								Download Resume
							</a>
							<a
								href="https://github.com/"
								target="_blank"
								rel="noreferrer"
								aria-label="GitHub profile"
								className="inline-flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.045] text-slate-200 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
							>
								<GithubIcon />
							</a>
							<a
								href="https://www.linkedin.com/"
								target="_blank"
								rel="noreferrer"
								aria-label="LinkedIn profile"
								className="inline-flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.045] text-slate-200 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-blue-300/40 hover:bg-blue-300/10 hover:text-blue-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
							>
								<LinkedinIcon />
							</a>
						</div>

						<div className="mt-12 flex items-center gap-4 border-t border-white/[0.08] pt-6">
							<div className="flex -space-x-2">
								<span className="size-7 rounded-full border-2 border-[#080b10] bg-orange-400/80" />
								<span className="size-7 rounded-full border-2 border-[#080b10] bg-blue-400/80" />
								<span className="size-7 rounded-full border-2 border-[#080b10] bg-violet-400/80" />
							</div>
							<p className="text-xs leading-5 text-slate-500">
								<span className="font-medium text-slate-300">Build. Automate. Scale.</span>
								<br />Cloud-native by design.
							</p>
						</div>
					</div>

					<div className="relative mx-auto grid aspect-square w-full max-w-[470px] place-items-center animate-[fade-in_900ms_ease-out_150ms_both] lg:ml-auto">
						<div aria-hidden="true" className="absolute -inset-8 rounded-[40%] bg-gradient-to-br from-orange-400/15 via-blue-400/10 to-violet-400/20 blur-3xl" />
						<div className="relative size-[min(74vw,280px)] rounded-full border-[3px] border-orange-400 p-1 shadow-[0_0_0_8px_rgba(249,115,22,0.08),0_20px_70px_rgba(249,115,22,0.18)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_0_0_10px_rgba(249,115,22,0.1),0_24px_80px_rgba(249,115,22,0.26)]">
							<div className="relative size-full overflow-hidden rounded-full bg-[#171c26]">
								<Image
									src="/profile.png"
									alt="Suman Kemmannakeri"
									fill
									sizes="(max-width: 640px) 74vw, 280px"
									priority
									className="object-cover object-[center_30%]"
								/>
							</div>
						</div>

						<div className="absolute -left-8 top-[27%] hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#111720]/85 p-3.5 shadow-2xl backdrop-blur-xl sm:flex lg:-left-12">
							<span className="grid size-10 place-items-center rounded-xl bg-blue-400/10 text-blue-300">
								<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
									<path d="M7 18.5h10a4 4 0 0 0 .42-7.98A5.5 5.5 0 0 0 6.7 9.2 4.7 4.7 0 0 0 7 18.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									<path d="m9 14 2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</span>
							<span>
								<span className="block text-[10px] font-medium tracking-[0.12em] text-slate-500">PLATFORM</span>
								<span className="mt-0.5 block text-xs font-semibold text-slate-100">Cloud-native</span>
							</span>
						</div>

						<div className="absolute -right-4 bottom-[19%] flex items-center gap-2.5 rounded-xl border border-violet-300/15 bg-[#111720]/90 px-3.5 py-3 shadow-2xl backdrop-blur-xl sm:-right-8">
							<span className="size-2 rounded-full bg-violet-300 shadow-[0_0_12px_rgba(196,181,253,0.8)]" />
							<span className="text-xs font-medium text-slate-200">Automate the repeatable</span>
						</div>
					</div>
				</section>

				<section id="about" className="relative border-t border-white/[0.08] py-16 md:py-20 lg:py-24">
					<div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_18%_40%,rgba(249,115,22,0.07),transparent_42%),radial-gradient(ellipse_at_88%_70%,rgba(59,130,246,0.07),transparent_38%)]" />
					<div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
						<div className="max-w-2xl">
							<p className="mb-4 text-[11px] font-semibold tracking-[0.18em] text-orange-200">PROFILE</p>
							<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">About Me</h2>
							<div className="mt-6 space-y-4 text-sm leading-7 text-slate-400 sm:text-base">
								<p>
											AWS DevOps Engineer with 5+ years of experience in cloud infrastructure, CI/CD automation, Kubernetes administration, Infrastructure as Code, and production support. Skilled in AWS, Azure DevOps, Kubernetes, Docker, Terraform, Helm, Jenkins, Ansible, and Linux. Experienced in managing cloud-native applications, automating deployments, supporting cloud migration initiatives, implementing HTTPS remediation, and maintaining highly available enterprise platforms.
								</p>
								<p>
										Based in Bangalore, Karnataka.
								</p>
							</div>
						</div>

						<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
							<div className="group rounded-xl border border-white/10 bg-white/[0.045] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-orange-300/25">
								<span className="mb-6 block size-2 rounded-full bg-orange-300 shadow-[0_0_14px_rgba(253,186,116,0.5)]" />
								<h3 className="text-base font-semibold text-slate-100">AWS Cloud</h3>
							</div>
							<div className="group rounded-xl border border-white/10 bg-white/[0.045] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-blue-300/25">
								<span className="mb-6 block size-2 rounded-full bg-blue-300 shadow-[0_0_14px_rgba(147,197,253,0.5)]" />
								<h3 className="text-base font-semibold text-slate-100">Kubernetes (EKS)</h3>
							</div>
							<div className="group rounded-xl border border-white/10 bg-white/[0.045] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-violet-300/25">
								<span className="mb-6 block size-2 rounded-full bg-violet-300 shadow-[0_0_14px_rgba(196,181,253,0.5)]" />
								<h3 className="text-base font-semibold text-slate-100">Terraform &amp; IaC</h3>
							</div>
							<div className="group rounded-xl border border-white/10 bg-white/[0.045] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-orange-300/25">
								<span className="mb-6 block size-2 rounded-full bg-orange-300 shadow-[0_0_14px_rgba(253,186,116,0.5)]" />
								<h3 className="text-base font-semibold text-slate-100">CI/CD Automation</h3>
							</div>
						</div>
					</div>
				</section>

				<section id="expertise" className="relative border-t border-white/[0.08] py-16 md:py-20 lg:py-24">
					<div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_82%_15%,rgba(249,115,22,0.07),transparent_38%),radial-gradient(ellipse_at_10%_85%,rgba(59,130,246,0.06),transparent_38%)]" />
					<div className="relative">
						<div className="mb-9">
							<p className="mb-4 text-[11px] font-semibold tracking-[0.18em] text-orange-200">TECH STACK</p>
							<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Technical Expertise</h2>
						</div>

						<div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
							{skillGroups.map((group) => (
								<article
									key={group.category}
									className="group rounded-xl border border-white/10 bg-white/[0.045] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-orange-300/25 sm:p-6"
								>
									<div className="mb-5 flex items-center gap-3">
										<span className="size-2 rounded-full bg-orange-300 shadow-[0_0_14px_rgba(253,186,116,0.5)] transition group-hover:shadow-[0_0_18px_rgba(253,186,116,0.8)]" />
										<h3 className="text-sm font-semibold text-slate-100 sm:text-base">{group.category}</h3>
									</div>
									<ul className="flex flex-wrap gap-2">
										{group.skills.map((skill) => (
											<li
												key={skill}
												className="rounded-lg border border-white/[0.09] bg-[#080b10]/45 px-2.5 py-1.5 text-xs text-slate-300 transition-colors duration-200 hover:border-orange-300/35 hover:text-orange-100"
											>
												{skill}
											</li>
										))}
									</ul>
								</article>
							))}
						</div>
					</div>
				</section>

				<section id="experience" className="relative border-t border-white/[0.08] py-16 md:py-20 lg:py-24">
					<div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_12%_15%,rgba(249,115,22,0.07),transparent_38%),radial-gradient(ellipse_at_88%_85%,rgba(59,130,246,0.06),transparent_38%)]" />
					<div className="relative">
						<div className="mb-10 max-w-2xl">
							<p className="mb-4 text-[11px] font-semibold tracking-[0.18em] text-orange-200">CAREER PATH</p>
							<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Professional Experience</h2>
							<p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
								Experience across technical support, AWS cloud engineering, and DevOps consulting.
							</p>
						</div>

						<div className="relative">
							<div aria-hidden="true" className="absolute bottom-8 left-[7px] top-8 w-px bg-gradient-to-b from-orange-300/80 via-orange-300/45 to-orange-300/10" />
							<div className="space-y-5">
								{experiences.map((experience) => (
									<article key={experience.company} className="group relative pl-8 sm:pl-10">
										<span aria-hidden="true" className="absolute left-0 top-6 size-4 rounded-full border-[3px] border-orange-300 bg-[#080b10] shadow-[0_0_16px_rgba(253,186,116,0.35)] transition group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(253,186,116,0.6)]" />
										<div className="rounded-xl border border-white/10 bg-white/[0.045] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-orange-300/25 sm:p-6">
											<div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
												<div>
													<h3 className="text-base font-semibold leading-snug text-white sm:text-lg">{experience.company}</h3>
													<p className="mt-1 text-sm font-medium text-orange-200">{experience.role}</p>
												</div>
												<p className="w-fit shrink-0 rounded-full border border-orange-300/15 bg-orange-300/[0.06] px-3 py-1.5 text-xs font-medium text-orange-100">
													{experience.period}
												</p>
											</div>
											<ul className="mt-5 grid gap-2 border-t border-white/[0.08] pt-4">
												{experience.highlights.map((highlight) => (
													<li key={`${experience.company}-${highlight}`} className="flex items-start gap-2 text-sm leading-6 text-slate-300">
														<span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-orange-300" />
														<span>{highlight}</span>
													</li>
												))}
											</ul>
										</div>
									</article>
								))}
							</div>
						</div>
					</div>
				</section>

				<section id="projects" className="relative border-t border-white/[0.08] py-16 md:py-20 lg:py-24">
					<div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_84%_15%,rgba(249,115,22,0.07),transparent_38%),radial-gradient(ellipse_at_12%_82%,rgba(139,92,246,0.06),transparent_36%)]" />
					<div className="relative">
						<div className="mb-9 max-w-3xl">
							<p className="mb-4 text-[11px] font-semibold tracking-[0.18em] text-orange-200">SELECTED WORK</p>
							<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Featured Projects</h2>
							<p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
								Key cloud, Kubernetes, automation, and platform engineering initiatives that demonstrate my hands-on experience.
							</p>
						</div>

						<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
							{projects.map((project) => (
								<article
									key={project.title}
									className="group rounded-xl border border-white/10 bg-white/[0.045] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-orange-300/30 hover:shadow-[0_18px_42px_rgba(0,0,0,0.24)] sm:p-6"
								>
									<div className="mb-5 grid size-11 place-items-center rounded-xl border border-orange-300/15 bg-orange-300/[0.06] text-orange-200 transition duration-300 group-hover:border-orange-300/35 group-hover:bg-orange-300/10">
										<ProjectIcon name={project.icon} />
									</div>
									<h3 className="text-base font-semibold leading-snug text-white sm:text-lg">{project.title}</h3>
									<p className="mt-3 text-sm leading-6 text-slate-400">{project.description}</p>
									<ul className="mt-5 flex flex-wrap gap-2 border-t border-white/[0.08] pt-4">
										{project.technologies.map((technology) => (
											<li key={technology} className="rounded-lg border border-white/[0.09] bg-[#080b10]/45 px-2.5 py-1.5 text-xs text-slate-300 transition-colors duration-200 hover:border-orange-300/35 hover:text-orange-100">
												{technology}
											</li>
										))}
									</ul>
								</article>
							))}
						</div>
					</div>
				</section>

				<section id="learning" className="relative border-t border-white/[0.08] py-16 md:py-20 lg:py-24">
					<div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_14%_18%,rgba(16,185,129,0.06),transparent_36%),radial-gradient(ellipse_at_86%_82%,rgba(59,130,246,0.07),transparent_38%)]" />
					<div className="relative">
						<div className="mb-10 max-w-3xl">
							<p className="mb-4 text-[11px] font-semibold tracking-[0.18em] text-orange-200">GROWTH &amp; DEVELOPMENT</p>
							<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Certification</h2>
							<p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
								Continuous learning and professional development focused on Cloud, DevOps, Kubernetes, Platform Engineering, and AI-assisted engineering.
							</p>
						</div>

						<div className="relative">
							<div aria-hidden="true" className="absolute bottom-8 left-[7px] top-5 w-px bg-gradient-to-b from-emerald-300/70 via-orange-300/65 to-blue-300/65 lg:bottom-auto lg:left-[16.7%] lg:right-[16.7%] lg:top-2 lg:h-px lg:w-auto" />
							<div className="space-y-4 lg:grid lg:grid-cols-3 lg:gap-4 lg:space-y-0">
								{learningStages.map((stage) => (
									<article key={stage.status} className="group relative pl-8 lg:pl-0 lg:pt-8">
										<span aria-hidden="true" className={`absolute left-0 top-5 size-4 rounded-full border-[3px] ${stage.statusBorder} ${stage.statusDot} shadow-[0_0_16px_rgba(255,255,255,0.12)] lg:left-1/2 lg:top-0 lg:-translate-x-1/2`} />
										<div className="h-full rounded-xl border border-white/10 bg-white/[0.045] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-white/20 sm:p-6">
											<div className="mb-5 flex items-center justify-between gap-3">
												<div className="flex items-center gap-2.5">
													<span className={`size-2 rounded-full ${stage.statusDot}`} />
													<h3 className={`text-sm font-semibold ${stage.statusText} sm:text-base`}>{stage.status}</h3>
												</div>
												<span className="text-[10px] font-medium tracking-[0.12em] text-slate-500">{String(stage.certifications.length).padStart(2, "0")} ITEMS</span>
											</div>
											<ul className="space-y-2.5">
												{stage.certifications.map((certification) => (
													<li key={certification} className="flex items-start gap-3 rounded-lg border border-white/[0.07] bg-[#080b10]/35 p-3 transition duration-200 hover:border-white/15">
														<span className={`grid size-9 shrink-0 place-items-center rounded-lg border ${stage.iconSurface}`}>
															<CertificationIcon />
														</span>
														<span className="pt-1 text-sm leading-5 text-slate-200">{certification}</span>
													</li>
												))}
											</ul>
										</div>
									</article>
								))}
							</div>
						</div>
					</div>
				</section>

				<section id="ai-engineering" className="relative border-t border-white/[0.08] py-16 md:py-20 lg:py-24">
					<div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_16%_20%,rgba(59,130,246,0.08),transparent_38%),radial-gradient(ellipse_at_86%_82%,rgba(139,92,246,0.08),transparent_38%)]" />
					<div className="relative">
						<div className="mb-9 max-w-3xl">
							<p className="mb-4 text-[11px] font-semibold tracking-[0.18em] text-blue-200">AI / NEXT-GEN ENGINEERING</p>
							<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">AI Engineering &amp; Agentic AI</h2>
							<p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
								Exploring how AI, agentic workflows, and developer productivity tools are transforming modern DevOps and Platform Engineering practices.
							</p>
						</div>

						<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
							{aiTopics.map((topic, index) => (
								<article
									key={topic.title}
									className={`group flex min-h-[220px] flex-col rounded-xl border border-white/10 bg-white/[0.045] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(0,0,0,0.24)] sm:p-6 ${topic.hoverBorder}`}
								>
									<div className="mb-6 flex items-start justify-between">
										<span className={`grid size-11 place-items-center rounded-xl border transition duration-300 group-hover:scale-105 ${topic.iconSurface}`}>
											<AiTopicIcon name={topic.icon} />
										</span>
										<span className="font-mono text-[10px] tracking-[0.14em] text-slate-600">0{index + 1}</span>
									</div>
									<h3 className="text-base font-semibold leading-snug text-slate-100 sm:text-lg">{topic.title}</h3>
									<p className="mt-3 text-sm leading-6 text-slate-400">{topic.description}</p>
								</article>
							))}
						</div>
					</div>
				</section>

				<section id="career-roadmap" className="relative border-t border-white/[0.08] py-16 md:py-20 lg:py-24">
					<div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_18%_25%,rgba(249,115,22,0.07),transparent_38%),radial-gradient(ellipse_at_86%_78%,rgba(59,130,246,0.07),transparent_38%)]" />
					<div className="relative">
						<div className="mb-10 max-w-3xl">
							<p className="mb-4 text-[11px] font-semibold tracking-[0.18em] text-orange-200">NEXT MILESTONES</p>
							<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Career Roadmap</h2>
							<p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
								My journey from infrastructure operations to platform engineering and cloud architecture.
							</p>
						</div>

						<div className="relative">
							<div aria-hidden="true" className="absolute bottom-6 left-[7px] top-5 w-px bg-gradient-to-b from-orange-300/20 via-orange-400 to-orange-300/40 xl:bottom-auto xl:left-[8.33%] xl:right-[8.33%] xl:top-[7px] xl:h-px xl:w-auto xl:bg-gradient-to-r" />
							<ol className="space-y-3 xl:grid xl:grid-cols-6 xl:gap-3 xl:space-y-0">
								{careerStages.map((stage, index) => (
									<li key={stage.role} className="relative pl-8 xl:pl-0 xl:pt-8">
										<span aria-hidden="true" className={`absolute left-0 top-5 size-4 rounded-full border-[3px] ${stage.marker} xl:left-1/2 xl:top-0 xl:-translate-x-1/2`} />
										<article className={`min-h-28 rounded-xl border bg-white/[0.045] p-4 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 sm:p-5 ${stage.card}`}>
											<div className="mb-5 flex items-center justify-between gap-2">
												<span className={`font-mono text-[10px] tracking-[0.14em] ${stage.phaseColor}`}>{stage.phase}</span>
												<span className="font-mono text-[10px] text-slate-600">0{index + 1}</span>
											</div>
											<h3 className={`text-sm font-semibold leading-5 sm:text-base ${stage.roleColor}`}>{stage.role}</h3>
										</article>
									</li>
								))}
							</ol>
						</div>
					</div>
				</section>

				<section id="education" className="relative border-t border-white/[0.08] py-16 md:py-20 lg:py-24">
					<div className="relative max-w-3xl">
						<p className="mb-4 text-[11px] font-semibold tracking-[0.18em] text-orange-200">EDUCATION</p>
						<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Bachelor of Engineering (Computer Science &amp; Engineering)</h2>
						<p className="mt-4 text-base font-medium text-slate-200">UBDT College of Engineering, Davangere</p>
						<p className="mt-2 text-sm text-slate-400">2014 - 2018</p>
					</div>
				</section>

				<section id="contact" className="relative border-t border-white/[0.08] py-16 md:py-20 lg:py-24">
					<div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_14%_35%,rgba(249,115,22,0.09),transparent_38%),radial-gradient(ellipse_at_88%_72%,rgba(59,130,246,0.07),transparent_38%)]" />
					<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:p-8 lg:p-10">
						<div aria-hidden="true" className="absolute -right-20 -top-24 size-64 rounded-full bg-orange-400/[0.06] blur-3xl" />
						<div className="relative">
							<div className="max-w-3xl">
								<p className="mb-4 flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.18em] text-orange-200">
									<span className="size-1.5 rounded-full bg-orange-300" />
									GET IN TOUCH
								</p>
								<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Let&apos;s Connect</h2>
								<p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
									Open to discussing AWS Cloud, DevOps, Platform Engineering, Cloud Architecture, and professional opportunities.
								</p>
							</div>

							<dl className="mt-8 grid gap-5 sm:grid-cols-3 sm:gap-6">
								<div className="min-w-0 border-t border-white/[0.1] pt-4">
									<dt className="text-[10px] font-semibold tracking-[0.16em] text-slate-500">EMAIL</dt>
									<dd className="mt-2 break-all text-sm font-medium text-slate-200">
															<a className="transition-colors hover:text-orange-200" href="mailto:sumankemmannakeri1096@gmail.com">sumankemmannakeri1096@gmail.com</a>
									</dd>
								</div>
								<div className="min-w-0 border-t border-white/[0.1] pt-4">
									<dt className="text-[10px] font-semibold tracking-[0.16em] text-slate-500">PHONE</dt>
									<dd className="mt-2 text-sm font-medium text-slate-200">
										<a className="transition-colors hover:text-orange-200" href="tel:+917975161997">+91 7975161997</a>
									</dd>
								</div>
								<div className="min-w-0 border-t border-white/[0.1] pt-4">
									<dt className="text-[10px] font-semibold tracking-[0.16em] text-slate-500">LOCATION</dt>
										<dd className="mt-2 text-sm font-medium text-slate-200">Bangalore, Karnataka</dd>
								</div>
							</dl>

							<div className="mt-8 rounded-xl border border-emerald-300/15 bg-emerald-300/[0.035] p-5 sm:p-6">
								<h3 className="text-sm font-semibold text-slate-100">Availability</h3>
								<ul className="mt-4 grid gap-3 sm:grid-cols-2">
									{[
										"AWS DevOps Opportunities",
										"Platform Engineering Discussions",
										"Cloud Architecture Networking",
										"Technology Collaboration",
									].map((item) => (
										<li key={item} className="flex items-center gap-3 text-sm text-slate-300">
											<span className="grid size-5 shrink-0 place-items-center rounded-full bg-emerald-300/10 text-emerald-300">
												<svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-3.5">
													<path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</span>
											<span>{item}</span>
										</li>
									))}
								</ul>
							</div>

							<a
								href="mailto:sumankemmannakeri1096@gmail.com"
								className="mt-8 inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-xl bg-orange-400 px-6 text-sm font-semibold text-[#17100a] shadow-[0_8px_30px_rgba(249,115,22,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-orange-300 hover:shadow-[0_12px_34px_rgba(249,115,22,0.28)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-300 sm:w-fit"
							>
								<MailIcon />
								Let&apos;s Talk
							</a>
						</div>
					</div>
				</section>

				<footer className="border-t border-white/[0.08] py-6 text-center">
					<div className="flex flex-col items-center gap-2">
						<p className="text-[11px] font-semibold text-slate-400">© 2026 Suman Kemmannakeri</p>
						<p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs font-medium text-slate-300">
							<span>AWS DevOps Engineer</span>
							<span aria-hidden="true" className="text-orange-300">|</span>
							<span>Platform Engineering</span>
							<span aria-hidden="true" className="text-orange-300">|</span>
							<span>Future Cloud Architect</span>
						</p>
						<p className="text-[11px] leading-5 text-slate-500">Built with Next.js, TypeScript, Tailwind CSS and AI-assisted development.</p>
					</div>
				</footer>
			</div>
		</main>
		</>
	);
}
