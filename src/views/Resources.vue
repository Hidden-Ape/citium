<template>
  <div id="container">
    <ion-item>
      <ion-label>
        <h1>Resources</h1>
      </ion-label>
    </ion-item>
    <ion-list>
      <ion-item-group>
        <ion-item-divider>
          <ion-label>Historic</ion-label>
        </ion-item-divider>

        <ion-item>
          <ion-label>Meditations, by Marcus Aurelius</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Letters from a Stoic, by Seneca</ion-label>
        </ion-item>
        <ion-item lines="none">
          <ion-label>Discourses and Selected Writings, by Epictetus</ion-label>
        </ion-item>
      </ion-item-group>

      <ion-item-group>
        <ion-item-divider>
          <ion-label>Modern</ion-label>
        </ion-item-divider>

        <ion-item>
          <ion-label>How to be a Stoic, by Massimo Pigliucci</ion-label>
        </ion-item>
        <ion-item>
          <ion-label
            >Cambridge Companion to the Stoics, by Brad Inwood</ion-label
          >
        </ion-item>
        <ion-item lines="none">
          <ion-label
            >How to Live a Good Life (According to 7 of the World's Wisest
            Philosophies), by Philosophy Break</ion-label
          >
        </ion-item>
      </ion-item-group>
    </ion-list>
  </div>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonList,
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
