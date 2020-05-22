<template>
  <div class="container d-flex justify-content-around">
    <div class="d-flex">
      <b-alert show variant="primary">
        <div>Всего задач:</div>
        <div>
          <span class="num">{{todos.length}}</span>
        </div>
      </b-alert>
    </div>
    <div class="d-flex">
      <b-alert show variant="success">
        <div>Выполненных задач:</div>
        <div>
          <span class="num">{{countCompleted}}</span>
        </div>
      </b-alert>
    </div>
    <div class="d-flex">
      <b-alert show variant="danger">
        <div>Невыполненных задач:</div>
        <div>
          <span class="num">{{countUncompleted}}</span>
        </div>
      </b-alert>
    </div>
  </div>
</template>
<style>
.num {
  font-size: 25px;
  font-weight: 800;
}
</style>
<script>
export default {
  props: ["todos"],
  name: "Counter",
  data() {
    return {
      uncompleted: 0,
      completed: 0
    };
  },
  computed: {
    countCompleted: function() {
      let i = 0;
      this.todos.forEach(element => {
        // console.log("element", element);
        if (element.data.is_completed[0]) {
          i++;
        }
      });
      return i;
    },
    countUncompleted: function() {
      let i = 0;
      this.todos.forEach(element => {
        // console.log("element", element);
        if (!element.data.is_completed[0]) {
          i++;
        }
      });
      return i;
    }
  }
};
</script>