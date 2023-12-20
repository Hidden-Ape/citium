<template>
  <div id="container">
    <ion-text>
      <h1>{{ randomQuote.text }}</h1>
    </ion-text>
    <ion-text>
      <h2>- {{ randomQuote.author }}</h2>
    </ion-text>
    <ion-button @click="generateRandomQuote">Generate Random Quote</ion-button>
  </div>
</template>

<script setup lang="ts">
import { IonButton, IonText } from "@ionic/vue";
import { quoteStore, settingsStore } from "../main";
import { onBeforeUpdate, ref } from "vue";
import { moonOutline, sunnyOutline } from "ionicons/icons";

// const themeToggle = ref(false);
const randomQuote = ref(
  quoteStore.quotes[Math.floor(Math.random() * quoteStore.quotes.length)]
);
const darkTheme = ref(settingsStore.darkMode);
const iconName = ref(settingsStore.darkMode ? sunnyOutline : moonOutline);

onBeforeUpdate(() => {
  darkTheme.value = settingsStore.darkMode;
  iconName.value = settingsStore.darkMode ? sunnyOutline : moonOutline;
});

function generateRandomQuote() {
  randomQuote.value =
    quoteStore.quotes[Math.floor(Math.random() * quoteStore.quotes.length)];
}

// Use matchMedia to check the user preference
//const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

const toggleDarkTheme = (darkMode: boolean) => {
  document.body.classList.toggle("dark", darkMode);
  settingsStore.darkMode = darkMode;
  darkTheme.value = darkMode;
  iconName.value = darkMode ? sunnyOutline : moonOutline;
};

// const initializeDarkTheme = (isDark: boolean) => {
//   themeToggle.value = isDark;
//   toggleDarkTheme(isDark);
//   iconName.value = isDark ? sunnyOutline : moonOutline;
// };

//initializeDarkTheme(prefersDark.matches);

//prefersDark.addEventListener('change', (mediaQuery) => initializeDarkTheme(mediaQuery.matches));
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding-left: 20;
  padding-right: 20;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
