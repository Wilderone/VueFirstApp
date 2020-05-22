
<template>
  <div id="app" class="container">
    <div class="col-sm-10 text-center">
      <h1>Задачи</h1>
      <b-alert
        dismissible
        fade
        :message="message"
        :show="showConfirmation"
        @dismissed="showConfirmation=false"
      >{{message}}</b-alert>
      <counter :todos="todos"></counter>
      <button
        type="button"
        id="task-add"
        class="btn-success btn-sm align-left-d-block"
        v-b-modal.todo-modal
        @click="changeText"
      >Добавить задачу</button>
      <table class="table table-dark table-stripped table-hover">
        <thead class="thead-light">
          <tr>
            <th>ID</th>
            <th>Описание</th>
            <th>Статус</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, index) in todos" v-bind:key="index">
            <td class="todo-uid">{{ value['uid'] }}</td>
            <td>{{ value['data'].description }}</td>
            <td>
              <span v-if="value.data.is_completed[0]">Выполнено</span>
              <span v-else>Не выполнено</span>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-secondary btn-sm"
                v-b-modal.todo-modal
                @click="updateTodo(value)"
              >Обновить</button>
              &nbsp;
              <button
                type="button"
                class="btn btn-danger btn-sm"
                @click="deleteTodo(value)"
              >X</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <b-modal ref="addTodoModal" id="todo-modal" :title="modalHeader" hide-footer>
      <b-form @submit="chooseModal" @reset="onReset" class="w-100">
        <b-form-group
          id="form-description-group"
          label="Описание:"
          label-for="form-description-input"
        >
          <b-form-input
            id="form-description-input"
            type="text"
            v-model="addTodoForm.data.description"
            required
            placeholder="Завести задачу"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="form-complete-group">
          <b-form-checkbox-group v-model="addTodoForm.data.is_completed" id="form-checks">
            <b-form-checkbox value="true">Задача выполнена?</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
        <b-button class="mr-5" type="submit" variant="primary">{{addOrUpdateText}}</b-button>
        <b-button type="reset" varian="danger">Сброс</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<style>
button#task-add {
  margin: 15px;
}
h1,
td {
  text-align: center;
}
.todo-uid {
  text-align: center;
}
</style>

<script>
import Counter from "D:/import ubuntu/SF/JS/vueproj/completed/client/src/components/Counter.vue";

// Создаем массив, в котором будут храниться записи (если его нет)
if (!localStorage.getItem("todos")) {
  localStorage.setItem("todos", JSON.stringify([]));
}

export default {
  name: "Todo",
  data() {
    return {
      modalHeader: "Добавить задачу",
      addOrUpdateText: "Добавить",
      todos: [],
      addTodoForm: {
        uid: -1,
        data: {
          description: "",
          is_completed: []
        }
      },

      message: "",
      showConfirmation: false
    };
  },
  methods: {
    // Получение и сортировка данных
    getTodos() {
      this.todos = JSON.parse(localStorage.todos).sort((a, b) => {
        if (+a["uid"] < +b["uid"]) {
          return -1;
        }
        if (+a["uid"] == +b["uid"]) {
          return 0;
        }
        if (+a["uid"] > +b["uid"]) {
          return 1;
        }
      });
    },

    // Выбор поведения формы. Если в текущем addTodoForm uid = -1
    // то добавление новой задачи.
    // если uid != 1, то обновление по текущему uid
    // Изменение addTodoForm происходит при нажатии кнопки "Обновить" (см. template)
    chooseModal(event) {
      event.preventDefault();

      if (this.addTodoForm.uid == -1) {
        this.onSubmit(event);
      } else {
        this.onUpdateSubmit(event);
      }
    },

    // Для назначения uid. Сравнивает по уже существующим uid.
    // Не стал заморачиваться с уменьшением uid при удалении записи
    // Согласно логике autoincrement в субд, может вообще не стоило это делать?
    getTodosLength(ls) {
      let arrOfUid = [0];
      ls.forEach(elem => {
        arrOfUid.push(elem.uid);
      });
      arrOfUid.sort((a, b) => {
        if (a < b) {
          return -1;
        }
      });
      for (let i = 0; i <= arrOfUid.length; i++) {
        if (arrOfUid[i] != i) {
          return i;
        }
      }
      return ls.length + 1;
    },
    // Удаляем из массива по указанному uid.
    deleteFromLocalStorage(uid) {
      this.todos.forEach((item, index, arr) => {
        if (item["uid"] === uid) {
          arr.splice(index, 1);
        }
        this.message = `Задача ${item.data.description} удалена`;
        this.showConfirmation = true;
      });

      localStorage.setItem("todos", JSON.stringify(this.todos));
      this.getTodos();
    },

    // сброс формы
    resetForm() {
      this.addTodoForm.uid = -1;
      this.addTodoForm.data.description = "";
      this.addTodoForm.data.is_completed = [];
    },
    // действие при сабмите формы окна "добавить задачу"
    // Сохранение в localStorage, в созданный ранее массив
    onSubmit(event) {
      event.preventDefault();
      this.$refs.addTodoModal.hide();
      let newObj = {};
      let parsedObj = this.addTodoForm.data;
      newObj.uid = this.getTodosLength(this.todos);
      newObj.data = parsedObj;
      this.todos.push(newObj);
      try {
        localStorage.setItem("todos", JSON.stringify(this.todos));
      } catch {
        this.message = "Ошибка при добавлении задания";
        this.showConfirmation = true;
      }
      this.message = `Задача ${newObj.data.description} добавлена!`;
      this.showConfirmation = true;

      this.resetForm();
      this.getTodos();
    },
    // сбасываем модальное окно при ресете
    // не понятно зачем его прятать. Чтобы закрыть окно - логичнее нажать х
    onReset(event) {
      event.preventDefault();
      //this.$refs.addTodoModal.hide();
      this.resetForm();
    },

    // заполнение объекта обновления записи
    updateTodo(todo) {
      this.addOrUpdateText = "Обновить";
      this.modalHeader = "Обновить задачу";
      this.addTodoForm.data.description = todo.data.description;
      this.addTodoForm.uid = todo.uid;
      this.addTodoForm.data.is_completed = todo.data.is_completed;
    },

    // действие при сабмите формы кнопки "обновить"
    onUpdateSubmit(event) {
      event.preventDefault();
      this.$refs.addTodoModal.hide();

      this.todos.forEach(item => {
        if (item.uid == this.addTodoForm.uid) {
          item.data = this.addTodoForm.data;
        }
      });
      try {
        localStorage.setItem("todos", JSON.stringify(this.todos));
      } catch {
        this.message = `Ошибка обновления задачи ${this.addTodoForm.data.description}`;
        this.showConfirmation = true;
      }

      this.message = `Задача ${this.addTodoForm.data.description} обновлена`;
      this.showConfirmation = true;

      this.getTodos();
      this.onUpdateReset(event);
    },
    // сбасываем форму обновления
    onUpdateReset(event) {
      event.preventDefault();
      this.$refs.addTodoModal.hide();
      this.resetForm();
    },

    // удаление элемента
    deleteTodo(todo) {
      this.message = `Задача ${todo.data.description} удалена`;
      this.showConfirmation = true;
      this.deleteFromLocalStorage(todo.uid);
    },
    changeText() {
      this.addOrUpdateText = "Добавить";
      this.modalHeader = "Добавить задачу";
    }
  },
  components: {
    counter: Counter
  },
  created() {
    this.getTodos();
  }
};
</script>
