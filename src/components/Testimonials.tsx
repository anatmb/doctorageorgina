// const testimonials = [
//   { name: "María González", text: "La Dra. Martínez me brindó la confianza que necesitaba durante mi embarazo.", stars: 5 },
//   { name: "Ana Rodríguez", text: "Excelente atención médica, me sentí escuchada y comprendida.", stars: 5 },
//   { name: "Carmen López", text: "Un trato humano excepcional y explicaciones claras.", stars: 5 },
// ];

// export default function Testimonials() {
//   return (
//     <section className="py-16 text-center bg-gray-50 px-6">
//       <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-8">Lo Que Dicen Nuestras Pacientes</h2>
//       <div className="flex md:grid gap-6 overflow-x-auto md:overflow-visible md:grid-cols-3">
//         {testimonials.map((t, i) => (
//           <div key={i} className="bg-white shadow-md p-6 rounded-xl min-w-[250px] md:min-w-0">
//                <h4 className="font-semibold text-purple-700">{t.name}</h4>
//             <p className="text-gray-600 mb-4 text-sm md:text-base">“{t.text}”</p>
         
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// const testimonials = [
//   {
//     name: "María González",
//     text: "La Dra. Martínez me brindó la confianza que necesitaba durante mi embarazo.",
//     stars: 5,
//     image: "/src/assets/img/testimonio1.jpg",
//   },
//   {
//     name: "Ana Rodríguez",
//     text: "Excelente atención médica, me sentí escuchada y comprendida.",
//     stars: 5,
//     image: "/src/assets/img/testimonio2.jpg",
//   },
//   {
//     name: "Carmen López",
//     text: "Un trato humano excepcional y explicaciones claras.",
//     stars: 5,
//     image: "/src/assets/img/testimonio3.jpg",
//   },
// ];

// export default function Testimonials() {
//   return (
//     <section className="py-16 bg-gray-50 text-center">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-12">
//           Lo Que Dicen Nuestras Pacientes
//         </h2>

//         <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
//           {testimonials.map((t, i) => (
//             <div
//               key={i}
//               className="bg-white shadow-md p-6 rounded-xl flex flex-col items-center text-center hover:shadow-lg transition"
//             >
//               {/* Imagen redonda */}
//               <img
//                 src={t.image}
//                 alt={t.name}
//                 className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-purple-200 shadow-sm"
//               />

//               {/* Nombre y texto */}
//               <h4 className="font-semibold text-purple-700 mb-2">{t.name}</h4>
//               <p className="text-gray-600 text-sm md:text-base mb-4">“{t.text}”</p>

//               {/* Estrellas */}
//               <div className="text-yellow-400">
//                 {"★".repeat(t.stars)}{"☆".repeat(5 - t.stars)}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "María González",
    text: "La Dra. Martínez me brindó la confianza que necesitaba durante mi embarazo.",
    stars: 5,
    image: "/src/assets/img/testimonio1.jpg",
  },
  {
    name: "Ana Rodríguez",
    text: "Excelente atención médica, me sentí escuchada y comprendida.",
    stars: 5,
    image: "/src/assets/img/testimonio2.jpg",
  },
  {
    name: "Carmen López",
    text: "Un trato humano excepcional y explicaciones claras.",
    stars: 5,
    image: "/src/assets/img/testimonio3.jpg",
  },
    {
    name: "Maria López",
    text: "Un trato humano excepcional y explicaciones claras.",
    stars: 5,
    image: "/src/assets/img/testimonio4.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-12">
          Lo Que Dicen Nuestras Pacientes
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white shadow-md p-6 rounded-xl flex flex-col items-center text-center hover:shadow-lg transition duration-300">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-purple-200 shadow-sm"
                />
                <h4 className="font-semibold text-purple-700 mb-2">{t.name}</h4>
                <p className="text-gray-600 text-sm md:text-base mb-4">“{t.text}”</p>
                <div className="text-yellow-400 text-lg">
                  {"★".repeat(t.stars)}{"☆".repeat(5 - t.stars)}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
