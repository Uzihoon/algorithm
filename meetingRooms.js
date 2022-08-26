function getMeetingRoomsNumber(intervals) {
  if (intervals.length <= 0) return 0;
  const sorted = intervals.sort((a, b) => a[0] - b[0]);
  const meetingRooms = [[0, 0]];

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i][0] < meetingRooms[0][1]) {
      meetingRooms.push(sorted[i]);
    } else {
      meetingRooms[0] = sorted[i];
    }

    meetingRooms.sort((a, b) => a[1] - b[1]);
  }
  console.log(meetingRooms);
  return meetingRooms.length;
}
