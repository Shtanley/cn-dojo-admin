interface CenterAttendanceLog {
    centerId: string,
    lastUpdated: Date
}

let attendanceLogs: CenterAttendanceLog[] = []

export async function updateCenterAttendanceLog(centerId: string): Promise<void> {
    let log = false;
    attendanceLogs.forEach(attendanceLog => {
        if(attendanceLog.centerId == centerId) {
            log = true
            attendanceLog.lastUpdated = new Date()
        }
    });
    if(!log) {
        let now = new Date()
        attendanceLogs.push({centerId, lastUpdated:now})
    }
}

export async function getCenterAttendanceLog(centerId: string): Promise<Date> {
    let now = new Date()
    let lastUpdated: Date = now;
    let log = false;
    attendanceLogs.forEach(attendanceLog => {
        if(attendanceLog.centerId == centerId) {
            log = true
            lastUpdated = attendanceLog.lastUpdated
        }
    })
    if(!log) {
        attendanceLogs.push({centerId, lastUpdated: now})
    }
    return lastUpdated
}