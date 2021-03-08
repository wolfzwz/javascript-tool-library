/**
 *  查找data中，符合条件的数据，并进行排序
 *  @param {Array}   origin - 需要处理的数组 例如:[{userId: 8, title: 'title1'}]
 *  @return {{}} - 返回值为对象，1.返回的对象可以链式调用，where和orderBy方法 2.where方法可以调用多次，每次可以传多个条件
 *  @version 1.0.2
 */
const find = function (origin) {
  return {
    data: origin,
    where: function (condition) {
      // 可以传递多个条件{key:value}其中value为正则表达式
      for (let key in condition) {
        if (condition.hasOwnProperty(key)) {
          this.data = this.data.filter(v => condition[key].test(v[key]));
        }
      }
      return find(this.data);
    },
    orderBy: function (key, order) {
      this.data.sort((a, b) => {
        // 降序
        if (order == 'desc') {
          return b[key] - a[key];
        } else {
          return a[key] - b[key];
        }
      });
      return this.data;
    },
  };
};
export default find;
