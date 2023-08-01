import { Params } from "@angular/router";

import { ParamsConverter } from "./url-store";
export interface PersonSearchCriteria {
    name: string;
    age: number;
    country: string;
  }
export class PersonParamsConverter implements ParamsConverter<PersonSearchCriteria> {
  fromUrl(params: Params): PersonSearchCriteria {
    return {
      name: params["n"],
      age: params["a"],
      country: params["c"]
    };
  }

  toUrl(criteria: PersonSearchCriteria): Params {
    return {
      n: criteria.name,
      a: criteria.age,
      c: criteria.country
    };
  }
}