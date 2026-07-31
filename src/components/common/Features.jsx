import {
  Brain,
  Code2,
  FileText,
  BarChart3,
  BookOpen,
  Target,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "AI Interview Questions",
    description:
      "Practice curated interview questions for React, JavaScript, Node.js, HTML, CSS, and more.",
    icon: Brain,
  },
  {
    id: 2,
    title: "Coding Challenges",
    description:
      "Improve problem-solving skills with real coding challenges and solutions.",
    icon: Code2,
  },
  {
    id: 3,
    title: "Resume Builder",
    description:
      "Create a professional resume with live preview and PDF download.",
    icon: FileText,
  },
  {
    id: 4,
    title: "Progress Tracking",
    description:
      "Monitor your learning progress with beautiful charts and analytics.",
    icon: BarChart3,
  },
  {
    id: 5,
    title: "Flashcards",
    description:
      "Revise important concepts quickly using interactive flashcards.",
    icon: BookOpen,
  },
  {
    id: 6,
    title: "Mock Interviews",
    description:
      "Prepare with realistic interview sessions and improve your confidence.",
    icon: Target,
  },
];

function Features() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">
            Everything You Need to Crack Interviews
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Learn, practice, and track your progress—all in one place.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-6">
                  <Icon className="text-cyan-400" size={30} />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;