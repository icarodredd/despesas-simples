import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      <div className="w-8/12">
        <Header />
        {children}
      </div>
    </div>
  );
}
