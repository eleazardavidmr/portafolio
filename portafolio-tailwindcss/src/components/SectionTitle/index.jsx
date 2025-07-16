import { Typewriter } from "react-simple-typewriter";
export default function SectionTitle({ title }) {
  return (
    <h1 className="text-xl font-bold px-2.5 py-0.5 rounded-md dark:bg-red-900 dark:text-red-300 w-fit">
      <Typewriter
        words={[title]}
        loop={5}
        cursor={true}
        cursorStyle={"_"}
        typeSpeed={60}
        deleteSpeed={50}
        delaySpeed={2000}
      />
    </h1>
  );
}
