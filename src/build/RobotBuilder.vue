<template>
  <div class="content">
    <div class="preview">
      <collapsible-section>
        <div class="preview-content">
          <div class="top-row">
            <img :src="selectedRobot.head.src"/>
          </div>
          <div class="middle-row">
            <img :src="selectedRobot.leftArm.src" class="rotate-left"/>
            <img :src="selectedRobot.torso.src"/>
            <img :src="selectedRobot.rightArm.src" class="rotate-right"/>
          </div>
          <div class="bottom-row">
            <img :src="selectedRobot.base.src"/>
          </div>
        </div>
      </collapsible-section>
      <button class="add-to-cart" @click="addToCart()"> Add To Cart </button>
    </div>
    <div class="top-row">
      <!-- <div class="robot-name">
        {{ selectedRobot.head.title }}
        <span v-if="selectedRobot.head.onSale" class="sale"> Sale! </span>
      </div> -->
      <part-selector :parts="availableParts.heads" @partSelected="part => selectedRobot.head=part" position="top"/>
    </div>
    <div class="middle-row">
      <part-selector :parts="availableParts.arms" @partSelected="part => selectedRobot.leftArm=part" position="left"/>
      <part-selector :parts="availableParts.torsos" @partSelected="part => selectedRobot.torso=part" position="center"/>
      <part-selector :parts="availableParts.arms" @partSelected="part => selectedRobot.rightArm=part" position="right"/>
    </div>
    <div class="bottom-row">
      <part-selector :parts="availableParts.bases" @partSelected="part => selectedRobot.base=part" position="bottom"/>
    </div>
    <div>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th> Robot </th>
            <th class="cost"> Cost </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(robot, index) in cart" :key="index">
            <th> {{ robot.head.title }} </th>
            <th class="cost"> {{ robot.cost }} </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import PartSelector from './PartSelector.vue'
import CollapsibleSection from '../shared/CollapsibleSection.vue'

import availableParts from '../data/parts'

export default {
  name: 'RobotBuilder',
  components: { PartSelector, CollapsibleSection },
  data () {
    return {
      availableParts: availableParts,
      cart: [],
      selectedRobot: {
        head: {},
        leftArm: {},
        torso: {},
        rightArm: {},
        base: {}
      }
    }
  },
  methods: {
    addToCart () {
      const robot = this.selectedRobot
      const cost = robot.head.cost + robot.torso.cost + robot.leftArm.cost + robot.torso.cost + robot.rightArm.cost + robot.base.cost
      this.cart.push(Object.assign({}, robot, { cost }))
    }
  }
}
</script>

<style scoped>
.top-row {
  display:flex;
  justify-content: space-around;
}

.middle-row {
  display:flex;
  justify-content: center;
}

.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}

.robot-name {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}

.content {
  position: relative;
}

.add-to-cart {
  position: absolute;
  width: 210px;
  padding: 3px;
  font-size: 16px;
}

td, th {
  text-align: left;
  padding: 5px;
  padding-right: 20px;
}

.cost {
  text-align: right;
}

.preview {
  position: absolute;
  top: -20px;
  right: 0;
  width: 210px;
  height: 210px;
  padding: 5px;
}

.preview-content {
  border: 1px solid #999;
}

.preview img {
  width: 50px;
  height: 50px;
}

.rotate-right {
  transform: rotate(90deg);
}

.rotate-left {
  transform: rotate(-90deg);
}
</style>
