import { Transition, Variants, } from "framer-motion"

export const FADE_TRANSITION: Transition = {
  type: "keyframes",
  ease: "easeInOut",
  duration: 0.5,
}

export const FADE_ANIMATION: Variants = {
  initial: {
    opacity: 0, y: -20,
  },
  animate: {
    opacity: 1, y: 0,
  },
  exit: {
    opacity: 0, y: 20,
  },
} 