<template>
  <ion-menu side="start" contentId="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list :inset="true">
        <ion-item href="/">
          <ion-icon
            color="tertiary"
            slot="start"
            :icon="homeOutline"
            size="large"
          ></ion-icon>
          <ion-label>Home</ion-label>
        </ion-item>
        <ion-item :button="true" href="/principles">
          <ion-icon
            color="danger"
            slot="start"
            :icon="flameOutline"
            size="large"
          ></ion-icon>
          <ion-label>Principles</ion-label>
        </ion-item>
        <ion-item :button="true" href="/resources">
          <ion-icon
            color="success"
            slot="start"
            :icon="albumsOutline"
            size="large"
          ></ion-icon>
          <ion-label>Resources</ion-label>
        </ion-item>
        <ion-item :button="true" href="/timer">
          <ion-icon
            color="warning"
            slot="start"
            :icon="hourglassOutline"
            size="large"
          ></ion-icon>
          <ion-label>Timer</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonLabel,
  IonHeader,
  IonList,
  IonIcon,
  IonItem,
  IonMenu,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import {
  homeOutline,
  hourglassOutline,
  bookOutline,
  flameOutline,
  hammerOutline,
  albumsOutline,
} from "ionicons/icons";
</script>
