import { MotionDiv } from "@/components/motion/motion";

export default function TimelineDot() {
  return (
    <MotionDiv
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.04, type: "spring" }}
      className="my-2 hidden size-6 rounded-full border-4 border-yellow-400 bg-foreground xs:block"
    />
  );
}
