angular.module('fish-pond')
.component('fishTable', {
  bindings: {
    fishes: '<'
  },
  template: `
    <div>
      <fish-Table-Row ng-repeat = 'fishEl in $ctrl.fishes' fish = fishEl></fish-Table-Row>
    </div>`
});