import PushNotification from 'react-native-push-notification';

// Configure the notification channel (required for Android 8.0+)
PushNotification.createChannel(
  {
    channelId: "order-channel",
    channelName: "Order Notifications",
    channelDescription: "Notifications for order updates",
    importance: 4, // IMPORTANCE_HIGH
    vibrate: true,
  },
  (created) => console.log(`Notification channel created: ${created}`)
);

export const showOrderNotification = (title:string, message:string) => {
  PushNotification.localNotification({
    channelId: "order-channel",
    title: title,
    message: message,
    largeIcon: "ic_launcher", // optional
    smallIcon: "ic_notification", // optional
    vibrate: true,
    vibration: 300,
    playSound: true,
    soundName: "default",
    priority: "high",
    importance: "high",
  });
};