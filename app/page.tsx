import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    // Explicitly forcing light background to override the dark mode seen in Screenshot 2026-06-24 at 12-35-51.jpg
    <div className="min-h-screen bg-[#fbfbfb] text-slate-800 font-sans antialiased selection:bg-rose-100">
      {/* Porkbun Signature Top Coral Accent Bar */}
      <div className="h-2 bg-[#f16568]" />

      {/* Header Bar */}
      <header className="border-b border-gray-200 bg-white py-4 px-6 shadow-xs">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-2xl text-slate-900 tracking-tight">
            <span>🐷</span> porkbun
            <span className="text-xs text-gray-400 font-normal ml-1">
              (parody)
            </span>
          </div>
          <div className="text-xs bg-amber-50 border border-amber-200 text-amber-800 px-3 py-1 rounded-full font-mono font-medium">
            Status: $11.08 in debt
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-2xl mx-auto px-4 py-12">
        {/* Slogan Spotlight Card */}
        <div className="bg-white border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center shadow-xs mb-6">
          <h1 className="text-xl md:text-2xl font-black text-slate-900 tracking-widest uppercase mb-3">
            AN ODDLY SATISFYING EXPERIENCE.
          </h1>
          <p className="text-slate-500 max-w-md mx-auto text-sm leading-relaxed">
            Porkbun proudly blasts this headline at 600,000+ customers. They
            just completely forgot to register the actual{" "}
            <code className="bg-slate-100 text-slate-800 px-1 py-0.5 rounded font-mono">
              .com
            </code>{" "}
            asset.
          </p>
        </div>

        {/* Content & Proof Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs space-y-6">
          <p className="text-slate-600 leading-relaxed text-sm">
            So, Porkbun&apos;s tagline (or whatever that&apos;s called) is{" "}
            <strong>&ldquo;AN ODDLY SATISFYING EXPERIENCE.&rdquo;</strong>{" "}
            It&apos;s been live since about 2020, which can easily be verified
            through the{" "}
            <Link
              href="https://web.archive.org/web/20200303002613/https://porkbun.com/"
              target="_blank"
              className="text-[#f16568] hover:underline font-semibold"
            >
              Wayback Machine
            </Link>
            .
          </p>

          {/* Screenshot Container */}
          <div className="border border-gray-100 rounded-lg overflow-hidden bg-slate-50 group hover:border-gray-300 transition-colors shadow-xs">
            <Link
              href="https://web.archive.org/web/20200303002613/https://porkbun.com/"
              target="_blank"
              className="block relative w-full h-48 sm:h-64"
            >
              <Image
                src="/img/porkbun-waybackmachine.png"
                alt="Screenshot from waybackmachine"
                fill
                className="object-cover object-top transition-transform duration-200 group-hover:scale-[1.01]"
              />
            </Link>
          </div>

          <p className="text-slate-600 leading-relaxed text-sm">
            I also found similar tagline on their{" "}
            <Link
              href={"https://x.com/Porkbun"}
              target="_blank"
              className="text-[#f16568] hover:underline font-semibold"
            >
              X's profile
            </Link>
            , I mean that <i>used to be blue bird</i>.
          </p>

          {/* Screenshot Container */}
          <div className="border border-gray-100 rounded-lg overflow-hidden bg-slate-50 group hover:border-gray-300 transition-colors shadow-xs">
            <Link
              href="https://web.archive.org/web/20200303002613/https://porkbun.com/"
              target="_blank"
              className="block relative w-full h-48 sm:h-64"
            >
              <Image
                src="/img/porkbun-x.png"
                alt="Porkbun X Profile"
                fill
                className="object-cover object-top transition-transform duration-200 group-hover:scale-[1.01]"
              />
            </Link>
          </div>

          <p className="text-slate-600 leading-relaxed text-sm">
            Seeing these, I simply had to buy the domain. 🙂
          </p>

          <hr className="border-gray-100" />

          {/* The Bailout / Call-To-Action Box */}
          <div className="bg-rose-50/60 border border-rose-100 rounded-xl p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-1">
              <h3 className="font-bold text-rose-950 text-base flex items-center gap-1.5">
                💸 Ransom / Liquidation Sale
              </h3>
              <p className="text-xs text-rose-800 max-w-sm">
                Now, I&apos;m in 11 bucks debt. Hit me up if you work at Porkbun
                and want your slogan back, or if you just want to buy this
                glorious piece of internet history (I need to buy food, so
                please do a better price)
              </p>
            </div>

            <a
              href="mailto:shriyanss@ss0x00.com?subject=Regarding anoddlysatisfyingexperience.com"
              className="w-full sm:w-auto text-center px-5 py-2.5 bg-[#f16568] hover:bg-[#e05355] text-white font-semibold rounded-lg text-sm transition-colors shadow-sm whitespace-nowrap"
            >
              Bail Me Out
            </a>
          </div>

          {/* Obfuscated Footer Email */}
          <div className="text-center text-[11px] text-gray-400 font-mono pt-2">
            contact: shriyanss@ss0x00.com
          </div>
        </div>
      </main>
    </div>
  );
}
