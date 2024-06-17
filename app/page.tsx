import DontClickButton from "./components/Button/DontClickButton";
import LoginButton from "./components/Button/LoginButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-24">
      <LoginButton />
      <DontClickButton />
    </main>
  );
}
