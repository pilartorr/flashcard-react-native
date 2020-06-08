import { AsyncStorage } from 'react-native';
import { Notifications } from 'expo';

import * as Permissions from 'expo-permissions';

const NOTIFICATION_KEY = 'flaschards: notifications'

 
export function clearLocalNotification () {
	return AsyncStorage.removeItem(NOTIFICATION_KEY)
	.then(Notifications.cancelAllScheduledNotificationsAsync())
}

function createNotification () {
	return {
		title: 'Study study study',
		body: "👋 don't forget to study today!",
		android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
	}
}

export function setLocalNotification () {
    AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
                if (status === 'granted') {
                Notifications.cancelAllScheduledNotificationsAsync()

                let tomorrow = new Date()
                tomorrow.setDate(tomorrow.getDate() + 1)
                tomorrow.setHours(20)
                tomorrow.setMinutes(0)
                
                //Notifications.presentLocalNotificationAsync(createNotification())
                Notifications.scheduleLocalNotificationAsync(
                    createNotification(),
                    {
                    time: tomorrow,
                    repeat: 'day',
                    }
                ) 

                //console.log("Notifivation scheduled.")
                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                }
            })
        }
    })
}