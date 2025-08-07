import app from '@/util/firebase/BaseConfig';
import { getMessaging, getToken } from 'firebase/messaging';
import { toast } from 'sonner';

export default async function requestPermissionAndGetToken() {
  try {
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
      toast.info('Permissão de notificação negada');
      return null;
    }

    // Registra o service worker uma vez só
    const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js');
    await navigator.serviceWorker.ready;
    console.log('Service Worker registrado:', registration);

    const messaging = getMessaging(app);

    const token = await getToken(messaging, {
      vapidKey: "BICR0NfKIUrO7tvE3HYFcq-nJ_emAm5A5kEZ36KB9nGM_5yr0RpSPbBAXGVv0s30CmaTNIjXZkWUfWuxwINb5zI",
      serviceWorkerRegistration: registration,
    });

    if (token) {
      toast.success('Token gerado com sucesso');
      console.log('Token FCM:', token);
      return token;
    } else {
      toast.warning('Nenhum token disponível');
      return null;
    }
  } catch (err: any) {
    console.error(err);
    toast.error('Erro ao obter token', {
      description: err.message,
    });
    return null;
  }
}
