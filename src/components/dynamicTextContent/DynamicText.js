// TypewriterText.js
"use client";
import Typewriter from 'typewriter-effect';

const texts = [
    'Create Rapid Prototype.',
    'Learn New Framework',
    'Code',
    'Create Bug Report',
    'Review Bug Report',
    'Get Feedback',
    'Run Live Example',
    'Teach New Framework'
];
const TypewriterText = () => {

  return (
    <Typewriter
        onInit={(typewriter) => {
            typewriter.typeString(texts[texts.length-1])
                .callFunction(() => {
                })
                .pauseFor(2500)
                .deleteAll()
                .callFunction(() => {
                })
                .start();
  }}
  options={{
    loop: true,
    autoStart: true,
    cursor: ''
  }}
/>
  );
};

export default TypewriterText;
