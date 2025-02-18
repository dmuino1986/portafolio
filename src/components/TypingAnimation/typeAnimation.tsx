import { forwardRef, useEffect, useState } from "react";

interface TypingAnimationProps {
  textList: string[];
  delay: number;
  inView: boolean;
}

const TypingAnimation = forwardRef<HTMLDivElement, TypingAnimationProps>(
  ({ textList, delay, inView }, ref) => {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);
    const [time, setTime] = useState(delay);

    useEffect(() => {
      if (inView) {
        setTimeout(() => {
          initAnimate();
        }, time);
      } else {
        clearTimeout(time);
      }
    }, [text, time, inView]);

    const animate = (word: string) => {
      if (isDeleting) {
        setText(word.substring(0, text.length - 1));
      } else {
        setText(word.substring(0, text.length + 1));
      }
      if (text === "" && isDeleting) {
        setIndex(index + 1);
        setIsDeleting(false);
        setTime(delay);
      }
      if (text === word) {
        setIsDeleting(true);
        setTime(90);
      }
    };

    const initAnimate = () => {
      const wordIndex = index % textList.length;
      animate(textList[wordIndex]);
    };

    return (
      <span ref={ref} className="typing">
        {text}
      </span>
    );
  }
);
export default TypingAnimation;
