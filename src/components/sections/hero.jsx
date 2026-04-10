// import ServiceBtn from "../ui/serviceBtn"
// import Image from "next/image"

// export default function Hero() {
//   return (
//     <section className=" text-white min-h-screen flex items-center ">
//       <div className="max-w-7xl mx-auto w-full px-6 lg:px-10 grid md:grid-cols-2 gap-10 items-center">
        
//         {/* TEXT */}
//         <div className="space-y-6 text-center md:text-left">
//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
//             Let’s build a world of <span className="text-olive-200">healthy minds</span>
//           </h1>

//           <p className="text-base sm:text-lg text-olive-100 max-w-lg mx-auto md:mx-0">
//             Confidential therapy sessions to help you manage stress, anxiety, and life’s challenges.
//           </p>

//           <div className="pt-2">
//             <ServiceBtn />
//           </div>
//         </div>

//         {/* IMAGE */}
//         <div className="flex justify-center md:justify-end">
//           <Image
//             src="/images/hero1.jpg"
//             alt="Therapy illustration"
//             width={420}
//             height={420}
//             className="rounded"
//             priority
//           />
//         </div>

//       </div>
//     </section>
//   )
// }



import ServiceBtn from "../ui/serviceBtn"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center mt-10 bg-olive-500">
      
      {/* BG IMAGE */}
      <Image
        src="/images/hero3.png"
        alt="Therapy background"
        fill
        className="object-contain object-right"
        priority
      />

      {/* OVERLAY — so text stays readable over the image */}
      <div className="absolute inset-0 bg-olive/70" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10">
        <div className="max-w-xl space-y-6">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Let&apos;s build a world of{" "}
            <span className="text-coral">healthy minds</span>
          </h1>

          <p className="text-white/80 text-base sm:text-lg">
            Confidential therapy sessions to help you manage stress, anxiety, and life&apos;s challenges.
          </p>

          <div className="pt-2">
            <ServiceBtn />
          </div>
        </div>
      </div>

    </section>
  )
}