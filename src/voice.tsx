import { useState } from "react";

const synth = window.speechSynthesis;

const VoiceSelector = ({ selected = 0, setSelected }: any) => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>(synth.getVoices());


  return (
    <select
      value={selected}
      onChange={(e) => setSelected(parseInt(e.target.value))}
    >
      {voices.map((voice: any, index: any) => (
        <option key={index} value={index}>
          {voice.name} ({voice.lang}) {voice.default && ' [Default]'}
        </option>
      ))}
    </select>
  );
};

export default VoiceSelector;