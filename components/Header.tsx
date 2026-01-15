import { ModeToggle } from "./mode-toggle";
import { TypographyH1 } from "./ui/TypographyH1";

export default function Header() {
  return (
    <header className="flex justify-between">
      <TypographyH1 text="Despesas Simples" />
      <ModeToggle />
    </header>
  );
}
