


import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { denormalize, normalize, schema } from 'normalizr';


//https://github.com/michaelkrone/ngrx-normalizr
//https://github.com/michaelkrone/ngrx-normalizr


export interface ICategory {
  name: string;
  id: string;
  subcategories: string[];
  isLeaf: boolean;
}
export interface INormalizedCategory {
  [key: string]: ICategory;
}
export interface INormalizedCategories {
  entities: { categories: INormalizedCategory };
}

@Component({
  selector: 'app-mormalizr',
  templateUrl: './mormalizr.component.html',
  styleUrls: ['./mormalizr.component.scss']
})
export class MormalizrComponent {
  title = 'aaaaa';
  constructor(private store: Store) { }
  /*
  export const setUserData = creators.setData;
export const addUserData = creators.addData;
export const removeUserData = creators.removeData;
  */
  ngOnInit() {
    //this.store.dispatch( removeUserData(  '1' ,{ pets: 'pets' }));
    const data = {
      "name": "Mobile Phones",
      "number": "18",
      "subcategories": [
        {
          "name": "Google",
          "number": "404",
          "subcategories": [
            {
              "name": "Pixel",
              "number": "4041",
              "isLeaf": true
            },
            {
              "name": "Pixel XL",
              "number": "4042",
              "isLeaf": true
            },
            {
              "name": "Pixel 2",
              "number": "4043",
              "isLeaf": true
            },
            {
              "name": "Pixel 2 XL",
              "number": "4044",
              "isLeaf": true
            }
          ],
          "isLeaf": false
        }
      ],
      "isLeaf": false
    };
    let result = this.normalizeCategory(data);
    console.log('---result', result)
    this.normalizrArray();
    this.normalizrPosts();
    this.nornalizeArticals();
    this.applyStrategy();
    this.normalizrBySchema();
    this.nomalizeOrder();
  }






  //it does not work
  normalizeCategory(category: any): INormalizedCategories {
    const categorySchema = new schema.Entity('categories');
    const subcategories = new schema.Array(categorySchema);

    categorySchema.define({ subcategories: subcategories });
    return normalize(category, categorySchema);
  }

  normalizedData;
  normalizrBySchema() {

    const data = { users: [{ id: 1 }, { id: 2 }] };
    const userEntity = new schema.Entity('userEntities', {});
    this.normalizedData = normalize(data, { users: [userEntity] });
    //{ "entities": { "userEntities": { "1": { "id": 1 }, "2": { "id": 2 } } }, "result": { "users": [ 1, 2 ] } }

    const data2 = { users: [{ id: '123', name: 'Beth' }] };

    const user = new schema.Entity('userentities');
    //const responseSchema = new schema.Object({ users: new schema.Array(user) });
    // or shorthand
    const responseSchema = { users: new schema.Array(user) };

    const normalizedData2 = normalize(data2, responseSchema);
    console.log('==========normalizedData2', normalizedData2)
    /*
    {
  entities: {
    userentities: { '123': { id: '123', name: 'Beth' } }
  },
  result: { users: [ '123' ] }
}
    */
  }

  denormalizedData;
  denormalizrBySchma() {
    const user = new schema.Entity('userEntities');
    const entities = { userEntities: { '1': { id: 1 }, '2': { id: 2 } } };
    this.denormalizedData = denormalize({ users: [1, 2] }, { users: [user] }, entities);
    //{ "users": [ { "id": 1 }, { "id": 2 } ] }
  }

  normalizrArray() {
    const myData = [{ id: '123', name: 'Jim' }, { id: '456', name: 'Jane' }];
    const userSchema = new schema.Entity('users');

    //const userListSchema = new schema.Array(userSchema);
    // or use shorthand syntax:
    const userListSchema = [userSchema];

    const normalizedArrayData = normalize(myData, [userSchema]);
    console.log('normalizedArrayData', normalizedArrayData)
    /*
    {
    entities: {
      users: {
        '123': { id: '123', name: 'Jim' },
        '456': { id: '456', name: 'Jane' }
      }
    },
    result: [ '123', '456' ]
  }
    */
  }
  //https://codesandbox.io/s/9yqpp0vrzo?from-embed=&file=/src/index.js:155-788
  normalizrPosts() {
    const blogposts = {
      id: 10,
      title: "My blogpost",
      description: "Short blogpost description",
      content: "Hello world",
      author: {
        id: 1,
        name: "John Doe"
      },
      comments: [
        {
          id: 1,
          author: "Rob",
          content: "Nice post!"
        },
        {
          id: 2,
          author: "Jane",
          content: "I totally agree with you"
        }
      ]
    };

    // Data about author will be stored in 'authors' object
    const authorSchema = new schema.Entity('authors', {});
    // Data about comment will be store in 'comments' object
    const commentSchema = new schema.Entity('comments', {});
    // Posts object has information about one author and many comments stored in array 
    // Author information is stored in 'authors' and comments array is 'comments`
    const postSchema = new schema.Entity('posts', {
      author: authorSchema,
      comments: [commentSchema]
    });
    // Create normalized data from 'blogposts' object with schema - 'postSchema'
    const normalizedBlogposts = normalize(blogposts, postSchema);
    console.log('----------normalizedBlogposts', normalizedBlogposts)
    /*
    {
"entities": {
"authors": {
  "1": {
    "id": 1,
    "name": "John Doe"
  }
},
"comments": {
  "1": {
    "id": 1,
    "author": "Rob",
    "content": "Nice post!"
  },
  "2": {
    "id": 2,
    "author": "Jane",
    "content": "I totally agree with you"
  }
},
"posts": {
  "10": {
    "id": 10,
    "title": "My blogpost",
    "description": "Short blogpost description",
    "content": "Hello world",
    "author": 1,
    "comments": [
      1,
      2
    ]
  }
}
},
"result": 10
}
    */
  }

