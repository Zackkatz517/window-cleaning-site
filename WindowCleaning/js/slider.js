const testimonials = [
  {
    name: "Sarah L.",
    review: "Absolutely sparkling! The team was professional, quick, and left my windows spotless. Highly recommend!",
    stars: 5
  },
  {
    name: "James R.",
    review: "Great service for our office building. Reliable, insured, and very friendly staff.",
    stars: 5
  },
  {
    name: "Emily T.",
    review: "I love their eco-friendly approach. My windows have never looked better!",
    stars: 5
  }
];

const slider = document.getElementById('testimonial-slider');
let current = 0;

function renderTestimonial(idx) {
  const t = testimonials[idx];
  slider.innerHTML = `
    <div class="bg-blue-50 rounded-lg shadow p-8 flex flex-col items-center">
      <div class="flex mb-2">${'★'.repeat(t.stars)}${'☆'.repeat(5-t.stars)}</div>
      <p class="text-lg italic mb-4">"${t.review}"</p>
      <span class="font-semibold">- ${t.name}</span>
      <div class="flex space-x-2 mt-6">
        <button aria-label="Previous" class="px-2 py-1 bg-white border rounded" onclick="showTestimonial(${(idx-1+testimonials.length)%testimonials.length})">&#8592;</button>
        <button aria-label="Next" class="px-2 py-1 bg-white border rounded" onclick="showTestimonial(${(idx+1)%testimonials.length})">&#8594;</button>
      </div>
    </div>
  `;
}

window.showTestimonial = function(idx) {
  current = idx;
  renderTestimonial(current);
}

function autoAdvance() {
  current = (current + 1) % testimonials.length;
  renderTestimonial(current);
}

if (slider) {
  renderTestimonial(current);
  setInterval(autoAdvance, 5000);
} 