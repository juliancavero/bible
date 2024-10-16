import {
  LocalNotifications,
  ScheduleEvery,
} from "@capacitor/local-notifications";

type ScheduleNotificationProps = {
  title: string;
  body: string;
  id: number;
  on?: Date;
  at?: Date;
  every?: ScheduleEvery;
};

const useNotifications = () => {
  const checkPermissions = async () => {
    const granted = await LocalNotifications.checkPermissions();
    if (granted.display !== "granted") {
      await LocalNotifications.requestPermissions();
    }
  };

  const createChannelOrNull = async () => {
    try {
      const channels = await LocalNotifications.listChannels();
      const channel = channels.channels.find((c) => c.id === "santoral");
      if (!channel) {
        await LocalNotifications.createChannel({
          id: "santoral",
          name: "Santoral",
          description: "Notificaciones de santos",
          importance: 4,
        });
      }
      return "santoral";
    } catch (e) {
      return null;
    }
  };

  const scheduleNotification = async ({
    title,
    body,
    id,
    on,
    at,
    every,
  }: ScheduleNotificationProps) => {
    await checkPermissions();

    const channelId = await createChannelOrNull();

    await LocalNotifications.schedule({
      notifications: [
        {
          ...(channelId && { channelId }),
          title,
          body,
          id,
          smallIcon: "",
          schedule: {
            ...(on && {
              on: {
                day: on?.getDate(),
                month: on?.getMonth(),
                hour: on?.getHours(),
              },
            }),
            ...(at && {
              at: at,
            }),
            ...(every && { every }),

            allowWhileIdle: true,
          },
        },
      ],
    });
  };

  const cancelNotification = async (id: number) => {
    await LocalNotifications.cancel({ notifications: [{ id }] });
  };

  const listNotifications = async () => {
    return await LocalNotifications.getPending();
  };

  return {
    checkPermissions,
    cancelNotification,
    listNotifications,
    scheduleNotification,
  };
};

export default useNotifications;
