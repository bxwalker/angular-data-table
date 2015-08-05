export function RowDirective(){
  return {
    restrict: 'E',
    controller: 'RowController',
    controllerAs: 'rowCtrl',
    scope: true,
    bindToController: {
      row: '=',
      columns: '=',
      columnWidths: '=',
      expanded: '=',
      selected: '=',
      hasChildren: '=',
      options: '=',
      onCheckboxChange: '&',
      onTreeToggle: '&'
    },
    template: `
      <div class="dt-row">
        <div class="dt-row-left dt-row-block"
             ng-if="rowCtrl.columns['left'].length"
             ng-style="rowCtrl.stylesByGroup('left')">
          <dt-cell ng-repeat="column in rowCtrl.columns['left'] track by column.$id"
                   on-tree-toggle="rowCtrl.treeToggled(cell)"
                   column="column"
                   options="rowCtrl.options"
                   has-children="rowCtrl.hasChildren"
                   on-checkbox-change="rowCtrl.onCheckboxChange()"
                   selected="rowCtrl.selected"
                   expanded="rowCtrl.expanded"
                   row="rowCtrl.row"
                   value="rowCtrl.getValue(column)">
          </dt-cell>
        </div>
        <div class="dt-row-center dt-row-block"
             ng-style="rowCtrl.stylesByGroup('center')">
          <dt-cell ng-repeat="column in rowCtrl.columns['center'] track by column.$id"
                   on-tree-toggle="rowCtrl.treeToggled(cell)"
                   column="column"
                   options="rowCtrl.options"
                   has-children="rowCtrl.hasChildren"
                   expanded="rowCtrl.expanded"
                   selected="rowCtrl.selected"
                   row="rowCtrl.row"
                   on-checkbox-change="rowCtrl.onCheckboxChange()"
                   value="rowCtrl.getValue(column)">
          </dt-cell>
        </div>
        <div class="dt-row-right dt-row-block"
             ng-if="rowCtrl.columns['right'].length"
             ng-style="rowCtrl.stylesByGroup('right')">
          <dt-cell ng-repeat="column in rowCtrl.columns['right'] track by column.$id"
                   on-tree-toggle="rowCtrl.treeToggled(cell)"
                   column="column"
                   options="rowCtrl.options"
                   has-children="rowCtrl.hasChildren"
                   selected="rowCtrl.selected"
                   on-checkbox-change="rowCtrl.onCheckboxChange()"
                   row="rowCtrl.row"
                   expanded="rowCtrl.expanded"
                   value="rowCtrl.getValue(column)">
          </dt-cell>
        </div>
      </div>`,
    replace:true
  };
};
