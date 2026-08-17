import { marqueeItems } from "../content";
import { Icon } from "../lib/icons";

export default function Marquee() {
  const track = [...marqueeItems, ...marqueeItems];
  return (
    <div className="mt-14 bg-petrol text-aqua/90 py-4 overflow-hidden border-y-2 border-teal/30 relative">
      <div className="marquee-track" aria-hidden="false">
        {track.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 px-7 whitespace-nowrap text-sm font-medium"
            aria-hidden={i >= marqueeItems.length}
          >
            <Icon name="pulse" className="w-4 h-4 text-honey shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
