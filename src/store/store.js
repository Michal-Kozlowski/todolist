import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [
            {text: "This has to be done", inactive: false},
            {text: "...and this too", inactive: false},
            {text: "maybe not this", inactive: true}            
        ],
        dones: [
            {text: "This one is done", inactive: false}
        ]
    },
    mutations: {
        ADD_TODO(state, todo){
            state.todos.push(todo);
        },
        ACTIVE(state, index){
            state.todos[index].inactive = !state.todos[index].inactive;
        },
        COMPLETE(state, index){
            state.todos[index].inactive = false;
            state.dones.push(state.todos[index]);
            state.todos.splice(index, 1);
        },
        NOT_COMPLETE(state, index){
            state.todos.push(state.dones[index]);
            state.dones.splice(index, 1);
        },
        REMOVE(state, index){
            state.dones.splice(index, 1);
        }
    },
    actions: {
        addTodo({commit}, todo){
            commit('ADD_TODO', todo)
        },
        active({commit}, index){
            commit('ACTIVE', index)
        },
        complete({commit}, index){
            commit('COMPLETE', index)
        },
        notComplete({commit}, index){
            commit('NOT_COMPLETE', index)
        },
        remove({commit}, index){
            commit('REMOVE', index)
        }
    },
    getters: {
        todos: state => {
            return state.todos;
        },
        dones: state => {
            return state.dones;
        }
    }
}); 