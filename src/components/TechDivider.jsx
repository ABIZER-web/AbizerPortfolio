import React from "react";

const TechDivider = () => {
  const bgColor = "#0f172a";
  const terminalGreen = "#64ffda";

  // We define the ASCII art as a reusable variable to render it twice
  const AsciiArtBlock = () => (
    <div className="flex flex-col mx-0"> {/* mx-0 ensures no gaps between the two blocks */}
      {/* Row 1 */}
      <pre className="font-mono text-[10px] md:text-xs leading-tight block" style={{ color: terminalGreen, textShadow: `0 0 4px ${terminalGreen}, 0 0 8px ${terminalGreen}30` }}>
        {" ───┬────────┬──────┬────────┬──────┬────────┬──────┬────────┬──────┬────────┬──────┬────────┬──────┬────────┬──────┬────────┬──────┬────────┬─── "}
      </pre>
      {/* Row 2 */}
      <pre className="font-mono text-[10px] md:text-xs leading-tight block" style={{ color: terminalGreen, textShadow: `0 0 4px ${terminalGreen}, 0 0 8px ${terminalGreen}30` }}>
        {"  │ ┌───┐  │      │ ┌───┐  │      │ ┌───┐  │      │ ┌───┐  │      │ ┌───┐  │      │ ┌───┐  │      │ ┌───┐  │      │ ┌───┐  │      │ ┌───┐  │ "}
      </pre>
      {/* Row 3 */}
      <pre className="font-mono text-[10px] md:text-xs leading-tight block" style={{ color: terminalGreen, textShadow: `0 0 4px ${terminalGreen}, 0 0 8px ${terminalGreen}30` }}>
        {" ───┼─┤░░░├──┼──────┼─┤░░░├──┼──────┼─┤░░░├──┼──────┼─┤░░░├──┼──────┼─┤░░░├──┼──────┼─┤░░░├──┼──────┼─┤░░░├──┼──────┼─┤░░░├──┼──────┼─┤░░░├──┼─── "}
      </pre>
      {/* Row 4 */}
      <pre className="font-mono text-[10px] md:text-xs leading-tight block" style={{ color: terminalGreen, textShadow: `0 0 4px ${terminalGreen}, 0 0 8px ${terminalGreen}30` }}>
        {"  │ └─┬─┘  │      │ └─┬─┘  │      │ └─┬─┘  │      │ └─┬─┘  │      │ └─┬─┘  │      │ └─┬─┘  │      │ └─┬─┘  │      │ └─┬─┘  │      │ └─┬─┘  │ "}
      </pre>
      {/* Row 5 */}
      <pre className="font-mono text-[10px] md:text-xs leading-tight block" style={{ color: terminalGreen, textShadow: `0 0 4px ${terminalGreen}, 0 0 8px ${terminalGreen}30` }}>
        {" ───┴───┴────┴──────┴───┴────┴──────┴───┴────┴──────┴───┴────┴──────┴───┴────┴──────┴───┴────┴──────┴───┴────┴──────┴───┴────┴──────┴───┴────┴─── "}
      </pre>
    </div>
  );

  return (
    <div
      className="relative w-full overflow-hidden py-8"
      style={{ backgroundColor: bgColor, zIndex: 1 }}
    >
      {/* --- CSS for the Animation --- */}
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-tech-scroll {
          display: flex;
          width: fit-content;
          animation: scrollLeft 20s linear infinite; /* Adjust '20s' to make it faster/slower */
        }
      `}</style>

      {/* Green Glow Background */}
      <div
        className="absolute inset-0 opacity-20 blur-xl pointer-events-none"
        style={{ background: `linear-gradient(90deg, transparent, ${terminalGreen}40, transparent)` }}
      ></div>

      {/* --- SCROLLING CONTAINER --- */}
      <div className="animate-tech-scroll">
        {/* Render 1 (Original) */}
        <div className="flex-shrink-0 px-1">
            <AsciiArtBlock />
        </div>
        
        {/* Render 2 (Duplicate for Loop) */}
        <div className="flex-shrink-0 px-1">
            <AsciiArtBlock />
        </div>
        
        {/* Render 3 (Extra buffer for wide screens) */}
        <div className="flex-shrink-0 px-1">
            <AsciiArtBlock />
        </div>
      </div>

      {/* Fade Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 pointer-events-none z-10" style={{ background: `linear-gradient(90deg, ${bgColor}, transparent)` }}></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 pointer-events-none z-10" style={{ background: `linear-gradient(270deg, ${bgColor}, transparent)` }}></div>

      {/* Grid Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-30" style={{ background: `repeating-linear-gradient(0deg, transparent, transparent 2px, ${terminalGreen}10 2px, ${terminalGreen}10 4px)` }}></div>
    </div>
  );
};

export default TechDivider;