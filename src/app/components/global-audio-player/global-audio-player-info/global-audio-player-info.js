export const GlobalAudioPlayerInfo = ({ trackInfo }) => {
  return (
    <div>
      <h3 className="text-white text-xs truncate max-w-[180px] font-semibold">
        {trackInfo}
      </h3>
      <span className="text-white/60 text-xs">ПОП | 125 bmp | 192 kbit</span>
    </div>
  );
};
