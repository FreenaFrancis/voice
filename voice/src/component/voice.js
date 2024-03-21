// import React from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// const Dictaphone = () => {
//   const commands = [
//     {
//       command: 'reset',
//       callback: ({ resetTranscript }) => resetTranscript()
//     },
//     {
//       command:'open *',
//       callback:(site) => {
//         window.open('http://'+site)
//       },

//     },
//      {
//       command:'change background colour t *',
//       callback:(colour) => {
//         // window.open('http://'+site)
//         document.body.style.background=colour;
//       },

//     }
//   ];

//   const {
//     transcript,
//     listening,
//     resetTranscript,
//     browserSupportsSpeechRecognition,
//   } = useSpeechRecognition({ commands });

//   if (!browserSupportsSpeechRecognition) {
//     return <span>Browser doesn't support speech recognition.</span>;
//   }

//   return (
//     <div>
//       <p>Microphone: {listening ? 'on' : 'off'}</p>
//       <button onClick={() => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' })}>
//         Start
//       </button>
//       <button onClick={SpeechRecognition.stopListening}>Stop</button>
//       <button onClick={resetTranscript}>Reset</button>
//       <p>{transcript}</p>
//     </div>
//   );
// };

// export default Dictaphone;

import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = () => {
  const commands = [
    {
      command: 'reset',
      callback: ({ resetTranscript }) => {
        console.log('Resetting transcript');
        resetTranscript();
      }
    },
    {
      command: 'open *',
      callback: (site) => {
        console.log('Opening site:', site);
        window.open('http://' + site);
      },
    },
    {
      command: 'change background colour t *',
      callback: (colour) => {
        console.log('Changing background color to:', colour);
        document.body.style.background = colour;
      },
    }
  ];

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({ commands });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={() => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' })}>
        Start
      </button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};

export default Dictaphone;
