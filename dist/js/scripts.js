(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var vueContainer = new Vue({

  el: '#vue-container',

  data: {
    newItem: '',
    msg: 'hello World',
    itemArray: ['item1', 'item2', 'item3', 'item4']
  },

  ready: function ready() {
    console.log('Hello World');
  },

  components: {},

  methods: {
    addItem: function addItem() {
      var myItem = this.newItem;
      if (myItem !== '') {
        this.itemArray.push(myItem);
        this.newItem = '';
      }
    },
    removeItem: function removeItem(item) {
      this.itemArray.$remove(item);
    }
  }

});

},{}]},{},[1]);

//# sourceMappingURL=scripts.js.map
