export interface ILink {
  route: string;
  title: string;
  icon: string;
  header: string;
  element: () => JSX.Element;
}
