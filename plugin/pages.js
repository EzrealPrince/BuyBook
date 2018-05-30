export default class PM {
  constructor() {
    this.$$cache = {};
  }

  add(pageModel) {
    let pagePath = this._getPageModelPath(pageModel);

    this.$$cache[pagePath] = pageModel;
  }

  get(pagePath) {
    return this.$$cache[pagePath];
  }

  delete(pageModel) {
    try {
      delete this.$$cache[this._getPageModelPath(pageModel)];
    } catch (e) {
    }
  }

  _getPageModelPath(page) {
    // 关键点
    return page.__route__;
  }
}

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24