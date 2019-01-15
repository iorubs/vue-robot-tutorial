<template>
  <div class="content">
    <button class="add-to-cart" @click="addToCart()"> Add To Cart </button>
    <div class="top-row">
      <div class="top part" :class="{ 'sale-border': selectedRobot.head.onSale }">
        <div class="robot-name">
          {{ selectedRobot.head.title }}
          <span v-if="selectedRobot.head.onSale" class="sale"> Sale! </span>
        </div>
        <img :src="selectedRobot.head.src" title="head"/>
        <button v-on:click="selectPreviousHead()" class="prev-selector">&#9668;</button>
        <button v-on:click="selectNextHead()" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part" :class="{ 'sale-border': selectedRobot.leftArm.onSale }">
        <img :src="selectedRobot.leftArm.src" title="left arm"/>
        <button v-on:click="selectPreviousLeftArm()" class="prev-selector">&#9650;</button>
        <button v-on:click="selectNextLeftArm()" class="next-selector">&#9660;</button>
      </div>
      <div class="center part" :class="{ 'sale-border': selectedRobot.torso.onSale }">
        <img :src="selectedRobot.torso.src" title="body"/>
        <button v-on:click="selectPreviousTorso()" class="prev-selector">&#9668;</button>
        <button v-on:click="selectNextTorso()" class="next-selector">&#9658;</button>
      </div>
      <div class="right part" :class="{ 'sale-border': selectedRobot.rightArm.onSale }">
        <img :src="selectedRobot.rightArm.src" title="right arm"/>
        <button v-on:click="selectPreviousRightArm()" class="prev-selector">&#9650;</button>
        <button v-on:click="selectNextRightArm()" class="next-selector">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part" :class="{ 'sale-border': selectedRobot.base.onSale }">
        <img :src="selectedRobot.base.src" title="base"/>
        <button v-on:click="selectPreviousBase()" class="prev-selector">&#9668;</button>
        <button v-on:click="selectNextBase()" class="next-selector">&#9658;</button>
      </div>
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
import availableParts from '../data/parts'

function getPreviousValidIndex (index, length) {
  const deprecatedIndex = index - 1
  return deprecatedIndex < 0 ? length - 1 : deprecatedIndex
}

function getNextValidIndex (index, length) {
  const incrementedIndex = index + 1
  return incrementedIndex > length - 1 ? 0 : incrementedIndex
}

export default {
  name: 'RobotBuilder',
  data () {
    return {
      cart: [],
      selectedHeadIndex: 0,
      selectedLeftArmIndex: 0,
      selectedTorsoIndex: 0,
      selectedRighArmtIndex: 0,
      selectedBaseIndex: 0
    }
  },
  computed: {
    selectedRobot () {
      return {
        head: availableParts.heads[this.selectedHeadIndex],
        leftArm: availableParts.arms[this.selectedLeftArmIndex],
        torso: availableParts.torsos[this.selectedTorsoIndex],
        rightArm: availableParts.arms[this.selectedRighArmtIndex],
        base: availableParts.bases[this.selectedBaseIndex]
      }
    }
  },
  methods: {
    selectPreviousHead () {
      this.selectedHeadIndex = getPreviousValidIndex(this.selectedHeadIndex, availableParts.heads.length)
    },
    selectNextHead () {
      this.selectedHeadIndex = getNextValidIndex(this.selectedHeadIndex, availableParts.heads.length)
    },
    selectPreviousLeftArm () {
      this.selectedLeftArmIndex = getPreviousValidIndex(this.selectedLeftArmIndex, availableParts.arms.length)
    },
    selectNextLeftArm () {
      this.selectedLeftArmIndex = getNextValidIndex(this.selectedLeftArmIndex, availableParts.arms.length)
    },
    selectPreviousTorso () {
      this.selectedTorsoIndex = getPreviousValidIndex(this.selectedTorsoIndex, availableParts.torsos.length)
    },
    selectNextTorso () {
      this.selectedTorsoIndex = getNextValidIndex(this.selectedTorsoIndex, availableParts.torsos.length)
    },
    selectPreviousRightArm () {
      this.selectedRighArmtIndex = getPreviousValidIndex(this.selectedRighArmtIndex, availableParts.arms.length)
    },
    selectNextRightArm () {
      this.selectedRighArmtIndex = getNextValidIndex(this.selectedRighArmtIndex, availableParts.arms.length)
    },
    selectPreviousBase () {
      this.selectedBaseIndex = getPreviousValidIndex(this.selectedBaseIndex, availableParts.bases.length)
    },
    selectNextBase () {
      this.selectedBaseIndex = getNextValidIndex(this.selectedBaseIndex, availableParts.bases.length)
    },
    addToCart () {
      const robot = this.selectedRobot
      const cost = robot.head.cost + robot.torso.cost + robot.leftArm.cost + robot.torso.cost + robot.rightArm.cost + robot.base.cost
      this.cart.push(Object.assign({}, robot, { cost }))
    }
  }
}
</script>

<style src="./RobotBuilder.css" scoped/>
