"use client";

import { type MotionProps, motion } from "framer-motion";
import React from "react";

type MotionDivProps = React.HTMLAttributes<HTMLDivElement> & MotionProps;

export default function MotionDiv(props: MotionDivProps) {
  return <motion.div {...props}>{props.children}</motion.div>;
}
