import UserService from '../Services/UserService/index.api.js';
import UsersStore from './UsersStore';
import CounterStore from './CounterStore';
import TodoStore from './TodoStore'
import TodoService from '../Services/TodoService/index.api.js'

const counterStore = new CounterStore();

const userService =new UserService()
const usersStore =new UsersStore(userService);

const todoService =new TodoService()
const todoStore =new TodoStore(todoService)


export default {
  counterStore,usersStore,todoStore
};
