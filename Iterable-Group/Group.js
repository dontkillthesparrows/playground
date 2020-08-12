class Group {
  constructor() {
    this.group = [];
  }

  static from(iterable) {
    let group = new Group();
    for (let value of iterable) {
      group.add(value);
    }

    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }

  add(value) {
    if (this.group.indexOf(value) === -1) {
      this.group.push(value);
    }
  }

  delete(value) {
    const index = this.group.indexOf(value);
    if (index !== -1) {
      this.group.splice(index, 1);
    }
  }

  has(value) {
    return !!this.group.indexOf(value) !== -1;
  }

  get(index) {
    return this.group[index];
  }

  get length() {
    return this.group.length;
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.index = 0;
  }

  next() {
    if (this.index === this.group.length) return { done: true };

    let value = this.group.get(this.index);

    this.index++;

    return { value, done: false };
  }
}

const set = new Group();
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.has(2);
set.delete(2);
set.has(2);

const hey = Group.from('54321');

for (let value of Group.from(['a', 'b', 'c'])) {
  console.log(value);
}
