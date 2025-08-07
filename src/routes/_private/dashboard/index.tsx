import { useAuth } from '@/hooks/auth-context';
import app from '@/util/firebase/BaseConfig';
import { createFileRoute } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { getMessaging, onMessage } from 'firebase/messaging';
import { useEffect } from 'react';
import { toast } from 'sonner';
import GetUserInfo from '@/action/requests/getUserInfo';
import HeaderPage from '@/components/header-page';
import InfraPage from '@/components/infraPage';

export const Route = createFileRoute('/_private/dashboard/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { user } = useAuth();
  const { isPending, error, data } = useQuery({
    queryKey: ['userinfo'],
    queryFn: () => GetUserInfo(user.accessToken),
  });

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
    <div>
      <HeaderPage />
      <InfraPage data={data} />
    </div>
  );
}
