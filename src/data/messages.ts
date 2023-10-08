import { SmsDirectionApi, TextMessage } from 'components/models';

export const messages: TextMessage[] = [
  {
    id: '44asfd542',
    body: 'Good morning! How is the weather today? I hope it is a bright and sunny day at your end.',
    originNumber: '+420775775775',
    targetNumber: '+420777888901',
    direction: SmsDirectionApi.Inbound,
    messageDt: '2023-09-04T08:45:00',
  },
  {
    id: '44asfd543',
    body: 'The weather is great today! It\'s sunny and warm outside. Perfect weather for outdoor activities.',
    originNumber: '+420775775775',
    targetNumber: '+420777888902',
    direction: SmsDirectionApi.Outbound,
    messageDt: '2023-09-05T12:00:00',
  },
  {
    id: '44asfd544',
    body: 'Hi, this is a reminder for your upcoming appointment tomorrow. Please ensure you arrive on time, and if you have any questions, feel free to reach out.',
    originNumber: '+420775775775',
    targetNumber: '+420777888903',
    direction: SmsDirectionApi.Inbound,
    messageDt: '2023-09-06T09:30:00',
  },
  {
    id: '44asfd540',
    body: 'Hello! I hope this message finds you well. I wanted to inquire about the status of my recent order. Have there been any updates since our last communication?',
    originNumber: '+420775775775',
    targetNumber: '+420777888999',
    direction: SmsDirectionApi.Inbound,
    messageDt: '2023-09-02T10:15:00',
  },
  {
    id: '44asfd541',
    body: 'Certainly! I will promptly check the status of your order and provide you with the latest information as soon as possible. Thank you for your patience.',
    originNumber: '+420775775775',
    targetNumber: '+420777888900',
    direction: SmsDirectionApi.Outbound,
    messageDt: '2023-09-03T14:30:00',
  },
  {
    id: '44asfd545',
    body: 'Thank you for the reminder. I greatly appreciate it and will make sure to be there on time. Looking forward to our meeting.',
    originNumber: '+420775775775',
    targetNumber: '+420777888904',
    direction: SmsDirectionApi.Outbound,
    messageDt: '2023-09-07T16:45:00',
  },
  {
    id: '44asfd546',
    body: 'Hey, how is everything going at work? I heard there have been some exciting developments recently.',
    originNumber: '+420775775775',
    targetNumber: '+420777888905',
    direction: SmsDirectionApi.Inbound,
    messageDt: '2023-09-08T11:20:00',
  },
  {
    id: '44asfd547',
    body: 'Work\'s been busy, but I\'m managing. There have indeed been some exciting developments, and I\'m eager to share them with you. Let\'s catch up soon!',
    originNumber: '+420775775775',
    targetNumber: '+420777888906',
    direction: SmsDirectionApi.Outbound,
    messageDt: '2023-09-09T13:55:00',
  },
  {
    id: '44asfd548',
    body: 'I have some exciting news to share with you! It\'s something that I believe you will find very interesting. Can\'t wait to discuss it.',
    originNumber: '+420775775775',
    targetNumber: '+420777888907',
    direction: SmsDirectionApi.Inbound,
    messageDt: '2023-09-10T18:10:00',
  },
  {
    id: '44asfd549',
    body: 'I can\'t wait to hear it. Tell me more! Your enthusiasm has piqued my curiosity, and I\'m eager to find out what the exciting news is all about.',
    originNumber: '+420775775775',
    targetNumber: '+420777888908',
    direction: SmsDirectionApi.Outbound,
    messageDt: '2023-09-11T20:45:00',
  },
];

function getRandomDirection() {
  const directions = [SmsDirectionApi.Inbound, SmsDirectionApi.Outbound];
  const randomIndex = Math.floor(Math.random() * directions.length);
  return directions[randomIndex];
}
