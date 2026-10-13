
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  Layers,
  Smartphone,
  Users,
  CheckCircle2,
  FileText,
  FolderOpen,
  LayoutGrid,
  Home,
} from 'lucide-react';

import oldDesktop from '../assets/knowledgebase/kb-old-desktop.png';
import newDesktop from '../assets/knowledgebase/kb-new-desktop.png';
import resourcePage from '../assets/knowledgebase/kb-resource-page.png';
import oldMobile from '../assets/knowledgebase/kb-old-mobile.png';
import newMobile from '../assets/knowledgebase/kb-new-mobile.png';
import mobileResources from '../assets/knowledgebase/kb-mobile-resources.png';
import coverPages from '../assets/knowledgebase/knowledgebaseImage.png'
import morgridgeHall from '../assets/knowledgebase/morgridge_hall.jpg';

import '../styles/KnowledgeBaseCaseStudy.css';

const projectFacts = [
  { label: 'ORGANIZATION', value: 'UW–Madison FP&M' },
  { label: 'ROLE', value: 'UI/UX Design Lead' },
  { label: 'PLATFORM', value: 'UW KnowledgeBase' },
  { label: 'TIMELINE', value: '2026 – Present' },
];

const responsibilities = [
  {
    icon: Layers,
    title: 'Design Direction',
    description:
      'Lead the overall layout, visual hierarchy, and resource navigation design across the V2 KnowledgeBase',
  },
  {
    icon: Smartphone,
    title: 'Mobile Implementation',
    description:
      'Independently design and implement responsive mobile layouts, navigation, and resource pages using HTML and CSS',
  },
  {
    icon: Users,
    title: 'Team Guidance',
    description:
      'Guide a coworker through the design system, page structure, and implementation approach to support consistency',
  },
];

const migrationSteps = [
  {
    number: '01',
    title: 'Individual Documents',
    description:
      'Review content, improve formatting and accessibility, and verify resources and links',
    icon: FileText,
  },
  {
    number: '02',
    title: 'Resource Pages',
    description:
      'Group related documents into focused pages when an additional layer improves navigation',
    icon: FolderOpen,
  },
  {
    number: '03',
    title: 'Category Pages',
    description:
      'Organize high-level destinations into clear categories without overwhelming users with links',
    icon: LayoutGrid,
  },
  {
    number: '04',
    title: 'KnowledgeBase Homepage',
    description:
      'Connect completed categories to the redesigned homepage after the underlying resources are ready',
    icon: Home,
  },
];

function CaseStudyImage({
  src,
  alt,
  label,
  variant = 'desktop',
}: {
  src: string;
  alt: string;
  label: string;
  variant?: 'desktop' | 'mobile';
}) {
  return (
    <figure className={`kb-case-image kb-case-image-${variant}`}>
      <div className="kb-case-image-media">
        <img src={src} alt={alt} loading="lazy" />
      </div>

      <figcaption>{label}</figcaption>
    </figure>
  );
}

