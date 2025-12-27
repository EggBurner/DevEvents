export type EventItem = {
    image: string;
    title: string;
    slug: string;
    location: string;
    date: string;
    time: string;
}

export const events: EventItem[] = [
    {
        image: '/images/event1.png', 
        title: 'React Summit 2024',
        slug: 'react-summit-2024',
        location: 'San Francisco, CA',
        date: 'June 15, 2024',
        time: '9:00 AM'
    },
    {
        image: '/images/event2.png',
        title: 'JavaScript Hackathon',
        slug: 'js-hackathon-2024',
        location: 'New York, NY',
        date: 'July 20, 2024',
        time: '10:00 AM'
    },
    {
        image: '/images/event3.png',
        title: 'TypeScript Workshop',
        slug: 'typescript-workshop-2024',
        location: 'Austin, TX',
        date: 'August 10, 2024',
        time: '2:00 PM'
    },
    {
        image: '/images/event4.png',
        title: 'Node.js Conference',
        slug: 'nodejs-conference-2024',
        location: 'Seattle, WA',
        date: 'September 5, 2024',
        time: '9:30 AM'
    },
    {
        image: '/images/event5.png',
        title: 'Web Development Expo',
        slug: 'web-dev-expo-2024',
        location: 'Boston, MA',
        date: 'October 12, 2024',
        time: '11:00 AM'
    },
    {
        image: '/images/event6.png',
        title: 'Frontend Masters Summit',
        slug: 'frontend-masters-2024',
        location: 'Miami, FL',
        date: 'November 8, 2024',
        time: '1:00 PM'
    }
]

