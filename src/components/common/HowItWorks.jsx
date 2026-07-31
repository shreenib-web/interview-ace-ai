import {
  UserPlus,
  BookOpen,
  Code2,
  Trophy,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Create an Account",
    description: "Sign up and set up your profile.",
    icon: UserPlus,
  },
  {
    id: 2,
    title: "Choose a Technology",
    description: "Select React, JavaScript, Node.js and more.",
    icon: BookOpen,
  },
  {
    id: 3,
    title: "Practice & Take Quizzes",
    description: "Solve interview questions and coding challenges.",
    icon: Code2,
  },
  {
    id: 4,
    title: "Track Your Progress",
    description: "View analytics and improve every day.",
    icon: Trophy,
  },
];

function HowItWorks() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">
            How It Works
          </h2>

          <p className="text-slate-400 mt-4">
            Start your interview preparation in four simple steps.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="bg-slate-800 rounded-2xl p-6 text-center hover:bg-slate-700 transition duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <Icon size={30} className="text-cyan-400" />
                </div>

                <h3 className="text-xl font-semibold text-white mt-6">
                  {step.title}
                </h3>

                <p className="text-slate-400 mt-3">
                  {step.description}
                </p>

                <div className="mt-6 text-cyan-400 font-bold text-2xl">
                  {step.id}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;