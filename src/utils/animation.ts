import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = ({
  target,
  animationProps,
  scrollProps,
}: {
  target: string;
  animationProps: gsap.TweenVars;
  scrollProps: ScrollTrigger.Vars;
}) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...scrollProps,
    },
  });
};

export const animateWithGsapTimeline = ({
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationProps,
}: {
  timeline: gsap.core.Timeline;
  rotationRef: React.MutableRefObject<{ rotation: number }>;
  rotationState: number;
  firstTarget: HTMLElement;
  secondTarget: HTMLElement;
  animationProps: gsap.TweenVars;
}) => {
  timeline.to(rotationRef.current, {
    rotation: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );
};
