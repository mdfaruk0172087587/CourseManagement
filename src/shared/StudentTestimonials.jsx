const testimonials = [
  {
    name: "Mim Akter",
    review: "This platform helped me land my first job as a frontend developer!",
    image: "https://i.ibb.co/rG1XVB2S/room11.jpg",
    rating: 5,
  },
  {
    name: "Hasib Rahman",
    review: "Excellent courses and great teachers. Highly recommended!",
    image: "https://i.ibb.co/7JKLZ3Jd/uifaces-popular-image.jpg",
    rating: 4.8,
  },
  {
    name: "Nadia Hossain",
    review: "Well-structured learning path and useful projects.",
    image: "https://i.ibb.co/Df5Rp2nb/uifaces-popular-image-2.jpg",
    rating: 4.9,
  },
];

const Testimonials = () => {
  return (
    <section className="my-10 px-4 md:px-10">
      <h2 className="text-3xl font-bold text-center mb-6">💬 What Our Students Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <div key={idx} className="card bg-base-100 shadow-md p-5">
            <div className="flex items-center gap-4 mb-3">
              <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-yellow-500">⭐ {t.rating}</p>
              </div>
            </div>
            <p className="text-gray-600 italic">"{t.review}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
