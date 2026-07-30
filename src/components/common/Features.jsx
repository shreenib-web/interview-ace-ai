import {
  Brain,
  Code,
  FileText,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: <Brain size={40} />,
    title: "AI Questions",
    description: "Practice interview questions."
  },
  {
    icon: <Code size={40} />,
    title: "Coding Practice",
    description: "Solve coding problems."
  },
  {
    icon: <FileText size={40} />,
    title: "Resume Builder",
    description: "Create professional resumes."
  },
  {
    icon: <BarChart3 size={40} />,
    title: "Progress Tracking",
    description: "Track your learning."
  },
];

function Features() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-xl shadow"
            >
              <div className="text-blue-600">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold mt-4">
                {feature.title}
              </h3>

              <p className="mt-2 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;