<template>
  <div v-if="availableParts" class="content">
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
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import PartSelector from './PartSelector.vue'
import CollapsibleSection from '../shared/CollapsibleSection.vue'

export default {
  name: 'RobotBuilder',
  created () {
    this.getParts()
  },
  beforeRouteLeave (to, from, next) {
    if (this.addedToCart) {
      next(true)
    } else {
      const response = confirm('You have not added your robot to your cart, do you wish to leave?')
      next(response)
    }
  },
  components: { PartSelector, CollapsibleSection },
  data () {
    return {
      addedToCart: false,
      selectedRobot: {
        head: {},
        leftArm: {},
        torso: {},
        rightArm: {},
        base: {}
      }
    }
  },
  computed: {
    availableParts () {
      return this.$store.state.robots.parts
    }
  },
  methods: {
    ...mapActions('robots', ['getParts', 'addRobotToCart']),
    addToCart () {
      const robot = this.selectedRobot
      const cost = robot.head.cost + robot.torso.cost + robot.leftArm.cost + robot.torso.cost + robot.rightArm.cost + robot.base.cost
      this.addRobotToCart(Object.assign({}, robot, { cost }))
        .then(() => {
          this.addedToCart = true
          this.$router.push('/cart')
        })
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
