import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/auth-context';
import app from '@/util/firebase/BaseConfig';
import { useQuery } from '@tanstack/react-query';
import { getMessaging, onMessage } from 'firebase/messaging';
import {  Bell, BoxIcon, Check, ChevronsUpDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import GetUserInfo from '@/action/requests/getUserInfo';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { cn } from '@/lib/utils';
import { NavUser } from '@/components/nav-user';
import { ModeToggle } from './mode-toggle';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { NavigationMenuDemo } from './navigation';

interface HeaderPageProps {
    className?: string
}

export default function HeaderPage({ className }: HeaderPageProps) {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    const { user } = useAuth();
    const { isPending, error } = useQuery({
        queryKey: ['userinfo'],
        queryFn: () => GetUserInfo(user.accessToken),
    });


    const frameworks = [
        {
            value: "next.js",
            label: "Next.js",
        },
        {
            value: "sveltekit",
            label: "SvelteKit",
        },
        {
            value: "nuxt.js",
            label: "Nuxt.js",
        },
        {
            value: "remix",
            label: "Remix",
        },
        {
            value: "astro",
            label: "Astro",
        },
    ]

    useEffect(() => {
        const messaging = getMessaging(app);

        const unsubscribe = onMessage(messaging, (payload) => {
            console.log('Mensagem recebida:', payload);
            toast.info(payload.notification?.title ?? 'Notificação', {
                description: payload.notification?.body ?? '',
            });
        });

        return () => unsubscribe();
    }, []);

    if (isPending) return 'Carregando...';
    if (error) return 'Erro ao buscar dados: ' + error.message;


    return (
        <header className={cn("borde-b-1 p-4", className)}>
            <div className='flex justify-between items-center px-4'>
                <div className='flex items-center gap-2'>
                    <div>
                        <h1>Dashboard</h1>
                    </div>
                    <div>
                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="ghost"
                                    role="combobox"
                                    aria-expanded={open}
                                    className="flex justify-between"
                                >
                                    <Avatar className="h-9 w-9 rounded-lg">
                                        <AvatarImage src={user.avatar} alt={user.name} />
                                        <AvatarFallback className="rounded-lg">
                                            <BoxIcon />
                                        </AvatarFallback>
                                    </Avatar>
                                        {value
                                        ? frameworks.find((framework) => framework.value === value)?.label
                                        : "Servicekjskjvkabdnlnvl"
                                        }
                                    <ChevronsUpDown className="opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[200px] p-0">
                                <Command>
                                    <CommandInput placeholder="Search framework..." className="h-9" />
                                    <CommandList>
                                        <CommandEmpty>No framework found.</CommandEmpty>
                                        <CommandGroup>
                                            {frameworks.map((framework) => (
                                                <CommandItem
                                                    key={framework.value}
                                                    value={framework.value}
                                                    onSelect={(currentValue) => {
                                                        setValue(currentValue === value ? "" : currentValue)
                                                        setOpen(false)
                                                    }}
                                                >
                                                    {framework.label}
                                                    <Check
                                                        className={cn(
                                                            "ml-auto",
                                                            value === framework.value ? "opacity-100" : "opacity-0"
                                                        )}
                                                    />
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
                <div className='flex items-center gap-2 justify-center'>
                    <Button variant={"outline"}>
                        <Bell />
                    </Button>
                    <ModeToggle />
                    <NavUser user={{
                        name: user?.displayName,
                        avatar: user?.photoURL,
                        email: user?.email
                    }}
                    />
                </div>
            </div>
        </header>
    );
}
