/**
 * @flow
 * @relayHash 4665cc77c3f7b2800dac983a19839f5b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type viewQueryVariables = {||};
export type viewQueryResponse = {|
  +viewer: {|
    +bio: ?string,
    +name: ?string,
    +email: string,
    +avatarUrl: any,
    +id: string,
    +login: string,
    +watching: {|
      +totalCount: number
    |},
    +gists: {|
      +totalCount: number
    |},
    +repositories: {|
      +totalCount: number
    |},
  |}
|};
export type viewQuery = {|
  variables: viewQueryVariables,
  response: viewQueryResponse,
|};
*/


/*
query viewQuery {
  viewer {
    bio
    name
    email
    avatarUrl
    id
    login
    watching {
      totalCount
    }
    gists {
      totalCount
    }
    repositories {
      totalCount
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "totalCount",
    "args": null,
    "storageKey": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "viewer",
    "storageKey": null,
    "args": null,
    "concreteType": "User",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "bio",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "email",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "avatarUrl",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "login",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "watching",
        "storageKey": null,
        "args": null,
        "concreteType": "RepositoryConnection",
        "plural": false,
        "selections": (v0/*: any*/)
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "gists",
        "storageKey": null,
        "args": null,
        "concreteType": "GistConnection",
        "plural": false,
        "selections": (v0/*: any*/)
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "repositories",
        "storageKey": null,
        "args": null,
        "concreteType": "RepositoryConnection",
        "plural": false,
        "selections": (v0/*: any*/)
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "viewQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "viewQuery",
    "argumentDefinitions": [],
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "viewQuery",
    "id": null,
    "text": "query viewQuery {\n  viewer {\n    bio\n    name\n    email\n    avatarUrl\n    id\n    login\n    watching {\n      totalCount\n    }\n    gists {\n      totalCount\n    }\n    repositories {\n      totalCount\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b3dba512cc7c77e825c12501b6b3a760';
module.exports = node;
