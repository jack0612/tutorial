import { Component, OnInit } from '@angular/core';

const isObject = (obj: unknown) =>
  (typeof obj === "function" || (typeof obj === "object" && !!obj)) &&
  Array.isArray(obj) === false &&
  !(obj instanceof Date);

type VivifyDates<T> = {
  [K in keyof T]: K extends '_at'
  ? (T[K] extends string
    ? Date
    : T[K])
  : VivifyDates<T[K]>;
};


type MapObjectIdToString<PropType> =
  PropType extends number ? string : PropType;

type MapDbObject<T> = {
  [PropertyKey in keyof T]:
  MapObjectIdToString<T[PropertyKey]>;
}

class Demo1 {
  pa: {
    pa1: string;
    pa2: string;
  };
  pb: string;
  pc: {
    pca: string;
  }
}

type derived<T> = {
  [K in keyof T]: K extends 'pa'
  ? derived<T[K]>
  : T[K]
};

type Demo2 = derived<Demo1>;

const demo2: Demo2 = {
  pa: {
    pa1: '1',
    pa2: '2'
  },
  pb: '2',
  pc: {
    pca: '2'
  }
}




const dateStringsToDate = <T extends { [index: string]: any }>(
  o: T
): any => {
  const converted = {} as any;

  for (const key of Object.keys(o)) {
    if (key.endsWith("_at") && typeof o[key] === "string") {
      converted[key] = new Date(o[key]);
    } else {
      converted[key] = o[key];
    }

    if (isObject(o[key])) {
      converted[key] = dateStringsToDate(o[key]);
    }

    if (Array.isArray(o[key])) {
      converted[key] = o[key].map((x: any) => dateStringsToDate(x));
    }
  }

  return converted;
};


@Component({
  selector: 'app-change-type',
  templateUrl: './change-type.component.html',
  styleUrls: ['./change-type.component.scss']
})
export class ChangeTypeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // example usage
    const post = {
      created_at: "2022-01-15T14:31:05.252Z",
      title: "foo",
      array: [1, 2, { created_at: "2022-01-15T14:31:05.252Z" }],
      nested: {
        created_at: "2022-01-15T14:31:05.252Z",
        title: "foo",
      },
    };
    const convertedPost = dateStringsToDate(post);
    console.log('===convertedPost', convertedPost)
  }

}
