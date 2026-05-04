import Cards from "./Components/Cards"

const App = () => {

  const blogPosts = [
  {
    title: "Mastering React for Modern Web Apps",
    description: "Learn how to build scalable and high-performance web applications using React and modern best practices.",
    date: "2026-01-10",
    author: "Rajesh Sahu",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    tags: ["React", "JavaScript", "Frontend"],
    link: "/blog/react-modern-apps"
  },
  {
    title: "Getting Started with Three.js",
    description: "A beginner-friendly guide to creating 3D graphics on the web using Three.js.",
    date: "2026-01-15",
    author: "Amit Sharma",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55",
    tags: ["Three.js", "WebGL", "3D"],
    link: "/blog/threejs-guide"
  },
  {
    title: "Tailwind CSS Tips for Faster UI Development",
    description: "Boost your productivity with Tailwind CSS and build responsive designs quickly.",
    date: "2026-01-18",
    author: "Neha Verma",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
    tags: ["CSS", "Tailwind", "UI"],
    link: "/blog/tailwind-tips"
  },
  {
    title: "GSAP Animations for Stunning UI",
    description: "Create smooth and professional animations using GSAP and ScrollTrigger.",
    date: "2026-01-20",
    author: "Rahul Mehta",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    tags: ["GSAP", "Animation", "UI"],
    link: "/blog/gsap-animations"
  },
  {
    title: "Building a Portfolio Website that Stands Out",
    description: "Tips and strategies to design a portfolio that attracts clients and recruiters.",
    date: "2026-01-22",
    author: "Priya Singh",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    tags: ["Portfolio", "Design", "Career"],
    link: "/blog/portfolio-guide"
  },
  {
    title: "Understanding JavaScript Closures",
    description: "Deep dive into closures and how they work behind the scenes in JavaScript.",
    date: "2026-01-25",
    author: "Vikas Kumar",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    tags: ["JavaScript", "Concepts"],
    link: "/blog/js-closures"
  },
  {
    title: "How to Optimize Website Performance",
    description: "Improve loading speed and performance of your website with proven techniques.",
    date: "2026-01-28",
    author: "Ankit Jain",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["Performance", "Web"],
    link: "/blog/performance-optimization"
  },
  {
    title: "Intro to Backend with Node.js",
    description: "Learn how to build server-side applications using Node.js and Express.",
    date: "2026-02-01",
    author: "Sandeep Gupta",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    tags: ["Node.js", "Backend"],
    link: "/blog/nodejs-intro"
  },
  {
    title: "Responsive Design Best Practices",
    description: "Create mobile-friendly websites with modern responsive design techniques.",
    date: "2026-02-05",
    author: "Kavita Joshi",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
    tags: ["Responsive", "CSS"],
    link: "/blog/responsive-design"
  },
  {
    title: "UI/UX Design Principles for Developers",
    description: "Understand core UI/UX principles to create better user experiences.",
    date: "2026-02-10",
    author: "Rohit Patel",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698",
    tags: ["UI", "UX", "Design"],
    link: "/blog/ui-ux-principles"
  }
];

  return (
    <>
  
      {blogPosts.map((post, index) => (
          <div className="parent" key={index}>
        <Cards 
          title={post.title}
          description={post.description}
          date={post.date}
          author={post.author}
          image={post.image}
          tags={post.tags}
          link={post.link}
        />
          </div>
      ))}
  
    </>
  )
}

export default App
