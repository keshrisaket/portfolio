import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const base = import.meta.env.BASE_URL;
  const sectionRef = useRef(null);
  const project1ref = useRef(null);
  const project2ref = useRef(null);
  const project3ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1ref.current,
      project2ref.current,
      project3ref.current,
    ];
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []); 
 
  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">

          <div className="first-project-wrapper" ref={project1ref}>
            <div className="flex justify-center bg-[#14283b] py-6 rounded-lg relative overflow-hidden w-full">
             
              <div className="image-wrapper h-180 pt-30 w-full max-w-md overflow-hidden rounded-xl border border-slate-800 shadow-2xl">
                <img src={`${base}images/Gemini_Generated_Image_2fbumd2fbumd2fbu.png`}
                  alt="ScoreSpare"                
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div> 
            </div>

            <div className="text-content ">
              <h2>
                🛒 Dehati: Empowering Local Commerce, Delivered to Your Door
              </h2>
              <p className="text-white-50 md:text-xl">
                Dehati is a high-performance E-commerce ecosystem built to bring local vendors and rural products to a global audience. Originally launched as a robust web platform, it has now been transformed into a sleek, user-friendly Android application. It’s designed for the modern shopper who values local roots but demands a premium, seamless digital shopping experience.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project   " ref={project2ref}> 
              
              <div className="image-wrapper   py-4 bg-[#14283b]">
                <img src={`${base}images/dehati_web.PNG`} alt="BariBnb" />
              </div>
              <h2>Dehati - A Premium Local Marketplace</h2>
            </div> 
            <div className="project  " ref={project3ref}>
              <div className="image-wrapper py-3 bg-[#14283b]">
                <img src={`${base}images/dehati_admin.PNG`} alt="UsePopcorn" />
              </div>
              <h2> Dehati Admin - An E-commerce Management Suite </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
