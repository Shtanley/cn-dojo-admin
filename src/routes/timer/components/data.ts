interface Activity {
    name: string,
    image: string,
}

export function getTimeBlocks(weekday: boolean, hour: number) {
    let timeBlocks: Date[] = []
    let minute: number = 0
    if (weekday) {
        minute = 30
    }
    for (let i = 0; i < 6; i++) {
        if (minute == 60) {
            minute = 0
            hour += 1;
        }
        let activityTimeBlock = new Date()
        activityTimeBlock.setHours(hour, minute, 0, 0)
        timeBlocks.push(activityTimeBlock)

        if(i == 1) {
          minute += 20
         }
         else { 
          minute += 10 
       }
    }
    return timeBlocks
}

export const activities: Activity[] = [
    {
        name: "Typing",
        image: "keyboard.svg"
    },
    {
        name: "Impact",
        image: "code-spark.svg"
    },
    {
        name: "Progress Report",
        image: "mouse-games.svg"
    },
    {
        name: "Sandbox",
        image: "code.svg"
    },
    {
        name: "Exploration",
        image: "free-time.svg"
    },
]