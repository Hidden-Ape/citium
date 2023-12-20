<template>
  <div id="container">
    <ion-item>
      <ion-label>
        <h1>Principles</h1>
      </ion-label>
    </ion-item>
    <ion-card>
      <ion-card-header>
        <ion-card-title>Physics</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        "In <strong>physics</strong>, to be a Stoic was to believe that the
        world is a supremely rational, good, and indeed divine organism. That is
        a theory held by no other school at the time, and it's a point on which
        there is no significant disagreement..."
      </ion-card-content>
    </ion-card>
    <ion-card>
      <ion-card-header>
        <ion-card-title>Epistemology</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        "In <strong>epistemology</strong>, all Stoics agreed that there is a
        kind of infallible grasp, which they call the cognitive or cataleptic
        impression..."
      </ion-card-content>
    </ion-card>
    <ion-card>
      <ion-card-header>
        <ion-card-title>Ethics</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        "In <strong>ethics</strong>, you could not be a Stoic without holding
        that only one thing is good, namely virtue, and so-called
        goods—conventional goods—like wealth and health, are in fact morally
        indifferent..."
      </ion-card-content>
    </ion-card>
  </div>
</template>

<script setup lang="ts">
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonItem,
  IonLabel,
} from "@ionic/vue";
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
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
