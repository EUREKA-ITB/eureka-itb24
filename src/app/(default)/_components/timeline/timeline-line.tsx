import { MotionDiv } from "@/components/motion/motion";

export default function TimelineLine() {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="h-4 w-[0.3rem] rounded-xl bg-yellow-400"
    />
  );
}
