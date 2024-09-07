import { Button } from "@/app/components/ui/button";
import { useSession } from "@/core/hooks/auth";
import { Avatar } from "@/app/components/basic/Avatar";
import { Link } from "react-router-dom";
import { Switch } from "@/app/components/ui/switch";

export default function GlobalSettings() {
    const { data: loggedUser } = useSession();
    return (
        <div className="flex-1 max-h-screen overflow-y-auto">
            <div className="max-w-3xl mx-auto divide-y divide-neutral-800">
                <section className="p-4 flex items-center gap-4">
                    <Avatar avatar_url={`${loggedUser?.avatar_url}`}
                        name={`${loggedUser?.name}`}
                        className="w-24 h-24 text-4xl text-neutral-500"
                    />
                    <div className="flex-1">
                        <span className="block text-2xl text-white">{loggedUser?.name}</span>
                        <span className="block text-neutral-500">{loggedUser?.email}</span>
                    </div>
                    <div className="space-y-2">
                        <Link to="/account/settings">
                            <Button type="button" variant="secondary" className="block w-full">
                                Gerir Conta
                            </Button>
                        </Link>
                        <Button type="button" variant="destructive" className="block w-full">Terminar Sessão</Button>
                    </div>
                </section>
                <section className="p-4">
                    <h2 className="text-lg mb-5">Geral</h2>

                    <span>Confirmar antes de eliminar</span>
                    check (ligado/desligado)
                </section>
                <section className="p-4">
                    <h2 className="text-lg mb-5">Tema</h2>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="light" className="block space-x-2">
                            <input type="radio" name="theme" id="light" defaultChecked />
                            <span>Tema claro</span>
                        </label>
                        <label htmlFor="dark" className="block space-x-2">
                            <input type="radio" name="theme"  id="dark" />
                            <span>Tema escuro</span>
                        </label>
                        <label htmlFor="system" className="block space-x-2">
                            <input type="radio" name="theme" id="system" />
                            <span>Utilizar o meu tema do Windows</span>
                        </label>
                    </div>
                </section>
                <section className="p-4">
                    <h2 className="text-lg mb-5">Notificações</h2>
                    <span>Lembrete</span>
                    check (ligado/desligado)
                </section>
                <section className="p-4 space-y-3">
                    <h2 className="text-lg mb-5">Acerca de</h2>
                    <div>
                        <Link to="/" className="block text-blue-500 hover:text-blue-400">Privacidade</Link>
                        <Link to="/" className="block text-blue-500 hover:text-blue-400">Politicas de cookies</Link>
                        <Link to="/" className="block text-blue-500 hover:text-blue-400">Termos</Link>
                    </div>
                    <div>
                        <span className="font-semibold">Enviar os dados de diagnóstico necessários</span>
                        check <Switch />
                        <div className="text-sm text-neutral-500 mt-2 space-y-1">
                            <p>Reacolhemos os dados de diagnóstico necessários para manter o Task Management seguro, actualizado e com um desempenho conforme esperado no dispositivo onde está instalado. Por exemplo, qual é o sistema operativo que está a utilizar e se as actulizações form instaladas com êxito.</p>
                            <Link to="/" className="block text-blue-500 hover:text-blue-400">Saiba mais sobre os dados de diagnóstico</Link>
                        </div>
                    </div>
                </section>
                <footer className="p-4 space-y-1">
                    <span className="">Task Managment</span>
                    <p className="text-sm text-neutral-500">&copy; 2024 Eclipse Solution. Todos os direitos reservados</p>
                    <span className="text-sm text-neutral-500">ID DO FULANO</span>
                </footer>
            </div>
        </div>
    )
}
