var vueContainer = new Vue({

  el:'#vue-container',

  data: {
    newItem: '',
    msg: 'hello World',
    itemArray: ['item1','item2','item3','item4']
  },

  ready: function(){
    console.log('Hello World');
  },

  components: {

  },

  methods: {
    addItem: function(){
      var myItem = this.newItem;
      if(myItem !== ''){
        this.itemArray.push(myItem);
        this.newItem = '';
      }
    },
    removeItem: function(item){
      this.itemArray.$remove(item);
    }
  },

});
