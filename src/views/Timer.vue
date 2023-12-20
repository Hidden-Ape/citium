<template>
  <ion-content class="ion-padding">
    <div class="background">
      <div
        class="elapsed"
        :style="{ height: backgroundHeight, backgroundColor, opacity: 0.5 }"
        v-if="timeLeft > 0"
      ></div>
    </div>
    <div class="root">
      <ion-text>
        <h1>Take a deep breath</h1>
      </ion-text>
      <svg class="svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="circle">
          <circle class="time-elapsed-path" cx="50" cy="50" r="45" />
          <path
            class="time-left-path"
            :class="{
              'time-left-path-stoke-dark': darkTheme,
              'time-left-path-stoke-light': !darkTheme,
            }"
            v-if="timeLeft > 0"
            d="
                      M 50, 50
                      m -45, 0
                      a 45,45 0 1,0 90,0
                      a 45,45 0 1,0 -90,0
                    "
            :style="{ strokeDasharray }"
          ></path>
        </g>
      </svg>
      <div class="time-left-container">
        <ion-text class="time-left-label">{{ timeLeftString }}</ion-text>
      </div>
      <ion-button v-if="elapsed === 0 || stop" @click="startTimer"
        >Start</ion-button
      >
      <ion-button
        v-else-if="elapsed > 0 && elapsed !== limit"
        @click="stopTimer"
        >Stop</ion-button
      >
      <ion-button @click="resetTimer">Reset</ion-button>
      <ion-toast
        :is-open="isOpen"
        message="Great Job!"
        :duration="5000"
        class="custom-toast"
        :icon="thumbsUpOutline"
        :buttons="toastButtons"
        @didDismiss="setOpen(false)"
      ></ion-toast>
    </div>
  </ion-content>
</template>

<script setup lang="ts">
import { IonContent, IonButton, IonText, IonToast } from "@ionic/vue";
import { ref, computed, onBeforeUpdate } from "vue";
import { moonOutline, sunnyOutline, thumbsUpOutline } from "ionicons/icons";
import { settingsStore } from "../main";

const darkTheme = ref(settingsStore.darkMode);
const iconName = ref(settingsStore.darkMode ? sunnyOutline : moonOutline);
const elapsed = ref<number>(0);
const limit = ref<number>(30);
const stop = ref<boolean>(false);
const timerInterval = ref<NodeJS.Timer>();
const isOpen = ref(false);

onBeforeUpdate(() => {
  stop.value = true;
  elapsed.value = 0;
  limit.value = 30;
  darkTheme.value = settingsStore.darkMode;
  iconName.value = settingsStore.darkMode ? sunnyOutline : moonOutline;
});

const thresholds = [
  {
    color: "blue",
    threshold: 1,
  },
  {
    color: "green",
    threshold: 0.8,
  },
  {
    color: "yellow",
    threshold: 0.6,
  },
  {
    color: "orange",
    threshold: 0.4,
  },
  {
    color: "red",
    threshold: 0.2,
  },
];

const toastButtons = [
  {
    text: "Dismiss",
    role: "cancel",
  },
];

const toggleDarkTheme = (darkMode: boolean) => {
  document.body.classList.toggle("dark", darkMode);
  settingsStore.darkMode = darkMode;
  darkTheme.value = darkMode;
  iconName.value = darkMode ? sunnyOutline : moonOutline;
};

const setOpen = (state: boolean) => {
  isOpen.value = state;
};

const startTimer = () => {
  stop.value = false;
  timerInterval.value = setInterval(() => {
    if (++elapsed.value === limit.value || stop.value === true) {
      clearInterval(timerInterval.value);
      isOpen.value = true;
    }
  }, 1000);
};

const stopTimer = () => {
  stop.value = true;
};

const resetTimer = () => {
  stop.value = true;
  setTimeout(() => {
    elapsed.value = 0;
    limit.value = 30;
  }, 1000);
};

const padToTwo = (num: number): string => {
  return String(num).padStart(2, "0");
};

const timeLeft = computed(() => {
  return limit.value - elapsed.value;
});

const timeLeftString = computed(() => {
  const minutes = Math.floor(timeLeft.value / 60);
  const seconds = timeLeft.value % 60;
  return `${padToTwo(minutes)}:${padToTwo(seconds)}`;
});

const strokeDasharray = computed(() => {
  const radius = 45;
  const total = 2 * Math.PI * radius;
  const timeFraction = timeLeft.value / limit.value;
  const adjTimeFraction = timeFraction - (1 - timeFraction) / limit.value;
  const elapsedDash = Math.floor(adjTimeFraction * total);
  return `${elapsedDash} ${total}`;
});

const timeFraction = computed(() => {
  return timeLeft.value / limit.value;
});

const backgroundHeight = computed(() => {
  const timeFrac = timeFraction.value;
  const adjTimeFraction = timeFrac - (1 - timeFrac) / limit.value;
  const height = Math.floor(adjTimeFraction * 100);
  return `${height}%`;
});

const backgroundColor = computed(() => {
  return thresholds.reduce((color: string | "blue", item) => {
    return item.threshold >= timeFraction.value ? item.color : color;
  }, "blue");
});

const props = defineProps({
  elapsed: {
    type: Number,
    required: true,
  },
  limit: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped>
.background {
  height: 100%;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
}

.background .elapsed {
  /* For the height animation */
  transition: all 1s linear;
}
</style>

<style>
.root {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 275px;
  transform: translateY(-200px);
  padding-left: 20;
  padding-right: 20;
}

.circle {
  fill: none;
  stroke: none;
}

.time-elapsed-path {
  stroke-width: 7px;
  stroke: #424242;
}

.time-left-container {
  height: inherit;
  width: inherit;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
}

.time-left-label {
  font-size: 70px;
}

.time-left-path {
  stroke-width: 7px;
  stroke-linecap: round;
  transform: rotate(90deg);
  transform-origin: center;
  transition: 1s linear all;
}

.time-left-path-stoke-dark {
  stroke: white;
}

.time-left-path-stoke-light {
  stroke: orange;
}

.svg {
  transform: scaleX(-1);
}

ion-toast.custom-toast {
  --background: #f4f4fa;
  --box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, 0.2);
  --color: #4b4a50;
}

ion-toast.custom-toast::part(message) {
  font-style: italic;
}

ion-toast.custom-toast::part(button) {
  border-left: 1px solid #d2d2d2;
  color: #030207;
  font-size: 15px;
}
</style>
