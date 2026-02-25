import Image from "next/image"

export default function WhyChooseUs() {
  return (
    <section
      className="py-20 md:py-28 lg:py-32 bg-(--background2)"
    //   style={{ backgroundColor: "oklch(98.881% 0.00321 199.034)" }}
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <p
              className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-(--primary)"
              // style={{ color: "oklch(0.62 0.22 185)" }}
            >
              End-to-End Technology Partners
            </p>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-[2.5rem] font-bold leading-[1.1] tracking-tight text-(--altText) text-balance">
              Technology Built Around Your Vision
            </h1>

            {/* Supporting Statement */}
            <p className="text-lg md:text-md text-(--altText) leading-relaxed max-w-xl">
              We listen, advise, and integrate seamlessly with your goals, combining strategic
              thinking with strong technical execution to deliver efficient, future-ready systems.
            </p>

            {/* Feature Blocks */}
            <div className="space-y-8 px-2">
              {/* Feature 1 */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  {/* <div
                    className=" w-9 h-9 flex  items-center justify-center  shadow-md"
                    // style={{ backgroundColor: "var(--cardLight)" }}
                  > */}
                    <svg fill="var(--textDark)" version="1.1" xmlns="http://www.w3.org/2000/svg" width="35" height="35"
	                        viewBox="0 0 128 128">
                              <g id="_x31_">
                                   </g>
                            <g id="Layer_1">
	                        <g>
		                <circle cx="25.3" cy="45.2" r="8.2"/>
		                <path d="M36.9,86.7H23.2V76.5l-7.1-12.1c-0.3-0.5-0.1-1.1,0.3-1.4c0.5-0.3,1.1-0.1,1.4,0.3l8.2,14c0.6,1,1.7,1.8,3,1.8h14
			                c2,0,3.6-1.7,3.6-3.6c0-2-1.7-3.6-3.6-3.6l-11.8,0.1L22,56.4c-0.7-1.2-2.1-1.9-3.7-1.9c-0.2,0-0.8,0.1-1,0.1s-0.6,0.1-0.8,0.2
			                C9.7,57.1,4.3,67.9,4.3,79.1c-0.1,3.4,0,6.2,0.2,8.9c-0.3,3.2,1.7,6.4,4.8,7.6c0.8,0.3,1.7,0.5,2.5,0.5h20.5v19.2
			                c0,2.6,2.1,4.6,4.6,4.6c2.6,0,4.6-2.1,4.6-4.6V91.4c0-1.2-0.5-2.4-1.4-3.3C39.2,87.2,38,86.7,36.9,86.7z"/>
		                <rect x="28.7" y="80.9" width="69.4" height="3.7"/>
		                <circle cx="101.5" cy="46" r="8.2"/>
		                <path d="M122.6,79.1c0-11.2-5.4-22.1-12.2-24.3c-0.2-0.1-0.6-0.1-0.8-0.2c-0.2-0.1-0.8-0.1-1-0.1c-1.7,0-3,0.7-3.7,1.9l-9.3,15.8
			                L83.8,72c-1.9,0-3.6,1.6-3.6,3.6c0,1.9,1.6,3.6,3.6,3.6h14c1.3,0,2.4-0.8,3-1.8l8.2-14c0.3-0.4,0.9-0.6,1.4-0.3
			                c0.4,0.3,0.6,0.9,0.3,1.4l-7.1,12.1v10.2H90c-1.1,0-2.3,0.5-3.3,1.5c-0.9,0.8-1.4,2.1-1.4,3.3v23.9c0,2.6,2,4.6,4.6,4.6
			                c2.6,0,4.6-2,4.6-4.6V96.1h20.5c0.8,0,1.7-0.2,2.5-0.5c3.2-1.2,5.1-4.4,4.8-7.6C122.6,85.3,122.7,82.5,122.6,79.1z"/>
		                <path d="M48.1,26.3c1,0.9,2.2,1.4,3.7,1.3c0.5,0,1-0.1,1.5-0.3l6.3,5.8L49.2,43.8c-0.7,0.6-1.1,1.5-1.1,2.4c0,1.8,1.4,3.2,3.2,3.2
			                c1.1,0,2-0.5,2.6-1.4l10-11l5.9,5.4l1,0.9c-0.1,0.5-0.2,1-0.2,1.5c0.1,1.4,0.6,2.6,1.6,3.6c1,0.9,2.2,1.4,3.7,1.3
			                c0.5,0,0.9-0.1,1.4-0.3l-4.1-3.7l3.7-4l4.1,3.7c0.1-0.5,0.2-1,0.1-1.4c-0.1-1.4-0.6-2.6-1.6-3.5s-2.2-1.4-3.7-1.3
			                c-0.5,0-0.9,0.1-1.4,0.3l-7.1-6.5l4.6-5.4l7.3,6.4l6.4-7.3l-18.2-16l-6.4,7.3l7.1,6.2l-4.7,5.1l-6.5-5.9c0.1-0.5,0.2-0.9,0.1-1.4
			                c-0.1-1.4-0.6-2.6-1.6-3.6c-1-0.9-2.2-1.4-3.7-1.3c-0.5,0-1,0.1-1.4,0.3l4.1,3.7l-3.7,4l-4.1-3.7c-0.1,0.5-0.2,1-0.1,1.4
			                C46.5,24.2,47,25.3,48.1,26.3z"/>
	                    </g>
                        </g>
                        </svg>
                  {/* </div> */}
                  <h2 className="text-xl md:text-2xl font-semibold text-(--accent)">
                    Collaborative Partnership
                  </h2>
                </div>
                <p className="text-base md:text-md text-(--secondary-foreground) leading-relaxed pl-5">
                  We believe the best solutions are built together. By partnering with you from day
                  one, we gain a deep understanding of not just what you need, but why you need it —
                  enabling us to co-create impactful digital products.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  {/* <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: "oklch(0.62 0.22 185)" }}
                  /> */}
                  <svg fill="var(--textDark)" height="35px" width="35px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
	                viewBox="0 0 230.795 230.795" >
                    <g>
	                <path d="M60.357,63.289c-2.929-2.929-7.678-2.93-10.606-0.001L2.197,110.836C0.79,112.243,0,114.151,0,116.14
		                c0,1.989,0.79,3.896,2.196,5.303l47.348,47.35c1.465,1.465,3.384,2.197,5.304,2.197c1.919,0,3.839-0.732,5.303-2.196
		                c2.93-2.929,2.93-7.678,0.001-10.606L18.107,116.14l42.25-42.245C63.286,70.966,63.286,66.217,60.357,63.289z"/>
	                <path d="M228.598,110.639l-47.355-47.352c-2.928-2.928-7.677-2.929-10.606,0.001c-2.929,2.929-2.929,7.678,0.001,10.607
		                l42.051,42.048l-42.249,42.243c-2.93,2.929-2.93,7.678-0.001,10.606c1.465,1.465,3.384,2.197,5.304,2.197
		                c1.919,0,3.839-0.732,5.303-2.196l47.554-47.547c1.407-1.406,2.197-3.314,2.197-5.304
		                C230.795,113.954,230.005,112.046,228.598,110.639z"/>
	                <path d="M155.889,61.302c-3.314-2.484-8.017-1.806-10.498,1.51l-71.994,96.184c-2.482,3.316-1.807,8.017,1.51,10.498
		                c1.348,1.01,2.925,1.496,4.488,1.496c2.282,0,4.537-1.038,6.01-3.006L157.398,71.8C159.881,68.484,159.205,63.784,155.889,61.302z"
		                />
                    </g>
                    </svg>
                  <h2 className="text-xl md:text-2xl font-semibold text-(--accent)">
                    Tailor-Made & Scalable Technology
                  </h2>
                </div>
                <p className="text-base md:text-md text-(--secondary-foreground) leading-relaxed pl-5">
                  No off-the-shelf systems. Every solution is custom-built to fit your operations
                  today while remaining flexible and scalable for tomorrow.
                </p>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative lg:pl-8">
            <div className="grid grid-cols-2 gap-4">
              {/* Main Large Image */}
              <div className="col-span-2 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/collaboration.jpg"
                  alt="Team collaboration in modern workspace"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom Left Image */}
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/technology.jpg"
                  alt="Custom technology solutions"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom Right Accent Block */}
              <div
                className="relative aspect-square rounded-xl overflow-hidden flex items-center justify-center"
                style={{ backgroundColor: "oklch(0.62 0.22 185)" }}
              >
                <div className="text-center p-6">
                  <span className="text-5xl md:text-4xl font-bold text-white">Trusted</span>
                  <p className="text-sm text-white/90 mt-2 font-medium">Technology Partners</p>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div
              className="absolute -z-10 -bottom-6 -right-6 w-48 h-48 rounded-full opacity-20 blur-3xl"
              style={{ backgroundColor: "oklch(0.62 0.22 185)" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
