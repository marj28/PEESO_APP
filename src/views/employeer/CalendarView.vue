<template>
  <div>
    <!-- <v-date-picker v-model="selectedDate"></v-date-picker> -->
    <h2 class="mb-6 pa-4 text-center green--text">EMPLOYER SCHEDULE</h2>
    <v-calendar
      v-model="selectedDate"
      :events="events"
      @click:event="handleEventClick"
      color="primary"
      :event-color="getEventColor"
      :event-props="getEventProps"
      :event-overlap-mode="eventOverlapMode"
    ></v-calendar>

    <v-dialog v-model="dialogVisible" max-width="400px">
      <v-card v-if="dialogEvent">
        <v-card-title>
          <span class="headline">Event Details</span>
        </v-card-title>
        <v-card-text>
          <div>
            <span class="event-title">{{ dialogEvent.title }}</span>
            <br />
            <span class="event-date"
              >Date: {{ formatDate(dialogEvent.start) }}</span
            >
            <br />
            <span class="event-time"
              >Time: {{ formatTime(dialogEvent.start) }} -
              {{ formatTime(dialogEvent.end) }}</span
            >
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="closeDialog">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
  
  <script>
export default {
  name: "CalendarView",
  data() {
    return {
      selectedDate: null,
      events: [
        {
          title: "Event 1",
          start: new Date(2023, 5, 1, 8),
          end: new Date(2023, 5, 1, 9),
        },
        {
          title: "Event 2",
          start: new Date(2023, 5, 2, 10, 0),
          end: new Date(2023, 5, 2, 12, 0),
        },
        {
          title: "Event 3",
          start: new Date(2023, 5, 3, 14),
          end: new Date(2023, 5, 3, 16),
        },
        {
          title: "Event 4",
          start: new Date(2023, 5, 4, 9),
          end: new Date(2023, 5, 4, 11),
        },
        {
          title: "Event 5",
          start: new Date(2023, 5, 4, 13),
          end: new Date(2023, 5, 4, 15),
        },
      ],
      dialogVisible: false,
      dialogEvent: null,
      eventOverlapMode: "column",
    };
  },
  methods: {
    getEventColor(event) {
      return "green";
    },
    getEventProps(event) {
      return {
        badge: event.title,
      };
    },
    handleEventClick(info) {
      // Handle the event click
      this.dialogEvent = info;
      this.dialogVisible = true;
    },
    closeDialog() {
      // Close the dialog
      this.dialogVisible = false;
    },
    formatDate(date) {
      // Format the date as desired
      return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
    formatTime(date) {
      // Format the time as desired
      return new Date(date).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
    },
  },
};
</script>
  
  <style scoped>
.event-title {
  font-weight: bold;
}

.event-date {
  color: gray;
}

.event-time {
  color: blue;
}
</style>
  