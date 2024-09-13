import logo from "./assets/logo.svg";
import letStart from "./assets/let-start-illustration.svg";
import { DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

export function EmptyGoals() {
  return (
    <div className="h-scren flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="logo in.orbit" />
      <img src={letStart} alt="logo in.orbit" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  );
}
