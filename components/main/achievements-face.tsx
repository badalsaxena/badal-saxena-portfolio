import Image from "next/image";

export const AchievementsFace = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] w-full overflow-hidden bg-transparent">
      {/* Starry background is assumed to be global or in parent */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">
        Hackathon <span className="text-blue-400">Achievements</span>
      </h1>
      <div className="relative flex flex-col items-center justify-center">
        {/* Glowing effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-r from-purple-500/30 to-cyan-500/30 blur-3xl z-0" />
        {/* Images in a row with slight arc */}
        <div className="relative flex flex-row items-end justify-center gap-12 z-10 mb-8">
          <Image
            src="/achievements/pic1.jpg"
            alt="Hackathon 1"
            width={200}
            height={200}
            className="rounded-2xl border-4 border-purple-500/60 shadow-xl object-cover bg-black/40"
          />
          <Image
            src="/achievements/pic2.jpg"
            alt="Hackathon 2"
            width={240}
            height={240}
            className="rounded-2xl border-4 border-cyan-500/60 shadow-xl object-cover bg-black/40 scale-110"
          />
          <Image
            src="/achievements/pic3.jpg"
            alt="Hackathon 3"
            width={200}
            height={200}
            className="rounded-2xl border-4 border-purple-500/60 shadow-xl object-cover bg-black/40"
          />
        </div>
        {/* Shorter Description */}
        <div className="relative z-10 max-w-xl text-center text-gray-300 text-base md:text-lg bg-black/40 rounded-xl px-6 py-4 backdrop-blur-md border border-purple-500/20 shadow-md">
          <p className="mb-2 font-semibold text-purple-300">1st Hackathon:</p>
          <p className="mb-4">Won 1st place as a Frontend Developer, building an intuitive UI and collaborating with a diverse team.</p>
          <p className="mb-2 font-semibold text-cyan-300">2nd Hackathon:</p>
          <p>Led frontend architecture, implemented responsive design, and helped my team win another 1st place!</p>
        </div>
      </div>
    </section>
  );
}; 