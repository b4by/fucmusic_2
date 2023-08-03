export const getAllAudio = async () => {
  const res = await fetch("/api/audio");
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};
