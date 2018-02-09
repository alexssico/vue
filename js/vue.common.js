Vue.component('message', {
  template: '<input type="text" name="test" v-model="message" @keyup.enter="sendMess">',
  data: function (){
    return {
      message: ''
    }
  },
  methods : {
    sendMess : function(){
      this.$emit('saved',this.message);
      this.message = '';
    }
  }
});

new Vue({
  el: '#app',
  data: {
    text: 'test',
    lists:[]
  },
  methods: {
    sendSaved: function (message){
      this.lists.push(message);
    }
  }
});