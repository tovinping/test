import 'dart:async';
import 'dart:io';

class Person {
  String name;
  int age;
  Person(this.name, this.age);
}

//
getPerson() {
  sleep(Duration(seconds: 1));
  return Person('CC', 23);
}

class Man {
  Person? _common;

  init() async {
    _common = await getPerson();
  }

  getInstance() async {
    if (_common != null) {
      return _common;
    } else {
      await this.init();
      return _common;
    }
  }
}

void main() async {
  Person m = await Man().getInstance();
  print(m.name);
}
