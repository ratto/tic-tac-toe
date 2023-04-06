<template>
    <b-card no-body>
        <b-card-body>
            <div id="header" class="d-flex justify-content-center">
                <div class="mr-5">
                    <div>Player 1</div>
                    <div id="score-one">{{ p1Score }}</div>
                </div>
                <div class="ml-5">
                    <div>Player 2</div>
                    <div id="score-two">{{ p2Score }}</div>
                </div>
            </div>
        </b-card-body>
    </b-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'GameBoard',
  data () {
    return {
      p1Score: 0,
      p2Score: 0
    }
  }
})
</script>