  //https://tonyhb.gitbooks.io/redux-without-profanity/content/normalizer.html
  nornalizeArticals() {
    const data = {
      articles: [
        {
          id: 1,
          title: 'Dagon',
          tags: [
            { id: 1, name: 'old ones' },
            { id: 2, name: 'short story' },
          ],
        },
        {
          id: 2,
          title: 'Azathoth',
          tags: [
            { id: 1, name: 'old ones' },
            { id: 3, name: 'novel' },
          ],
        },
        {
          id: 3,
          title: 'At the Mountains of Madness',
          tags: [
            { id: 4, name: 'insanity' },
            { id: 3, name: 'novel' },
          ],
        },
      ]
    };
    const tag = new schema.Entity('tags', {})
    const article = new schema.Entity('articles', {
      tags: [tag],
    })

    //The above code defines what a tag (a {} object means that it doesn’t have any nested objects inside) 
    //and an article (something that contains an array of tags) look like. Then we try to normalize 
    //the data by passing the original object we got from the API and a schema that describes it 
    //({ articles: [article] } tells us we’re dealing with an array of articles).
    const normalizedArticals = normalize(data, { articles: [article] })
    console.log('---------normalizedArticals', normalizedArticals)
    /*
    {
  entities: {
    tags: {
      "1": { id: 1, name: "old ones" },
      "2": { id: 2, name: "short story" },
      "3": { id: 3, name: "novel" },
      "4": { id: 4, name: "insanity" }
    },
    articles: {
      "1": { id: 1, title: "Dagon", tags: [1, 2] },
      "2": { id: 2, title: "Azathoth", tags: [1, 3] },
      "3": { id: 3, title: "At the Mountains of Madness", tags: [4, 3] }
    }
  },
  result: { articles: [1, 2, 3] }
}
    */
  }

  //https://github.com/paularmstrong/normalizr/blob/master/docs/api.md
  applyStrategy() {
    const data = { id_str: '123', url: 'https://twitter.com', user: { id_str: '456', name: 'Jimmy' } };

    const user = new schema.Entity('users', {}, { idAttribute: 'id_str' });
    const tweet = new schema.Entity(
      'tweets',
      { user: user },
      {
        idAttribute: 'id_str',
        // Apply everything from entityB over entityA, except for "favorites"
        mergeStrategy: (entityA, entityB) => ({
          ...entityA,
          ...entityB,
          favorites: entityA.favorites
        }),
        // Remove the URL field from the entity
        //processStrategy: (entity) => omit(entity, 'url')
      }
    );

    const normalizedData = normalize(data, tweet);
    console.log('----------applyStrategy.normalizedData', normalizedData)
  }

    //https://medium.com/farmdrop/using-normalizr-js-in-a-redux-store-96ab33991369
    normalizedOrder
  nomalizeOrder() {
    let data = {
      order: {
        id: 10,
        line_items: [
          {
            id: 483,
            quantity: 2,
            product: {
              id: 924,
              name: 'Carrots',
              price: '1.50',
            }
          }
        ]
      },
      products: [
        {
          id: 924,
          name: 'Carrots',
          price: '1.50'
        }
      ]
    }
    const orderSchema = new schema.Entity('orders');
    const lineItemSchema = new schema.Entity('lineItems');
    const productSchema = new schema.Entity('products');
    // An Order has an array of line items
    orderSchema.define({
      line_items: [lineItemSchema]
    });
    // A Line Item has one product attached
    lineItemSchema.define({
      product: productSchema
    });

    this.normalizedOrder = normalize(data, {
      order: orderSchema
    });
    console.log('=====normalizedOrder', this.normalizedOrder)

  }


}
