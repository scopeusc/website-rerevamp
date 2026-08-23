import Image from "next/image";
import { Countdown } from "@/components/Countdown";
import { FaqAccordion } from "@/components/FaqAccordion";
import { LogoMarquee } from "@/components/LogoMarquee";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TextLink } from "@/components/TextLink";
import { WaveBackdrop, WaveLayer } from "@/components/WaveBackdrop";
import { boardMembers, socialWeek, topics } from "@/lib/content";

function SectionKicker({
  children,
  tone = "accent",
}: {
  children: React.ReactNode;
  tone?: "accent" | "glow";
}) {
  return (
    <p className={`kicker ${tone === "accent" ? "text-accent" : "text-glow"}`}>
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-col">
      <div className="relative z-10 flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">
          <WaveLayer>
            <WaveBackdrop
              top={{ base: "20%", sm: "10%", md: "10%", lg: "10%", xl: "10%" }}
              centerX={{ base: "40%", sm: "40%", md: "40%", lg: "40%", xl: "40%" }}
              width={{ base: "200%", sm: "180%", md: "180%", lg: "180%", xl: "180%" }}
              priority
            />
            <section className="relative z-10">
              <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-24">
              <div className="max-w-xl">
                <p className="mb-5 text-sm font-medium text-muted">
                  Build and learn cool things with great people.
                </p>
                <h1 className="font-hero text-[18vw] leading-[0.78] tracking-[-0.07em] uppercase md:text-[7.5rem]">
                  Join
                  <br />
                  Scope
                </h1>
                <p className="mt-6 max-w-md text-lg leading-[1.42] text-muted">
                  A computer science community for learning new things, building
                  together, and finding your people at USC.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <TextLink href="/applications">Join Scope</TextLink>
                  <TextLink href="/#curriculum" variant="ghost">
                    Explore the programs ↘
                  </TextLink>
                </div>
                <div className="mt-10">
                  <Countdown />
                </div>
              </div>
              <div className="hero-infinity relative z-10 mx-auto aspect-square w-full max-w-[520px] -mb-40 md:mb-0">
                <Image
                  src="/images/infinity-purple.webp"
                  alt="Scope metallic infinity mark"
                  fill
                  priority
                  sizes="520px"
                  className="object-contain mix-blend-screen"
                />
              </div>
            </div>
          </section>
          </WaveLayer>

        <section id="curriculum" className="mx-auto max-w-[1200px] px-5 py-20 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionKicker>01 / Curriculum</SectionKicker>
              <h2 className="headline mt-4 text-5xl md:text-6xl">
                LEARN WHAT’S NEXT.
              </h2>
            </div>
            <div>
              <p className="text-lg leading-[1.42] text-muted">
                At Scope, we are always learning; so rather than focus on skills
                that are taught in USC’s core curriculum classes, you will learn
                a new technology or framework that is valuable in the tech
                industry right now. As a member, you will spend the first half of
                the semester learning about the curriculum topic through fun
                mini-projects, and the second half of the semester building
                something cool with your newfound skills.
              </p>
              <p className="kicker mt-8 text-glow">Past topics include:</p>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {topics.map((topic) => (
                  <div
                    key={topic}
                    className="panel rounded-2xl px-4 py-5 text-lg font-bold tracking-[-0.03em]"
                  >
                    {topic}
                  </div>
                ))}
                <div className="panel rounded-2xl px-4 py-5 text-lg font-bold tracking-[-0.03em] sm:col-span-4">
                  Team projects + hackathons
                </div>
              </div>
            </div>
          </div>
        </section>

        <WaveLayer>
          <WaveBackdrop
            centerY={{ base: "100%", sm: "100%", md: "100%", lg: "140%", xl: "140%" }}
            centerX={{ base: "-10vw", sm: "0", md: "0", lg: "0", xl: "0" }}
            rotate="90deg"
            height={{ base: "150vw", sm: "100vw", md: "100vw", lg: "80vw", xl: "80vw" }}
          />
          <section id="catalyst" className="relative z-10 mx-auto max-w-[1200px] px-5 py-10 md:px-8">
          <SectionKicker tone="glow">02 / Grow + belong</SectionKicker>
          <h2 className="headline mt-4 max-w-3xl text-5xl md:text-6xl">
            BUILD FOR WHAT’S NEXT.
          </h2>
          <p className="mt-4 text-muted">
            A little more confidence. A lot more momentum.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="panel rounded-[28px] p-6 md:p-8">
              <SectionKicker>02 / Catalyst</SectionKicker>
              <h3 className="mt-4 text-3xl font-black tracking-[-0.04em]">
                Catalyst
              </h3>
              <p className="mt-4 text-base leading-[1.42] text-muted">
                We want our members to feel confident taking the next step in
                their careers. Through Catalyst, you will get hands-on support
                throughout the recruiting process, from strengthening your
                application to preparing for interviews, while learning from
                other Scope members who have been through it themselves.
              </p>
              <p className="kicker mt-8 text-glow">Opportunities</p>
              <p className="mt-3 text-sm font-semibold leading-6">
                Resume Reviews · Mock Interviews · Recruiting Support · Career
                Workshops · Tech Talks
              </p>
            </article>
            <article
              id="social"
              className="relative overflow-hidden rounded-[28px] border border-white/12 p-6 md:p-8"
            >
              <div className="relative">
                <SectionKicker tone="glow">03 / Social</SectionKicker>
                <h3 className="mt-4 text-3xl font-black tracking-[-0.04em]">
                  FIND YOUR PEOPLE.
                </h3>
                <p className="mt-4 text-base leading-[1.42] text-muted">
                  Retreats, side quests, and the kind of weekly rituals that turn
                  classmates into your people.
                </p>
                <p className="kicker mt-8 text-glow">Our weeks</p>
                <p className="mt-3 text-sm font-semibold leading-6">
                  {socialWeek.join(" · ")}
                </p>
                <p className="mt-6 text-base leading-[1.42] text-muted">
                  We believe that getting to know the people you build with is
                  just as important as the building itself. Throughout the
                  semester, we host weekly socials so you all can spend time
                  together outside of projects, get to know other members, and
                  become part of the Scope community.
                </p>
              </div>
            </article>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {["01", "02"].map((n) => (
              <div
                key={n}
                className="panel flex min-h-56 items-end rounded-[28px] p-6"
              >
                <div>
                  <p className="kicker text-glow">Cohort photo / {n}</p>
                  <p className="mt-3 text-muted">Drop a cohort moment here.</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        </WaveLayer>

        <WaveLayer>
            <WaveBackdrop
              className="md:hidden"
              centerY={{ base: "100%", sm: "100%", md: "100%", lg: "140%", xl: "140%" }}
              centerX={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" }}
              rotate="-90deg"
              height={{ base: "150vw", sm: "100vw", md: "100vw", lg: "80vw", xl: "80vw" }}
            />
        <section id="board" className="relative z-10 mx-auto max-w-[1200px] px-5 py-20 md:px-8">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionKicker>04 / The board</SectionKicker>
              <h2 className="headline mt-4 max-w-xl text-5xl md:text-6xl">
                MEET THE PEOPLE BEHIND SCOPE.
              </h2>
            </div>
            <div className="relative hidden h-24 w-40 md:block">
              <Image
                src="/images/infinity-chrome.webp"
                alt=""
                fill
                sizes="160px"
                className="object-contain mix-blend-screen"
              />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {boardMembers.map((member) => (
              <article
                key={member.name}
                className="panel grid grid-cols-[112px_1fr] overflow-hidden rounded-[24px] md:grid-cols-[140px_1fr]"
              >
                <div className="relative min-h-36">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="140px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between p-5">
                  <p className="kicker text-accent">{member.index}</p>
                  <div>
                    <h3 className="text-2xl font-black tracking-[-0.04em]">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{member.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        </WaveLayer>

        <section id="faq" className="mx-auto max-w-[1200px] px-5 py-16 md:px-8">
          <SectionKicker>05 / Frequently asked questions</SectionKicker>
          <h2 className="headline mt-4 text-5xl md:text-6xl">
            WHAT YOU SHOULD KNOW.
          </h2>
          <p className="mt-4 mb-8 text-muted">
            Everything you’re probably wondering about the club.
          </p>
          <FaqAccordion />
        </section>

        <section id="sponsor" className="mx-auto max-w-[1200px] px-5 py-16 md:px-8">
          <div className="panel grid overflow-hidden rounded-[32px] lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-6 md:p-10">
              <SectionKicker tone="glow">Sponsorship deck / Fall ’26</SectionKicker>
              <h2 className="headline mt-4 text-4xl md:text-5xl">
                PARTNER WITH SCOPE USC
              </h2>
              <p className="mt-4 max-w-lg text-lg leading-[1.42] text-muted">
                Help more USC students learn, build, and find a launchpad for
                what comes next.
              </p>
              <div className="mt-8">
                <TextLink href="/sponsorship">View sponsorship details</TextLink>
              </div>
            </div>
            <div className="relative min-h-64">
              <Image
                src="/images/sponsorship-cover.png"
                alt="Scope USC sponsorship deck cover"
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <WaveLayer>
          <WaveBackdrop
            top={{ base: "10%", sm: "10%", md: "10%", lg: "10%", xl: "10%" }}
            left={{ base: "-40vw", sm: "-40vw", md: "-40vw", lg: "-40vw", xl: "-40vw" }}
            width={{ base: "140vw", sm: "140vw", md: "140vw", lg: "140vw", xl: "140vw" }}
          />
        <section id="alumni" className="relative z-10 py-16">
          <div className="mx-auto max-w-[1200px] px-5 md:px-8">
            <div className="mb-8 flex items-center gap-3">
              <SectionKicker>05 / Alumni network</SectionKicker>
            </div>
            <h2 className="headline max-w-3xl text-5xl md:text-6xl">
              WHERE SCOPE CAN TAKE YOU.
            </h2>
            <p className="mt-4 mb-10 max-w-2xl text-lg leading-[1.42] text-muted">
              Scope alumni take the energy with them into teams, products, and
              companies they’re genuinely excited about.
            </p>
          </div>
          <LogoMarquee />
        </section>
        </WaveLayer>
      </main>
      <SiteFooter />
      </div>
    </div>
  );
}
