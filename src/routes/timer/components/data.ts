interface Activity {
    name: string,
    image: string,
}

function getTimeBlocks(weekday: boolean, hour: number) {
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

        if(i == 3) {
          minutes += 20
         }
         else { 
          minutes += 10 
       }
    return timeBlocks
}

export const firstHourTimeBlocks = new Date().getDay() == 6 ? getTimeBlocks(false, 10) : getTimeBlocks(true, 15)
export const secondHourTimeBlocks = new Date().getDay() == 6 ? getTimeBlocks(false, 11) : getTimeBlocks(true, 16)
export const thirdHourTimeBlocks = new Date().getDay() == 6 ? getTimeBlocks(false, 12) : getTimeBlocks(true, 17)
export const lastHourTimeBlocks = new Date().getDay() == 6 ? getTimeBlocks(false, 13) : getTimeBlocks(true, 18)

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