export default function KnowledgeBaseCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      'FP&M KnowledgeBase Redesign | Afif Arifuddin';

    return () => {
      document.title = 'Afif Arifuddin';
    };
  }, []);

  return (
    <article className="kb-case-study">
      <div className="kb-case-container">

        {/* BACK TO PROJECTS */}
        <Link to="/#projects" className="kb-case-back">
          <ArrowLeft size={17} aria-hidden="true" />
          BACK TO PORTFOLIO
        </Link>

        {/* HERO */}
        <header className="kb-case-hero">
          <div className="kb-case-kicker">
            <span>FEATURED WORK / 2026</span>
            <span className="kb-case-status">
              <span className="kb-case-status-dot" />
              ONGOING
            </span>
          </div>

          <p className="kb-case-category">
            UNIVERSITY SYSTEMS / UI/UX / WEB DESIGN
          </p>

          <h1>Reimagining the FP&M KnowledgeBase</h1>

          <p className="kb-case-lead">
            Modernizing how UW–Madison facilities employees
            navigate, access, and maintain operational
            resources through a clearer information structure
            and responsive interface
          </p>

          <div className="kb-case-facts">
            {projectFacts.map((fact) => (
              <div className="kb-case-fact" key={fact.label}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </div>
            ))}
          </div>
        </header>

        {/* COVER IMAGE */}
        <div className="kb-case-cover">
          <img
            src={coverPages}
            alt="Redesigned FP&M KnowledgeBase homepage with categorized resource cards"
          />
          <span>KNOWLEDGEBASE V2 / DESKTOP</span>
        </div>


{/* OVERVIEW */}
<section className="kb-case-section kb-case-overview">
  <div className="kb-case-section-heading">
    <span className="kb-case-section-number">
      01 / OVERVIEW
    </span>

    <h2>More than a visual refresh</h2>
  </div>

  <div className="kb-case-overview-layout">
    {/* Left — Description */}
    <div className="kb-case-prose">
      <p>
        The FP&M KnowledgeBase is a resource for facilities
        employees to access procedures, training materials,
        safety information, and operational documentation
      </p>

      <p>
        The existing experience relies heavily on lengthy
        lists of links and traditional document pages. As the
        number of resources grows, navigating and maintaining
        this structure can become increasingly difficult
      </p>

      <p>
        I lead the ongoing redesign effort, shaping the overall
        layout and navigation, independently developing the
        mobile experience, and guiding a coworker through
        implementation using the university's KnowledgeBase
        Admin Tools
      </p>
    </div>

    {/* Right — Campus Photo */}
    <figure className="kb-case-overview-photo">
      <img
        src={morgridgeHall}
        alt="Morgridge Hall at UW–Madison, with pedestrians along University Avenue"
        loading="lazy"
      />

      <figcaption>
        <span>FIG. 01 / MORGRIDGE HALL</span>
        <span>
          Photo: Jeff Miller / UW–Madison
        </span>
      </figcaption>
    </figure>
  </div>
</section>


        {/* BEFORE AND AFTER */}
        <section className="kb-case-section">
          <div className="kb-case-section-heading">
            <span className="kb-case-section-number">
              02 / DESIGN TRANSFORMATION
            </span>

            <h2>From link-heavy pages to clear navigation</h2>

            <p>
              The redesign replaces dense resource lists with
              a more structured experience using visual
              categories, descriptive labels, and focused
              resource pages
            </p>
          </div>

          <div className="kb-case-comparison">
            <CaseStudyImage
              src={oldDesktop}
              alt="Original KnowledgeBase homepage with long lists of resource links"
              label="BEFORE / Original KnowledgeBase"
            />

            <CaseStudyImage
              src={newDesktop}
              alt="Redesigned KnowledgeBase homepage with resource category cards"
              label="AFTER / V2 Homepage"
            />
          </div>

          <div className="kb-case-insight">
            <span>DESIGN DECISION 001</span>
            <p>
              Instead of displaying every available document
              on one page, users begin with recognizable
              categories and navigate to the resource they need
            </p>
          </div>
        </section>

        {/* RESOURCE PAGE */}
        <section className="kb-case-section">
          <div className="kb-case-section-heading">
            <span className="kb-case-section-number">
              03 / RESOURCE NAVIGATION
            </span>

            <h2>Making individual resources easier to find</h2>

            <p>
              Resource pages use cards, icons, and descriptive
              labels to make available content easier to scan
              while preserving access to the original
              procedures and training materials
            </p>
          </div>

          <CaseStudyImage
            src={resourcePage}
            alt="Tradesperson Resources page with visual cards for guides, videos, maps, and other tools"
            label="V2 / Tradesperson Resources"
          />
        </section>

        {/* MOBILE DESIGN */}
        <section className="kb-case-section">
          <div className="kb-case-section-heading">
            <span className="kb-case-section-number">
              04 / MOBILE EXPERIENCE
            </span>

            <h2>Designed for smaller screens</h2>

            <p>
              I independently designed and implemented the
              mobile experience, adapting the KnowledgeBase's
              navigation, resource cards, and content layouts
              for phones rather than simply shrinking the
              desktop interface
            </p>
          </div>

          <div className="kb-case-mobile-grid">
            <CaseStudyImage
              src={oldMobile}
              alt="Original mobile KnowledgeBase interface with text-heavy resource lists"
              label="BEFORE / Mobile"
              variant="mobile"
            />

            <CaseStudyImage
              src={newMobile}
              alt="Redesigned mobile KnowledgeBase homepage with large navigation cards"
              label="AFTER / Mobile Homepage"
              variant="mobile"
            />

            <CaseStudyImage
              src={mobileResources}
              alt="Redesigned mobile resource page with stacked interactive cards"
              label="V2 / Mobile Resource Pages"
              variant="mobile"
            />
          </div>

          <div className="kb-case-insight">
            <span>DESIGN DECISION 002</span>
            <p>
              The mobile design prioritizes readable content,
              touch-friendly navigation, and a single-column
              layout that makes individual resources easier to
              access on smaller screens
            </p>
          </div>
        </section>

        {/* INFORMATION ARCHITECTURE */}
        <section className="kb-case-section">
          <div className="kb-case-section-heading">
            <span className="kb-case-section-number">
              05 / INFORMATION ARCHITECTURE
            </span>

            <h2>Building the structure from the bottom up</h2>

            <p>
              A major part of the V2 migration is organizing
              existing KnowledgeBase documents into a
              maintainable navigation hierarchy
            </p>

            <p>
              Rather than rebuilding the homepage first,
              the process begins with the individual
              documents and works upward to resource pages,
              category pages, and finally the homepage
            </p>
          </div>

          <div className="kb-case-workflow">
            {migrationSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div className="kb-case-workflow-step" key={step.number}>
                  <div className="kb-case-workflow-icon">
                    <Icon size={25} aria-hidden="true" />
                  </div>

                  <div>
                    <span className="kb-case-workflow-number">
                      STEP {step.number}
                    </span>

                    <h3>{step.title}</h3>

                    <p>{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="kb-case-workflow-note">
            BUILD BOTTOM-UP <span>↑</span> TEST TOP-DOWN
          </p>
        </section>

        {/* CONTRIBUTIONS */}
        <section className="kb-case-section">
          <div className="kb-case-section-heading">
            <span className="kb-case-section-number">
              06 / MY CONTRIBUTIONS
            </span>

            <h2>Leading the direction and doing the work</h2>
          </div>

          <div className="kb-case-contributions">
            {responsibilities.map((item) => {
              const Icon = item.icon;

              return (
                <div className="kb-case-contribution" key={item.title}>
                  <Icon size={27} aria-hidden="true" />

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ACCESSIBILITY */}
        <section className="kb-case-section">
          <div className="kb-case-section-heading">
            <span className="kb-case-section-number">
              07 / QUALITY & ACCESSIBILITY
            </span>

            <h2>Designing for usability and maintenance</h2>
          </div>

          <div className="kb-case-quality-list">
            {[
              'Responsive layouts across desktop, tablet, and mobile',
              'Clear heading hierarchy and descriptive navigation labels',
              'Accessible images and appropriate alternative text',
              'Native KnowledgeBase document linking and resource organization',
              'Accessibility checks and link verification during migration',
            ].map((item) => (
              <div className="kb-case-quality-item" key={item}>
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* PROGRESS */}
        <section className="kb-case-conclusion">
          <span className="kb-case-section-number">
            08 / CURRENT PROGRESS
          </span>

          <h2>An ongoing redesign</h2>

          <p>
            The V2 design and migration process are being
            developed iteratively, with resource pages and
            navigation structures prepared for broader
            implementation and feedback
          </p>

          <p>
            The goal is to create a more accessible,
            consistent, and maintainable KnowledgeBase
            for employees across FP&M
          </p>

          <div className="kb-case-ending">
            <span>DESIGN / DEVELOP / ITERATE</span>
            <ArrowUpRight size={22} aria-hidden="true" />
          </div>
        </section>

        <div className="kb-case-bottom-navigation">
          <Link to="/#projects">
            <ArrowLeft size={18} aria-hidden="true" />
            BACK TO ALL PROJECTS
          </Link>
        </div>
      </div>
    </article>
  );
}
