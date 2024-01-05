/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface PageProperties {
  props: { title: string };
}

class Component implements PageProperties {
  constructor(public props: { title: string }) {}
}

class Page extends Component {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
