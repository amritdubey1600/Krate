// TextSection.jsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';          // 👈 free substitute

gsap.registerPlugin(ScrollTrigger);

const TextSection = () => {
  const textRef      = useRef();   // paragraph element
  const sectionRef   = useRef();   // pinning section
  const splitInstRef = useRef();   // SplitType instance
  const tlRef        = useRef();   // GSAP timeline

  useEffect(() => {
    const createSplit = () => {
      // Clean up previous split/animation on resize
      splitInstRef.current?.revert?.();
      tlRef.current?.kill();

      // Split the paragraph into individual characters
      splitInstRef.current = new SplitType(textRef.current, { types: 'chars' });

      tlRef.current = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: 0.75,
          markers: false,   // remove in prod
        },
      }).set(
        splitInstRef.current.chars,
        { color: '#fff', stagger: 0.1 },
        0.1
      );
    };

    createSplit();

    // Debounced resize handling (mirrors your GSAP example)
    const debouncer = gsap.delayedCall(0.2, createSplit).pause();
    const onResize  = () => debouncer.restart(true);
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      splitInstRef.current?.revert?.();
      tlRef.current?.scrollTrigger?.kill();
    };
  }, []);

  return (
    <>
      <section ref={sectionRef} id="about" className="relative">
        <div className="max-w-7xl mx-auto h-screen flex justify-center items-center">
          <p ref={textRef} className="text-stone-700 px-7 text-6xl whitespace-normal break-keep">
            We are passionate about creating visually <br />
            stunning and functional solutions that <br />
            communicate effectively. I have a keen eye for detail and a deep understanding of design <br /> 
            principles, which I use to deliver projects that exceed my clients' expectations.
          </p>
        </div>
      </section>
    </>
  );
};

export default TextSection;
