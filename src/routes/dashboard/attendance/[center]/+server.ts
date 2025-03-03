import { getCenterAttendanceLog } from '$lib/server/attendanceChanges';
import { json } from '@sveltejs/kit';

export async function GET({params}) {
	let lastUpdated = await getCenterAttendanceLog(params.center)
	
	return json(lastUpdated)
}
