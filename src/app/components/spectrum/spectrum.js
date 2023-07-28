"use client";
import AudioSpectrum from "react-audio-spectrum";
import { useState, useEffect } from "react";

export const Spectrum = ({ audioUrl }) => {
  const [id, setId] = useState("");

  useEffect(() => {
    setId(audioUrl + "_Spectrum");
  }, [audioUrl]);

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 pointer-events-none">
      <AudioSpectrum
        id="audio-canvas"
        key={id}
        height={200}
        width={10000}
        audioId={audioUrl}
        capColor={"rgb(28,25,23)"}
        capHeight={1}
        meterWidth={10}
        meterCount={512}
        meterColor={[
          { stop: 0, color: "rgb(209, 43, 45)" },

          { stop: 1, color: "rgb(241, 131, 54)" },
        ]}
        gap={1}
      />
    </div>
  );
};
