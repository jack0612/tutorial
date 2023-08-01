import { Component, OnInit } from '@angular/core';

import * as reducer from './reducer/ngrx-normalizr-mine.reducer';
import * as actions from './actions/ngrx-normalizr-mine.actions'
import { schema } from 'normalizr';
import { Store } from '@ngrx/store';
import { setDataMine } from './actions/ngrx-normalizr-mine.actions';


interface Child {
  id: string;
  property: string;
}

interface Parent {
  id: string;
  property: string;
  newProperty?: string;
  childs: Child[];
}
@Component({
  selector: 'ngrx-normalizr-mine',
  templateUrl: './ngrx-normalizr-mine.component.html',
  styleUrls: ['./ngrx-normalizr-mine.component.scss']
})


export class NgrxNormalizrMineComponent implements OnInit {

  constructor(private store:Store) { }

  ngOnInit(): void {
    let data: Parent[];
    let childData: Child[];
    let changes: Partial<Parent>;
    data = [
      {
        id: '1',
        property: 'value',
        childs: [
          { id: '1', property: 'child-value' },
          { id: '2', property: 'child-value' }
        ]
      },
      {
        id: '2',
        property: 'value',
        childs: [
          { id: '3', property: 'child-value' },
          { id: '4', property: 'child-value' }
        ]
      }
    ];
    childData = [
      { id: '5', property: 'new-child-value-1' },
      { id: '6', property: 'new-child-value-2' }
    ];
    changes = { newProperty: 'newValue', childs: childData };
    const childSchema = new schema.Entity('child');
    const mySchema = new schema.Entity('parent', { childs: [childSchema] });
    /*
    let addAction1 = new actions.AddData<Parent>({
      data: [data[0]],
      schema: mySchema
    });

*/

    let config={
      data: [data[0]],
      schema: mySchema
    }
    this.store.dispatch(setDataMine(config));

    /*
        //check1
        let state1 = reducer.normalized(undefined, { type: 'some' });
        console.log('111111 state1', state1)
    
        //check2 setData, key data, schema are defined in interface
        let setAction1 = new actions.SetData<Parent>({
          data: [data[1]],
          schema: mySchema
        });
        const state2 = reducer.normalized(undefined, setAction1);
        console.log('2222 state2', state2);
    
        //check3 addData
    
        const state3 = reducer.normalized(undefined, addAction1);
    
        //addChildData
        let addChildAction1 = new actions.AddChildData<Child>({
          data: childData,
          parentSchema: mySchema,
          childSchema,
          parentId: data[0].id
        });
        let state4 = reducer.normalized(state3, addChildAction1);
  
    //remove data
    let state = reducer.normalized(undefined, addAction1);
    console.log('111111111111 state', state)
    state = reducer.normalized(
      state,
      new actions.RemoveData({ id: data[0].id, schema: mySchema })
    );
    console.log('2222222222222 state', state)
  */
  }





}
