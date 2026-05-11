import type { Testimonial } from "@/types/testimonial";

export const stats = [
  { value: "50+", label: "Projects Shipped" },
  { value: "30+", label: "Happy Clients" },
  { value: "10+", label: "Years of Experience" },
  { value: "4 weeks", label: "Avg. MVP Time" },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "We worked together for 4,5 years. During this time, he showcased incredible dedication to his tasks and willingness to grow as a developer. His work ethic and positive attitude make him a valuable asset to any project. I'd highly recommend him.",
    author: "Ferenc",
    role: "CIO, Magyar Közút",
    avatar: "F",
    stars: 5,
  },
  {
    quote:
      "Brilliant, unlike most of the responses to this job, Viktor understood the need and was able to get it done very quickly… went above and beyond and provided additional options as well!",
    author: "Mike",
    role: "Founder, DBCode",
    avatar: "M",
    stars: 5,
  },
  {
    quote:
      "Viktor is an excellent professional frontend, backend and graphic designer with high resilience, reliability and great expertise in high level web based programming. He has huge autonomy and creativity carrying out the defined tasks in time or even before.",
    author: "András",
    role: "CEO, Etheron Systems",
    avatar: "A",
    stars: 5,
  },
  {
    quote:
      "Viktor has been an exceptional mentor, teaching me best practices in front-end development. His expertise in designing and implementing responsive interfaces was invaluable. He also guided me through peer programming and code reviews to meet high quality standards. I highly recommend him as a knowledgeable and dedicated professional!",
    author: "Enikő",
    role: "Frontend Developer",
    avatar: "E",
    stars: 5,
  },
];
