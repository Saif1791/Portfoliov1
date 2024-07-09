import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FollowerPointerCard } from "@/components/ui/FollowingPointer";
import { navItems } from "@/data";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    // <FollowerPointerCard>
    <main className="relative bg-black-100 flex justify-center overflow-x-hidden items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Projects />
        <Testimonials />
        <Footer />
      </div>
    </main>
    //</FollowerPointerCard>
  );
}
