class UserList {
  List<String> list = [];
  UserList.fromJson() {
    list = [1, 2, 3].map((e) => 'AAA-$e').toList();
  }
}

void main() {
  var uList = UserList.fromJson();
  print('RRR: ${uList.list}');
}
