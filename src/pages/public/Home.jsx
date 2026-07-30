import Navbar from "../../components/common/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center h-[80vh]">
        <h1 className="text-5xl font-bold">
          Welcome to InterviewAce AI 🚀
        </h1>
      </div>
    </>
  );
}

export default Home;