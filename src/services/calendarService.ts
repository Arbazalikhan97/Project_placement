import { google } from 'googleapis';

export const scheduleVisit = async (auth: any, event: any) => {
  const calendar = google.calendar({ version: 'v3', auth });
  return calendar.events.insert({
    calendarId: 'primary',
    requestBody: event
  });
};