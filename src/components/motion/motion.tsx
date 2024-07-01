"use client";

import { type HTMLMotionProps, motion } from "framer-motion";

export function MotionDiv(props: HTMLMotionProps<"div">) {
  return <motion.div {...props}>{props.children}</motion.div>;
}

export function MotionH1(props: HTMLMotionProps<"h1">) {
  return <motion.h1 {...props}>{props.children}</motion.h1>;
}

export function MotionH2(props: HTMLMotionProps<"h2">) {
  return <motion.h2 {...props}>{props.children}</motion.h2>;
}

export function MotionH3(props: HTMLMotionProps<"h3">) {
  return <motion.h3 {...props}>{props.children}</motion.h3>;
}
